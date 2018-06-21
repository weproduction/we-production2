import React from 'react';

import Image from 'react-retina-image';
import { Translate } from "react-localize-redux";

import { VideoPreview, ActiveLink, Reveal } from "../../controls";

export default class AboutUs extends React.Component {

    state = {
        categories: ['promotion', 'corporate', 'social', 'sport', 'music', 'concerts']
    };

    render() {
        const { categories } = this.state;
        const { blog } = this.props;
        this.categoryRefs = categories.map(() => React.createRef());

        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-variable is-8">
                        <div className="column">
                            <div className="block">
                                <h2 className="title is-1 is-spaced">
                                    <Translate id="title"/>
                                </h2>
                                <p className="content is-size-6">
                                    <Translate id="home.about-us"/>
                                </p>
                            </div>
                            <div className="block">
                                <div className="columns is-variable is-0 is-multiline is-fullwidth is-mobile">
                                    <Reveal refs={this.categoryRefs} config={{ duration: 1000 }} delay={50}>
                                        {categories.map((category, index) => (
                                            <div key={category} ref={this.categoryRefs[index]} className="column is-half-mobile is-one-third-tablet has-text-centered" style={{padding: '3rem 1rem'}}>
                                                <ActiveLink to={`/videos/${category}`} className="block has-text-dark home-video-category-reveal">
                                                    <figure className="image is-48x48 is-inline-block">
                                                        <Image src={`/categories/video-${encodeURI(category)}.png`}/>
                                                    </figure>
                                                    <p className="title is-4">
                                                        <Translate id={`video.categories.${category}`}/>
                                                    </p>
                                                </ActiveLink>
                                            </div>
                                        ))}
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div className="column is-narrow is-hidden-touch">
                            <div className="desktop-410">
                                <div className="tile is-ancestor">
                                    <div className="tile is-parent is-vertical">
                                        {blog.map(model => (
                                            <VideoPreview key={model.video} className="tile is-child" {...model}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}