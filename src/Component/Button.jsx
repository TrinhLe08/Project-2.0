import { useState, useEffect, useRef } from 'react'

export default function Button(){
    
    let Button  = useRef(null)
    let Button1 = useRef(null)
    let Button2 = useRef(null)

    let Main = useRef(null)

    let Height = 900
    let X = window.pageYOffset

    useEffect(() => {
       Button.current = document.querySelector('.Button')
       Button1.current = document.querySelector('.Button1')
       Button2.current = document.querySelector('.Button2')
       Main.current = document.querySelector('.Main')
    },[])

    const [scroll, setScroll] = useState(Height)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.pageYOffset);
        };
    
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
          };
      
},[])
    
      const Toggle1 = () => {
       Toggle(-1)
      }

      const Toggle2 = () => {
        Toggle(1)
      }

     
      const Toggle = (number) => {
        if(number == 1) {
       X = X + Height

        window.scrollTo({
            top: scroll + Height,
            behavior: "smooth"
          });

        } else  if(number == -1) {
           
            X = X - Height
         
                 window.scrollTo({
                     top: scroll - Height,
                     behavior: "smooth"
                   });
         
      }
    }

    
    return(
        <div className="Button">
            <button className="Button1" onClick = {Toggle1}>⥜</button>
            <button className="Button2" onClick = {Toggle2}>⥡</button>
        </div>
    )
}
