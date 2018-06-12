'use strict';

function GET(req, res, next) {
    if (req.swagger.params.id > 0) {
        res.status(200).json({});
    } else {
        res.status(200).json([]);
    }
}

function POST(req, res, next) {
    res.status(200).json(req.body);
}

module.exports = {
    GET,
    POST,
};