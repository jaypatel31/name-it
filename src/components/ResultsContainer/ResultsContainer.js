import React from 'react'
import "./ResultsContainer.css"
import NameCard from "../NameCard/NameCard"

function ResultsContainer({names}) {

	const suggestedNameJSX = names.map((name,index)=>(
		<NameCard key={index} suggestedName={name}/>
	))

	return (
		<div className="results-conatiner">
			{names.length > 0 && suggestedNameJSX}
		</div>
	)
}

export default ResultsContainer