import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysConller } from './controllers/SurveysController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysConller();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
export {router}