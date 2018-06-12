import React, { Component, Fragment } from 'react';

import { Route } from 'react-router-dom';

import Navigation from './layout/navigation';
import Footer from './layout/footer';

import Home from './pages/home';
import Videos from './pages/videos';
import Services from './pages/services';
import Player from "./pages/player";

import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";

import localeEN from './locale.en';
import localeUK from './locale.uk';

@withLocalize
class App extends Component {

    constructor(props) {
        super(props);

        const languages = [
            { name: "English", code: "en", short: 'Eng' },
            { name: "Українська", code: "uk", short: 'Укр' }
        ];

        const [ browserLanguage ] = (window.navigator.browserLanguage || window.navigator.language || 'en').split('-');
        console.log(browserLanguage);

        let defaultLanguage = browserLanguage;
        if (!languages.some(x => x.code === browserLanguage)) {
            defaultLanguage = languages[0].code;
        }

        this.props.initialize({
            languages,
            options: { renderToStaticMarkup, defaultLanguage }
        });

        this.props.addTranslationForLanguage(localeEN, "en");
        this.props.addTranslationForLanguage(localeUK, "uk");
    }

    render() {
        return (
            <Fragment>
                <Navigation fixed={true}/>
                <Route exact path="/" component={Home} />
                <Route path="/videos/:category?/:tag?" component={Videos} />
                <Route path="/services/:service?" component={Services} />
                <Footer/>
                <Player/>
            </Fragment>
        );
    }
}

export default App;
