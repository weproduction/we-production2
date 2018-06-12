import React from 'react';
import { connect } from "react-redux";
import { push } from "react-router-redux";

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
    render() {
        const {tagName, children, className, disabled, to} = this.props;
        const whiteList = {
            className,
            disabled,
            to
        };

        const navigate = e => {
            e.preventDefault();

            let target = e.target;
            while (target && target.tagName !== 'A') {
                target = target.parentNode;
            }

            if (target) {
                this.props.navigateTo(target.getAttribute('to'));
            }
        };

        switch (tagName) {
            case 'button':
                return (
                    <button {...whiteList} onClick={navigate}>
                        {children}
                    </button>
                );

            default:
                return (
                    <a {...whiteList} onClick={navigate} href="javascript: void 0">
                        {children}
                    </a>
                );

        }
    }
}