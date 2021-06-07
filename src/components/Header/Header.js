import React from 'react';
import "./Header.css";

function Header({action}) {
	return (
		<div className="head-container">
			<img className={`head-img-${action} head-img`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="header"/>
			<h1 className={`head-text-${action} head-text`}>Name It!</h1>
		</div>
	)
}

export default Header