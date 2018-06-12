import React, {Fragment} from 'react';

import { Translate } from 'react-localize-redux';
import { Icon } from 'react-bulma-components';

import './video-preview.sass';

import { connect } from "react-redux";

@connect()
export class VideoPreview extends React.Component {
    play(video) {
        this.props.dispatch({
            type: 'VIDEO_PLAY',
            payload: video
        })
    }

    render() {
        const { className, preview, duration, video} = this.props;

        const sec = duration % 60;
        const min = Math.floor(duration / 60);

        return (
            <article className={className}>
                <Translate>
                    {({ activeLanguage }) => {
                        const lang = activeLanguage ? activeLanguage.code : 'en';
                        const tags = this.props[`tags_${lang}`];
                        const title = this.props[`title_${lang}`];
                        const description = this.props[`description_${lang}`];

                        return (
                            <Fragment>
                                <div className="block video-preview">
                                    <p className="video-category is-uppercase">{tags.join(' | ')}</p>
                                    <figure className="image is-19by9">
                                        <img src={preview['1080']}/>
                                    </figure>
                                    <div className="video-duration">
                                        {min}:{sec > 9 ? sec : `0${sec}`}
                                    </div>
                                    <a className="video-play" onClick={() => this.play(video)}>
                                        <Icon className="is-large">
                                            <i className="fas fa-3x fa-play"/>
                                        </Icon>
                                    </a>
                                </div>
                                <div className="block">
                                    <p className="title is-4 is-spaced">{title}</p>
                                    <p className="content is-size-7">{description}</p>
                                </div>
                            </Fragment>
                        )
                    }}
                </Translate>

            </article>
        )
    }
}