
import Img from './imagesSignup/imgSignup.png'


import Header from '../Header/Header'




export default function SignupPage(){
    return(
        <div className='Signup' id='routingComponent'>
              <Header></Header>
           <img src={Img} alt="" className="Signup" id="img1" />
        </div>
    )
}