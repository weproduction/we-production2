import React, { Fragment, Component } from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../../controls";

export default class Multicam extends Component {
    render() {
        return (
            <Fragment>
                <div className="block content">
                    <h2 className="title is-2 has-text-primary">
                        <Translate id="services.multicam.header"/>
                    </h2>
                    <p className="subtitle has-font-caveat is-4 is-spaced">
                        <Translate id="services.multicam.subtitle"/>
                    </p>
                </div>
                <div className="block content">
                    <p className="is-size-6">Багатокамерна зйомка або пересувна телевізійна станція  ефективно
                        застосовується для відео зйомки концертів, презентацій, семінарів, навчальних фільмів,
                        корпоративних роликів і фільмів, ігрових телепрограм, спортивних змагань, корпоративних
                        заходів, конференцій, тощо.</p>
                </div>
                <div className="block content">
                    <p className="title is-5">Якщо вам необхідна трансляція вашої події у прямий ефір телебачення
                        або проведення інтернет трансляції події – багатокамерна відео зйомка з прямим монтажем –
                        незамінне рішення для вас.</p>
                </div>
                <div className="block content">
                    <p className="is-size-6">Багатокамерна зйомка дає можливість показати подію з різних точок і
                        ракурсів. Це особливо важливо для подій, котрі проходять в режимі реального часу, і немає
                        можливості дозняти «ще один дубль».  Тут в нагоді стануть додаткові камери і оператори.
                        Ми можемо забезпечити одночасну роботу від 4  до 16 камер.</p>
                </div>
                <div className="block content">
                    <p className="is-size-6">Команда We Production має багаторічний досвід проведення подібних
                        зйомок, тож ми працюємо дуже точно і злагоджено. </p>
                </div>
                <div className="block content">
                    <p className="is-size-6">Мінімальна команда для багатокамерної зйомки – 9 осіб (
                        оператор-постановник, режисер трансляції, головний інженер, інженер камер, відео оператори
                        (від 4х), звукорежисер), так ми можемо забезпечити якісну картинку і звук, а також монтаж
                        в реальному часі. </p>
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