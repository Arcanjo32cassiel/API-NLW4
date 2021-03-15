import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { User } from '../models/user';
class UserController{
    async create(request:Request, response:Response){
        const {name, email} = request.body;

        const useraRepository = getRepository(User);

        //SELECT 8 FROM USERS WHRE EMAIL  ="EMAIL"
        const userAlreadyExists = await useraRepository.findOne({
            email
        })
        if(userAlreadyExists){
            
           return response.status(400).json({
            error:"User already exists!",
           })
        }
        const user =   useraRepository.create({
            name, email
        })
        await useraRepository.save(user);
        return response.send(user);
    }
}
export {UserController}