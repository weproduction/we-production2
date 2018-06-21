const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

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

nonSPA_Router.get('/videos/:category/:tag/:video', (req,res, next) => {

    request('http://localhost:3001/video', (err, r, data) => {
        if (err) {
            return next();
        }

        const videos = JSON.parse(data);
        const video = videos.filter(v => v.video === req.params.video).pop();

        if (!video) {
            return next();
        }

        res.render('bot', {
            url: 'http://we-production.herokuapp.com' + req.originalUrl,
            type: 'video.other',
            image: video.preview[1080] || video.preview[720],
            title: `${video.title_en} by We Production`,
            description: video.description_en,
        });
    })
});

nonSPA_Router.get('/*', (req,res) => {
    res.render('bot', {
        url: 'http://we-production.herokuapp.com' + req.originalUrl,
        type: 'website',
        image: 'http://we-production.herokuapp.com/img/fb-preview.jpg',
        title: 'We Production',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
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
