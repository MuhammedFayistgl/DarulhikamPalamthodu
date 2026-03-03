
// import {  Container } from '@mui/material'

import Home from './main/Home/Home';

import { Routes, Route } from "react-router";
import Result from './main/Result/Result';
import ResponsiveAppBar from './header/AppBar';
import Certificate from './main/Certificate/Status'; // Update path if Status component is located elsewhere
import DeveloperInfo from './main/Developer/Developer';

function App() {


  return (
    <>
      <ResponsiveAppBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/DarulhikamPalamthodu" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Status/:userName" element={<Certificate />} />
        <Route path="/developer" element={<DeveloperInfo />} />

      </Routes>




    </>
  )
}

export default App
