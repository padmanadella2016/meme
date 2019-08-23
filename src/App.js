import React from 'react';
import logo from './logo.svg';
import './App.css'
import './style.css'
import MemeGenerator from './components/MemeGenerator'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
