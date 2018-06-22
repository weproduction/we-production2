const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const latinize = require('./src/lib/latinize');

const locale_en = require('./src/data/locale.en');
const locale_uk = require('./src/data/locale.uk');

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'build'), {
    index: false
}));

const SPA_Router = express.Router();

SPA_Router.use((req,res,next) => {
    const ua = req.headers['user-agent'];

    if (/^(facebookexternalhit)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
        next('router');
    } else {
        next();
    }
});

SPA_Router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'build', 'index.html')));

const nonSPA_Router = express.Router({});

function localize(locale, en, uk) {
    return locale === 'uk' ? uk : en;
}

nonSPA_Router.get('/:locale/videos/:category?/:tag?', (req,res, next) => {

    const category = req.params.category || 'featured';
    const tag = req.params.tag || null;
    const current_video = req.query.v;
    const locale = req.params.locale || 'en';

    let title_en = locale_en.video.categories[category] || locale_en.video.link;
    let title_uk = locale_uk.video.categories[category] || locale_uk.video.link;
    let description_en = locale_en.description;
    let description_uk = locale_uk.description;

    request('http://localhost:3001/video', (err, r, data) => {
        if (err) {
            return next();
        }

        const videos = JSON.parse(data);
        if (videos.code !== undefined) {
            return next();
        }

        let video = videos
            .filter(v => ~v.categories.indexOf(category))
            .filter(v => !tag || ~v.tags_en.map(latinize).indexOf(tag) || ~v.tags_uk.map(latinize).indexOf(tag))
            .shift();

        if (current_video) {
            video = videos.filter(v => v.video === current_video).pop();
            title_en = video.title_en;
            title_uk = video.title_uk;
            description_en = video.description_en;
            description_uk = video.description_uk;
        }

        if (!video) {
            return next();
        }

        const host = req.headers.host;
        const protocol = req.header('X-Forwarded-Proto') || 'http';
        const by = localize(locale, locale_en.by, locale_uk.by);
        const title = localize(locale, locale_en.title, locale_uk.title);
        res.render('bot', {
            url: `${protocol}://${host}${req.originalUrl}`,
            type: 'video.other',
            image: video.preview[1080] || video.preview[720],
            title: `${localize(locale, title_en, title_uk)} ${by} ${title}`,
            description: localize(locale, description_en, description_uk),
        });
    })
});

nonSPA_Router.get('/:locale/*', (req,res) => {
    const host = req.headers.host;
    const protocol = req.header('X-Forwarded-Proto') || 'http';
    res.render('bot', {
        url: `${protocol}://${host}${req.originalUrl}`,
        type: 'website',
        image: `${protocol}://${host}/img/fb-preview.jpg`,
        title: localize(locale, locale_en.title, locale_uk.title),
        description: localize(locale, locale_en.description, locale_uk.description),
    });
});

nonSPA_Router.get('/*', (req,res) => {
    const host = req.headers.host;
    const protocol = req.header('X-Forwarded-Proto') || 'http';
    res.render('bot', {
        url: `${protocol}://${host}${req.originalUrl}`,
        type: 'website',
        image: `${protocol}://${host}/img/fb-preview.jpg`,
        title: locale_en.title,
        description: locale_en.description,
    });
});

app.use('/', SPA_Router, nonSPA_Router);

let server = null;
module.exports = {
    start() {
        server = app.listen(3000, () => console.log('Started 3000'))
    },
    stop() {
        server.close(() => console.log('Stopped'))
    }
};
