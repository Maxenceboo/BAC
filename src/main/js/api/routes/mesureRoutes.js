import express from 'express';
import * as mesureController from '../controllers/mesureController.js';

const router = express.Router();

router.post('/mesures', mesureController.statMesures);

export default router;