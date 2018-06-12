const pm2 = require('pm2');
const fs = require('fs');

console.log('Connect to PM2');
pm2.connect(function (err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }

    console.log('Starting apps');
    pm2.start('./processes.json', function (err) {
        if (err) return console.error('Error while launching applications', err.stack || err);
        console.log('PM2 and application has been succesfully started');

        if (process.env.DYNO) {
            console.log('This is on Heroku..!!');
            fs.closeSync(fs.openSync('/tmp/app-initialized', 'w'));
        }

        // Display logs in standard output
        pm2.launchBus(function (err, bus) {
            console.log('[PM2] Log streaming started');


            bus.on('log:out', function (packet) {
                console.log('[App:%s] %s', packet.process.name, packet.data);
            });

            bus.on('log:err', function (packet) {
                console.error('[App:%s][Err] %s', packet.process.name, packet.data);
            });
        });
    });
});
