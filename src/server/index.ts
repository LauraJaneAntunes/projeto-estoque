import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Sincronizar modelos com o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});