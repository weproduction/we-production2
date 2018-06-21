import React from 'react';

import { Translate } from 'react-localize-redux';

export default class PageNotFound extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="section">
                <div className="container has-text-centered" style={{padding: "20vh 30vw"}}>
                    <h1 className="title is-1" style={{fontSize: '10rem'}}>404</h1>
                    <h2 className="subtitle is-3 has-font-caveat has-text-primary">
                        <Translate id="page-not-found"/>
                    </h2>
                </div>
            </section>
        )
    }
}