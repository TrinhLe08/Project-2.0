import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Img2({ index, ImgV }) {
  return (
    <Link to={`/${ImgV.routing}`} className="routing">
      <div className={`ImgV${index}`}>
        <h1 className="h1V">{ImgV.name}</h1>
        <img src={ImgV.img} alt="" id="imgV" />
      </div>
    </Link>
  );
}
