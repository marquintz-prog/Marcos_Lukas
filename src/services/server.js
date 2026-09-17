import express from 'express';
import 'dotenv/config';
import materialRoutes from '../routes/material.routes.js';

const app = express();

app.use(express.json());

app.use('/materiais', materialRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});