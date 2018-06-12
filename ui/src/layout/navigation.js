import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink, FollowUs, LocalePicker } from "../controls";

import './navigation.sass';

export default class Navigation extends React.Component {

    constructor(){
        super();

        this.navbarRef = React.createRef();

        this.scrollHandler = () => {
            const navbar = this.navbarRef.current;
            if (navbar.classList.contains('is-fixed-top')) {
                const top = document.documentElement.scrollTop
                    || document.body.parentNode.scrollTop
                    || document.body.scrollTop;

                navbar.classList.toggle('is-transparent', top < 100);
            }
        };

        this.navbarMenuRef = React.createRef();

        this.burgerClickHandler = () => {
            this.navbarMenuRef.current.classList.toggle('is-active');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
        const fixedClass = this.props.fixed ? 'is-fixed-top is-transparent' : '';

        return (
            <nav className={"navbar " + fixedClass} ref={this.navbarRef}>
                <div className="navbar-brand">
                    <ActiveLink to="/" className="navbar-item">
                        <img src="/img/logo@2x.png" alt="We Production"/>
                    </ActiveLink>
                    <div className="navbar-burger burger" onClick={this.burgerClickHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-menu" ref={this.navbarMenuRef}>
                    <div className="navbar-start">
                        <ActiveLink to="/" className="navbar-item">
                            <Translate id="home.link" />
                        </ActiveLink>
                        <ActiveLink to="/videos" className="navbar-item">
                            <Translate id="video.link" />
                        </ActiveLink>
                        <ActiveLink to="/services" className="navbar-item">
                            <Translate id="services.link" />
                        </ActiveLink>
                        <ActiveLink to="/contact" className="navbar-item">
                            <Translate id="contacts.link" />
                        </ActiveLink>
                    </div>
                    <div className="navbar-end">
                        <FollowUs className="navbar-item is-hidden-touch"/>
                        <LocalePicker/>
                    </div>
                </div>
            </nav>
        );
    }
}