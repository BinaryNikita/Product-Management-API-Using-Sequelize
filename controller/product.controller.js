import express, { request, response } from 'express';
import Product from '../model/Product.js';
import { where } from 'sequelize';

export const viewProduct = async (request, response, next) => {
  try {
    const products = await Product.findAll();
    response.send(products);
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async (request, response, next) => {
  let { p_name, p_price, quantity, category_id } = request.body;

  try {
    const result = await Product.create({
      p_name:p_name,
      p_price:p_price,
      quantity:quantity,
      category_id:category_id,
    });
    response.send('product created successfully');
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (request, response, next) => {
  let p_id = request.params.p_id;
  try {
    const deleteProduct = await Product.destroy({ where: { p_id } });
    response.send('Product deleted succesfully');
  } catch (err) {
    response.send(err);
  }
};

export const updateProductAction = async (request, response, next) => {
  let p_id = request.params.p_id;
  let { p_name, p_price, quantity, category_id } = request.body;

  try {
    let updateProduct = await Product.update(
      { p_name, p_price, quantity, category_id },{ where: { p_id } }

    );
    response.send('Product updated succesfully');
  } catch (err) {
    console.log(err);
    response.send(err);
  }
};
