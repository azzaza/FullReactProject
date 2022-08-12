import React from "react"
import { useState, useTransition } from "react"
import Res from "./Res"

const Test = props => {
const [v, setV] = useState('')
const [isLoading, setTransition] = useTransition()
const [list , setList] = useState([])

const change = e => {
    setV(e.target.value)
    setTransition(()=>{
        const l = []
        for (let i = 0; i < 20000; i++) {
            l.push(e.target.value)
            
        }
        setList(l)
    })
}

return <div>
    <input value={v} onInput={e=>    setV(e.target.value)} />
    <Res v={v} />
    {/* {isLoading
    ? 'Loading...'
    : list.map((value,i)=><div key={i}>{value}</div>) */}
    
    {/* } */}
    

</div>
}

export default Test