import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Navbar from './components/Navbar';
import Posts from './pages/Posts';
import './components/styles/App.css';
import AppRouter from "./components/AppRouter";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
