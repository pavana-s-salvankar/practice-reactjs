import React from 'react';
import '../Styles/navbar.scss';
const Navbar = () => {
  const chainPromises = () => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 5000);
      setTimeout(() => {
        reject();
      }, 4000);
    });
    prom
      .then((time) => {
        alert(time);
        return time + 1;
      })
      .then((time) => {
        alert(time);
        return time + 1;
      })
      .catch(() => {
        console.log('Promise rejected');
      });
  };
  return (
    <div className='navbar'>
      <a href='/home'>Home</a>
      <a href='/about'>About</a>
      <a href='/profile'>Profile</a>

      <h1 className='welcome'>Hello colors!!</h1>
      <button onClick={chainPromises}>Lets learn chaining promises</button>
    </div>
  );
};
export default Navbar;
