import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () =>
{
		return(
			<div className= 'ma4 mt0'>
				<Tilt className="Tilt br3 shadow-2" options={{ max : 45 }} style={{ height: 80, width:80 }} >
 					<div className="Tilt-inner pa2">
 					<img style ={{paddingTop : '5px'}} alt='Logo' src={"https://img.icons8.com/ios/50/000000/critical-thinking.png"}/> 
 			        </div>
			 	</Tilt>
			</div>
			);


}
export default Logo;