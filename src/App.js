import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./components/Home";
// import {Provider} from 'react-redux';
// import {myStore} from './ReduxFolder/Redux';

// function App() {
//   // console.log(store);
//   return (
//     <Provider store={myStore}>
//       <div className="App">
//       <header className="App-header"><h1>Redux</h1></header>
//         <Home/>
//       </div>
//     </Provider>
//   );
// }

// export default App;

import React from "react";
import { myStore } from "./ReduxFolder/Redux";
import { PostTitle } from "./components/PostTitle";
import { PostBody } from "./components/PostBody";

const App = () => {
  return (
    <>
      <Provider store={myStore}>
        <div className="App">
          <header className="App-header">
            <h1>Redux</h1>
          </header>
          <Home />
          <PostTitle/>
          <PostBody/>
        </div>
      </Provider>
    </>
  );
};

export default App;
