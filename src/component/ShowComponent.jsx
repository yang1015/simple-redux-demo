import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import EachPerson from './EachPerson'
import * as Actions from '../redux/actions'
let reverseButton = {
	color: "red"
}


class ShowComponent extends React.Component{
	constructor(props) {
        super(props);
				//始终为空，因为一开始默认为空，而constructor一旦渲染之后 不会被重复调用，所以取props.list不能在这里取，一定是默认为空的
  }
	reverseTheList(personList) {
		this.props.actions.reversePersonList(personList);
	}
	render(){
	  let tip = "";
		let {personList, succeed} = this.props; 
	
	  if (succeed) {
			tip = "翻转完成"
		} else {
			tip = "正在翻转中"
		}
		console.log("show list: " + JSON.stringify([personList]));
		let each = 0;
		let personIndex = -1;
		let allPerson = personList.map(function(person) {		
				personIndex++;				 
				return (
						<EachPerson index = {personIndex} firstName = {person.first} lastName = {person.last} key = {"eachPerson" + each++}/>		 
				)					
		});

		return (
			<div>
					{allPerson}
				<button style = {reverseButton} onClick = {() => this.reverseTheList(personList)}>REVERSE</button>
				<p> {tip}</p>
			</div>)
	}
}

function mapStateToProps(state) {
    return { 
			personList: state.manipulatingItems.personList,
			succeed: state.manipulatingItems.succeed
		}
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowComponent);