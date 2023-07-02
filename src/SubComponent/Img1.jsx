export default function Img1({ index, Img }) {
  return (
    <div className={`img${index}`} id="img1">
      <img src={Img.img} alt="" className={`img${index}`} id="img1" />
    </div>
  );
}
