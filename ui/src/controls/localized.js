import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';

export class Localized extends React.Component {
    static propTypes = {
        en: PropTypes.string.required,
        uk: PropTypes.string.required
    };

    render() {
        return (
            <Translate>
                {({ activeLanguage }) => {
                    const lang = activeLanguage ? activeLanguage.code : 'en';
                    return this.props[lang];
                }}
            </Translate>
        )
    }
}