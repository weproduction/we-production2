const defaults = [{
    category: 'music',
    video: 116772069,
    tags_en: ['Social', 'Movies'],
    title_en: 'We are making new video in Lviv',
    description_en: `Today Lviv weather is throwing around frogs. Nevertheless we are shooting.
                          And big thanks goes to Fabrik photo studio.`,
    tags_uk: ['Соціальне', 'Фільми'],
    title_uk: 'Ми знамаємо нове відео у Львові',
    description_uk: `Сьогодні Львівська погода кидається жабками, тому знімаємо в студії. 
                          І дякуємо за інтер'єр Фотостудія Fabrik studio.`,
    preview: '/mock/video-preview@2x.png'
}];

export default function (state = defaults, action) {
    return state;
}