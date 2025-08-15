

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../ReduxFolder/auth/authAction'

export const Profile = () => {
   const UserName =  useSelector((state) => state.auth.name)
   const logoutDispatch = useDispatch();

   const logoutUser = () => {
        logoutDispatch(logout())
   }

    return(

        <>
            <h2>Profie Comp</h2>
            <h3>Name: {UserName} </h3>
            <button onClick={logoutUser} >Logout</button>
        
        </>
    )
}