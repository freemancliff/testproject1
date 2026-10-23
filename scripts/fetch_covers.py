#!/usr/bin/env python3
"""Download book covers into public/media/books/<slug>.jpg (web-sized).
Sources, in order: Open Library (by ISBN) -> Google Books (by ISBN, then title+author) -> the publisher page's own preview image.
Run:  python3 scripts/fetch_covers.py            (skips books that already have a cover)
"""
import json, os, re, sys, urllib.parse, urllib.request, io
from PIL import Image

OUT = "public/media/books"
UA = {"User-Agent": "Mozilla/5.0 (bmc-site cover fetch)"}
os.makedirs(OUT, exist_ok=True)

def get(url, timeout=25):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout).read()

def good(data):
    try:
        im = Image.open(io.BytesIO(data)); im.load()
        return im.width >= 160 and im.height >= 220 and im.height / im.width > 1.1
    except Exception:
        return False

def openlibrary(isbn):
    try:
        d = get(f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg?default=false")
        return d if good(d) else None
    except Exception:
        return None

def gbooks(q):
    try:
        j = json.loads(get("https://www.googleapis.com/books/v1/volumes?maxResults=5&q=" + urllib.parse.quote(q)))
        for it in j.get("items", []):
            il = it.get("volumeInfo", {}).get("imageLinks", {})
            u = il.get("thumbnail") or il.get("smallThumbnail")
            if not u: continue
            u = u.replace("http://", "https://").replace("zoom=1", "zoom=2").replace("&edge=curl", "")
            d = get(u)
            if good(d): return d
    except Exception:
        return None

def ol_search(title, author):
    """Open Library title search -> cover by cover id. Only accepts a result whose title matches."""
    try:
        norm = lambda t: re.sub(r"[^a-z0-9 ]", "", t.lower()).strip()
        q = urllib.parse.quote(f"{title} {author}")
        j = json.loads(get(f"https://openlibrary.org/search.json?limit=8&fields=title,cover_i&q={q}"))
        for d in j.get("docs", []):
            if d.get("cover_i") and norm(d["title"]).startswith(norm(title)[:22]):
                data = get(f"https://covers.openlibrary.org/b/id/{d['cover_i']}-L.jpg?default=false")
                if good(data): return data
    except Exception:
        return None

def og_image(page):
    try:
        h = get(page).decode("utf8", "ignore")
        m = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)', h) or re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image', h)
        if not m: return None
        d = get(urllib.parse.urljoin(page, m.group(1)))
        return d if good(d) else None
    except Exception:
        return None

# slug: (isbns, search query, publisher page)
# Hand-picked covers (kept as-is): reckoning-with-our-roots (Amazon page picture), UC Press covers (webfiles.ucpress.edu/coverimage/isbn13/<isbn>.jpg), from-here-to-equality (uncpress-us-new.imgix.net/covers/<isbn>.jpg)
BOOKS = {
 "the-new-jim-crow": (["1620971933", "9781620971932"], "The New Jim Crow Michelle Alexander", None),
 "america-on-fire": (["9781631496851", "1631496859"], "America on Fire Elizabeth Hinton", "https://wwnorton.com/books/america-on-fire"),
 "from-the-war-on-poverty-to-the-war-on-crime": (["9780674979826", "9780674737235"], "From the War on Poverty to the War on Crime Elizabeth Hinton", "https://www.hup.harvard.edu/books/9780674979826"),
 "locking-up-our-own": (["9780374712907", "0374189994", "9780374189990"], "Locking Up Our Own James Forman", "https://www.barnesandnoble.com/w/locking-up-our-own-james-forman/1123909577?ean=9780374712907"),
 "city-of-inmates": (["1469659190", "9781469659190"], "City of Inmates Kelly Lytle Hernandez", None),
 "holding-on": (["9780520305250"], "Holding On Family and Fatherhood during Incarceration and Reentry McKay", "https://www.ucpress.edu/book/9780520305250/holding-on"),
 "the-growth-of-incarceration-in-the-united-states": (["9780309298018", "0309298016"], "The Growth of Incarceration in the United States National Research Council", None),
 "the-geographies-of-threat": (["9780367708948"], "The Geographies of Threat and the Production of Violence Mowatt", "https://www.routledge.com/The-Geographies-of-Threat-and-the-Production-of-Violence-The-State-and/Mowatt/p/book/9780367708948"),
 "the-condemnation-of-blackness": (["0674238141", "9780674238145", "9780674035973"], "The Condemnation of Blackness Muhammad", None),
 "stolen-wealth-hidden-power": (["9780520389465"], "Stolen Wealth Hidden Power McKay", "https://www.ucpress.edu/book/9780520389465/stolen-wealth-hidden-power"),
 "from-here-to-equality": (["1469671204", "9781469671208"], "From Here to Equality Darity Mullen second edition", "https://uncpress.org/book/9781469671208/from-here-to-equality-second-edition/"),
 "the-black-reparations-project": (["9780520383814"], "The Black Reparations Project Darity", "https://www.ucpress.edu/book/9780520383814/the-black-reparations-project"),
 "the-color-of-wealth": (["1595580042", "9781595580047"], "The Color of Wealth Robles", None),
 "slavery-by-another-name": (["0385722702", "9780385722704"], "Slavery by Another Name Blackmon", None),
 "redemption": (["0374248559", "9780374248550"], "Redemption The Last Battle of the Civil War Lemann", None),
 "the-promised-land": (["0679733477", "9780679733478"], "The Promised Land Great Black Migration Lemann", None),
 "how-the-word-is-passed": (["0316278742", "9780316278744"], "How the Word Is Passed Clint Smith", None),
 "by-hands-now-known": (["0393867854", "9780393867855"], "By Hands Now Known Margaret Burnham", None),
 "the-fierce-urgency-of-now": (["0143128019", "9780143128014"], "The Fierce Urgency of Now Zelizer", None),
 "du-bois-data-portraits": (["1616897066", "9781616897062"], "W.E.B. Du Bois's Data Portraits Visualizing Black America", None),
 "the-big-test": (["0374527512", "9780374527518"], "The Big Test Lemann", None),
 "reckoning-with-our-roots": ([], "Reckoning with Our Roots Joan Wynne", None),
 "caste": (["0593230256", "9780593230251"], "Caste The Origins of Our Discontents Isabel Wilkerson", None),
 "faces-at-the-bottom-of-the-well": (["1541645537", "9781541645530"], "Faces at the Bottom of the Well Derrick Bell", None),
 "keeping-faith-with-the-constitution": (["9780199752836", "0199752834"], "Keeping Faith with the Constitution Liu Karlan Schroeder", "https://www.barnesandnoble.com/w/keeping-faith-with-the-constitution-goodwin-liu/1103373843?ean=9780199752836"),
 "let-my-people-vote": ([], "Let My People Vote Desmond Meade", None),
 "punished-for-dreaming": ([], "Punished for Dreaming Bettina Love", None),
 "we-want-to-do-more-than-survive": ([], "We Want to Do More Than Survive Bettina Love", None),
 "the-education-of-blacks-in-the-south": (["0807842214", "9780807842218"], "The Education of Blacks in the South 1860-1935 James Anderson", None),
 "radical-equations-clean": ([], "Radical Equations Moses Cobb", None),   # hand-picked clean cover (no store stickers)
 "imagination-a-manifesto": ([], "Imagination A Manifesto Ruha Benjamin", None),
 "viral-justice": ([], "Viral Justice Ruha Benjamin", None),
 "halfway-home": (["9780316451482"], "Halfway Home Reuben Jonathan Miller", None),
 "shattered-dreams-infinite-hope": (["9780674271289"], "Shattered Dreams Infinite Hope Brandon Terry", None),
 "just-mercy": (["9780812984965"], "Just Mercy Bryan Stevenson", None),
 "the-white-peril": ([], "The White Peril Omo Moses", None),
 "a-born-teacher": ([], "A Born Teacher Mullen", None),            # Texas Tech University Press cover (imgix) added by hand                   # publisher cover
 "quality-education-as-a-constitutional-right": ([], "Quality Education Constitutional Right", None),
}

TITLES = {
 "locking-up-our-own": ("Locking Up Our Own", "Forman"),
 "holding-on": ("Holding On", "McKay"),
 "the-condemnation-of-blackness": ("The Condemnation of Blackness", "Muhammad"),
 "stolen-wealth-hidden-power": ("Stolen Wealth, Hidden Power", "McKay"),
 "from-here-to-equality": ("From Here to Equality", "Darity Mullen"),
 "the-black-reparations-project": ("The Black Reparations Project", "Darity"),
 "reckoning-with-our-roots": ("Reckoning with Our Roots", "Wynne"),
 "keeping-faith-with-the-constitution": ("Keeping Faith with the Constitution", "Liu"),
 "let-my-people-vote": ("Let My People Vote", "Meade"),
 "punished-for-dreaming": ("Punished for Dreaming", "Love"),
 "we-want-to-do-more-than-survive": ("We Want to Do More Than Survive", "Love"),
}
only = sys.argv[1:]
report = {}
for slug, (isbns, query, page) in BOOKS.items():
    if only and slug not in only: continue
    dest = f"{OUT}/{slug}.jpg"
    if os.path.exists(dest) and not only:
        report[slug] = "have"; continue
    data, src = None, None
    for i in isbns:
        data = openlibrary(i)
        if data: src = f"OpenLibrary {i}"; break
    if not data:
        for i in isbns[:2]:
            data = gbooks("isbn:" + i)
            if data: src = f"GoogleBooks isbn {i}"; break
    if not data and page:
        data = og_image(page)
        if data: src = "publisher page"
    if not data:
        t = TITLES.get(slug)
        if t:
            data = ol_search(*t)
            if data: src = "OpenLibrary title search"
    if not data:
        data = gbooks(query)
        if data: src = "GoogleBooks search"
    if data:
        im = Image.open(io.BytesIO(data)).convert("RGB")
        im.thumbnail((520, 780), Image.LANCZOS)
        im.save(dest, "JPEG", quality=84, optimize=True, progressive=True)
        report[slug] = f"{src} {im.size[0]}x{im.size[1]} {os.path.getsize(dest)//1024}KB"
    else:
        report[slug] = "NOT FOUND"
for k, v in report.items(): print(f"{k:50s} {v}")
