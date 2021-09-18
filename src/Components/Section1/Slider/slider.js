import React, { useEffect, useRef ,useReducer, useState } from 'react';
import './slider.css';
import './slider.responsive.css';
import SliderData from './SliderData/sliderData';


function Slider({  }){
    
    const [changing,setChanging] = useState('none')
    const [rotate,setRotate] = useState(0)
    // refs 
    // const changing = useRef()
    const content = useRef()
    const sliderDiv = useRef()
    const change = useRef(0)
    const interLeft  = useRef()
    const interRight = useRef()
    const arr = useRef([])
    const first = useRef(0)
    const last = useRef(0)
    const swipe1 = useRef()
    const swipe2 = useRef()

    useEffect(()=>{
   
    // load event function for the slider 
    window.addEventListener('load',function(){
        console.log('load');
        content.current.style.transform = `rotate(-10deg)`
        change.current = -10
    })
   
    // wheel event function for the slider 
    document.body.addEventListener('wheel',function(event){
        const size = event.deltaY
        console.log(size);
        // scrolling right 
        if(size >= 0){
            if(change.current <= -79){
                return;
            }
            else{
                change.current = change.current - 1.5
            }
        }
        // scrolling left 
        if(size <= 0){
            if(change.current >= -10){
                return;
            }
            else{
                change.current = change.current + 1.5
            }
            
        }
            // rotating the slider 
            content.current.style.transform = `rotate(${change.current}deg)`
            
            
    })
    
    })

    function goLeft(){
     interLeft.current = setInterval(()=>{
         if(change.current >= -10){
            return;
        }
        else{
            change.current = change.current + 1.5
            setRotate(change.current)
            content.current.style.transform = `rotate(${rotate}deg)`
        }
      }, 75)
    }

    function stopLeft(){
          clearInterval(interLeft.current)
    }

    function goRight(){
        interRight.current = setInterval(()=>{
         if(change.current <= -79){
            return;
        }
        else{
            change.current = change.current - 1.5
            // setChanging(change.current)
            setRotate(change.current)
            content.current.style.transform = `rotate(${rotate}deg)`
        }
      }, 75)
    }

    function stopRight(){
            clearInterval(interRight.current)
    }
   
    window.addEventListener("touchmove",(event) =>{

        console.log(event.changedTouches[0].screenY);
    })
    return(
       <div className="slider-div" ref={sliderDiv}>
             <div className="responsive-slider-buttons-div">
                <div className="slider-button" id="slider-button-left" onMouseEnter={goLeft} onMouseLeave={stopLeft}>
                   <i className="fas fa-angle-left" id="slider-button-icon"></i>
                </div>
                <div className="slider-button" id="slider-button-right" onMouseEnter={goRight} onMouseLeave={stopRight}>
                    <i className="fas fa-angle-right" id="slider-button-icon"></i>
                </div>
             </div>
           <div className="slider-content" ref={content}>
               {/* maping images from SliderData  */}
               {SliderData.map((SliderData,index) =>
                       <div className="sliding" id={`sliding${index + 1}`} key={index}>
                           <a href="#">
                           <img className="slide-image" src={SliderData.path}></img>
                           </a>
                       </div>
               )}
           </div>
       </div>
    )
}

export default Slider