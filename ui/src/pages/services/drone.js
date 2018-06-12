import React, { Fragment, Component } from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../../controls";

export default class Drone extends Component {
    render() {
        return (
            <Fragment>
                <div className="block content">
                    <h2 className="title is-2 has-text-primary">
                        <Translate id="services.drone.header"/>
                    </h2>
                    <p className="subtitle has-font-caveat is-4 is-spaced">
                        <Translate id="services.drone.subtitle"/>
                    </p>
                </div>
                <div className="block content">
                    <p className="is-size-6">Аерозйомка стрімко набуває популярності у світі відео продакшену.
                        Це не дивно, адже саме камера, дрон і досвідчений пілот зможуть відкрити нові можливості
                        та ракурси зйомок.</p>
                </div>
                <div className="block content">
                    <p className="title is-5">We Production знімає за допомогою найякіснішого, доступного в
                        Україні, обладнання – аєрозйомка квадокоптером або октокоптером.  Рівень нашого пілота
                        за DJI – 29, з дистанцією польотів  – понад 900 км, що дає можливість проводити зйомку
                        не лише на відкритій місцевості, а й між об’єктами (наприклад в лісі). </p>
                </div>
                <div className="block content">
                    <h5 className="title is-5">Аерозйомка найчастіше використовується для:</h5>
                    <ul className="is-size-6">
                        <li>Зйомки масштабних об’єктів, споруд, архітектурних елементів.</li>
                        <li>Зйомки ландшафтів, природи, тварин, птахів.</li>
                        <li>Зйомки об’єктів, що знаходяться в повітрі – аеропланів, повітряних куль, парашутистів, тощо.</li>
                        <li>Зйомки об’єктів, що швидко рухаються – автомобілів, мототранспорту.</li>
                    </ul>
                </div>
                <div className="block content">
                    <h4 className="title is-5">Вам потрібна аерозйомка, якщо ви хочете додати у ваше відео:</h4>
                    <ul className="is-size-6">
                        <li>Нові незвичні ракурси.</li>
                        <li>Крупні плани і плани проведення від загального до крупного і навпаки.</li>
                        <li>Зображення локації або об’єкта з висоти пташиного польоту.</li>
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