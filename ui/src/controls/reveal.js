import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import reveal from 'scrollreveal';

const sr = reveal();

const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

export class Reveal extends React.Component {

    static propTypes = {
        refs: PropTypes.array.isRequired,
        config: PropTypes.object.isRequired,
        delay: PropTypes.number
    };

    componentDidMount() {
        if (!isBot) {
            const nodes = this.props.refs.map(x => x.current);
            sr.reveal(nodes, {...this.props.config, mobile: false}, this.props.delay);
        }
    }

    render() {
        console.log(this.props.children);

        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }

}