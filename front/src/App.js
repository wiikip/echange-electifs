import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';

import Banner from './components/Banner';
import Main from './components/Main';

const session = React.createContext

function App() {
  return (
    <div className="App">
      
      <Main />
    </div>
  );
}

export default App;
