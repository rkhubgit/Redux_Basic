


const iniVal = {
    posts: []
}

export const PostReducer = (initialVal= iniVal, action) => {
    if(action.type === "save-post"){
        return{
            ...initialVal,
            posts: action.payload
        }
    } return initialVal;
}