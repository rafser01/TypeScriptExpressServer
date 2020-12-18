import { API_V1, API_V2 } from '@shared/constants';
import { Router } from 'express';
import UserRouter from './Users';
import parser1 from './v1/parse';


// Init router and path
const router = Router();

// Add sub-routes
// router.use('/users', UserRouter);
router.use(API_V1, parser1)

// Export the base-router
export default router;
