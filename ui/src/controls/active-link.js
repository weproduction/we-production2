import React from 'react';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import PropTypes from 'prop-types';

@connect(
    (state, ownProps = {}) => {
        return {
            location: state.location
        }
    }, (dispatch, ownProps) => ({
        navigateTo: (location) => {
            dispatch(push(location));
        }
    })
)
export class ActiveLink extends React.Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        tagName: PropTypes.oneOf(['a', 'button']),
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onNavigate: PropTypes.func
    };

    render() {
        const {tagName, children, className, disabled, to, onNavigate, navigateTo } = this.props;
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