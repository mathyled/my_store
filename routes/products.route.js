const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.json(newProduct);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const rsp = await service.delete(id);
    res.json(rsp);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});
module.exports = router;
