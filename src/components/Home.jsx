import React from 'react'
import { useSelector } from 'react-redux';
// import { AppName } from './AppName';
import { Login } from './Login'
import { Profile } from './Profile'

export const Home = () => {
    // selecting and using values from redux-store
    const loggedInState = useSelector((result) => {
        return result.isLoggedIn
    });
    console.log('rendering Home');
  return (
   <>
    {/* <AppName/> */}
    {loggedInState ? <Profile/>:  <Login/>}
    {/* <Login/>
    <Profile/> */}
   </>
  )
}


// import React from 'react';
// import { useSelector } from 'react-redux';

// export const Home = () => {

//   // selecting and using the vaues from the redux-store 

//   const loggedInState = useSelector((store) => {
//       return store.isLoggedIn
//   })
  
//   return(

//     <>
//       <h2>Home component</h2>
//       {loggedInState  ? <Profile/> : <Login/>}
//     </>
//   )
// }