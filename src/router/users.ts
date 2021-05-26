import { Router } from "express";
import userControler from "../controller/user.controller";
/*import UserController from '../testControllerClass/user-controller';
import authentication from '../middleware/authentication';*/
import userController from '../controller/user.controller';

const router = Router();
router.post('/login', userControler.login);
router.post('/signup', userControler.signUp)


export default router;


