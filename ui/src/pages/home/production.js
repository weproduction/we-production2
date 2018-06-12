import React from 'react';

import { Translate } from 'react-localize-redux';

import reveal from "scrollreveal";

import './production.sass';

const sr = reveal();

const steps = [
    'Ідея та сценарій',
    'Підбір акторів',
    'Локація',
    'Зйомка, монтаж',
    'Пост продакшн',
    'Результат'
];

export default class Production extends React.Component {
    constructor() {
        super();

        this.stepRefs = steps.map(() => React.createRef());
    }

    componentDidMount() {
        const nodes = this.stepRefs.map(x => x.current);
        sr.reveal(nodes, {duration: 400, distance: null, mobile: false}, 200);
    }

    render() {
        const stepComponents = steps.map((step, index) => (
            <div key={index} className={'production-path-step production-path-step' + (index + 1)}>
                <div className="production-path-step-wrapper" ref={this.stepRefs[index]}>
                    <b>{index + 1}</b>
                    <span>
                        <Translate id={`home.production.steps.${index + 1}`}/>
                    </span>
                </div>
            </div>
        ));

        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-variable is-8 is-multiline">
                        <div className="column is-narrow-desktop is-full-touch">
                            <div className="desktop-410">
                                <h2 className="title is-1 is-spaced">
                                    <Translate id="home.production.header"/>
                                </h2>
                                <p className="subtitle is-4 is-spaced has-font-caveat has-text-primary">
                                    <Translate id="home.production.subtitle"/>
                                </p>
                                <p className="content is-size-6">
                                    <Translate id="home.production.details"/>
                                </p>
                            </div>
                        </div>
                        <div className="column is-full-touch">
                            <div className="production-path">
                                {stepComponents}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}