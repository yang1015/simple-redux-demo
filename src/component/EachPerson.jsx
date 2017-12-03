import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../redux/actions'

class EachPerson extends React.Component{
	constructor(props) {
		super(props);
	}
	deletePerson(index) {
		this.props.actions.deletePerson(index);
	}
	render(){
		let keyIndex = 0;
		let index = this.props.index; //showComponent分发下来的index	
	 
		return(
			<h1 onClick = {this.deletePerson.bind(this, Number(index))} key = {"person" + keyIndex++}> 
				index: [{index}]: hello {this.props.firstName}  {this.props.lastName}
			</h1>
		)
	}
}


export default EachPerson;
/*
function mapStateToProps(state, ownProps) {
   
    return { 
		personList: state.manipulatingItems.personList,
		succeed: state.manipulatingItems.succeed
	}
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EachPerson);
*/

