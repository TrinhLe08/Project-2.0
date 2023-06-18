import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


import Img4 from '../SubComponent/Img4'
import Img5 from '../SubComponent/Img5'

export default function Vip12(){

    const Vip = useContext(VipContext)
    
    
    return(
        <div className="Vip12">
            <div className="div1">

             {
                Vip.Vip12Img.map((sub,index) => (
                    <Img4 SubImg = {sub} index = {index} />
                ))
             }
            </div>

            <div className="div2">
             <h1 className="h1">Ready to grab Now UI Kit PRO?</h1>

             <button className="buttonBuy">
                <a href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nuk-pro-react-scroll-transparent-navbar&_ga=2.192881322.1088411928.1686659004-1823786368.1685957193">Buy Now</a>
             </button>

             <p className="p">Thank you for supporting us!</p>

             <div className="icon">
                 {
                    Vip.Vip12Icon.map(icon => (
                        <Img5 Icon = {icon} />
                    ))
                 }
             </div>

            </div>

        </div>
    )
}