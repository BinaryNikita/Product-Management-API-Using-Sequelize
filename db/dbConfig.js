import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Sequelize','root','root',
    {dialect: 'mysql',host: 'localhost', logging: console.log,}
);

export default sequelize;





