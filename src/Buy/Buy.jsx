
import { FaStar } from 'react-icons/fa';


import { Link } from 'react-router-dom'

import Header from '../Header/Header'

import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext, useState } from 'react';

import Pay from './Pay'
import $ from 'jquery';

import PopUp from './PopUp';


export default function Buy(){

    const Vip = useContext(VipContext)

    const ClickScroll = () => {
        const scrollTask =  $('.Pay').offset().top - 70
            
        $('html, body').animate(
            {
                scrollTop: scrollTask
            },
            500
            );
            return
            
        }

   
    

    return(

        <div className='Boss'>
             <Header></Header>   

        <div className="buy">    
            
            <div>
            <div className="img">
                <img src="https://s3.amazonaws.com/creativetim_bucket/products/171/original/opt_nukp_react_thumbnail.jpg?1564486765" alt="" className="img" />
            </div>

            <div className="buttonImg">
                <Link to = '/Project-2.0'>
                <button className="bu1"> {!Vip.vietSub ? 'XEM TRƯỚC' : 'LIVE PREVIEW'}</button>
                </Link>
                <a href="https://demos.creative-tim.com/now-ui-kit-pro-react/?&_ga=2.39536035.1247519485.1687661442-1823786368.1685957193#/documentation/introduction" className="bu2">
                <button className="bu2">{!Vip.vietSub ? 'TÀI LIỆU' : 'DOCS'}</button>
                </a>
            </div>

            </div>


            <div className="divBoss">
                <div className="div">
                    <h1 className="h1">
                    Now UI Kit PRO React
                    </h1>
                    <p className="p">  {!Vip.vietSub ? 'BỘ CÔNG CỤ UI BOOTSTRAP 4 VÀ REACTSTRAP CAO CẤP' : 'PREMIUM BOOTSTRAP 4 AND REACTSTRAP UI KIT'}</p>
                    <div className="evaluate">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        {!Vip.vietSub ? '· 5.00/5 (46 Nhận Xét)' : ' · 5.00/5 (46 Reviews)'}
                   </div>
                    <p className="p1">  {!Vip.vietSub ? 'Giấy phép (EULA)' : 'License (EULA)'}</p>

                  
                   <div className="button" onClick = {ClickScroll}>
                   {!Vip.vietSub ? 'MUA NGAY CHỈ VỚI 79$' : 'BUY NOW . $79'}  
                   </div>
                        
                   

                </div>
            </div>

           <div className="product">

           </div>
        </div>

        <Pay style = {{display : 'none'}}></Pay>

      

        <PopUp Pay = {Vip.pushPop}></PopUp>

        </div>

    )
}