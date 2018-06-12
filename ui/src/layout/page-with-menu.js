import React from 'react';

export default class PageWithMenu extends React.Component {
    render() {
        const { menu, children, className, chapter } = this.props;

        return (
            <section>
                <div className={"columns is-multiline is-fullheight " + className}>
                    <div className="column is-narrow-desktop is-full-touch is-sidebar-menu" style={{backgroundColor: 'white'}}>
                        <div className="desktop-360" style={{padding: '6rem 2rem 2rem'}}>
                            <h1 className="title is-1 is-spaced">{chapter}</h1>
                            <aside className="menu">
                                <ul className="menu-list">
                                    {menu}
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="column">
                        <div style={{padding: '12rem 6rem 6rem'}}>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}