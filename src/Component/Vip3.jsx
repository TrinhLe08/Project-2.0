import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img1 from '../SubComponent/Img1'

export default function Vip3(){

    const Vip = useContext(VipContext)
    return(
        <div className="Vip3">
            <div className="div1">
                <h1 className="h1">
                Basic Elements
                </h1>
                <p className="p1">
                THE CORE ELEMENTS OF YOUR WEBSITE
                </p>
                <p className="p2">
                We re-styled every Bootstrap 4 element to match the Now UI Kit style.
                 All the Bootstrap 4 components that you need in a development have been 
                 re-design with the new look. Besides the numerous basic elements, we have 
                 also created additional classes. All these items will help you take your
                  project to the next level.
                </p>
            </div>
            <div className="div2">
                <img src="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/ipad.1a2b8af2.png" alt="" className="imgBoss" />
              {
                Vip.Vip3.map((img,index) => (
                    <Img1 index = {index} Img = {img}/>
                ))
              }

            </div>
        </div>
    )
}