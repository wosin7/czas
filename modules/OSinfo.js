var os = require('os');
var timer = require('../modules/time');
var tabs = [];
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var up = os.uptime()
    tabs = timer.print(up);
    /* var time = timer.print(up);
    console.log('aaaaa');
    console.log(timer.print(up));
    console.log('bbb'); */
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ' +tabs[0]+' godzin, '+tabs[1]+' minut, '+tabs[2]+' sekund.');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}
exports.print = getOSinfo;