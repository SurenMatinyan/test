import {
    Sequelize,
    Model,
    DataTypes
  } from "sequelize";


  interface MessageAttributes {
    id?: number
    message: string
    UserId: number
  }
  
  class Message extends Model<MessageAttributes>
    implements MessageAttributes {
    public id?: number; 
    public message!: string;
    public UserId!: number;


    public static  initialization(sequelize: Sequelize){
        this.init(
            {
              id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey:true},
              message: {
                type: new DataTypes.STRING(128),
              },
              UserId: {type: DataTypes.INTEGER}
            },
               
        
            {
              tableName: "messages",
              sequelize, 
            }
          );
    }

  }
  export default Message;
  
  
  


  
