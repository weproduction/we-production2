import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink, VideoPreview } from "../controls";

import PageWithMenu from '../layout/page-with-menu';

import { connect } from "react-redux";

@connect(
    (state, ownProps = {}) => {
        return {
            videos: state.videos,
            categories: state.categories
        }
    }
)
export default class Videos extends React.Component {
    render() {
        const { categories, videos } = this.props;
        const { params = {} } = this.props.match;
        const { category = categories[0].id, tag = ''} = params;

        const videosComponents = videos.map((video, index) => (
            <div key={index} className="column is-full-mobile is-half-tablet is-one-third-fullhd">
                <VideoPreview {...video}/>
            </div>
        ));

        const menuComponents = categories.map(to => (
            <li key={to.id}>
                <ActiveLink to={`/videos/${to.id}`}
                            className={to.id === category ? 'is-active' : ''}>
                    <Translate id={`video.categories.${to.id}`}/>
                </ActiveLink>
            </li>
        ));

        const active_category = categories.find(x => x.id === category);

        return (
            <PageWithMenu menu={menuComponents} chapter={<Translate id="video.link"/>}>
                <div className="block">
                    <h2 className="title is-3 is-hidden-touch has-text-primary">
                        <Translate id={`video.categories.${active_category.id}`}/>
                    </h2>
                    <div className="tabs is-small">
                        <ul>
                            <li className={tag === '' ? 'is-active' : ''}>
                                <ActiveLink to={`/videos/${category}`}>
                                    <Translate id="buttons.all"/>
                                </ActiveLink>
                            </li>
                            {active_category.tags.map((to, index) => (
                                <li className={to.tag === tag ? 'is-active' : ''} key={index}>
                                    <ActiveLink to={`/videos/${category}/${to.tag}`}>{to.title}</ActiveLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="block">
                    <div className="columns is-variable is-8 is-multiline">
                        {videosComponents}
                    </div>
                </div>
            </PageWithMenu>
        )
    }
}