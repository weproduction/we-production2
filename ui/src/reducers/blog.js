const defaults = [{
    video: 116772069,
    tags_en: ['Backstage'],
    title_en: 'We are making new video in Lviv',
    description_en: `Today Lviv weather is throwing around frogs. Nevertheless we are shooting.
                          And big thanks goes to Fabrik photo studio.`,
    tags_uk: ['Бекстейдж'],
    title_uk: 'Ми знамаємо нове відео у Львові',
    description_uk: `Сьогодні Львівська погода кидається жабками, тому знімаємо в студії. 
                          І дякуємо за інтер'єр Фотостудія Fabrik studio.`,
    preview: '/mock/video-preview@2x.png'
}, {
    video: 116772070,
    tags_en: ['Backstage', 'Green'],
    title_en: 'We are making new video in Lviv',
    description_en: `Today Lviv weather is throwing around frogs. Nevertheless we are shooting.
                          And big thanks goes to Fabrik photo studio.`,
    tags_uk: ['Бекстейдж', 'Зеленка'],
    title_uk: 'Ми знамаємо нове відео у Львові',
    description_uk: `Сьогодні Львівська погода кидається жабками, тому знімаємо в студії. 
                          І дякуємо за інтер'єр Фотостудія Fabrik studio.`,
    preview: '/mock/video-preview@2x.png'
}];

export default function (state = defaults, action) {
    if (action.type === 'BLOG_INIT') {
        return {...state, ...action.payload};
    }

    return state;
}