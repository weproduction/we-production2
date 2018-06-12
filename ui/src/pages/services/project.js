import React, { Fragment, Component } from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../../controls";

export default class Project extends Component {
    render() {
        return (
            <Fragment>
                <div className="block content">
                    <h2 className="title is-2 has-text-primary">
                        <Translate id="services.project.header"/>
                    </h2>
                    <p className="subtitle has-font-caveat is-4 is-spaced">
                        <Translate id="services.project.subtitle"/>
                    </p>
                </div>
                <div className="block content">
                    <h5 className="title is-5">У вас є ідея для відео, але ви не знаєте, як її втілити?
                        Вам потрібний якісний рекламний ролик, кліп, фільм, тощо? Ви не маєте часу
                        займатися ципи питаннями?We Production пропонує комплексне рішення для Вас!</h5>

                    <p className="is-size-6">Ми подбаємо про написання сценарію, підбір акторів, локацію для зйомки, процес
                        зйомки, монтаж, титрування, та усі супутні питання, що можуть виникати під час
                        створення відео.</p>
                </div>
                <div className="block content">
                    <h5 className="title is-5">Як це відбувається?</h5>
                    <ol className="is-size-6">
                        <li>Ми формуємо сценарій відповідно до вашої ідеї, або пропонуємо власну оригінальну ідею.</li>
                        <li>Узгоджуємо попередній кошторис.</li>
                        <li>Створюємо розкадровку до сценарію, підбираємо акторів.</li>
                        <li>Вибираємо локацію, вирішуємо питання логістики.</li>
                        <li>Проводимо зйомку (використовуємо все необхідне обладнання, відповідно до потреб сценарію та ваших побажань.</li>
                        <li>Монтуємо відео ролик, проводимо кольорокорекцію, титрування, створюємо анімацію (якщо є потреба).</li>
                        <li>Презентуємо попередній результат, вносимо правки (якщо є).</li>
                        <li>Віддаємо результат у потрібній вам якості та розширені.</li>
                    </ol>
                </div>
                <div className="block content">
                    <h4 className="title is-4">Переваги замовлення “проекту під ключ”</h4>
                    <ul className="is-size-6">
                        <li>Ви отримаєте детальний кошторис до початку зйомок.</li>
                        <li>Ви не витрачаєте власного часу на організацію процесу зйомок та пошуку акторів, візажистів, тощо.</li>
                        <li>Наша команда виконає проект швидше і якісніше, адже ми вже розуміємо одне одного без слів.</li>
                        <li>Ви отримуєте готовий продукт, а отже зможете одразу використати його.</li>
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
                            <i className="fa fa-arrow-left"></i>
                        </Icon>
                        <Translate id="buttons.back-to-home"/>
                    </ActiveLink>
                </div>
            </Fragment>
        )
    }
}