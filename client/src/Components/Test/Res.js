import React from "react"
import { useDeferredValue, useEffect, useMemo } from "react"


const Res = ({ v }) => {
    const value = useDeferredValue(v,{timeoutMs : 2000})
const list = useMemo(()=>{
    const l = []
    for (let i = 0; i < 20000; i++) {
        l.push(<div key={i}>{value}</div>)
        
    }
    return l
},[value])


    useEffect(() => {

        console.log('v - ' + v);
        console.log('value - ' + value);
    }, [v, value])
    return <div> {list}</div>
}

export default Res