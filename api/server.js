const config = require('config');
const HOST = config.get('server.hostname');
const PORT = config.get('server.port');

const swaggerDoc = require('./swagger.json');
const apiDoc = require('./lib/swaggerDoc')(swaggerDoc);

let server;

const express = require('express');
const swaggerTools = require('swagger-tools');

const errorHandler = require('./lib/middleware/errorHandler');

const log = require('./lib/logger');

function start(cb) {
    const configs = config.util.getConfigSources();
    configs.forEach(function iterator(c){
        log.info('Loading config ' + c.name);
    });
    swaggerTools.initializeMiddleware(apiDoc, function initSwaggerCb(middleware) {
        log.debug('Initialized middleware. Starting app.');
        let app = express();
        app.use(middleware.swaggerMetadata()); // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
        log.debug('Loaded middleware: swaggerMetadata');
        app.use(middleware.swaggerValidator());
        log.debug('Loaded middleware: swaggerValidator');
        app.use(middleware.swaggerRouter({controllers: './api'}));
        log.debug('Loaded middleware: swaggerRouter');
        app.use(middleware.swaggerUi()); // Swagger documents and Swagger UI
        log.debug('Loaded middleware: swaggerUI');
        app.use(errorHandler);
        log.debug('Loaded middleware: errorHandler');
        log.info('Service started on ' + PORT);
        log.info('API Documentation available at http://' + HOST + ':' + PORT + '/docs');
        server = app.listen(PORT, cb);
    });
}

function stop(cb){
    log.info('Initiating graceful shutdown');
    try{
        server.close(function serverStopCb() {
        });
    }catch(e){
        log.info('Shutdown complete');
        if(cb) { return cb(e); }
        process.exit(1);
    }
}

module.exports = {
    start,
    stop
};