import React from 'react';

import { Translate } from 'react-localize-redux';
import Image from 'react-retina-image';
import { Localized } from '../../controls';

import './feedback.css';
import {withFeedback} from "../../context";

class Feedback extends React.Component {
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
                                <div className="content">
                                    <h3 className="title is-4">
                                        <Localized en={active.name_en} uk={active.name_uk}/>
                                    </h3>
                                    <h4 className="subtitle is-5 has-text-caveat">
                                        <Localized en={active.position_en} uk={active.position_uk}/>
                                    </h4>
                                    <cite>
                                        <i className="fas fa-quote-left fa-xs fa-pull-left has-text-primary"/>
                                        <br/>
                                        {active.message}
                                        <br/>
                                        <i className="fas fa-quote-right fa-xs fa-pull-right has-text-primary"/>
                                    </cite>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

export default withFeedback(Feedback);
