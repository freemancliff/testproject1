#!/usr/bin/env python3
"""Make web-sized copies of photos so the repo stays small.

Usage:  python3 scripts/optimize_photos.py SRC_FILE:DEST_NAME [SRC_FILE:DEST_NAME ...] --out public/media/archive/2025

Each photo is rotated upright, shrunk to 1800px on its long edge, saved as an
optimized JPEG (~250-400 KB), and stripped of metadata such as GPS location.
Needs Pillow:  pip3 install pillow
"""
import os, sys
from PIL import Image, ImageOps

MAX_EDGE, QUALITY = 1800, 78

def main(argv):
    if "--out" not in argv:
        sys.exit(__doc__)
    i = argv.index("--out")
    out = argv[i + 1]
    pairs = argv[:i] + argv[i + 2:]
    os.makedirs(out, exist_ok=True)
    for pair in pairs:
        src, name = pair.rsplit(":", 1)
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        dest = os.path.join(out, name if name.endswith(".jpg") else name + ".jpg")
        im.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        print(f"{dest}  {im.size[0]}x{im.size[1]}  {os.path.getsize(dest)//1024} KB")

if __name__ == "__main__":
    main(sys.argv[1:])
