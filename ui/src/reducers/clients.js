const defaults = {
    faces: [{
        name: 'Mammadov',
        image: 'Mask Group 39.png',
        link: ''
    }, {
        name: 'Тоня Матвієнко',
        image: 'Mask Group 41.png',
        link: ''
    }, {
        name: 'Eldar',
        image: 'Mask Group 42.png',
        link: ''
    }, {
        name: 'Ruslana',
        image: 'Mask Group 43.png',
        link: ''
    }],
    logos: [{
        title: 'Euromedia',
        image: 'emc.png',
        link: ''
    }, {
        title: 'MTC',
        image: 'nova–poshta-1.png',
        link: ''
    }, {
        title: 'Нова Пошта',
        image: 'nova–poshta.png',
        link: ''
    }]
};

export default function (state = defaults, action) {
    if (action.type === 'CLIENTS_INIT') {
        return {...state, ...action.payload};
    }
    return state;
}
