import { Response } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import logger from './Logger';


export const checkRequired = ( keys: string[],body: Object, res: Response)=> {
    let isValid = true;
    for(const key of keys) {
        if(Object.keys(body).indexOf(key) == -1){
            res.status(BAD_REQUEST).json({"message": `Required filed "${key}" not found in request body`});
            isValid = false;
            break;
        }
    }
    return isValid;
}

export function checkZero(lastName: string, clientId: string) {
    if(clientId == "" && lastName == "") {
        return "first";
    } else if(clientId == ""){
        return "last";
    } else {
        return "clientId"
    }
}
export function checkLetter(firstName: string, lastName: string, clientId: string){
    if(firstName.includes("0") && lastName.includes("0")){
        return "clientId"
    } else if(firstName.includes("0")){
        return "last"
    } else {
        return "first"
    }
}