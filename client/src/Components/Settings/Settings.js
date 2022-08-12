import React, { useDeferredValue, useEffect, useState } from "react";
import Avatar from "./Avatar";
import Password from './Password'
import C from './Settings.module.css'
import Theme from "./Theme";
let OldUser = null




const Settings = (props) => {

    const [fileSrc, setFile] = useState(props.user.avatar)
    const { name, email, page_name } = props.user

    const [Component, setComponent] = useState(null)

    

    const [user, setUser] = useState([
        {
            name: 'name',
            data: name,
            regxp: /^[a-z,0-9]{1,14}$/gi,
            error: 'Name must be 4-14 symbols'
        },
        {
            name: 'email',
            data: email,
            regxp: /[a-z,0-9]{4,}@[A-Z]{1,7}.[a-z]{1,5}/gi,
            error: 'This is not email'
        },
        {
            name: 'page_name',
            data: page_name,
            regxp: /^[a-z,0-9]{1,20}$/gi,
            error: 'Teg must be 1-20 symbols'
        },
    ])

    //! Error, regxp, spiner 

    useEffect(() => {
        OldUser = user;
        setComponent(Comp.main)
    }, [])
    const save_click = () => {
        const data = {};
        user.map((e, i) => {
            if (e.data != OldUser[i].data) {
                data[e.name] = e.data
            }
        })
        if (fileSrc) data.avatar = fileSrc

        props.update_data(data)
        OldUser= user
    }

    const menu_click=(e)=>{
        setComponent(Comp[e.target.title]);

    }
    const Comp = {
      
        password : <Password {...props}/> ,
        main : <>{user.map(d => <Set {...d} setUser={setUser} user={user} key={d.name} />)}<button onClick={save_click}>Save</button></> ,
        avatar :<><Avatar {...props}/><button onClick={save_click}>Save</button> </> ,
        theme:<><Theme {...props}/></>
    }    

    return <div>
        <div className={C.menu}>
            <p title="main" onClick={menu_click}>
                Main Settings
            </p>
            <p title="avatar" onClick={menu_click}>
                Avatar Settings
            </p>
            <p title="password" onClick={menu_click}> 
                Password Settings
            </p>
            <p title="theme" onClick={menu_click}>
                Theme Settings
            </p>
        </div>

   
        <div className={C.settings_cont}>
            {Component}
        </div>
        
        


        


        {/*     
        
        <h3>{props.user.name}</h3>
        <p>{props.user.email}</p>
        <p>{props.user.page_name}</p> */}
    </div>
}



























const Set = ({ name, data, regxp, setUser, user, error }) => {
    const [Error, setError] = useState(null)

    const [active, setActive] = useState(false)
    const [val, setVal] = useState(data)
    const value  = useDeferredValue(val) 

    const double_click = () => {
        setActive(true)
    }
    const input_change = (e) => {
        setVal(e.target.value)
    }
    const input_onblur = () => {
        if (!regxp.test(val)) {
            setError(error)
        } else {
            setError(null)
            setUser(user.map(el => {
                if (el.name == name) {
                    return { ...el, data: val }
                }
                return el
            }))
        }
        setActive(false)
    }
    return <div>
        {active
            ? <input autoFocus={true} onChange={input_change} onBlur={input_onblur} value={value} type={name} />
            : <p onDoubleClick={double_click}>{data}</p>
        }
        {Error ? <p>{Error}</p> : <></>}

    </div>
}


export default Settings