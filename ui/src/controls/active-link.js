import React from 'react';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import PropTypes from 'prop-types';

class ActiveLink_ extends React.Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        tagName: PropTypes.oneOf(['a', 'button']),
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onNavigate: PropTypes.func,
        exact: PropTypes.bool
    };

    render() {
        const {tagName, children, className, disabled, to: href, onNavigate, navigateTo, localize: { languages }, exact } = this.props;
        const activeLanguage = languages.find(l => l.active);
        const to = exact ? href : `/${activeLanguage ? activeLanguage.code : 'en'}${href}`;
        const whiteList = {
            className,
            disabled,
            to
        };

        const navigate = e => {
            e.preventDefault();

            if (typeof onNavigate === 'function' && onNavigate(e) === false) {
                return;
            }

            navigateTo(to);
        };

        switch (tagName) {
            case 'button':
                return <button {...whiteList} onClick={navigate}>{children}</button>;

            default:
                return <a {...whiteList} onClick={navigate} href={to}>{children}</a>;

        }
    }
}

export const ActiveLink = connect(
    (state) => ({
        localize: state.localize
    }), (dispatch) => ({
        navigateTo: (location) => dispatch(push(location))
    })
)(ActiveLink_);
