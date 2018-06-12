const defaults = [{
    id: 'promotion',
    icon: 'video-promotion.png',
    tags: [{
        title: 'Trailers',
        tag: 'trailers'
    }, {
        title: 'TV',
        tag: 'tv'
    }]
},{
    id: 'corporate',
    icon: 'video-corp.png',
    tags: []
},{
    id: 'social',
    icon: 'video-social.png',
    tags: []
},{
    id: 'sport',
    icon: 'video-sport.png',
    tags: []
},{
    id: 'music',
    icon: 'video-music.png',
    tags: [{
        title: 'Clips',
        tag: 'clips'
    }, {
        title: 'Concerts',
        tag: 'concerts'
    }, {
        title: 'Showreels',
        tag: 'showreels'
    }]
},{
    id: 'concerts',
    icon: 'video-consert.png',
    tags: []
}];

export default function (state = defaults, action) {
    if (action.type === 'CATEGORIES_INIT') {
        return {...state, ...action.payload};
    }

    return state;
}