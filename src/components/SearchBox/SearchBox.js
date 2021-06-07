import React from 'react';
import "./SearchBox.css";

function SearchBox({name,handler}) {
	return (
		<div className="search-conatiner">
			<input value={name} onChange={(e)=>handler(e)} placeholder="Type Key Word" className="search-input"/>
		</div>
	)
}

export default SearchBox