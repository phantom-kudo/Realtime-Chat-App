import express from 'express';
const app = express();
import { createServer } from 'http';
import path from 'path';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 8080;
const http = createServer(app);
const __dirname = path.resolve(path.dirname(''));

http.listen(PORT, () => {
    console.log("App is listening on " + PORT);
});
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

const io = new Server(http);

io.on('connection', (socket) => {
    console.log("Connected...");
})