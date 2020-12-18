import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { paramMissingError, IRequest } from '@shared/constants';

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.get('/parse', async (req: Request, res: Response) => {
  
  return res.status(OK).json({});
});