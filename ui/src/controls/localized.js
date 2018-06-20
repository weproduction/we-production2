import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';

export class Localized extends React.Component {
    static propTypes = {
        en: PropTypes.string.isRequired,
        uk: PropTypes.string.isRequired
    };

    valueFor(lang) {
        const localized = this.props[(lang ? lang.code : 'en')];
        return localized === undefined ? 'Missing translation' : localized;
    }

    render() {
        return (
            <Translate>
                {({ activeLanguage }) => this.valueFor(activeLanguage)}
            </Translate>
        )
    }
}