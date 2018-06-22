import React from 'react';
import PropTypes from 'prop-types';

import { Translate } from 'react-localize-redux';
import { Icon } from 'react-bulma-components';

import * as RGA from 'react-ga';

export class CallNow extends React.Component {

    static propTypes = {
        phone: PropTypes.string.isRequired,
        location: PropTypes.string
    };

    trackClick = () => {
        RGA.event({
            category: this.props.location || 'Call Now',
            action: 'Call now'
        });
    };

    render() {
        const { phone } = this.props;
        return (
            <a href={`tel:${phone}`} className="button is-primary is-rounded" onClick={this.trackClick}>
                <Translate id="buttons.call-now"/>
                &nbsp;
                &nbsp;
                <Icon>
                    <i className="fas fa-phone"/>
                </Icon>
            </a>
        )
    }
}

