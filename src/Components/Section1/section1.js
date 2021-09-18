import React, { useEffect, useRef, useState,useReducer } from 'react';
import './section1.css';
import Slider from './Slider/slider';
import Discover  from './Discover/discover';

// const Actions = {
//     enter : 'enter',
//     leave : 'leave',
// }

// function reducer(state,action){
//      switch(action.type){
//          case Actions.enter:
//            return 'enter';
//          case Actions.leave:
//              return 'leave';
//         default:
//             return state;
//      }
// }

function Section1(){
    // states 
    const [status,setStatus] = useState()
    // const [state,dispatch] = useReducer( reducer, { change : 0})
    const hoverRef = useRef()

    //mouse event functions for sending states to Discover component 
    function enter(){
       setStatus('enter')
    }
    function leave(){
       setStatus('leave')
    }
    
    useEffect(()=>{
        console.log(hoverRef.current);
       if(hoverRef.current == "hover"){
           setStatus('leave')
       }
    }, [hoverRef.current])
    return(
        <div className="section1-div" onMouseEnter={enter} onMouseLeave={leave}>
             <Slider />
             <Discover status={status}/>
        </div>
    )
}

export default Section1