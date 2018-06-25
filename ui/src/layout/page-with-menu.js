import React from 'react';

import './page-with-menu.css'

export default class PageWithMenu extends React.Component {

    menuRef = React.createRef();

    render() {
        const { menu, children, className, chapter } = this.props;

        return (
            <section>
                <div className={"columns is-multiline is-fullheight " + className}>
                    <div className="column is-narrow-desktop is-full-touch is-sidebar-menu fixed-menu-container">
                        <div className="fixed-menu is-fixed-top-desktop" ref={this.menuRef}>
                            <h1 className="title is-1 is-spaced">{chapter}</h1>
                            <aside className="menu">
                                <ul className="menu-list">
                                    {menu}
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="column">
                        <div className="page-container">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}