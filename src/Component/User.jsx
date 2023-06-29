import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';


import Div1 from '../SubComponent/Div1'

import { AiOutlineEuroCircle } from 'react-icons/ai';
import { DiBootstrap } from 'react-icons/di';
import { AiFillFileExcel } from 'react-icons/ai';

export default function Vip10(){

    const Vip = useContext(VipContext)
    
    return(
        <div className="Vip10">

          <div className="divBoss">
            {
              Vip.Vip10.map(div => (
                 <Div1 Div = {div}  key = { div }/>
              ))
            }
          </div>

          <div className="img">
            <img src="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/ipad3.209b5856.png" alt="" className="img" />
          </div>

        </div>
    )
}