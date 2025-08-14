// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../ReduxFolder/auth/authAction';

// export const Profile = () => {
//   const dispatch = useDispatch();
//   const userName = useSelector((state) => state.name);
  
//   console.log('rendering Profile');
//   const logoutUser = () => {
//     dispatch(logout());

//     // dispatch({
//     //   type: 'logout'
//     // })
//   }
//   return (
//     <>
//         <h3>MY Profile</h3>
//         <div>Name: {userName}</div>
//         <button onClick={logoutUser}>logout</button>
//     </>
//   )
// }


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const Profile = () => {
   const UserName =  useSelector((state) => state.name,)
   const stateee = useSelector((state) => state)
   console.log(stateee,'state objecttttttt')

   const logoutAction = useDispatch();

   const logoutUser = () => {
        logoutAction({
            type: 'logout'
        })
   }

    return (
    <>
        <h2>Profile</h2>
        <h3>App Name : {stateee.AppName}</h3>
        <h3>Name: {UserName} </h3>
        <button onClick={logoutUser} >Logout</button>
    </>
    
    )
}