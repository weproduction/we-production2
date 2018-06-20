import React from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink} from "../../controls";

import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import './services.sass';

export default class Services extends React.Component {

    state = {
        services: ['project', 'crew', 'drone', 'multicam']
    };

    coverRef = React.createRef();

    componentDidMount() {
        this.scroll$ = fromEvent(window, 'scroll')
            .pipe(debounceTime(10), map(() => {
                const viewportHeight = window.innerHeight;
                const { top, height } = this.coverRef.current.getBoundingClientRect();
                const percent = (viewportHeight - top) / (viewportHeight + height);
                const bgPos = Math.round(-250 + 250 * Math.max(0, Math.min(1, percent)))/10;

                this.coverRef.current.style.backgroundPosition = `50% ${bgPos}vh`;
            }))
            .subscribe();

        console.log(this.scroll$);
    }

    componentWillUnmount() {
        this.scroll$.unsubscribe();
    }

    render() {
        const { services } = this.state;

        return (
            <section className="hero services">
                <div className="services-header">
                    <h2 className="title is-1">
                        <Translate id="home.services"/>
                    </h2>
                </div>
                <div ref={this.coverRef} className="services-cover"></div>
                <nav className="columns is-gapless is-multiline">
                    {services.map(service => (
                        <ActiveLink
                            to={`/services/${service}`}
                            className={"column is-one-quarter-desktop is-full-touch " + service}
                            key={service}
                        >
                            <div className="services-column">
                                <div className="services-content">
                                    <p className="title is-4 is-size-3-touch">
                                        <Translate id={`services.${service}.header`}/>
                                    </p>
                                    <div className="button is-primary is-outlined is-rounded">
                                        <Translate id="buttons.details"/>
                                        &nbsp;
                                        <Icon>
                                            <i className="fas fa-arrow-right"></i>
                                        </Icon>
                                    </div>
                                </div>
                            </div>
                        </ActiveLink>
                    ))}
                </nav>
            </section>
        )
    }
}