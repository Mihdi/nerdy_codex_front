import * as React from "react"
import {ReactComponent as CrowLogo} from './icon.svg';

const CrowIcon = (props) => (
  <CrowLogo 
    viewBox="0 0 4709 4709"
    fill={props.color}
    style = {{ 
      width: "inherit", 
      height:"inherit",
    }}
    preserveAspectRatio="xMidYMid meet"
  />
);

export default CrowIcon
