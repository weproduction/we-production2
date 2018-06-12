import React from 'react';

import Image from 'react-retina-image';
import { Translate } from "react-localize-redux";

import { VideoPreview, ActiveLink } from "../../controls";

import reveal from 'scrollreveal';

const sr = reveal();

export default class AboutUs extends React.Component {

    componentDidMount() {
        const nodes = this.categoryRefs.map(x => x.current);
        sr.reveal(nodes, { duration: 1000, mobile: false }, 50);
    }

    render() {
        const { categories, blog } = this.props;
        this.categoryRefs = categories.map(() => React.createRef());

        const blogComponents = blog.map(model => (
            <VideoPreview key={model.preview} className="tile is-child" {...model}/>
        ));

        const categoriesComponents = categories.map((category, index) => (
            <div key={category.id} ref={this.categoryRefs[index]} className="column is-half-mobile is-one-third-tablet has-text-centered" style={{padding: '3rem 1rem'}}>
                <ActiveLink to={`/videos/${category.id}`} className="block has-text-dark home-video-category-reveal">
                    <figure className="image is-48x48 is-inline-block">
                        <Image src={`/categories/${encodeURI(category.icon)}`}/>
                    </figure>
                    <p className="title is-4">
                        <Translate id={`video.categories.${category.id}`}/>
                    </p>
                </ActiveLink>
            </div>
        ));

        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-variable is-8">
                        <div className="column">
                            <div className="block">
                                <h2 className="title is-1 is-spaced">
                                    <Translate id="headers.we-production"/>
                                </h2>
                                <p className="content is-size-6">
                                    <Translate id="home.about-us"/>
                                </p>
                            </div>
                            <div className="block">
                                <div className="columns is-variable is-0 is-multiline is-fullwidth">
                                    {categoriesComponents}
                                </div>
                            </div>
                        </div>
                        <div className="column is-narrow is-hidden-touch">
                            <div className="desktop-410">
                                <div className="tile is-ancestor">
                                    <div className="tile is-parent is-vertical">
                                        {blogComponents}
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