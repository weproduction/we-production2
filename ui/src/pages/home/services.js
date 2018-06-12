import React from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink} from "../../controls";

import './services.sass';

export default class Services extends React.Component {

    constructor(){
        super();

        this.coverRef = React.createRef();

        this.scrollHandler = () => {
            const scrollTop = document.documentElement.scrollTop
                || document.body.parentNode.scrollTop
                || document.body.scrollTop;

            const viewportHeight = window.innerHeight;

            const { top: coverTop, height } = this.coverRef.current.getBoundingClientRect();

            const scrollStart = coverTop + viewportHeight / 2;
            const scrollEnd = coverTop + height + viewportHeight / 2;
            const percent = (scrollTop - scrollStart) / (scrollEnd - scrollStart);
            const bgPos = Math.round(50 + 80 * Math.max(0, Math.min(1, percent)));

            this.coverRef.current.style.backgroundPosition = `50% ${bgPos}%`;
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
        const { services } = this.props;

        const servicesComponents = services.map(service => (
            <div className={"column is-one-quarter-desktop is-full-touch " + service.id} key={service.id}>
                <div className="services-column">
                    <div className="services-content">
                        <p className="title is-4 is-size-3-touch">
                            <Translate id={`services.${service.id}.header`}/>
                        </p>
                        <ActiveLink to={`/services/${service.id}`} className="button is-primary is-outlined is-rounded">
                            <Translate id="buttons.details"/>
                            &nbsp;
                            <Icon>
                                <i className="fas fa-arrow-right"></i>
                            </Icon>
                        </ActiveLink>
                    </div>
                </div>
            </div>
        ));

        return (
            <section className="hero services">
                <div className="services-header">
                    <h2 className="title is-1">
                        <Translate id="home.services"/>
                    </h2>
                </div>
                <div ref={this.coverRef} className="services-cover"></div>
                <nav className="columns is-gapless is-multiline">
                    {servicesComponents}
                </nav>
            </section>
        )
    }
}