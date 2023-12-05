import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello World!</h1>
                <h1>Hello, {this.props.name}!</h1>
            </Fragment>  
        );
    }
}

export default HelloWorld;