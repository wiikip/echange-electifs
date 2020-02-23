import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';

import Banner from './components/Banner';
import Main from './components/Main';
import useGetUserName from './hooks/GetUserName';



function App() {
  console.log("APP RENDERED")
  // const user = useGetUserName();
  return (
   
      <div className="App">
      
        <Main />
      </div>
  
  );
}

export default App;
