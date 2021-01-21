import React, { Component } from 'react'
import $ from 'jquery';

class Custome extends Component{
	componentDidMount() {

		$('#adddemo').click(function() {
			alert("show alert")
			console.log("click add demo button");
		});
	}
	render() {
		return (
			<></>
		);
	}
}

export default Custome;