import React, {Fragment} from 'react';

import { Translate } from 'react-localize-redux';

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
        const {
            className, preview,
            time, video} = this.props;

        return (
            <article className={className} onClick={() => this.play(video)}>
                <Translate>
                    {({ translate, activeLanguage }) => {
                        const lang = activeLanguage ? activeLanguage.code : 'en';
                        const tags = this.props[`tags_${lang}`];
                        const title = this.props[`title_${lang}`];
                        const description = this.props[`description_${lang}`];

                        return (
                            <Fragment>
                                <div className="block">
                                    <p className="video-category is-uppercase">{tags.join(' | ')}</p>
                                    <figure className="image is-19by9">
                                        <img src={preview}/>
                                    </figure>
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