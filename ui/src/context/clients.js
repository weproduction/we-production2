import React, { Component } from 'react';

import defaults from '../data/clients';

const ClientsContext = React.createContext(defaults);

export class ClientsProvider extends Component {
    render() {
        return (
            <ClientsContext.Provider value={defaults}>
                {this.props.children}
            </ClientsContext.Provider>
        )
    }
}

export function withClients(Component) {
    return React.forwardRef((props, ref) => (
        <ClientsContext.Consumer>
            {clients => (
                <Component {...props} {...clients} ref={ref}/>
            )}
        </ClientsContext.Consumer>
    ));
}