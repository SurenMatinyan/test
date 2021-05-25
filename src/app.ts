import express, {Application} from 'express';
import usersRout from './router/users';
import cors from 'cors';
import path from 'path';
require('./connect');


const PORT = 3001

const app: Application = express();
app.listen(PORT, () => {
    console.log(`connect in port ${PORT}`);
})

app.use(express.static(path.join(__dirname, '/public')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRout);





