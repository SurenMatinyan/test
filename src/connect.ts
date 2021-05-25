import {Sequelize} from 'sequelize';


const connectInmysql = new Sequelize("test", "root", "root", {
    host: "127.0.0.1",
    dialect: 'mysql',
    logging: false
})
connectInmysql.authenticate()
    .then(() => console.log("connected in postgres DB test1234"))
    .catch(err => console.log("don't connect"));

export default connectInmysql;