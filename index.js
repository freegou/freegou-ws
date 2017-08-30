
//    openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 100 -nodes

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
    port: 80
});

var queue = []


function removeFromQueue(data) {
    for (var i in queue) {
        if (queue[i] == data) {
            queue.splice(i, 1)
            break
        }
    }
}

wss.on('connection', function connection(ws) {
    setInterval(function() {
        if (ws.readyState == 1)
            ws.send('fuck')
    }, 30000)

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        var data = JSON.parse(message)
        
        var req = null
        for (let i in queue) {
            if (queue[i].seq == data.seq) {
                req = queue[i]
                queue.splice(i, 1)
                break
            }
        }
        queue.forEach((d) => {
            if (d.seq == data.seq) {
                req = d
            }
        })
        if (req) {
            if (data.payload == 'success') {

            } else {

            }
        }

    });

    var data = {
        seq: Math.random(),
        action: 'fetch',
        payload: {
            shelfId: 1,
            offset: 3,
            size: 5
        }
    }
    queue.push(data)
    setTimeout(() => {
        removeFromQueue(data)
    }, 60000)
    ws.send(JSON.stringify(data));

});