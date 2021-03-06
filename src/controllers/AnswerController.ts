import {Request, Response} from  'express'
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { AppError } from '../errors/AppError';

class AnswerController{

  
 
        async execute(request: Request, response: Response) {
            const { value } = request.params;
            const { u } = request.query;
        
            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
        
            const surveyUser = await surveysUsersRepository.findOne({
              id: String(u),
            });
      
        if(!surveyUser){
            throw new AppError("Survey User does not exists!", 400);
       
        }
        
       
        surveyUser.value = Number(value);//25:35
        await surveysUsersRepository.save(surveyUser);
        return response.json(surveyUser)
      
    }
}
export {AnswerController}