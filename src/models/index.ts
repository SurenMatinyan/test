import userModel from './users.model';
import sequelize from '../connect';


const modelArr = [userModel];
modelArr.forEach(model => model.initialization(sequelize));
sequelize.sync({force: true});




export { userModel}