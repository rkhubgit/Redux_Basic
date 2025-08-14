// import React from 'react'
// import { useRef } from 'react'
// import { useDispatch } from 'react-redux';
// import { login } from '../ReduxFolder/auth/authAction';

// export const Login = () => {
//     const nameRef = useRef();
//     const dispatch = useDispatch();
    
//     const loginUser = (e) => {
//         e.preventDefault();
//        dispatch(login(nameRef.current.value));

//     //    dispatch({
//     //     type: 'login', 
//     //     payload: nameRef.current.value
//     //    })
//     }
//     console.log('rendering Login');
//   return (
//     <form onSubmit={loginUser}>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="" ref={nameRef}/>
//         <button>Login</button>
//     </form>
//   )
// }


import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../ReduxFolder/auth/authAction';


export const Login = () => {

    const nameRef = useRef();
    const loginDispatch = useDispatch()

    const LoginUser = (e) => {
        e.preventDefault();
        loginDispatch(login(nameRef.current.value))

    }

    return(

        <>
        <h2>Login Comp</h2>
        <input type='text' placeholder='enter name here' name='name' ref={nameRef}  />
        <button onClick={LoginUser} >Login</button>
        
        </>
    )
}

