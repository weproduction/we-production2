import React from 'react';

import ContactsBlock from './home/contacts';

export default class Contacts extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return <ContactsBlock />
    }
}