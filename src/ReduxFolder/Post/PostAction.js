import axios from "axios"

export const SavePost = (postData) => {

    return{
        type: 'save-post',
        payload: postData
    }
}


export const AsyncSavePost = () => {
    return async (dispatch, getState) => {
          const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        dispatch(SavePost(posts.data))
    }
}