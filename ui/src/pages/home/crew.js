import React from 'react';
import Image from 'react-retina-image';
import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import reveal from "scrollreveal";

import './crew.sass';
import {withCrew} from "../../context";
import {Localized} from "../../controls";

const sr = reveal();

@withCrew
export default class Crew extends React.Component {
    componentDidMount() {
        const nodes = this.crewRefs.map(x => x.current);
        sr.reveal(nodes, {duration: 500, rotate: {x: 20, y:10, z:0}, origin: 'right', mobile: false}, 50);
    }

    render() {
        const { crew } = this.props;
        this.crewRefs = crew.map(() => React.createRef());

        return (
            <section className="section">
                <div className="container">
                    <div className="block">
                        <h2 className="title is-1 is-spaced">
                            <Translate id="home.crew.header"/>
                        </h2>
                        <p className="subtitle is-4 is-spaced has-font-caveat has-text-primary">
                            <Translate id="home.crew.subtitle"/>
                        </p>
                        <div className="columns is-variable is-8 is-multiline">
                            <div className="column is-narrow-desktop is-full-touch">
                                <div className="desktop-410">
                                    <p className="content is-size-6">
                                        <Translate id="home.crew.details"/>
                                    </p>
                                </div>
                            </div>
                            <div className="column is-full-touch">
                                {crew.map((person, index) => (
                                    <div key={index} className="crew-member" ref={this.crewRefs[index]}>
                                        <figure className="image is-64x64 is-inline-block is-hidden-tablet">
                                            <Image src={"/crew/" + encodeURI(person.photo)} />
                                        </figure>
                                        <figure className="image is-128x128 is-inline-block is-hidden-desktop is-hidden-mobile">
                                            <Image src={"/crew/" + encodeURI(person.photo)} />
                                        </figure>
                                        <figure className="image is-144x144 is-inline-block is-hidden-touch">
                                            <Image src={"/crew/" + encodeURI(person.photo)} />
                                        </figure>
                                        <div className="crew-member-details is-inline-block-touch">
                                            <div className="block">
                                                <p className="title is-6 is-marginless">
                                                    <Localized en={person.name_en} uk={person.name_uk}/>
                                                </p>
                                                <p className="subtitle is-7 is-marginless has-font-caveat">
                                                    <Localized en={person.position_en} uk={person.position_uk}/>
                                                </p>
                                            </div>
                                            <div className="block is-hidden-mobile">
                                                <a href="javascript:" className="has-text-white is-size-7">
                                                    <Icon>
                                                        <i className="fab fa-facebook-f"/>
                                                    </Icon>
                                                </a>
                                                <a href="javascript:" className="has-text-white is-size-7">
                                                    <Icon>
                                                        <i className="fab fa-twitter"/>
                                                    </Icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}