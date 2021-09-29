import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Regulament from "./components/regulament/regulament";
import Login from "./components/login/login";
import Register from "./components/register/register";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/regulament" component={Regulament} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}/>
    </BrowserRouter>
  );
}

export default App;