import React from 'react';

import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <div >  
      
      
<BrowserRouter>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/watch/:id' element={<Watch/>}/>



</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
