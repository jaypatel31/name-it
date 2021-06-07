import React, {useState} from 'react';
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox"
import ResultContainer from "../ResultsContainer/ResultsContainer"

const namer = require("@rstacruz/startup-name-generator")

function App() {
	const [name, setName] = useState("")
	const [action, setAction] = useState("expanded");
	const [nameContainer, setNameContainer] = useState([]);

	const changeHandler = (e) =>{
		let text = e.target.value
		setName(text);
		(text == "")?setNameContainer([]):setNameContainer(namer(text));
		(text == "")?setAction('expanded'):setAction('contracted');
	}

	return (
		<div>
			<Header action={action}/>
			<SearchBox name={name} handler={changeHandler}/>
			<ResultContainer names={nameContainer}/>
		</div>
	)
}

export default App