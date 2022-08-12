import React, { useEffect, useState } from "react";
import { them_basa } from "../../redux/Settings/Settings.redux";
import './Theme.css'


const Theme = (props_main) => {
    const [allThema, setAllThema] = useState([])
    useEffect(() => {
        const componentThema = []
        for (const i in them_basa) {
            const props = { arrThema :them_basa[i], name: i }
            componentThema.push(<Thema key={props.name} {...props} change={props_main.R_FU_SETTONGS_CHNAGE_THEMA} />)
        }
        setAllThema(componentThema)

    }, [])


    return<div className="them_container">
        <h3>Chose theme</h3>
        <div className="thems_container">
            {allThema}
        </div>
    </div>


}


export default Theme


const Thema = ({name,arrThema,change}) => {
    const onclick=()=>{
        change(name)
    }
    return <div onClick={onclick}>
        <h4>{name}</h4>
        <div className="colors_box">
            {arrThema.map( (data, i) => <div style={{background: data.color}} key={i} className="box"></div>  ) }
        </div>
    </div>
}