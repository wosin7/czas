//var os = require('os');
function timer(up) {
var uptime = up;
var seconds;
var minut;
var hour;
var tm ={};
/* if (uptime < 3600){
   // console.log('w ifie');
    hour = 0;
    minut = Math.floor(uptime / 60);
    seconds = Math.floor(uptime % 60);
} 
else { */
   // console.log('w elsie');
    hour = Math.floor(uptime / 3600);
    minut = Math.floor((uptime % 3600)/60);
    seconds = Math.floor((uptime % 3600) % 60)
    return {
        h: hour,
        m: minut,
        s: seconds
    }
    //return tm;
    /* tab[0] = hour;
    tab[1] = minut;
    tab[2] = seconds;
    return tab; */
/* }
if (hour > 0){
    console.log(hour+' godzin, '+minut+' minut, '+seconds+' sekund.');
} 
else {
    console.log(minut+' minut, '+seconds+' sekund.');
} */
}
exports.print = timer;