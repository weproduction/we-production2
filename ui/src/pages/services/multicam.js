import React, { Fragment, Component } from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../../controls";

export default class Multicam extends Component {
    render() {
        return (
            <Fragment>
                <div className="block content">
                    <h2 className="title is-2 has-text-primary">
                        <Translate id="services.multicam.title"/>
                    </h2>
                    <p className="subtitle has-font-caveat is-4 is-spaced">
                        <Translate id="services.multicam.subtitle"/>
                    </p>
                </div>
              <div className="block content">
                <h5 className="title is-5">
                  <Translate id="services.multicam.block1.title"/>
                </h5>
                <p className="is-size-6">
                  <Translate id="services.multicam.block1.content"/>
                </p>
              </div>
                <div className="block content">
                  <h5 className="title is-5">
                    <Translate id="services.multicam.block2.title"/>
                  </h5>
                  <p className="is-size-6">
                    <Translate id="services.multicam.block2.content"/>
                  </p>
                </div>
                <div className="block content">
                  <h5 className="title is-5">
                    <Translate id="services.multicam.block3.title"/>
                  </h5>
                  <p className="is-size-6">
                    <Translate id="services.multicam.block3.content"/>
                  </p>
                </div>
                <div className="block content">
                  <p className="is-size-6">
                    <Translate id="services.multicam.block4"/></p>
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