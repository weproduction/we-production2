import React, { Component } from 'react';

import defaults from '../data/contacts';

const ContactsContext = React.createContext(defaults);

export class ContactsProvider extends Component {
    render() {
        return (
            <ContactsContext.Provider value={defaults}>
                {this.props.children}
            </ContactsContext.Provider>
        )
    }
}

export function withContacts(Component) {
    return React.forwardRef((props, ref) => (
        <ContactsContext.Consumer>
            {contacts => (
                <Component {...props} contacts={contacts} ref={ref}/>
            )}
        </ContactsContext.Consumer>
    ));
}