import React, { Fragment, Component } from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../../controls";

export default class Crew extends Component {
    render() {
        return (
            <Fragment>
                <div className="block content">
                    <h2 className="title is-2 has-text-primary">
                        <Translate id="services.crew.header"/>
                    </h2>
                    <p className="subtitle has-font-caveat is-4 is-spaced">
                        <Translate id="services.crew.subtitle"/>
                    </p>
                </div>
                <div className="block content">
                    <p className="is-size-6">Вашому проекту бракує злагодженої знімальної команди?
                        Потрібні люди котрі вміють працювати як з бюджетним, так і з професійним
                        обладнанням? We Production пропонує полуши знімальної групи для Вас (фокуспулер,
                        інженер камери, оператор-постановних).</p>
                </div>
                <div className="block content">
                    <h5 className="title is-5">Ми подбаємо про забезпечення процесу зйомки на ваших
                        проектах: репортажі, телезйомка, зйомка кліпів, зйомка фільмів.</h5>
                </div>
                <div className="block content">
                    <h5 className="title is-5">Переваги замовлення знімальної групи We production</h5>
                    <ul className="is-size-6">
                        <li>Наші спеціалісти вміють працювати швидко і злагоджено</li>
                        <li>Ви не витрачаєте власного часу на організацію процесу зйомок та підбір команди</li>
                        <li>Ми вміємо працювати з обладнанням різного класу та якості</li>
                        <li>Ви можете додатково замовити монтаж та кольорокорекцію відзнятого матеріалу</li>
                    </ul>
                </div>
                <div className="block content">
                    <p className="is-size-7">
                        * Вартість проекту формується індивідуально, відповідно до потреб для виконання ідеї.</p>
                    <p className="title is-6">
                        За детальною інформацією звертайтесь - 093</p>
                </div>
                <div className="block">
                    <ActiveLink to="/" className="has-text-dark is-size-7">
                        <Icon>
                            <i className="fas fa-arrow-left"></i>
                        </Icon>
                        <Translate id="buttons.back-to-home"/>
                    </ActiveLink>
                </div>
            </Fragment>
        )
    }
}