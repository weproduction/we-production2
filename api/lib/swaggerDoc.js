const config = require('config');

const PORT = config.get('server.port');
const HOSTNAME = config.get('server.hostname');

module.exports = function SwaggerDoc(doc){
    doc.host = HOSTNAME + ':' + PORT;
    return doc;
};
