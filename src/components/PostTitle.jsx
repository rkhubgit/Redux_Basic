import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncSavePost, SavePost } from "../ReduxFolder/Post/PostAction";

export const PostTitle = () => {
//   const [postData, setPostData] = useState([]);

const postData = useSelector((store) => {
   return store.posts
})

console.log(postData, '1111111111')


const PostDispatch = useDispatch();

  // api calling using the axios
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       console.log(res.data, "dataaaaaaaaaaa");
//     //   setPostData(res.data);
//       PostDispatch(SavePost(res.data))
//     });
//   }, []);

// api calling used by redux 
useEffect(() => {
    PostDispatch(AsyncSavePost(SavePost))
})

  // calling the api using the fetch method

//   const GetApiData = () => {
//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };
//     fetch('https://jsonplaceholder.typicode.com/posts',requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             console.log(result, 'dataaaaaaaaa')
//             setPostData(result)
//         })
//   };

//   useEffect(() => {
//     GetApiData();
//   },[])




  return (
    <>
      <h2>Post Title Comp</h2>

      {postData.map((data) => {
        return (
          <>
            <p key={data.id}>{data.title}</p>
          </>
        );
      })}
    </>
  );
};
