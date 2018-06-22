import latinize from '../lib/latinize';

const defaults = window['VIDEOS_LIST'] || [];

export default function (state = defaults, action) {
    return state.map(video => ({
        ...video,
        tags: [].concat(video.tags_uk.map(latinize), video.tags_en.map(latinize))
    }));
}
