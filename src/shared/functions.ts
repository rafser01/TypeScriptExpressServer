import { Response } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import logger from './Logger';

export const pErr = (err: Error) => {
    if (err) {
        logger.err(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};
export const checkRequired = ( keys: string[],body: Object, res: Response)=> {
    keys.forEach((key: string, index: number)=> {
        if(Object.keys(body).indexOf(key) == -1){
            res.status(BAD_REQUEST).json({"message": `Required filed "${key}" not found in request body`})
            return false;
        }
    })
    return true;
}