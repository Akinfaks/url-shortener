import express from 'express';
import { encode, decode, statistic, list, redirectToLong } from '../controller';

const router = express.Router();

router.post('/encode', encode);
router.post('/decode', decode);
router.post('/statistic/', statistic);     // /api/statistic/{short_url_path} - ?short_url_path='path'
router.post('/list', list);
router.post('/redirect', redirectToLong);   // /{url_path} - ?long_url_path='long_path'

export default router;