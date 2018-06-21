import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'react-bulma-components';

import './video-preview.sass';

import { connect } from 'react-redux';

import { Localized } from './localized';

@connect()
export class VideoPreview extends React.Component {

    static propTypes = {
        video: PropTypes.any.isRequired
    };

    play() {
        this.props.dispatch({
            type: 'VIDEO_PLAY',
            payload: this.props.video
        })
    }

    render() {
        const { className, preview, duration, video } = this.props;
        const { title_en, title_uk } = this.props;
        const { description_en, description_uk } = this.props;
        const { tags_en, tags_uk } = this.props;

        const sec = duration % 60;
        const min = Math.floor(duration / 60);

        return (
            <article className={className}>
                <div className="block video-preview">
                    <p className="video-category is-uppercase">
                        <Localized en={tags_en.join(' | ')} uk={tags_uk.join(' | ')}/>
                    </p>
                    <figure className="image is-19by9">
                        <img src={preview['1080']} alt=""/>
                    </figure>
                    <div className="video-duration">
                        {min}:{sec > 9 ? sec : `0${sec}`}
                    </div>
                    <a className="video-play" onClick={() => this.play()}>
                        <Icon className="is-large">
                            <i className="fas fa-3x fa-play"/>
                        </Icon>
                    </a>
                </div>
                <div className="block">
                    <p className="title is-4 is-spaced">
                        <Localized en={title_en} uk={title_uk}/>
                    </p>
                    <p className="content is-size-7">
                        <Localized en={description_en} uk={description_uk}/>
                    </p>
                </div>
            </article>
        )
    }
}