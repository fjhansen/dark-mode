import React, { useState, useEffect } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(getInitialMode());
//   useEffect(() => {
//     localStorage.setItem('dark', JSON.stringify(darkMode));
//   },[darkMode])
//   const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };

  

//   function getInitialMode(){
//     const isReturningUser = "dark" in localStorage;
//     const savedMode = JSON.parse(localStorage.getItem('dark'));
//     getPrefColorScheme();
//     const userPrefDark = getPrefColorScheme();
// //if mode saved -> dark/light
//     if (isReturningUser) {
//       return savedMode
//  // else if pref color scheme is dark -> dark      
//     } else if (userPrefDark) {
//       return true;
// // otherwise -> light      
//     } else {
//       return false;
//     }
//     //return savedMode || false;
//   }

  // function getPrefColorScheme() {
  //   if (!window.matchMedia) return;

  //   return window.matchMedia("(prefers-color-scheme: dark)").matches;
  // }

  const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    
    const toggleMode = e => {
          e.preventDefault();
          setDarkMode(!darkMode);
        };

  
  return (
    <nav className={darkMode ? "navbar dark-mode" : "navbar light-mode"}>
      <h1 >Crypto Tracker</h1>
      <span style={{color: darkMode ? "grey" : "orange", fontSize:'3em', marginLeft:'25%'}}>☼</span>
      <div className="dark-mode__toggle">
        
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          
        />
      </div>
      <span style={{color: darkMode ? "purple" : "grey", fontSize:'3em', marginRight:'40%'}}>☾</span>
    </nav>
  );
};

export default Navbar;
