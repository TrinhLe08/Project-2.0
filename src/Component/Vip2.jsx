import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img1 from '../SubComponent/Img1'


export default function Vip2(){
 

    const Vip = useContext(VipContext)

 

    return(
        <div className="Vip2">
       <h1 className="h2">Impressive collection of elements </h1>
       <p className="p1">Designed to look gorgeous together</p>
       <p className="p2">Now UI Kit Pro comes with a huge number of customisable elements. 
       They are not only designed to be pixel perfect and light but they are also easy to 
       use and combine well with other components.</p>
       
      

        <div className="img">
        {
            Vip.Vip2.map((img,index) => (
                <Img1 index = {index} Img = {img}/>
            ))
        }
        </div>

       </div>
       

        
    )
}