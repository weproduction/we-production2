const defaults = [{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 31.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 24.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 25.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 26.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 32.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 33.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 34.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 46.png'
},{
    name_en: 'Teodor Neshchadym',
    position_en: 'DoP, Big BOSS',
    name_uk: 'Теодор Нещадим',
    position_uk: 'DoP, Біг БОС',
    facebook: '',
    twitter: '',
    photo: 'Mask Group 50.png'
}];

export default function (state = defaults, action) {
    if (action.type === 'CREW_INIT') {
        return {...state, ...action.payload};
    }

    return state;
}