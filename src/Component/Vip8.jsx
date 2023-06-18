


import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Demo from '../SubComponent/Demo'



export default function Vip8(){

    const Vip = useContext(VipContext)
    
    return (
     
        
        <div className="Vip8">

            <div className="div1">
                <div className="div">
                    <h1 className="h1">
                    Free Demo
                    </h1>
                    <p className="p">Do you want to test and see the benefits of this kit before purchasing it?
                     You can give the demo version a try. It features enough basic components for you to get a
                     feel of the design and also test the quality of the code. Get it free on GitHub!</p>
                     <button className="button">
                     <a href="https://github.com/TrinhLe08/Project-2.0.git">View Demo on Github</a></button>
                </div>
                <div className="img">
                {
                    Vip.Vip8.map(demo => (
                          <div className="img">
                             <Demo Demo = {demo} />
                          </div>

                    ))
                }

                </div>
            </div>

            <div className="div2">
                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="" className="div2" />
            </div>


        </div>
       
        
    )
}