import React, { Component, Fragment } from 'react';

import Showreel from './home/showreel';
import AboutUs from './home/about-us';
import Services from './home/services';
import Production from './home/production';
import Crew from './home/crew';
import Clients from './home/clients';
import Contacts from './home/contacts';

import { connect } from "react-redux";

@connect(
    (state, ownProps = {}) => {
        return {
            showreel: state.showreel,
            categories: state.categories,
            blog: state.blog,
            services: state.services,
            crew: state.crew,
            clients: state.clients,
            contacts: state.contacts
        }
    }
)
export default class Home extends Component {
    render() {
        const {showreel, categories, blog, services, crew, clients, contacts} = this.props;
        return (
            <Fragment>
                <Showreel {...showreel}/>
                <AboutUs categories={categories} blog={blog}/>
                <Services services={services}/>
                <Production/>
                <Crew crew={crew}/>
                <section className="section">
                    <div className="container">
                        <h2 className="title is-1 is-spaced">Відгуки</h2>
                        <div className="block" style={{height: '20rem'}}></div>
                    </div>
                </section>
                <Clients {...clients}/>
                <Contacts {...contacts}/>
            </Fragment>
        )
    }
}