import React, {Fragment} from 'react';
import Player from '@vimeo/player';

const eventNames = {
    ready: 'onReady',
    play: 'onPlay',
    pause: 'onPause',
    ended: 'onEnd',
    timeupdate: 'onTimeUpdate',
    progress: 'onProgress',
    seeked: 'onSeeked',
    texttrackchange: 'onTextTrackChange',
    cuechange: 'onCueChange',
    cuepoint: 'onCuePoint',
    volumechange: 'onVolumeChange',
    error: 'onError',
    loaded: 'onLoaded',
};

export class Vimeo extends React.Component {

    containerRef = React.createRef();

    componentDidMount() {
        this.createPlayer();
    }

    componentDidUpdate(prevProps) {
        const changes = Object.keys(this.props).filter(name => this.props[name] !== prevProps[name]);

        this.updateProps(changes);
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    /**
     * @private
     */
    updateProps(propNames) {
        const { player } = this;
        propNames.forEach((name) => {
            const value = this.props[name];
            switch (name) {
                case 'autopause':
                    player.setAutopause(value);
                    break;
                case 'color':
                    player.setColor(value);
                    break;
                case 'loop':
                    player.setLoop(value);
                    break;
                case 'volume':
                    player.setVolume(value);
                    break;
                case 'paused':
                    player.getPaused().then((paused) => {
                        if (value && !paused) {
                            return player.pause();
                        } else if (!value && paused) {
                            return player.play();
                        }
                        return null;
                    });
                    break;
                case 'width':
                case 'height':
                    this.player.element[name] = value; // eslint-disable-line no-param-reassign
                    break;
                case 'video':
                    if (value) {
                        player.loadVideo(value);
                        // Set the start time only when loading a new video.
                        if (typeof this.props.start === 'number') {
                            player.setCurrentTime(this.props.start);
                        }
                    } else {
                        player.unload();
                    }
                    break;
                default:
                // Nothing
            }
        });
    }

    /**
     * @private
     */
    createPlayer() {
        this.player = new Player(this.containerRef.current);

        Object.keys(eventNames).forEach((dmName) => {
            const reactName = eventNames[dmName];
            this.player.on(dmName, (event) => {
                if (this.props[reactName]) {
                    this.props[reactName](event);
                }
            });
        });

        if (typeof this.props.start === 'number') {
            this.player.setCurrentTime(this.props.start);
        }

        if (typeof this.props.volume === 'number') {
            this.updateProps(['volume']);
        }
    }

    getUrl() {
        const query = ['background', 'muted', 'autoplay', 'playsinline', 'loop']
            .filter(prop => this.props[prop] !== undefined)
            .map(prop => `${prop}=${this.props[prop] ? '1' : '0'}`);

        return `https://player.vimeo.com/video/${this.props.video}?${query.join('&')}`;
    }

    render() {
        return (
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                className={this.props.className}
                src={this.getUrl()}
                ref={this.containerRef}
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowFullScreen
            />
        );
    }
}

Vimeo.defaultProps = {
    autopause: true,
    autoplay: false,
    showByline: true,
    loop: false,
    showPortrait: true,
    showTitle: true,
    muted: false,
    background: false,
};
