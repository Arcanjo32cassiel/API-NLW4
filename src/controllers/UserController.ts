import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { User } from '../models/user';
class UserController{
    async create(request:Request, response:Response){
        const body = request.body;
            
        return response.send();
    }
}
export {UserController}