// import { legacy_createStore as createStore } from "redux";
// import { authReducer } from "./auth/authReducer";

// // initial value
// const iniVal = {
//     count: 10,
//   appName: "Newton Application",
//   isLoggedIn: false,
//   name: "default",
// };

// // {
// //     isLoggedIn: true,
// //     name: 'abhinav'
// // }

// export const myStore = createStore(authReducer, iniVal);


import { legacy_createStore as  createStore } from "redux";
import { authReducer } from "./auth/authReducer";
 

const iniVal = {
    isLoggedIn: false,
    name: 'default',
    AppName: 'Newton App'
}


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



export const myStore = createStore(authReducer, iniVal);
