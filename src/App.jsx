// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./component/Header";
import Home from "./component/Home";

import Footer from "./component/Footer";
import Videos from "./component/videos";
import Upload from "./component/Upload";
import Signup from "./component/Signup";
import Login from "./component/Login";
function App() {
  return (<BrowserRouter>
   {/* <div>this is heading tag</div> */}
  {/* <Button color={"red"} p="1" background={"green"}>button</Button> */}
  <Navbar/>
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/videos" element={<Videos/>}/>
    <Route  path="/upload" element={<Upload/>}/>
    <Route  path="/signup" element={<Signup/>}/>
    <Route  path="/login" element={<Login/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
