const { errorHandler } = require("../helpers/error.handler");
const { Contract } = require("../models/contracts.model");

const addContract = async (req, res) => {
  try {
    const {
      application_id,
      contract_file_path,
      start_date,
      end_date,
      terms,
      created_at,
    } = req.body;
    const newContract = await Contract.create({
      application_id,
      contract_file_path,
      start_date,
      end_date,
      terms,
      created_at,
    });
    res.status(201).send({ message: "Contract created", newContract });
  } catch (error) {
    errorHandler(error, res);
  }
};

// Get All Contracts
const getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll();
    res.status(200).send({ contracts });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getContractById = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findByPk(id);
    res.status(200).send({ contract });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateContract = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      application_id,
      contract_file_path,
      start_date,
      end_date,
      terms,
      created_at,
    } = req.body;
    await Contract.update(
      {
        application_id,
        contract_file_path,
        start_date,
        end_date,
        terms,
        created_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ message: "Contract updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteContract = async (req, res) => {
  try {
    const { id } = req.params;
    await Contract.destroy({ where: { id } });
    res.status(200).send({ message: "Contract deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addContract,
  getAllContracts,
  getContractById,
  updateContract,
  deleteContract,
};
