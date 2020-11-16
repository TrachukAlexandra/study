import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Nav from './components/Nav';
console.log(2);
console.log(3);
console.log(4);


const App = () => {
  return (
  <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
      
  </div>
  );
}

export default App;
