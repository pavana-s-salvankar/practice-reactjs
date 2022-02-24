import ErrorBoudary from './Errorboundary';
import Hero from './Components/Color';
import Navbar from './Components/Navbar';
import './Styles/app.scss';
import ReactDOMManipulation from './Components/ReactDOMManipulation';
import React, { useState } from 'react';
import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';
// Error boundary cannot be functional component
function App() {
  const array = ['black', 'lightgreen', 'lightblue', 'white', 'blue', 'red', 'green', 'purple'];
  return (
    <div className='appContainer'>
      <Navbar />
      {array.map((item) => (
        <ErrorBoudary key={item}>
          <Hero colorname={item}></Hero>
        </ErrorBoudary>
      ))}

      <ReactDOMManipulation />
      <ClickCounter name='Vishwas' />
      <HoverCounter />
    </div>
  );
}

export default App;
