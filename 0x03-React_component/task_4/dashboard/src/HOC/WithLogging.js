<<<<<<< HEAD
import React, { Component } from 'react'

const WithLogging = (WrappedComponent) => {
	const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	class NewComponent extends Component {
		componentDidMount() {
			console.log(`Component ${name} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${name} is going to unmount`);
		}

		render() {
			return <WrappedComponent {...this.props}/>;
		}
	};
	NewComponent.displayName = `WithLogging(${name})`;
	return NewComponent;
}

export default WithLogging
=======
import React from 'react';

function HOC(wrappedComponent) {
    class WithLogging extends React.Component {
        componentDidMount() {
            console.log(`Component ${WithLogging.displayName} is mounted `);
        }
        componentWillUnmount() {
            console.log(`Component ${WithLogging.displayName} is going to unmount`);
        }
    }
    WithLogging.displayName = `WithLogging(${wrappedComponent.displayName || wrappedComponent.name || 'Component'})`;
    return WithLogging;
}

export default HOC;
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
