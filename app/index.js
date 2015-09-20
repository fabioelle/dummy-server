var express = require('express');
var app = express();


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function randomMe(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function randomMax(max) {
    return Math.floor((Math.random() * max) + 1.0);
}

function getSample() {
    var data = ['vexilar', 'raymarine', 'digital yacht', 'loweance', 'garmin', 'b&g', 'humminbird', 'gofree', 'simrad'];
    var trend = ['+', '-', '='];

    var out = [];
    var arr = shuffle(data);

    for (var i = 0; i < arr.length; i++) {
        var tmp = new Object();
        var dataBody = new Object();
        dataBody.average = Math.random();
        dataBody.total = randomMax(99999);
        dataBody.week = randomMax(999);
        dataBody.l_week = Math.random();
        dataBody.l_w_t = randomMe(trend);
        tmp.type = arr[i];
        tmp.trend = dataBody;
        out.push(tmp);
    }

    return out;

}

app.set('port', (process.env.PORT || 5000));

app.get('/api/data/trend', function(request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    response.json(getSample());
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});