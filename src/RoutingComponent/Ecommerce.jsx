
import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import Img1 from '../SubComponent/Img1'

import Header from '../Header/Header'




export default function Ecommerce(){

    const Vip = useContext(VipContext)

    return(
        <div className='Ecommerce' id='routingComponent'>
        <Header></Header>
           {
            Vip.subEcommerce.map((ecommerce,index) => (
               < Img1 Img = {ecommerce} index = {index} />
            ))
           }

        </div>
    )
}