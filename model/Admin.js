import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";

 const Admin = sequelize.define('Admin',  {
    user_id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },

    name: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
},
{
    timestamps: false,
},
sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  })

);



export default Admin;

