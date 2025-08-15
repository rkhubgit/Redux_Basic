import React from 'react'
import { useSelector } from 'react-redux'


export const PostBody = () => {
    const postData = useSelector((store) => store.posts)

    return(

        <>
            <h2>Post Body Comp</h2>

            {
                postData.map((data) => {
                    return(
                        <>
                        <p key={data.id}>{data.body}</p>
                        </>
                    )
                })
            }
        
        </>
    )
}