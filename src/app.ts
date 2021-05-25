import express, {Application} from 'express';
import usersRout from './router/users';
import cors from 'cors';
import path from 'path';
import { Socket } from './socket/socket';
const app: Application = express();
require('./connect');
const http = require("http");
const socketIo = require("socket.io");

const PORT = 3000

const server = http.createServer(app);

const io = socketIo(server);


io.on("connection", (socket: any) => {
    let connection=new Socket(socket)
    
    
});




app.listen(PORT, () => {
    console.log(`connect in port ${PORT}`);
})



console.log("app")
app.use(express.static(path.join(__dirname, '/public')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRout);





