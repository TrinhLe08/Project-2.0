// {
//     icon: AiOutlineEuroCircle,
//     h2: 'Save Time & Money',
//     p: 'Creating your design from scratch with dedicated designers can be very expensive.Using Now UI Kit PRO you do not have to worry about customising the basic Bootstrap 4 design or its components.'

// }

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