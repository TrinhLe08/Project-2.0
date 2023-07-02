export default function Img3({ Slide }) {
  const Star = Slide.star;
  return (
    <div className="slide">
      <img src={Slide.img} alt="" className="imgBoss" />
      <p className="p">{Slide.p}</p>
      <h2 className="h2">{Slide.name}</h2>
      <h3 className="h3">{Slide.job}</h3>
      <Star className="star" />
      <Star className="star" />
      <Star className="star" />
      <Star className="star" />
      <Star className="star" />
    </div>
  );
}
