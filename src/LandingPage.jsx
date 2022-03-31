import * as React from 'react';

import Typography from '@mui/material/Typography';

import CrowIcon from './CrowIcon';

function LandingPage(props) {
  return (
        <header style={{"textAlign": "center"}}>
          <Typography variant="h1">
            {props.phrases.websiteName(props)}
          </Typography>
          <Typography variant="subtitle1">
            {props.phrases.websiteDescription(props)}
          </Typography>
            <CrowIcon color={props.logoColor}/>
        </header>
  );
}

export default LandingPage;