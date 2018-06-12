import React from 'react';
import Image from 'react-retina-image';
import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { FollowUs } from "../controls";

import './footer.sass';

import { connect } from "react-redux";

@connect(
    (state, ownProps = {}) => {
        return {
            contacts: state.contacts
        }
    }
)
export default class Footer extends React.Component {
    render() {
        const { email, phone, address} = this.props.contacts;
        return (
            <footer className="footer has-text-light">
                <div className="container">
                    <div className="columns is-8 is-variable">
                        <div className="column is-one-third-desktop is-full-mobile is-half-tablet">
                            <div className="block is-hidden-desktop is-size-5">
                                <FollowUs>
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
                                <FollowUs>
                                    <Translate id={"buttons.follow-us"}/>:
                                </FollowUs>
                            </div>
                        </div>
                        <div className="column is-one-third-desktop is-half-tablet is-hidden-mobile">
                            <h3 className="title is-5 is-spaced has-text-light">
                                <Translate id={"home.contacts"}/>
                            </h3>
                            <p className="content is-size-7">
                                <a href={`mailto:${email}`} className="has-text-light">{email}</a>
                                <br/>
                                {address}
                                <br/>
                                <a href={`tel:${phone}`} className="has-text-light">{phone}</a>
                            </p>

                            <a href={`tel:${phone}`} className="button is-primary is-rounded">
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
            </footer>
        )
    }
}