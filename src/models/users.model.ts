import {
    Sequelize,
    Model,
    DataTypes
  } from "sequelize";


  interface UserAttributes {
    id?: number;
    username: string
    surname: string
    email: string
    password: string
   
  }
  
  class User extends Model<UserAttributes>
    implements UserAttributes {
    public id?: number; 
    public username!: string;
    public surname!: string;
    public email!: string;
    public password!: string;


    public static  initialization(sequelize: Sequelize){
        this.init(
            {
              id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
              username: {
                type: new DataTypes.STRING(128),
              },
              surname: {
                type: new DataTypes.STRING(128),},
              email: { type: DataTypes.STRING, },
              password: { type: DataTypes.STRING },
            },
               
        
            {
              tableName: "users",
              sequelize, 
            }
          );
    }

  }
  export default User;
  
  
  


  
