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


// creating the action creator of the redux store
export const UpdateLoginState = () => {
    return {
        type: "update-login-state",
    }
}


// createing the initial state of the redux store 

const iniVal = {
    isLoggedIn : false,
}

// creatint the reducer function of the redux store 
const appReducer = (initialValue = iniVal, action) => {
    if(action.type === "update-login-state"){
        return {
            isLoggedIn: true
        }
    }
    return initialValue;
}


export const myStore = createStore(appReducer);
