import React from "react";



const Avatar = ({fileSrc,setFile}) => {



const addAvatar = e =>{
const file = e.target.files[0]
const reader = new FileReader()
reader.readAsDataURL(file)
reader.onload = function(){
    setFile(reader.result)
  
}
}

    return <div>
        {fileSrc 
            ? <>
            <img src={fileSrc} alt="Avatar" />
            <button onClick={()=>setFile(null)}>X</button>
            </>
            : <>
            <input type='file' onInput={addAvatar}/>
            </>
        }
        <p>
            Avatar must be not big
        </p>
    </div>
}

export default Avatar