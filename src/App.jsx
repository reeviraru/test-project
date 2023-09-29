import React from 'react';
import Navbar from './components/Navbar';
import Posts from './pages/Posts';
import './components/styles/App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Posts/>
    </div>
  );
}

export default App;
