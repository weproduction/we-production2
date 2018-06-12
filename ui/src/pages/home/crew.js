import React from 'react';
import Image from 'react-retina-image';
import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import reveal from "scrollreveal";

import './crew.sass';

const sr = reveal();

export default class Crew extends React.Component {
    componentDidMount() {
        const nodes = this.crewRefs.map(x => x.current);
        sr.reveal(nodes, {duration: 500, rotate: {x: 20, y:10, z:0}, origin: 'right', mobile: false}, 50);
    }

    render() {
        const { crew } = this.props;
        this.crewRefs = crew.map(() => React.createRef());

        const crewComponents = crew.map((person, index) => (
            <div key={index} className="crew-member" ref={this.crewRefs[index]}>
                <figure className="image is-128x128 is-inline-block">
                    <Image src={"/crew/" + encodeURI(person.photo)} />
                </figure>
                <div className="crew-member-details has-text-centered">
                    <Translate>
                        {({ translate, activeLanguage}) => {
                            const lang = activeLanguage ? activeLanguage.code : 'en';
                            const name = person[`name_${lang}`];
                            const position = person[`position_${lang}`];

                            return (
                                <div className="block">
                                    <p className="title is-6 is-marginless">{name}</p>
                                    <p className="subtitle is-7 is-marginless has-font-caveat">{position}</p>
                                </div>
                            )
                        }}
                    </Translate>
                    <div className="block">
                        <a href="javascript:" className="has-text-white is-size-7">
                            <Icon>
                                <i className="fab fa-facebook-f"></i>
                            </Icon>
                        </a>
                        <a href="javascript:" className="has-text-white is-size-7">
                            <Icon>
                                <i className="fab fa-twitter"></i>
                            </Icon>
                        </a>
                    </div>
                </div>
            </div>
        ));

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
                                {crewComponents}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}