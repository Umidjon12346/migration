const { errorHandler } = require("../helpers/error.handler");
const Category = require("../models/category.model");

const addCategory = async (req, res) => {
  try {
    const { name, description, parent_category } = req.body;
    const newCategory = await Category.create({
      name,
      description,
      parent_category,
    });
    res.status(201).send({ message: "Category created", newCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send({ categories });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    res.status(200).send({ category });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, parent_category } = req.body;
    await Category.update(
      { name, description, parent_category },
      { where: { id } }
    );
    res.status(200).send({ message: "Category updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.destroy({ where: { id } });
    res.status(200).send({ message: "Category deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
