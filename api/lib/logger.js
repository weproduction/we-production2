const winston = require('winston');
const config = require('config');
const level = config.get('log.level');
const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({'timestamp': true, level: level})
    ]
});

module.exports = logger;