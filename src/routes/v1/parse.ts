import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { paramMissingError, IRequest } from '@shared/constants';
import { checkRequired } from '@shared/functions';

const router = Router();
const {  OK  } = StatusCodes;

router.post('/parse',  (req: Request, res: Response) => {
  const body: {data: string} = req.body;
  if(checkRequired(['data'],body, res) === false) {
    return;
  }
  // main logic will be implemented.
  return res.status(OK).json({ok: 200});
});
export default router;