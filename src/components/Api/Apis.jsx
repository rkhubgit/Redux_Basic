import React from "react";
import { useState } from "react";

export const Apis = () => {
  const [data, setData] = useState([]);
  // const handleApi = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // };
  const handleApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>  response.json())
    .then((data) => {
      setData(data);
      console.log(data);
    });
  }
 
  return (
    <>
      <button onClick={handleApi}>Press Me </button>
      {/* <ul>
        {data.map((todos) => (
          <li key={todos.id}>
          {todos.id}-{todos.title}
          </li>
        ))}
      </ul> */}
      <ul>
        {data.map((todos) => (
          <li key={todos.id}>
            {todos.id} --- {todos.title}
          </li>
        ))}
      </ul>
     
    </>
  );
};
