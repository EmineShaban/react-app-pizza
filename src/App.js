import React from 'react';

import {Header} from './components'; 
import {Cart, Home} from './pages'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
      <Routes>
    <Route path='/' Component={Home} exact/>
    <Route path='/cart' Component={Cart} exact/>
    </Routes>
    </div>
  </div>
  );
}

export default App;
