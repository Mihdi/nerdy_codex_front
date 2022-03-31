import * as React from 'react';

import Typography from '@mui/material/Typography';

function LandingPage(props) {
  return (
        <header style={{"textAlign": "center"}}>
          <Typography variant="h1">
            {props.phrases.websiteName}
          </Typography>
          <Typography variant="subtitle1">
            {props.phrases.websiteDescription}
          </Typography>
            <img src="./try.svg" alt={props.phrases.logoAlt}/>
        </header>
  );
}

export default LandingPage;