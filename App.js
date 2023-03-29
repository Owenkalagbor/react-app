// import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js"
import React from 'react';
import Greetings from './components/Greetings';


function App() {

  const users = [
    {
      name: 'hedy lamarr',
      imgUrl:'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
      alt: 'helar image'  },


  ]
    
  
  
  return (
  <>
  <Greetings >
  <Greetings name="owen" age="45"/>
  <Greetings name="owen"  age="45"/>
  <Greetings name="owen"  age={12+12}/>
  <Greetings name="owen"  age={12+10}/>










  </>
  );
}

export default App;
