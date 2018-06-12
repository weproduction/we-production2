import React, { Component, Fragment } from 'react';

import Showreel from './home/showreel';
import AboutUs from './home/about-us';
import Services from './home/services';
import Production from './home/production';
import Crew from './home/crew';
import Clients from './home/clients';
import Contacts from './home/contacts';
import Feedback from './home/feedback';

import { connect } from "react-redux";

@connect(
    (state, ownProps = {}) => {
        return {
            videos: state.videos,
            feedback: state.feedback
        }
    }
)
export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const {videos, feedback} = this.props;
        const featured = videos.filter(video => ~video.categories.indexOf('featured'));
        const showreel = featured.shift();
        const blog = featured.slice(0, 2);
        return (
            <Fragment>
                <Showreel {...showreel}/>
                <AboutUs blog={blog}/>
                <Services/>
                <Production/>
                <Crew/>
                <Feedback feedback={feedback}/>
                <Clients/>
                <Contacts />
            </Fragment>
        )
    }
}