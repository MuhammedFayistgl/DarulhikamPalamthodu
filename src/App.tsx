
// import {  Container } from '@mui/material'

import Home from './main/Home/Home';

import { Routes, Route } from "react-router";
import Result from './main/Result/Result';
import ResponsiveAppBar from './header/AppBar';

function App() {


  return (
    <>
      <ResponsiveAppBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/DarulhikamPalamthodu" element={<Home />} />
        <Route path="/Result" element={<Result />} />

      </Routes>




    </>
  )
}

export default App
