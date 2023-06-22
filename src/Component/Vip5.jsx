import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img1 from '../SubComponent/Img1'

export default function Vip5(){

    const Vip = useContext(VipContext)
    
    return(
        <div className="Vip5">
            <div className="img">
            {
               Vip.Vip5.map((img,index) => (
                   <Img1 index = {index} Img = {img} key = {index}/>
               ))
            }
         </div>
            <div className="div">
             <h1 className="h1">Content Areas</h1>
             <p className="p1">FOR AREAS THAT NEED MORE SPACE</p>
             <p className="p2">We took into consideration multiple use cases and came up with some specific 
             areas for you. If you need elements such as tables, comments, description areas, tabs and many
              others, we've got you covered. They're beautiful and easy to use for the end user navigating 
              your website.</p>
            </div>
        </div>
    )
}