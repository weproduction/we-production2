import React from 'react';

import {Vimeo} from "../controls";

import { connect } from "react-redux";

import * as RGA from "react-ga";

class Player extends React.Component {

    playerRef = React.createRef();

    close() {
        this.props.dispatch({
            type: 'VIDEO_STOP'
        });
    }

    reset() {
        setTimeout(() => {
            this.playerRef.current.player.unload();
        }, 200);
    }

    componentDidUpdate() {
        const { video, active, paused } = this.props.player;

        if (active && !paused) {
            const path = window.location.pathname + '?v=' + video;
            if (window.location.search.length > 1) {
                window.history.replaceState(null, document.title, path)
            } else {
                window.history.pushState(null, document.title, path)
            }

            RGA.pageview(window.location.pathname + window.location.search);

            RGA.event({
                category: 'Video:' + video,
                action: 'Play'
            });
        }
    }

    render() {
        const { video, active, paused } = this.props.player;

        if (active) {
            return (
                <div className="modal is-active">
                    <div className="modal-background"/>
                    <div className="modal-content">
                        <div style={{width: '90vw', height: '50.625vw', position: 'relative'}}>
                            <Vimeo
                                ref={this.playerRef}
                                style={{width:'100%', height:'100%'}}
                                video={video}
                                autoplay={true}
                                paused={paused}
                                onEnd={() => this.reset()}
                            />
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={() => this.close()}/>
                </div>
            )
        }

        return (
            <div className="modal is-hidden"/>
        )
    }
}

export default connect(Player,
    (state) => ({
        player: state.player
    })
);
