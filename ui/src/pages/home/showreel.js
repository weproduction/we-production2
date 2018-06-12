import React from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { Vimeo } from '../../controls';

import './showreel.sass';

export default class Showreel extends React.Component {
    render() {
        const { video } = this.props;

        return (

            <section className="hero showreel">
                <Vimeo
                    className="showreel-body"
                    video={video}
                    autoplay={false}
                    muted
                    loop
                    background
                />
                <a href="javascript:" className="showreel-play has-text-light">
                    <p className="content">
                        <Icon className="is-large">
                            <i className="fas fa-3x fa-play"></i>
                        </Icon>
                    </p>
                    <p className="is-size-4">
                        <Translate id="buttons.play-showreel"/>
                    </p>
                </a>
            </section>
        )
    }
}