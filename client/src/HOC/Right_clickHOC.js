import React, { useEffect, useState } from "react";
import './rch.css'

const mobileMenu = [
    {
        name : 'выбрать все смс',
        fun : ()=>{}
    },
    {
        name : 'выбрать one message',
        fun : ()=>{}
    },

]

let state={}
const Right_ckickHOC = Component => props => {
    const Open_context_menu=(e)=>{
        e.preventDefault()
        state.active[1](true)
        state.position[1]({pageX:e.pageX,pageY : e.pageY})
    }
const change = ()=>{

}

        return <div className="rch" onContextMenu={Open_context_menu}>
            <Component  {...props}  />
            <MobileMenu  mobileMenu={props.mobileMenu} />
        </div>
    }
    export default Right_ckickHOC

    //TODO style|| remove pkm

    const MobileMenu = ({mobileMenu}) => {
        console.log(mobileMenu);
        const [isActive, setActive] = useState(false)
        const [position, setPosition] = useState({pageX:100,pageY:100})
        console.log(isActive);
        useEffect(()=>{
            state.active =  [isActive, setActive]
            state.position =  [position, setPosition]
            
            console.log(9);
        },[])


        return <>

    {isActive &&  <div className="mobileMenu" style={{left: position.pageX + 'px',top:position.pageY + 'px'}}>
            {
                mobileMenu.map((elem,i)=><div key={i} className="menuOption" onClick={()=>{elem.fun();setActive(false)}}>{elem.name}</div>)
            }
        </div>}
        </>


    }