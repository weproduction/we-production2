import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink, FollowUs, LocalePicker } from '../controls';

import './navigation.css';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators'

export default class Navigation extends React.Component {

    state = {
        links: [
            {
                to: '/welcome',
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
        ]
    };

    navbarRef = React.createRef();
    navbarMenuRef = React.createRef();

    burgerClickHandler() {
        this.navbarMenuRef.current.classList.toggle('is-active');
    }

    menuItemClickHandler() {
        this.navbarMenuRef.current.classList.remove('is-active');
    }

    componentDidMount() {
        let prevScrollPos = window.pageYOffset;
        this.scroll$ = fromEvent(window, 'scroll')
            .pipe(
                map(() => {
                    const currentScrollPos = window.pageYOffset;
                    this.navbarRef.current.classList.toggle('is-off-screen', prevScrollPos <= currentScrollPos && currentScrollPos > 50);
                    prevScrollPos = currentScrollPos;
                }),
                debounceTime(10),
                map(() => {
                    const navbar = this.navbarRef.current;
                    if (this.props.fixed && navbar.classList.contains('is-fixed-top')) {
                        const top = document.documentElement.scrollTop
                            || document.body.parentNode.scrollTop
                            || document.body.scrollTop;

                        navbar.classList.toggle('is-transparent', top < 50);
                    }
                })
            )
            .subscribe();
    }

    componentWillUnmount() {
        this.scroll$.unsubscribe();
    }

    isActive(link) {
        return window.location.pathname.substr(3).startsWith(link.to);
    }

    goTop() {
        if (window.location.pathname === '/') {
            window.scrollTo(0,0);
        }
    }

    render() {
        const fixedClass = this.props.fixed ? 'is-transparent' : '';

        const { links } = this.state;

        return (
            <nav className={`navbar is-fixed-top ${fixedClass}`} ref={this.navbarRef}>
                <div className="navbar-brand">
                    <ActiveLink to="/welcome" className="navbar-item" onNavigate={() => this.goTop()}>
                        <img src="/img/logo@2x.png" alt="We Production"/>
                    </ActiveLink>
                    <div className="navbar-burger burger" onClick={() => this.burgerClickHandler()}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className="navbar-menu" ref={this.navbarMenuRef} onClick={() => this.menuItemClickHandler()}>
                    <div className="navbar-start">
                        {links.map(link => (
                            <ActiveLink
                                key={link.to}
                                to={link.to}
                                className={`navbar-item ${this.isActive(link) ? 'is-active' : ''}`}
                            >
                                <Translate id={link.text} />
                            </ActiveLink>
                        ))}
                    </div>
                    <div className="navbar-end">
                        <FollowUs className="navbar-item is-hidden-touch" location="Menu"/>
                        <LocalePicker/>
                    </div>
                </div>
            </nav>
        );
    }
}