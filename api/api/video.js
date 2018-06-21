'use strict';

const  Vimeo = require('vimeo').Vimeo;

require('dotenv').config({path: '.env.local'});

const CLIENT_ID = process.env.VIMEO_CLIENT_ID;
const CLIENT_SECRET = process.env.VIMEO_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

function parseDescription(description) {

    let description_en = '';
    let tags_en = [];
    let title_uk = '';
    let description_uk = '';
    let tags_uk = [];

    let lines = (description || '').split('\n').filter(x => x !== '');

    if (lines.length && lines[0].startsWith('Tags:')) {
        tags_en = lines[0].split('Tags:')[1].split(',').map(x => x.trim());
        lines.shift();
    }

    while (lines.length && !lines[0].startsWith('---')) {
        description_en += lines[0] + '\n';
        lines.shift();
    }

    if (lines.length && lines[0].startsWith('---')) {
        lines.shift();
        title_uk = lines[0];
        lines.shift();
    }

    if (lines.length && lines[0].startsWith('Теги:')) {
        tags_uk = lines[0].split('Теги:')[1].split(',').map(x => x.trim());
        lines.shift();
    }

    while (lines.length) {
        description_uk += lines[0] + '\n';
        lines.shift();
    }

    return {
        description_en,
        tags_en,
        title_uk,
        description_uk,
        tags_uk
    }
}

Array.prototype.orderBy = function (fn) {
    const result = this.slice();
    result.sort((a, b) => {
        const _a = fn(a), _b = fn(b);
        return _a < _b ? -1 : _a > _b ? 1 : 0;
    });
    return result;
};

Array.prototype.orderByDesc = function (fn) {
    const result = this.slice();
    result.sort((b, a) => {
        const _a = fn(a), _b = fn(b);
        return _a < _b ? -1 : _a > _b ? 1 : 0;
    });
    return result;
};

function GET(req, res, next) {
    const client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

    client.request({
        path: '/me/videos',
        query: {
            page: 1,
            per_page: 100,
            fields: 'uri,name,description,duration,pictures,tags,created_time, privacy'
        }
    }, function (error, body, status_code) {
        if (error) {
            res.status(status_code).send({
                code: status_code,
                message: error
            });

            return
        }

        const results = body.data
            .filter(video => video.privacy.view === 'anybody')
            .orderByDesc(x => x.created_time)
            .map(video => {
                const {description_en, tags_en, title_uk, tags_uk, description_uk} = parseDescription(video.description);
                return {
                    video: video.uri.split('/')[2],
                    title_en: video.name,
                    description_en,
                    tags_en,
                    title_uk: title_uk || video.name,
                    description_uk: description_uk || description_en,
                    tags_uk,
                    categories: video.tags.map(tag => tag.name.replace('#', '')),
                    preview: video.pictures.sizes.reduce((o, pic) => ({...o, [pic.height]: pic.link}), {}),
                    duration: video.duration
                }
            });

        const [method, param] = (req.query.format || '').split(':');
        switch (method) {
            case 'jsonp':
                res.set('Content-Type', 'text/javascript');
                res.status(200).send(`window.${param || 'VIDEOS_LIST'} = ${JSON.stringify(results, null, 2)}`);
                break;

            default:
                res.status(200).json(results);
        }
    });
}

module.exports = {
    GET,
};