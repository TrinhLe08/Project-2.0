export default function Img4({ index, SubImg }) {
  return (
    <img src={SubImg.sub} alt="" className={`subImg${index}`} id="subImg" />
  );
}
