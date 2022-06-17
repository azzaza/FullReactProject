import localforage from "localforage";

const User = localforage.createInstance('User')


export const User_Token={
    get:()=>User.getItem('User'),
    set:(token)=>{User.setItem('User',token)},
    delete:()=>{User.removeItem('User')}
}