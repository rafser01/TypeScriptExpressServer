import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { checkLetter, checkRequired, checkZero } from '@shared/functions';
import User from '@entities/User';

const router = Router();
const {  OK  } = StatusCodes;

router.post('/parse',  (req: Request, res: Response) => {
  const body: {data: string} = req.body;
  if(checkRequired(['data'],body, res) === false) {
    return;
  }
  const splitedString: string[] = body.data.split('');
  let firstName: string= "";
  let lastName: string = "";
  let clientId: string = "";

  for(const [index, letter] of splitedString.entries() ){
    if(letter=="0"){
      const typeZero = checkZero(lastName, clientId);
      if( typeZero=== "first") {
        firstName += letter;
      } else if(typeZero === "last"){
        lastName += letter;
      } else {
        clientId += letter;
      }
    } else {
      const typeLetter = checkLetter(firstName, lastName, clientId);
      if(typeLetter === 'first') {
        firstName += letter;
      } else if(typeLetter === 'last') {
        lastName += letter;
      } else {
        clientId += letter;
      }
    }

  }


  return res.status(OK).json({firstName, lastName, clientId});
});
export default router;