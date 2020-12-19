import { API_V1, API_V2 } from '@shared/constants';
import { Router } from 'express';
import parser1 from './v1/parse';
import parser2 from './v2/parse';

// Init router and path
const router = Router();

// Add sub-routes
// router.use('/users', UserRouter);
router.use(API_V1, parser1)
router.use(API_V2, parser2)
// Export the base-router
export default router;
