import React from 'react';

import {Header} from './components'; 
import {Cart, Home} from './pages'
import { Route, Routes } from 'react-router';
import axios from 'axios';

function App() {
  
  const [pizzas, setPizzas] = React.useState([]);
  console.log(pizzas)
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) =>{
      setPizzas(data.pizzas)

    })
    
  }, [])

  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
      <Routes>
    <Route path='/' element={<Home items={pizzas} />}  exact/>
    <Route path='/cart' Component={Cart} exact/>
    </Routes>
    </div>
  </div>
  );
}

export default App;
