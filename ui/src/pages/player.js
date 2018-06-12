import React from 'react';

import {Vimeo} from "../controls";

import { connect } from "react-redux";

@connect(
    (state, ownProps = {}) => {
        return {
            player: state.player
        }
    }
)
export default class Player extends React.Component {
    constructor() {
        super();

        this.playerRef = React.createRef();
    }

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

    render() {
        const { video, active, paused } = this.props.player;

        if (active) {
            return (
                <div className="modal is-active">
                    <div className="modal-background"></div>
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
                    <button className="modal-close is-large" aria-label="close" onClick={() => this.close()}></button>
                </div>
            )
        }

        return (
            <div className="modal is-hidden"></div>
        )
    }
}