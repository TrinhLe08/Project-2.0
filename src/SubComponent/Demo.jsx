import SubDemo from "./SubDemo";

export default function Demo({ Demo }) {
  return (
    <div className="demo" style={{ backgroundImage: `url(${Demo.img})` }}>
      <div className="style">
        <p className="pBoss">{Demo.name}</p>
        <div className="div">
          {Demo.p.map((value, index) => (
            <SubDemo p={Demo.p[index]} span={Demo.span[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}
