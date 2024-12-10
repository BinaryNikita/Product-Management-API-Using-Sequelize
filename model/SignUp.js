import sequelize from "../db/dbConfig.js";

export default class User{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }


    static checkIfEmailExist(email){
        return new Promise((resolve, reject) => {
            
        });

    }



     saveUser(){
        return new Promise((resolve, reject) => {

            
    });
     
}

}