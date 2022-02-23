import React from 'react';
import '../Styles/navbar.scss';
const Navbar = () => {
  return (
   
      <div className='navbar'>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/profile'>Profile</a>

        <h1 className='welcome'>Hello colors!!</h1>
        <button>Click here to continue</button>
      </div>
     
   
  );
};
export default Navbar;
