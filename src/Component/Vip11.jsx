import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';


import { FaStar } from 'react-icons/fa';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react'


import Img3 from '../SubComponent/Img3'
import Img4 from '../SubComponent/Img4'

export default function Vip11() {

    const Vip = useContext(VipContext)


    let SlideBoss = useRef(null)
    let subSlide = useRef(null)

    let ArrowL = useRef(null)
    let ArrowR = useRef(null)

    let Dot = useRef(null)


    let X = 0
    let Y = 0
    let Z = 0
    let Width = useRef(null)




    useEffect(() => {
        SlideBoss.current = document.querySelector('.slideBigBoss')
        subSlide.current = document.querySelector('.slideBoss')
        ArrowL.current = document.querySelector('.aL')
        ArrowR.current = document.querySelector('.aR')
        Dot.current = document.querySelectorAll('.dotBoss')
        Width.current = 700
    }, [])

    function Click1() {
        Click(1)
    }

    function Click2() {
        Click(-1)
    }


    function Click(number) {
        if (number == 1) {

            Y--
            X = X + Width.current
            if (Y < 0) {
                Y = 2
                X = -1400
                subSlide.current.style = `transform : translateX(${X}px`
                Dot.current[0].classList.remove('Vip')
                Dot.current[2].classList.add('Vip')
                return
            }
            subSlide.current.style = `transform : translateX(${X}px`
            Dot.current[Y + 1].classList.remove('Vip')
        } else if (number == -1) {

            Y++
            X = X - Width.current
            if (Y > 2) {
                Y = 0
                X = 0
                subSlide.current.style = `transform : translateX(${-X}px`
                Dot.current[2].classList.remove('Vip')
                Dot.current[0].classList.add('Vip')
                return
            }
            subSlide.current.style = `transform : translateX(${X}px`
            Dot.current[Y - 1].classList.remove('Vip')
        } else {
            return
        }
        Dot.current[Y].classList.add('Vip')
    }

    function DotClick() {
        useEffect(() => {
            Dot.current = document.querySelectorAll('.dot')

            Dot.current.forEach(dotItem => dotItem.addEventListener('click', (x) => {
                Dot.current.forEach(subItem => subItem.classList.remove('Vip'))

                x.target.classList.add('Vip')

                const slideIndex = parseInt(x.target.dataset.index);

                Z = slideIndex

                const X = -1 * Z * Width.current

                subSlide.current.style = `transform : translateX(${X}px`

            }));
        }, [])

    }

    DotClick()


    return (
        <div className="Vip11">
            <div className="div">
                <h1 className="h1">
                    Trusted by 818,000+ People
                </h1>
                <p className="p">
                    The UI Kits, Templates and Dashboards that we've created are used by
                    <span className="span"> 818,000+ web developers </span>
                    in over
                    <span className="span"> 1,476,616 Web Projects. </span>
                    This is what some of them think:
                </p>
            </div>

            <div className="slideBigBoss">
                <div className="slideBoss">

                    {
                        Vip.Vip11Slide.map(slide => (
                            <Img3 Slide={slide} />
                        ))
                    }

                </div>
            </div>

            <div className="arrow">
                < AiOutlineDoubleLeft onClick={Click1} className="aL" />
                < AiOutlineDoubleRight onClick={Click2} className="aR" />
            </div>


            <div className="dotBoss">
                <div className="dot Vip" data-index='0'></div>
                <div className="dot" data-index='1'></div>
                <div className="dot" data-index='2'></div>
            </div>

            <div className="img">
                {
                    Vip.Vip11Sub.map((subImg, index) => (
                        <Img4 SubImg={subImg} index={index} />
                    ))
                }
            </div>


        </div>
    )
}