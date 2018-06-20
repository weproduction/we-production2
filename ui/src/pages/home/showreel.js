import React from 'react';

import { Icon } from 'react-bulma-components';
import { Translate } from 'react-localize-redux';

import { Vimeo } from '../../controls';

import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import './showreel.sass';

export default class Showreel extends React.Component {


    playerRef = React.createRef();
    playPauseRef = React.createRef();
    sectionRef = React.createRef();

    state = {
        playing: false
    };

    componentWillUnmount() {
        this.scroll$.unsubscribe();
    }

    componentDidMount() {
        window.showreel = this.playerRef.current.player;
        this.scroll$ = fromEvent(window, 'scroll')
            .pipe(
                debounceTime(100),
                map(() => {
                    const top = document.documentElement.scrollTop
                        || document.body.parentNode.scrollTop
                        || document.body.scrollTop;

                    const {height} = this.sectionRef.current.getBoundingClientRect();

                    if (top > height * .9) {
                        this.restart();
                    }
                }))
            .subscribe();
    }

    componentDidUpdate() {
        if (this.state.playing) {
            this.playerRef.current.player.play()
        } else {
            this.playerRef.current.player.pause()
        }
    }

    togglePlay(e) {
        e.preventDefault();
        this.setState({playing: !this.state.playing});

        this.showPauseButton();
    }

    restart() {
        setTimeout(() => {
            this.setState({playing: false});
            this.playerRef.current.player.unload();
        }, 200)
    }

    showPauseButton() {
        if (this.playPauseRef.current) {
            this.playPauseRef.current.classList.add('is-mouse-active');
            clearTimeout(this.mouse_timer);
            this.mouse_timer = setTimeout(() => this.hidePauseButton(), 3000);
        }
    }

    hidePauseButton() {
        if (this.playPauseRef.current) {
            this.playPauseRef.current.classList.remove('is-mouse-active');
        }
    }

    render() {
        const { video } = this.props;

        return (
            <section className="hero showreel" ref={this.sectionRef}>
                <Vimeo
                    className="showreel-body"
                    autoplay={false}
                    video={video}
                    muted={false}
                    background
                    ref={this.playerRef}
                    onEnd={() => this.restart()}
                />
                <a href="#" className={`showreel-play has-text-light is-mouse-active ${this.state.playing ? '' : 'is-paused'}`}
                   ref={this.playPauseRef}
                   onClick={e => this.togglePlay(e)}
                   onMouseMove={() => this.showPauseButton()}
                   onMouseLeave={() => this.hidePauseButton()}
                >
                    <p className="content">
                        <Icon className="is-large" key={this.state.playing ? 'fa-pause' : 'fa-play'}>
                            <i className={`fas fa-3x ${this.state.playing ? 'fa-pause' : 'fa-play'}`}/>
                        </Icon>
                    </p>
                    <p className="is-size-4">
                        <Translate id={`buttons.${this.state.playing ? 'pause' : 'play'}-showreel`}/>
                    </p>
                </a>
            </section>
        )
    }
}