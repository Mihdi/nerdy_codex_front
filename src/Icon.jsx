import * as React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Logo } from './logo.svg';

function Icon(props) {
	return (	
		<SvgIcon>
			<Logo />
		</SvgIcon>
	)
};

export default Icon;