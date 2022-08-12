import React, { useState } from "react";
import Spiner from "../Components/Spiner/Spiner";





export const SpinerData = () => {
    const [isSpiner, setSpiner] = useState(false)
    const on = () => setSpiner(true)
    const off = () => setSpiner(false)

    const S = { on, off, isSpiner }

    return S
}



const SpinerHOC = Component => props => {

    return props.isSpiner ? <Spiner /> :  <Component  {...props} />
}
export default SpinerHOC