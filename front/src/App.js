import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';

import Banner from './components/Banner';
import Main from './components/Main';
import useGetUserName from './hooks/GetUserName.js';



function App() {
  const {user,setUser} = useGetUserName();
  return (
    <LoggedUserContext.Provider value = {{user,setUser}}>
      <div className="App">
      
        <Main />
      </div>
    </LoggedUserContext.Provider>
  );
}

export default App;
