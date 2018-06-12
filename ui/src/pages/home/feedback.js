import React from 'react';

import { Translate } from 'react-localize-redux';
import Image from 'react-retina-image';

import './feedback.sass';
import {withFeedback} from "../../context";

@withFeedback
export default class Feedback extends React.Component {
    render() {
        const { feedback } = this.props;

        const active = feedback[Math.floor(feedback.length * Math.random())];

        return (
            <section className="section">
                <div className="container">
                    <div className="block">
                        <h2 className="title is-1 is-spaced">
                            <Translate id="home.feedback"/>
                        </h2>
                    </div>
                    <div className="block">
                    <article className="media">
                        <figure className="media-left">
                            <p className="image is-64x64 is-hidden-tablet">
                                <Image src={`/clients/${active.face}`}/>
                            </p>
                            <p className="image is-128x128 is-hidden-mobile is-hidden-desktop">
                                <Image src={`/clients/${active.face}`}/>
                            </p>
                            <p className="image is-144x144 is-hidden-touch">
                                <Image src={`/clients/${active.face}`}/>
                            </p>
                        </figure>
                        <div className="media-content feedback-content">
                            <Translate>
                                    {({ activeLanguage }) => {
                                        const lang = activeLanguage ? activeLanguage.code : 'en';
                                        const name = active[`name_${lang}`];
                                        const position = active[`title_${lang}`];

                                        return (
                                            <div className="content">
                                                <h3 className="title is-4">
                                                    {name}
                                                </h3>
                                                <h4 className="subtitle is-5 has-text-caveat">
                                                    {position}
                                                </h4>
                                                <cite>
                                                    <i className="fas fa-quote-left fa-xs fa-pull-left has-text-primary"></i>
                                                    <br/>
                                                    {active.message}
                                                    <br/>
                                                    <i className="fas fa-quote-right fa-xs fa-pull-right has-text-primary"></i>
                                                </cite>
                                            </div>
                                        );
                                    }}
                                </Translate>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}