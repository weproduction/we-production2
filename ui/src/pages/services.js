import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../controls";

import PageWithMenu from '../layout/page-with-menu';

import Project from './services/project';
import Crew from './services/crew';
import Drone from './services/drone';
import Multicam from './services/multicam';

import './services/index.sass'

import { connect } from "react-redux";

const pages = [{
    title: 'Проект "під ключ"',
    link: 'project',
    bg: 'projects-bg',
    component: () => (<Project/>)
},{
    title: 'Знімальна група',
    link: 'crew',
    bg: 'crew-bg',
    component: () => (<Crew/>)
},{
    title: 'Аерозйомка',
    link: 'drone',
    bg: 'drone-bg',
    component: () => (<Drone/>)
},{
    title: 'Багатокамерна зйомка ',
    link: 'multicam',
    bg: 'multicam-bg',
    component: () => (<Multicam/>)
}];

@connect(
    (state, ownProps = {}) => {
        return {
            services: state.services
        }
    }
)
export default class Services extends React.Component {
    render() {
        const { services } = this.props;
        const { params = {} } = this.props.match;
        const { service = services[0].id } = params;

        const menuComponents = services.map(to => (
            <li>
                <ActiveLink to={`/services/${to.id}`}
                            className={to.id === service ? 'is-active' : ''}>
                    <Translate id={`services.${to.id}.header`}/>
                </ActiveLink>
            </li>
        ));

        const page = services.find(x => x.id === service);

        const pageComponent = {
            project: <Project/>,
            crew: <Crew/>,
            drone: <Drone/>,
            multicam: <Multicam/>
        }[service];

        return (
            <PageWithMenu menu={menuComponents} chapter={<Translate id="services.link"/>} className={page.bg}>
                <div className="columns">
                    <div className="column is-three-quarters-desktop is-full-touch">
                        {pageComponent}
                    </div>
                </div>
            </PageWithMenu>
        )
    }
}