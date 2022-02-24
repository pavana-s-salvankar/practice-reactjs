import ErrorBoudary from './Errorboundary';
import Hero from './Components/Color';
import Navbar from './Components/Navbar';
import './Styles/app.scss';
import ReactDOMManipulation from './Components/ReactDOMManipulation';
import React, { useState } from 'react';
import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';
import DocTitle1 from './Components/DocTitle1';
import DocTitle2 from './Components/DocTitle2';
import Counter1 from './Components/Counter1';
import Form from './Components/UserForm';
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
      <DocTitle1 />
      <DocTitle2 />
      <Counter1 />
      <Form />
    </div>
  );
}

export default App;
