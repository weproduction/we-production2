import React from 'react';
import Image from 'react-retina-image';
import { Translate } from 'react-localize-redux';

import * as RGA from 'react-ga';

import {CallNow, FollowUs, Localized} from '../controls';

import { withContacts } from '../context';

import './footer.sass';

@withContacts
export default class Footer extends React.Component {
    track(action) {
        RGA.event({
            category: 'Footer',
            action
        });
    }

    render() {
        const { email, phone, address_en, address_uk} = this.props.contacts;
        return (
            <footer className="footer has-text-light">
                <div className="container">
                    <div className="columns is-8 is-variable">
                        <div className="column is-one-third-desktop is-full-mobile is-half-tablet">
                            <div className="block is-hidden-desktop is-size-5">
                                <FollowUs location="Footer">
                                    <Translate id={"buttons.follow-us"}/>:
                                </FollowUs>
                            </div>
                            <div className="block">
                                <p className="content is-size-6">
                                    &copy; Copyright 2015 - 2018
                                    <br/>
                                    <span className="is-size-7">
                                        Powered by Volodymyr Iatsyshyn and Natalie Zasoba
                                    </span>
                                </p>
                                <figure className="image is-inline-block" style={{height: '38px', width: '80px'}}>
                                    <Image src="/img/logo-white.png" checkIfRetinaImgExists={false} alt="We Production"/>
                                </figure>
                            </div>
                        </div>
                        <div className="column is-one-third-desktop is-hidden-touch">
                            <div className="block">
                                <h3 className="title is-5 is-spaced has-text-light">Latest News</h3>
                                <p className="is-size-7">Don't miss our future videos, news, and weekly tips. Join over
                                    20,000 beautiful
                                    people and sign up to our email newsletter.</p>
                            </div>
                            <div className="block">
                                <input className="input" type="email" />
                            </div>
                            <div className="block content is-size-6">
                                <FollowUs location="Footer">
                                    <Translate id={"buttons.follow-us"}/>:
                                </FollowUs>
                            </div>
                        </div>
                        <div className="column is-one-third-desktop is-half-tablet is-hidden-mobile">
                            <h3 className="title is-5 is-spaced has-text-light">
                                <Translate id={"home.contacts"}/>
                            </h3>
                            <p className="content is-size-7">
                                <a href={`mailto:${email}`} className="has-text-light" onClick={() => this.track('Email')}>{email}</a>
                                <br/>
                                <Localized en={address_en} uk={address_uk}/>
                                <br/>
                                <a href={`tel:${phone}`} className="has-text-light" onClick={() => this.track('Phone')}>{phone}</a>
                            </p>

                            <CallNow phone={phone} location="Footer"/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}