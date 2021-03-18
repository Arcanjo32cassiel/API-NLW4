import {Request, Response} from  'express'
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController{

    // http://localhost:3333/answers/2?u=f7940c31-934d-451c-bf0c-4534a325657c
    /**
     * 
     Route Params  => Parametros  que compõe a rota  
    routes.get("/answers/:value")

        Query Params  => Busca, Paginacao, não obrigatórios 
        ?
        chave=valor
     * 
     */

    async execute(request: Request, response: Response){
        const {value} = request.params ;
        const {u} = request.query;

        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u) 
        });

        if(!surveyUser){
            return response.status(400).json({
                error: "Survey User does not exists! "
            })
        }
        surveyUser.value = value;//25:35
        await surveyUsersRepository.save(surveyUser);
        return response.json(surveyUser)
    }
}
export {AnswerController}