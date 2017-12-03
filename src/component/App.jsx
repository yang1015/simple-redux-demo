import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
// import { addaction } from '../redux/actions'
import { addToList } from '../redux/actions'

import Title from './TitleComponent'
import ShowComponent from './ShowComponent'
import FormSection from './FormSection'
import * as Actions from '../redux/actions'

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    

    render(){
      
        const {actions, personList, count} = this.props;
        
        return(
            <div>
                <Title name = {count} />
                <FormSection />
                <ShowComponent />
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
