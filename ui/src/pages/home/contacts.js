import React from 'react';
import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './contacts.sass'
import {withContacts} from '../../context';

@withContacts
export default class Contacts extends React.Component {

    state = {
        photos: [],
        current: 0
    };

    contactsRef = React.createRef();
    galleryRef = React.createRef();

    goTo(index) {
        this.setState({
            current: index % this.state.photos.length
        });

        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.goTo(this.state.current + 1), 15000);
    }

    componentWillMount() {
        const { gallery } = this.props.contacts;

        this.setState({
            photos: gallery,
            current: Math.floor(gallery.length * Math.random())
        });

        gallery.forEach(photo => {
            const link = document.createElement("link");
            link.rel = 'preload';
            link.as = 'image';
            link.href = `/gallery/${photo}`;
            document.head.appendChild(link);
        });
    }

    componentDidMount() {
        this.goTo(this.state.current);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    showGallery() {
        this.contactsRef.current.classList.remove('is-half-desktop');
        this.galleryRef.current.classList.remove('is-half-desktop');

        this.contactsRef.current.classList.add('is-one-quarter-desktop');
        this.galleryRef.current.classList.add('is-three-quarters-desktop');
    }

    restoreEquilibrium() {
        this.contactsRef.current.classList.add('is-half-desktop');
        this.galleryRef.current.classList.add('is-half-desktop');

        this.contactsRef.current.classList.remove('is-one-quarter-desktop', 'is-three-quarters-desktop');
        this.galleryRef.current.classList.remove('is-three-quarters-desktop', 'is-one-quarter-desktop');
    }

    render() {
        const { email, phone, address_en, address_uk} = this.props.contacts;

        const photo = this.state.photos[this.state.current];

        return (
            <section className="hero contact-map">
                <div className="columns is-gapless">
                    <div className="column is-half-desktop is-full-touch contacts-wrapper"
                         ref={this.contactsRef}
                    >
                        <div className="contacts-container">
                            <h2 className="title is-1 is-spaced">
                                <Translate id="home.contacts"/>
                            </h2>
                            <p className="content is-size-6">
                                <a href={`mailto:${email}`} className="has-text-dark">{email}</a>
                                <br/>
                                <Translate>
                                    {({activeLanguage}) => (
                                        <span>{activeLanguage && activeLanguage.code === 'uk' ? address_uk : address_en}</span>
                                    )}
                                </Translate>
                                <br/>
                                <a href={`tel:${phone}`} className="has-text-dark">{phone}</a>
                            </p>

                            <a href={`tel:${phone}`} className="button is-primary is-rounded is-outlined">
                                <Translate id="buttons.call-now"/>
                                &nbsp;
                                &nbsp;
                                <Icon>
                                    <i className="fas fa-phone"></i>
                                </Icon>
                            </a>
                        </div>
                    </div>
                    <div className="column is-half-desktop is-hidden-touch gallery-container"
                         ref={this.galleryRef}
                         onMouseEnter={() => this.showGallery()}
                         onMouseLeave={() => this.restoreEquilibrium()}
                    >
                        <div className="gallery-wrapper">
                            <figure className="image is-16by10">
                                <TransitionGroup>
                                    <CSSTransition
                                        key={this.state.current}
                                        classNames="gallery"
                                        timeout={1400}>
                                        <img src={`/gallery/${photo}`} alt=""/>
                                    </CSSTransition>
                                </TransitionGroup>
                            </figure>
                        </div>
                        <ul className="nav-dots">
                            {this.state.photos.map((photo, index) => (
                                <li key={index} className={"nav-dot " + (index === this.state.current ? 'is-active' : '')}
                                    onClick={() => this.goTo(index)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}