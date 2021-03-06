import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink, VideoPreview } from "../controls";

import PageWithMenu from '../layout/page-with-menu';

import { connect } from "react-redux";

import latinize from '../lib/latinize';

function buildTagList(videos, fn) {
    return videos
        .map(x => fn(x))
        .reduce((tags, x) => ([].concat(tags, x)), [])
        .reduce((tags, x) => (tags.indexOf(x) < 0 ? [].concat(tags, [x]) : tags), [])
        .filter(x => x != null);
}

class Videos extends React.Component {

    state = {
        categories: ['promotion', 'corporate', 'social', 'sport', 'music', 'concerts']
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { categories } = this.state;
        const { videos } = this.props;
        const { params = {} } = this.props.match;
        const { category = categories[0], tag = ''} = params;

        const active_category = categories.find(x => x === category);

        const category_videos = videos.filter(video => ~video.categories.indexOf(category));

        const visible_videos = category_videos.filter(video => tag === '' || ~video.tags.indexOf(tag));

        const tags_en = buildTagList(category_videos, video => video.tags_en);
        const tags_uk = buildTagList(category_videos, video => video.tags_uk);

        return (
            <PageWithMenu menu={categories.map(to => (
                <li key={to}>
                    <ActiveLink to={`/videos/${to}`}
                                className={to === category ? 'is-active' : ''}
                                onNavigate={() => window.scrollTo(0,0)}
                    >
                        <Translate id={`video.categories.${to}`}/>
                    </ActiveLink>
                </li>
            ))} chapter={<Translate id="video.link"/>}>
                <div className="block">
                    <h2 className="title is-3 is-hidden-touch has-text-primary">
                        <Translate id={`video.categories.${active_category}`}/>
                    </h2>
                    <div className="tabs is-small">
                        <ul>
                            <li className={tag === '' ? 'is-active' : ''}>
                                <ActiveLink to={`/videos/${category}`}>
                                    <Translate id="buttons.all"/>
                                </ActiveLink>
                            </li>
                            <Translate>
                                {({activeLanguage}) => {
                                    const lang = activeLanguage ? activeLanguage.code : 'en';
                                    const tags = lang === 'uk' ? tags_uk : tags_en;

                                    return tags.map((to, index) => (
                                        <li className={latinize(to) === tag ? 'is-active' : ''} key={index}>
                                            <ActiveLink to={`/videos/${category}/${latinize(to)}`}>{to}</ActiveLink>
                                        </li>
                                    ))
                                }}
                            </Translate>
                        </ul>
                    </div>
                </div>
                <div className="block">
                    <div className="columns is-variable is-8 is-multiline">
                        {visible_videos.map((video, index) => (
                            <div key={index} className="column is-full-mobile is-half-tablet is-one-third-fullhd">
                                <VideoPreview {...video}/>
                            </div>
                        ))}
                    </div>
                </div>
            </PageWithMenu>
        )
    }
}

export default connect(
    (state) => ({
        videos: state.videos
    })
)(Videos);
