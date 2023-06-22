import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import Img1 from '../SubComponent/Img1'

import Header from '../Header/Header'




export default function ProductPage(){

    const Vip = useContext(VipContext)

    return(
        <div className='ProductPage' id='routingComponent' >
               <Header></Header>
           {
            Vip.subProduct.map((product,index) => (
                < Img1 Img = {product} index = {index} />
            ))
           }
        </div>
    )
}