import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import Img1 from '../SubComponent/Img1'

import Header from '../Header/Header'




export default function PricingPage(){

    const Vip = useContext(VipContext)

    return(
        <div className="PricingPage" id='routingComponent'>
            <Header></Header>

           {
            Vip.subPricing.map((pricing,index) => (
                < Img1 Img = {pricing} index = {index} />
            ))
           }

        </div>
    )
}