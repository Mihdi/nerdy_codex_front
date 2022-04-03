import React, {useState} from 'react';

import '@fontsource/roboto';
import '@fontsource/comic-neue';

import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from '@mui/material/styles';

import AboutMe from './AboutMe';
import Articles from './Articles';
import ContactMe from './ContactMe';
import LandingPage from './LandingPage';
import LogIn from './LogIn';
import Navbar from './Navbar';
import SignUp from './SignUp';

import phrases from './phrases';
import themes from './themes.js';

function App() {
  const [subpageUID, setSubpageUID] = useState("default");
  const [themeUID, setThemeUID] = useState("dark");

  const theme = themes.filter((t) => t.uid === themeUID)[0].theme;

  /*
   * right now, I assume the navbar has the same infos about the uids, but I could make a more generic thing... 
   * would it be worth the extra complexity? 
   * anyway, as long as it's not generic enough to be configurable from a single point, it's not in its own js file
   */
  const subpages = [
    {uid: "default", display: (
      <LandingPage 
        phrases={phrases}
        logoColor={theme.palette.primary.main}
        changePage={setSubpageUID}
      />
    )},
    {uid: "articles", display: <Articles phrases={phrases} theme={theme}/>},
    {uid: "aboutme", display: <AboutMe />},
    {uid: "contactme", display: <ContactMe />},
    {uid: "signup", display: <SignUp />},
    {uid: "login", display: <LogIn />},
    {uid: "secret", display: <p> Shhhhh </p>},
  ];

  const display = subpages.filter((sp) => sp.uid === subpageUID)[0].display;
  return (
    <div style={{"marginTop": "80px"}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar 
          phrases={phrases}
          changePage={setSubpageUID}
          theme={theme}
          themes={themes}
          changeTheme={setThemeUID}
          themeUID={themeUID}
        />
        {display}
      </ThemeProvider>
    </div>
  );
}

export default App;