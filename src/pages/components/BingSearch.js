/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Axios from "axios";
import removePunct from "./removepunct";
import Results from "./Results";
import "./BingSearch.css"

const BingSearch = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [notFound, setNotFound] = useState(false);
	const [inputQuery, setInputQuery] = useState("");

	// takes search box input, removes punctuation and assigns to inputQuery variable,
	//   ready to be searched
	const handleChange = (e) => {
		const userInput = e.target.value;
		const inputSpecCharsRemoved = removePunct(userInput);
		setInputQuery(inputSpecCharsRemoved);
	};

	// run when user searches, checks for response to have data, if it does will add data
	//   to searchResults state, otherwise turns notFound state to be true
	const handleSearch = async (e) => {
		e.preventDefault();
		console.log(inputQuery);
		try {
			const response = await Axios.post("http://localhost:8000/search", {
				query: inputQuery,
			});
			const data = response.data;
			console.log("OVER HERE", data.webPages.value);
			if ("webPages" in data) {
				setSearchResults(data.webPages.value);
			} else {
				setNotFound(true);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
    <div id = 'BS'>
      <div id="BSplaceholder">
        <div id='BStitle'>Search</div>
        <div id='BSsubtitle'>Find the location of the information you need from Turners</div>
        <form action="" onSubmit={handleSearch}>
          <input
            type="text"
            onChange={handleChange}
						placeholder="Search Our FAQs"
						id="BSinput"
          />
          <button id="BSsubmit">Search</button>
        </form>
      </div>

      <div id="BSresults">
        {searchResults &&
          searchResults.map((result, index) => {
            return (
              <Results
                address={result.url}
                name={result.name}
					snippet={result.snippet}
					index={index}
              ></Results>
            );
          })}
      </div>
    </div>
  );
};
export default BingSearch;
