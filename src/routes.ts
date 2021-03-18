import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysConller } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysConller();

const sendMailController = new SendMailController();

const answerController = new AnswerController()

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value",  answerController.execute);

export {router}