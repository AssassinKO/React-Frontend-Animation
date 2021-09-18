import React, { useEffect, useRef, useState } from 'react';
import './discover.css';
import './discover.responsive.css';

function Discover({ status }){
    const discoverCircle = useRef()
    const circleSize = useRef(0)
    const fontSize = useRef(0)
    const inter1 = useRef()
    const inter2 = useRef()
    // const discoverTitle = useRef()
    const [sizeState,setSizeState] = useState(0)
    const [fontState,setFontState] = useState(0)
     useEffect(()=>{
         console.log(status);
         if(status == 'enter'){
             clearInterval(inter2.current)
             discoverCircle.current.style.display = "flex"
             inter1.current = setInterval(()=>{
                circleSize.current = circleSize.current + 15
                fontSize.current = fontSize.current + 2
                 setSizeState(circleSize.current)
                 setFontState(fontSize.current + "px")
                 console.log(fontSize.current);
                 console.log(fontState);
                 if(circleSize.current >= 110){
                     clearInterval(inter1.current)
                 }
             }, 50)
         }
         if(status == "leave"){
            clearInterval(inter1.current)
            inter2.current = setInterval(()=>{
                circleSize.current = circleSize.current - 15
                fontSize.current = fontSize.current - 2
                setSizeState(circleSize.current)
                setFontState(fontSize.current + "px")
                 if(circleSize.current <= 0){
                     clearInterval(inter2.current)
                     discoverCircle.current.style.display = "none"
                     fontSize.current = 0
                     setFontState(fontSize.current + "px")
                 }
             }, 50)
         }
     }, [status])
    useEffect(()=>{
        // let getDiscover = document.querySelector('.discover-div')
        window.addEventListener('mousemove',(event)=>{
            discoverCircle.current.style.left = event.clientX - 55 + "px"
            discoverCircle.current.style.top = event.clientY - 155 + "px"
        })
    })
    return(
        <div className="discover-div">
           <div className="discover-circle" ref={discoverCircle} style={{width:sizeState, height:sizeState}}>
             <img src="assests\discover\circle1.png" className="discover-image"></img>
             <h4 className="discover-title" style={{fontSize:fontState}}>
                Discover
             </h4>
          </div>
          <div className="discover-note">
              <h6 className="scroll-to-discover">
                  Scroll to discover
              </h6>
          </div>
        </div>
    )
}

export default Discover
