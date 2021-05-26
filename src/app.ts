import express, {Application, NextFunction, Response, Request} from 'express';
import usersRout from './router/users';
import cors from 'cors';
import path from 'path';
import auth from './middleware/auth';
import { MessageController } from './controller/message.controller';
const app: Application = express();
require('./connect');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


const PORT = 3000
server.listen(PORT, () => {
    console.log(`connect in port ${PORT}`);
})

app.use(express.static(path.join(__dirname, '/public')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRout);


io.use( async(socket: any, next: any) => {
    if(await auth(socket)) return next()
    next(new Error("thou shall not pass"));
}).on("connection", async(socket: any) => {
    const message = await MessageController.getMessage()
    console.log("user connected")
    io.emit('getallmessage', message)
    socket.on('sendmessage',(data: any) => {
        MessageController.sendMessage(data, socket.user)
        io.emit('getmessage', data.message)
    })
});




