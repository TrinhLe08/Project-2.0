
import { useState, useEffect, useRef } from 'react'

import Header from '../Header/Header'
import Button from '../Component/Button'
import Vip1 from '../Component/Vip1'
import Vip2 from '../Component/Vip2'
import Vip3 from '../Component/Vip3'
import Vip4 from '../Component/Vip4'
import Vip5 from '../Component/Vip5'
import Vip6 from '../Component/Vip6'
import Vip7 from '../Component/Vip7'
import Vip8 from '../Component/Vip8'
import Vip9 from '../Component/Vip9'
import Vip10 from '../Component/Vip10'
import Vip11 from '../Component/Vip11'
import Vip12 from '../Component/Vip12'

import { Link } from 'react-router-dom';

export default function Main(){
    
    const Main = useRef(null)

    const Routing = useRef(null)

    useEffect(() => {
        Main.current = document.querySelector('.Main')
        Routing.current = document.querySelectorAll('.routing')

        for (let i = 0; i < Routing.current.length; i++) {
            Routing.current[i].addEventListener('click', () => {
               // Main.current.style = 'display: none;'
               if (window.innerWidth > 700) {
                window.scrollTo({
                  top: 10120,
                  behavior: "smooth"
                });
        } else if(window.innerWidth < 500){
            window.scrollTo({
                top: 10500,
                behavior: "smooth"
              });
        }
            }
    )}
    },[])

    


    return (
      
        
       <div className="Main" >
    
    

           <Header></Header>
           <Button></Button>
           <Vip1></Vip1>
           <Vip2></Vip2>
           <Vip3></Vip3>
           <Vip4></Vip4>
           <Vip5></Vip5>
           <Vip6></Vip6>
           <Vip7></Vip7>
           <Vip8></Vip8>
           <Vip9></Vip9>
           <Vip10></Vip10>
           <Vip11></Vip11>
           <Vip12></Vip12>
  


 
        </div>
        
        
    )
}