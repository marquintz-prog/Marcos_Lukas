import express from 'express';
import db from '../database/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resultado = await db.query(
            'SELECT * FROM materiais'
        );

        res.json(resultado.rows);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: 'Erro ao buscar materiais'
        });
    }
});

export default router;