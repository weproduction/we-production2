import React, { Component, Fragment } from 'react';

import { Route } from 'react-router-dom';

import Navigation from './layout/navigation';
import Footer from './layout/footer';

import Home from './pages/home';
import Videos from './pages/videos';
import Services from './pages/services';
import Player from "./pages/player";
import Contacts from "./pages/contacts";

import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";

import localeEN from './data/locale.en';
import localeUK from './data/locale.uk';

import { ContactsProvider, CrewProvider, ClientsProvider, FeedbackProvider } from "./context";

@withLocalize
class App extends Component {

    constructor(props) {
        super(props);

        const languages = [
            { name: "English", code: "en", short: 'Eng' },
            { name: "Українська", code: "uk", short: 'Укр' }
        ];

        const [ browserLanguage ] = (window.navigator.language || window.localStorage.getItem('locale') || 'en').split('-');

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
            <ContactsProvider>
                <CrewProvider>
                    <ClientsProvider>
                        <FeedbackProvider>
                            <Navigation fixed={window.location.pathname === '/'}/>
                            <Route exact path="/" component={Home} />
                            <Route path="/videos/:category?/:tag?" component={Videos} />
                            <Route path="/services/:service?" component={Services} />
                            <Route path="/contact" component={Contacts} />
                            <Footer/>
                            <Player/>
                        </FeedbackProvider>
                    </ClientsProvider>
                </CrewProvider>
            </ContactsProvider>
        );
    }
}

export default App;
