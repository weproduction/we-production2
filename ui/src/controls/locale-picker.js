import React, { Fragment } from "react";
import { withLocalize } from "react-localize-redux";

export const LocalePicker = withLocalize(({ languages, activeLanguage, setActiveLanguage }) => (
    <Fragment>
        {languages.map(lang => (
            <a key={lang.code}
               href="javascript:"
               onClick={() => setActiveLanguage(lang.code)}
               className={"navbar-item " + (lang.code === (activeLanguage && activeLanguage.code) ? 'is-active' : '')}>{lang.short}</a>
        ))}
    </Fragment>
));