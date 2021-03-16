import {Request, Response} from "express"
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysConller{
async create(request:Request, reponse:Response ){
    const {title, descripition} = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
        title, 
        descripition,
    });

    await surveysRepository.save(survey);
    return reponse.status(201). json(survey)
    }

    async show(request:Request, response: Response){
        const surveysRepository = getCustomRepository(SurveysRepository);

        const  all = await  surveysRepository.find();

        return response.json(all);
    }
}

export {SurveysConller}