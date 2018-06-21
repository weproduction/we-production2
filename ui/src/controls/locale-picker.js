import React, { Fragment } from "react";
import { withLocalize } from "react-localize-redux";
import { ActiveLink } from "./active-link";

export const LocalePicker = withLocalize(({ languages, activeLanguage }) => (
    <Fragment>
        {languages.map(lang => (
            <ActiveLink key={lang.code} exact
                        to={'/' + lang.code + window.location.pathname.substr(3)}
                        className={"navbar-item " + (lang.code === (activeLanguage && activeLanguage.code) ? 'is-active' : '')}
            >
                {lang.short}
            </ActiveLink>
        ))}
    </Fragment>
));