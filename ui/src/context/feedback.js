import React, { Component } from 'react';

import defaults from '../data/feedback';

const FeedbackContext = React.createContext(defaults);

export class FeedbackProvider extends Component {
    render() {
        return (
            <FeedbackContext.Provider value={defaults}>
                {this.props.children}
            </FeedbackContext.Provider>
        )
    }
}

export function withFeedback(Component) {
    return React.forwardRef((props, ref) => (
        <FeedbackContext.Consumer>
            {feedback => (
                <Component {...props} feedback={feedback} ref={ref}/>
            )}
        </FeedbackContext.Consumer>
    ));
}
