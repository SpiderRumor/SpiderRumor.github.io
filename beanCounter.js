var day = 24*60*60*1000;
var bonkDate = new Date(2019, 8, 4);
var now = new Date();
var nowTime = now.getTime();
var timeDiff = nowTime - bonkDate;
var daysDiff = Math.floor(timeDiff / day);


document.getElementById('count').append(daysDiff);
