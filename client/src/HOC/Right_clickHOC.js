import React, { useEffect, useState } from "react";
import './rch.css'

let state={}
const Right_ckickHOC = Component => props => {
    const Open_context_menu=(e)=>{
        e.preventDefault()
        state.active[1](true)
     
        if(window.innerWidth-e.pageX<100){
            state.position[1]({pageX:window.innerWidth-102,pageY : e.pageY})
        }
        else{
            state.position[1]({pageX:e.pageX,pageY : e.pageY})
        }
        
    }
    


        return <div className="rch" onContextMenu={Open_context_menu}>
            <Component  {...props}  />
            <MobileMenu  mobileMenu={props.mobileMenu}  />
        </div>
    }
    export default Right_ckickHOC


    const MobileMenu = ({mobileMenu}) => {

        const [isActive, setActive] = useState(false)
        const [position, setPosition] = useState({pageX:100,pageY:100})

        useEffect(()=>{
            state.active =  [isActive, setActive]
            state.position =  [position, setPosition]
   
        },[])


        return <>

    {isActive &&  <div className="mobileMenu" style={{left: position.pageX + 'px',top:position.pageY + 'px'}}>
        <div className="menuOption"  onClick={()=>setActive(false)}>close</div>
            {
                mobileMenu.map((elem,i)=><div key={i} className="menuOption" onClick={()=>{elem.fun();setActive(false)}}>{elem.name}</div>)
            }
        </div>}
        </>


    }