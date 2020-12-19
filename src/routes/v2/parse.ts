import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { checkLetter, checkRequired, checkZero } from '@shared/functions';



const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.post('/parse', async (req: Request, res: Response) => {
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
        if(clientId.length === 3) {
          clientId +='-'
        }
        clientId += letter;
      }
    } else {
      const typeLetter = checkLetter(firstName, lastName, clientId);
      if(typeLetter === 'first') {
        firstName += letter;
      } else if(typeLetter === 'last') {
        lastName += letter;
      } else {
        if(clientId.length === 3) {
          clientId +='-'
        }
        clientId += letter;
      }
    }

  }
  firstName = firstName.replace(/0/g, '');
  lastName = lastName.replace(/0/g, '');

  return res.status(OK).json({firstName, lastName, clientId});
});
export default router;