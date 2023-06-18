import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import $ from 'jquery';


export default function Header(){

    const [sub, setSub] = useState(true)
 
    const ClickHome = () => {
            if (window.innerWidth < 700) {

            setSub(!sub);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    const ClickSections = () => {
            if (window.innerWidth < 700) {

            setSub(!sub);
        }

        const scrollTask =  $('.Vip6').offset().top + 100
      
        $('html, body').animate(
            {
              scrollTop: scrollTask
            },
            500 
          );
    }

    const ClickPages = () => {
        if (window.innerWidth < 700) {

            setSub(!sub);
        }
        const scrollTask =  $('.Vip7').offset().top + 100
      
        $('html, body').animate(
            {
              scrollTop: scrollTask
            },
            500 
          );
    }

    const ClickDemo = () => {
        if (window.innerWidth < 700) {

            setSub(!sub);
        }
        const scrollTask =  $('.Vip8').offset().top - 90
      
        $('html, body').animate(
            {
              scrollTop: scrollTask
            },
            800 
          );
    }

    const ClickIcon = () => {
        if (window.innerWidth < 700) {

            setSub(!sub);
        }
        const scrollTask =  $('.Vip9').offset().top - 90
      
        $('html, body').animate(
            {
              scrollTop: scrollTask
            },
            700 
          );
    }

    const ClickBuy = () => {
        if (window.innerWidth < 700) {

            setSub(!sub);
        }
        const scrollTask =  $('.Vip12').offset().top - 90
      
        $('html, body').animate(
            {
              scrollTop: scrollTask
            },
            1200 
          );
    }
    
    const ClickSub = () => {
        setSub(!sub);
        
    }

    const Header =  useRef(null)
    const Menu =  useRef(null)
    const A = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', function() {
           Header.current = this.document.querySelector('.header')
           Menu.current = this.document.querySelectorAll('#menu')
           A.current = this.document.querySelector('.a')
           Header.current.classList.toggle('Scroll', window.scrollY > 300);
           A.current.classList.toggle('Scroll', window.scrollY > 300);
           Menu.current.forEach((value,index) => {
               Menu.current[index].classList.toggle('Scroll', window.scrollY > 300);
           })
          });
    },[])


   
    return (
        <div className="header" style = { sub ? {marginTop : '0px'}: {marginTop : '-350px'} }>
            <div>
                <img src="" alt="" />
            </div>

            <div className="menu">  
                <p className="home"  id='menu' onClick = {ClickHome}> <a href="/Project2.0" className='a'>Home</a> </p>
                <p className="sections" id='menu' onClick = {ClickSections}>Sections</p>
                <p className="pages" id='menu' onClick = {ClickPages}>Example Pages</p>
                <p className="demo"  id='menu' onClick = {ClickDemo}>Demo GitHub</p>
                <p className="icon"  id='menu' onClick = {ClickIcon}>Custom Icons</p>
                <p className="buy"  id='menu' onClick = {ClickBuy}>Buy Now</p>
                <p className="sub"  id='submenu' onClick = {ClickSub} >⥡</p>
            </div>
            {/* <div></div> */}
        </div>
    )
}