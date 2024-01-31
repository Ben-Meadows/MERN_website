// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Valentines } from './pages/Valentines.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/Valentines' element = {<Valentines/>}/>
    </Routes>
  )
}

export default App
