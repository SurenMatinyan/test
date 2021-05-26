import userModel from './users.model';
import messageModel from './message.model';
import sequelize from '../connect';


const modelArr = [userModel, messageModel];
modelArr.forEach(model => model.initialization(sequelize));
sequelize.sync({force: false});
userModel.hasMany(messageModel)
messageModel.belongsTo(userModel)



export {userModel,messageModel}