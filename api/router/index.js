import express from 'express';
import { encode, decode, statistic, list, redirect, found } from '../controller';

const router = express.Router();

router.get('/api', found);

router.get('/api/encode', encode);
router.get('/api/decode', decode);
router.get('/api/statistic', statistic);     // /api/statistic/{short_url_path} - ?short_url_path='path'
router.get('/api/list', list);
router.get('/:hash', redirect);   // /{url_path} - ?long_url_path='long_path'

export default router;