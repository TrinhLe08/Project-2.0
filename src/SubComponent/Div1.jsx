
export default function Div1({Div}){
    const Icon = Div.icon
    return(
          <div className="div">
             <Icon className = 'icon'/>
             <div className="subDiv">
                <h2 className="h2">{Div.h2}</h2>
                <p className="p">{Div.p}</p>
             </div>
          </div>
    )
}