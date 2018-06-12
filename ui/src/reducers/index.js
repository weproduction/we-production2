import showreel from './showreel';
import categories from './categories';
import blog from './blog';
import services from './services';
import crew from './crew';
import clients from './clients';
import contacts from './contacts'
import videos from './video';
import player from './player';

const dummyReducer = (state = {}, action) => {
    return state
};

export default {
    showreel,
    categories,
    blog,
    services,
    crew,
    feedback: dummyReducer,
    clients,
    contacts,
    galery: dummyReducer,
    videos,
    player
}