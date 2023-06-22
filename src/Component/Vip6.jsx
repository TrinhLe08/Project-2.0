import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img1 from '../SubComponent/Img1'

export default function Vip6(){

    const Vip = useContext(VipContext)

    return(
        <div className="Vip6" ref = {Vip.Section}>
            <div className="div">
                <h1 className="h1">Sections you will love</h1>
                <p className="p">Build pages in no time using pre-made sections! From headers to footers,
                 you will be able to choose the best combination for your project. We have created multiple
                  sections for you to put together and customise into pixel perfect example pages.</p>
                  <button className="button"><a href="/">View All Sections</a></button>
            </div>

            <div className="img">
        {
            Vip.Vip6.map((img,index) => (
                <Img1 index = {index} Img = {img} key = { index }/>
            ))
        }
        </div>
        </div>

    )
}