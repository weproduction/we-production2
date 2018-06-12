import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink, FollowUs, LocalePicker } from "../controls";

import './navigation.sass';

export default class Navigation extends React.Component {

    constructor(){
        super();

        this.navbarRef = React.createRef();

        let prevScrollpos = window.pageYOffset;

        this.scrollHandler = () => {
            const navbar = this.navbarRef.current;
            if (navbar.classList.contains('is-fixed-top')) {
                const top = document.documentElement.scrollTop
                    || document.body.parentNode.scrollTop
                    || document.body.scrollTop;

                this.props.fixed && navbar.classList.toggle('is-transparent', top < 50);
            }

            const currentScrollPos = window.pageYOffset;
            this.navbarRef.current.classList.toggle('is-off-screen', prevScrollpos <= currentScrollPos && currentScrollPos > 50);
            prevScrollpos = currentScrollPos;
        };

        this.navbarMenuRef = React.createRef();
    }

    burgerClickHandler() {
        this.navbarMenuRef.current.classList.toggle('is-active');
    }

    menuItemClickHandler() {
        this.navbarMenuRef.current.classList.remove('is-active');
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    isActive(link) {
        return (link.to === '/'
            ? window.location.pathname === '/'
            : window.location.pathname.startsWith(link.to))
                ? 'is-active' : '';
    }

    goTop() {
        if (window.location.pathname === '/') {
            window.scrollTo(0,0);
        }
    }

    render() {
        const fixedClass = this.props.fixed ? 'is-transparent' : '';

        const links = [
            {
                to: '/',
                text: 'home.link'
            },
            {
                to: '/videos',
                text: 'video.link'
            },
            {
                to: '/services',
                text: 'services.link'
            },
            {
                to: '/contact',
                text: 'contacts.link'
            }
        ];

        return (
            <nav className={`navbar is-fixed-top ${fixedClass}`} ref={this.navbarRef}>
                <div className="navbar-brand">
                    <ActiveLink to="/" className="navbar-item" onNavigate={() => this.goTop()}>
                        <img src="/img/logo@2x.png" alt="We Production"/>
                    </ActiveLink>
                    <div className="navbar-burger burger" onClick={() => this.burgerClickHandler()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-menu" ref={this.navbarMenuRef} onClick={() => this.menuItemClickHandler()}>
                    <div className="navbar-start">
                        {links.map(link => (
                            <ActiveLink
                                key={link.to}
                                to={link.to}
                                className={`navbar-item ${this.isActive(link)}`}
                            >
                                <Translate id={link.text} />
                            </ActiveLink>
                        ))}
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