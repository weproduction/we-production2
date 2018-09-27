import React, { Fragment, Component } from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../../controls";

export default class Project extends Component {
    render() {
        return (
            <Fragment>
                <div className="block content">
                    <h2 className="title is-2 has-text-primary">
                        <Translate id="services.project.title"/>
                    </h2>
                    <p className="subtitle has-font-caveat is-4 is-spaced">
                        <Translate id="services.project.subtitle"/>
                    </p>
                </div>
                <div className="block content">
                  <h5 className="title is-5">
                    <Translate id="services.project.block1.title"/>
                  </h5>
                  <p className="is-size-6">
                    <Translate id="services.project.block1.content"/>
                  </p>
                </div>
                <div className="block content">
                  <h5 className="title is-5">
                    <Translate id="services.project.block2.title"/>
                  </h5>
                  <p className="is-size-6">
                    <Translate id="services.project.block2.content"/>
                  </p>
                </div>
                <div className="block content">
                  <h5 className="title is-5">
                    <Translate id="services.project.block3.title"/>
                  </h5>
                  <p className="is-size-6">
                    <Translate id="services.project.block3.content"/>
                  </p>
                </div>
                <div className="block content">
                  <p className="is-size-6">
                    <Translate id="services.project.block4"/></p>
                </div>
                <div className="block">
                    <ActiveLink to="/welcome" className="has-text-dark is-size-7">
                        <Icon>
                            <i className="fas fa-arrow-left"></i>
                        </Icon>
                        <Translate id="buttons.back-to-home"/>
                    </ActiveLink>
                </div>
            </Fragment>
        )
    }
}