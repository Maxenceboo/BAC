import express from 'express';
import * as mesureController from '../controllers/mesureController.js';

const router = express.Router();

router.get('/test', mesureController.statMesures);
router.get('/', console.log('test'));

export default router;