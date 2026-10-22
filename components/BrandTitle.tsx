// "Remaking America: The Work Before Us", with "Remaking America:" kept together on one line.
export default function BrandTitle({ split = false }: { split?: boolean }) {
  return (
    <>
      <span className="nowrap">Remaking America:</span>
      {split ? <br /> : " "}
      <span>The Work Before Us</span>
    </>
  );
}
