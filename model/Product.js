import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import Category from './Category.js';
const Product = sequelize.define(
  'Product',
  {
    p_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    p_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    p_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'c_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    timestamps: false,
  },

  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Database & tables created!');
    })
    .catch((err) => {
      console.error('Error syncing database:', err);
    })
);

export default Product;
