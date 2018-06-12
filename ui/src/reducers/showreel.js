const defaults = {
    video: 116772070
};

export default function (state = defaults, action) {
    if (action.type === 'SHOWREEL_INIT') {
        return {...state, ...action.payload};
    }

    return state;
}