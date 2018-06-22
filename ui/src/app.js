import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import * as RGA from 'react-ga';

import Navigation from './layout/navigation';
import Footer from './layout/footer';

import Home from './pages/home';
import Videos from './pages/videos';
import Services from './pages/services';
import Player from "./pages/player";
import Contacts from "./pages/contacts";
import PageNotFound from "./pages/page-not-found";

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

        this.defaultLanguage = defaultLanguage;
        
        this.props.initialize({
            languages,
            options: { renderToStaticMarkup, defaultLanguage }
        });

        this.props.addTranslationForLanguage(localeEN, "en");
        this.props.addTranslationForLanguage(localeUK, "uk");

        const [, current] = window.location.search.match(/v=(\d+)/) || [];
        if (current) {
            this.props.dispatch({
                type: 'VIDEO_PLAY',
                payload: current
            })
        }
    }

    render() {
        return (
            <ContactsProvider>
                <CrewProvider>
                    <ClientsProvider>
                        <FeedbackProvider>
                            <Navigation fixed={window.location.pathname.endsWith('/welcome')}/>
                            <Route path="/" component={() => {
                                RGA.pageview(window.location.pathname + window.location.search);
                                return null;
                            }}/>
                            <Route exact path="/" render={() => <Redirect to={`/${this.defaultLanguage}/welcome`}/>}/>
                            <Route path="/:locale" component={({match : { params: { locale } }}) => (
                                <Translate>
                                    {({setActiveLanguage}) => {
                                        setActiveLanguage(locale);
                                    }}
                                </Translate>
                            )}/>
                            <Switch>
                                <Route path="/:locale/welcome" component={Home} />
                                <Route path="/:locale/videos/:category?/:tag?" component={Videos} />
                                <Route path="/:locale/services/:service?" component={Services} />
                                <Route path="/:locale/contact" component={Contacts} />
                                <Route component={PageNotFound}/>
                            </Switch>
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
