// import { legacy_createStore as createStore } from "redux";
// import { authReducer } from "./auth/authReducer";



// // {
// //     isLoggedIn: true,
// //     name: 'abhinav'
// // }

// export const myStore = createStore(authReducer, iniVal);


import { applyMiddleware, combineReducers, legacy_createStore as  createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { ShopReducer } from "./Shop/ShopReducer";
import { PostReducer } from "./Post/PostReducer";
import { thunk } from "redux-thunk";
 

// const iniVal = {
//     isLoggedIn: false,
//     name: 'default',
//     AppName: 'Newton App'
// }

// initial value
const iniVal = {
    count: 10,
  AppName: "Newton Application",
  isLoggedIn: false,
  name: "default",
};

// const AppReducer = (initialValue= iniVal, action) => {
//     if(action.type === "update-login-state"){
//         return{
//             ...initialValue,
//             isLoggedIn: true,
//             name: action.payload,
//         }
//     }
//     if(action.type === "logout"){
//         return{
//             ...initialValue,
//             isLoggedIn: false,
//             name: 'default'
//         }
//     }
//     return initialValue
// }

// middleware into the redux 
const logger = (store) => {
  return(next) => {

    return (action) => {
      // console.log('inside the middleware functino');
      // console.log(action);

      next(action);
    }
  }
}


// const bothReducers =  combineReducers({
//     auth: authReducer,
//     shop: ShopReducer
// })


// export const myStore = createStore(bothReducers,applyMiddleware(logger));

export const myStore = createStore(PostReducer , applyMiddleware(thunk))
