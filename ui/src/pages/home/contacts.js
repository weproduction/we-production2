import React from 'react';
import Image from 'react-retina-image';
import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import './contacts.sass'

export default class Contacts extends React.Component {
    render() {
        const { email, phone, address} = this.props;

        return (
            <section className="hero contact-map">
                <div className="columns is-gapless">
                    <div className="column is-half-desktop is-full-touch contacts-wrapper">
                        <div className="columns is-gapless">
                            <div className="column is-half-tablet is-full-mobile">
                                <div className="contacts-container">
                                    <h2 className="title is-1 is-spaced">
                                        <Translate id="home.contacts"/>
                                    </h2>
                                    <p className="content is-size-6">
                                        <a href={`mailto:${email}`} className="has-text-dark">{email}</a>
                                        <br/>
                                        {address}
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
                        </div>
                    </div>
                    <div className="column is-half-desktop is-hidden-touch">
                        <figure className="image is-4by3">
                            <Image src="/mock/photo1.png" width="100%"/>
                        </figure>
                    </div>
                </div>
            </section>
        )
    }
}