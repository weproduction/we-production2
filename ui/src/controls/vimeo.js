import React from 'react';
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
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();
    }

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
    getInitialOptions() {
        return {
            id: this.props.video,
            width: this.props.width,
            height: this.props.height,
            autopause: this.props.autopause,
            autoplay: this.props.autoplay,
            byline: this.props.showByline,
            color: this.props.color,
            loop: this.props.loop,
            portrait: this.props.showPortrait,
            title: this.props.showTitle,
            muted: this.props.muted,
            background: this.props.background,
        };
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
        this.player = new Player(this.containerRef.current, this.getInitialOptions());

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

        setTimeout(() => {
            this.player.element.setAttribute('width', '100%');
            this.player.element.setAttribute('height', '100%');
        }, 300);
    }

    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                style={this.props.style}
                ref={this.containerRef}
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
