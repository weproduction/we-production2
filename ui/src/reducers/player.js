const defaults = {
    video: undefined,
    paused: false,
    active: false
};

export default function (state = defaults, action) {
    switch (action.type) {
        case 'VIDEO_PLAY':
            return {...state, video: action.payload, active: true, paused: false};
        case 'VIDEO_STOP':
            return {...state, paused: true, active: false};
        case 'VIDEO_PAUSE':
            return {...state, paused: true};
        default:
            return state;
    }
}
