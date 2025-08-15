// import React from 'react'
// import { useSelector } from 'react-redux';
// // import { AppName } from './AppName';
// import { Login } from './Login'
// import { Profile } from './Profile'

// export const Home = () => {
//     // selecting and using values from redux-store
//     const loggedInState = useSelector((result) => {
//         return result.isLoggedIn
//     });
//     console.log('rendering Home');
//   return (
//    <>
//     {/* <AppName/> */}
//     {loggedInState ? <Profile/>:  <Login/>}
//     {/* <Login/>
//     <Profile/> */}
//    </>
//   )
// }


import React from 'react'
import { AppName } from './AppName'
import { Profile } from './Profile'
import { Login } from './Login'
import { useSelector } from 'react-redux'
import  CountClass  from './CountClass'
import { Shop } from './Shop'


export const Home = () => {

  const loginState = useSelector((state) => {
    return state.auth.isLoggedIn 
  })
 
  return(

    <>
      <AppName/>
      {loginState ? <Profile/> :  <Login/>}
      
      {/* <CountClass/> */}
      <Shop/>
    </>
  )
}