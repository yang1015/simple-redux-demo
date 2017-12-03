import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../redux/actions'


class FormSection extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			first: "",
			last: ""
		}
	}
	inputChange(id, e) {
		let value = e.target.value;
		this.setState({
			[id]: value
		});
		
	}
	addToList() {
		let person = {
			first: this.state.first,
			last: this.state.last
		}
		this.props.actions.addToList(person);
	}

	render(){
		return (
			<div>
				first name: <input value = {this.state.first} onChange = {(e) => this.inputChange("first", e)} placeholder = "first name"/>
				<br />
				last nane: <input value = {this.state.last} onChange = {(e) => this.inputChange("last", e)} placeholder = "last name"/>
				<br />
				<button onClick = {() => this.addToList()}>add to list</button>
				
			</div>
			)
	}
}
function mapStateToProps(state) {
    return {
			personList: state.manipulatingItems.personList,
			count: state.manipulatingItems.count
	}
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormSection);
