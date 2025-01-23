import express from 'express';
import multer from 'multer';
import Product from '../models/Product';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();
const upload = multer();

router.get('/', authenticateToken, async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { userId: req.user.id },
      attributes: ['id', 'name', 'description', 'price', 'quantity'],
    });
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar produtos' });
  }
});

router.post('/', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      image: req.file?.buffer,
      userId: req.user.id,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar produto' });
  }
});

router.put('/:id', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    const updateData: any = { name, description, price, quantity };
    
    if (req.file) {
      updateData.image = req.file.buffer;
    }

    const product = await Product.findOne({
      where: { id, userId: req.user.id },
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.update(updateData);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar produto' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id, userId: req.user.id },
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.destroy();
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao remover produto' });
  }
});

export default router;