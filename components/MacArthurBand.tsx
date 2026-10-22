/* eslint-disable @next/next/no-img-element */
// Purple MacArthur Fellows at 45 band, shared by the Part I (Montgomery) and Part II (MIT) pages.
export default function MacArthurBand() {
  return (
    <div className="mac-band">
      <div className="container">
        <div className="mac-logos">
          <img src="/images/macarthur-supported-by.webp" alt="Supported by MacArthur Foundation" />
          <img src="/images/macarthur-fellows-45.webp" alt="Defying Boundaries: MacArthur Fellows at 45" />
        </div>
        <div>
          <h2 className="mac-tagline">Defying Boundaries: MacArthur Fellows at 45</h2>
          <p>
            This moment calls for creative courage. For 45 years, MacArthur Fellows have expanded the boundaries of possibility by questioning conventions, crossing disciplines, and driving collective progress. Throughout 2026, the Foundation is celebrating the groundbreaking work of the Fellows and inspiring public dialogue through a series of nationwide events and conversations. Learn more at{" "}
            <a href="https://www.macfound.org/fellows-45" target="_blank" rel="noreferrer">macfound.org/fellows-45</a>
          </p>
        </div>
      </div>
    </div>
  );
}
