

const fs = require('fs');
const http = require('http');
const debug = require('debug')('http');
const ws = require('ws')
const SERVER_PORT = 3000
const wss = new ws.WebSocketServer({port: 3001});

wss.on('connection', (ws) => {
    console.log('WebSocket connected');

    // Отправка уведомления о необходимости обновления
    const notifyClients = () => {
        ws.send('reload');
    };

    // Мониторинг изменений в файлах
    fs.watch('./', { recursive: true }, (event, filename) => {
        console.log(`File ${filename} changed`);
        notifyClients();
    });
});

const server = http.createServer((req, res) => {
    const {url} = req;

    const path = url === "/" ? "index.html" : url;

    fs.readFile(`./${path}`, (err, data) => {
        if(err){
            debug(`ERROR ${req.method}: ${url}`);
        } else{
            const file = fs.readFileSync(`./${path}`)
            debug(`REQUEST ${req.method}: ${url}`)
            res.write(file);
            res.end();
        }
    })
})

server.listen(SERVER_PORT);
debug("Server listening 3000");
