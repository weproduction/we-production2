import React, { Component } from 'react';

import defaults from '../data/crew';

const CrewContext = React.createContext(defaults);

export class CrewProvider extends Component {
    render() {
        return (
            <CrewContext.Provider value={defaults}>
                {this.props.children}
            </CrewContext.Provider>
        )
    }
}

export function withCrew(Component) {
    return React.forwardRef((props, ref) => (
        <CrewContext.Consumer>
            {crew => (
                <Component {...props} crew={crew} ref={ref}/>
            )}
        </CrewContext.Consumer>
    ));
}