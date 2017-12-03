import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
       
        return(
            <h1>here are {this.props.name} person</h1>
        )
    }
}

export default Title;