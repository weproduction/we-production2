import React from 'react';
import Image from 'react-retina-image';

import { Translate } from 'react-localize-redux';

import './clients.sass';
import {withClients} from "../../context";

@withClients
export default class Clients extends React.Component {

    render() {
        const { faces, logos } = this.props;

        return (
            <section className="section">
                <div className="container">
                    <div className="block">
                        <div className="block">
                            <h2 className="title is-1 is-spaced">
                                <Translate id="home.clients.header"/>
                            </h2>
                        </div>
                        <div className="block">
                            <h4 className="title is-5 is-spaced has-text-centered">
                                <Translate id="home.clients.faces"/>
                            </h4>
                            <div className="clients-list scrolling-wrapper-flexbox">
                                {faces.map((face, index) => (
                                    <a href={face.link} className="scroll-item" key={index}>
                                        <div className="has-text-centered">
                                            <figure className="image is-64x64 is-inline-block is-hidden-tablet">
                                                <Image src={"/clients/" + encodeURI(face.image)}/>
                                            </figure>
                                            <figure className="image is-128x128 is-inline-block is-hidden-mobile">
                                                <Image src={"/clients/" + encodeURI(face.image)}/>
                                            </figure>
                                            <br/>
                                            <p className="content is-6 has-text-dark">{face.name}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="block">
                            <h4 className="title is-5 is-spaced has-text-centered">
                                <Translate id="home.clients.logos"/>
                            </h4>
                            <div className="clients-list scrolling-wrapper-flexbox">
                                {logos.map((logo, index) => (
                                    <a href={logo.link} className="scroll-item" key={index}>
                                        <figure className="image is-64x64 is-inline-block is-hidden-tablet">
                                            <Image src={"/clients/" + encodeURI(logo.image)}/>
                                        </figure>
                                        <figure className="image is-128x128 is-inline-block is-hidden-mobile">
                                            <Image src={"/clients/" + encodeURI(logo.image)}/>
                                        </figure>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}