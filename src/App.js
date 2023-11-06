import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import About from './pages/About'
import Contacts from './pages/Contacts'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/addbook' element={<AddBook/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          

        </Route>
      </Routes>
    </BrowserRouter>
    
      
  );
}

export default App;
