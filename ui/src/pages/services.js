import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../controls";

import PageWithMenu from '../layout/page-with-menu';

import Project from './services/project';
import Crew from './services/crew';
import Drone from './services/drone';
import Multicam from './services/multicam';

import './services/index.sass'
export default class Services extends React.Component {
    state = {
        services: ['project', 'crew', 'drone', 'multicam']
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { services } = this.state;
        const { params = {} } = this.props.match;
        const { service = services[0].id } = params;

        const menuComponents = services.map(to => (
            <li>
                <ActiveLink to={`/services/${to}`}
                            className={to === service ? 'is-active' : ''}>
                    <Translate id={`services.${to}.header`}/>
                </ActiveLink>
            </li>
        ));

        const pageComponent = {
            project: <Project/>,
            crew: <Crew/>,
            drone: <Drone/>,
            multicam: <Multicam/>
        }[service];

        return (
            <PageWithMenu menu={menuComponents} chapter={<Translate id="services.link"/>} className={`service-bg ${service}-bg`}>
                <div className="columns">
                    <div className="column is-three-quarters-desktop is-full-touch">
                        {pageComponent}
                    </div>
                </div>
            </PageWithMenu>
        )
    }
}