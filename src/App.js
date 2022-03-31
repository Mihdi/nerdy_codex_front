import React, {useState} from 'react';

import '@fontsource/roboto'

import {ThemeProvider} from '@mui/material/styles';

import AboutMe from './AboutMe';
import Articles from './Articles';
import ContactMe from './ContactMe';
import LandingPage from './LandingPage';
import LogIn from './LogIn';
import Navbar from './Navbar';
import SignUp from './SignUp';

import phrases from './phrases';
import {darkTheme, dorkTheme, defaultTheme} from './themes.js'

/*
 * right now, I assume the navbar has the same infos about the uids, but I could make a more generic thing... 
 * would it be worth the extra complexity? 
 * anyway, as long as it's not generic enough to be configurable from a single point, it's not in its own js file
 */
const subpages = [
  {uid: "default", display: <LandingPage phrases={phrases} />},
  {uid: "articles", display: <Articles />},
  {uid: "aboutme", display: <AboutMe />},
  {uid: "contactme", display: <ContactMe />},
  {uid: "signup", display: <SignUp />},
  {uid: "login", display: <LogIn />},
]

function App() {
  const [subpage, setSubpage] = useState("default");
  const display = subpages.filter((sp) => sp.uid === subpage)[0].display;
  return (
    <div style={{"marginTop": "80px"}}>
      <ThemeProvider theme={defaultTheme}>
        <Navbar phrases={phrases} changePage={setSubpage}/>
        {display}
      </ThemeProvider>
    </div>
  );
}

export default App;