import { Request, Response, Router } from 'express';
import { UsersController } from '../controllers/usersController';
import { LoginUser } from '../domain/users/value_objects/loginUser.vo';

const router: Router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.json({ message: 'Wellcome to login' });
});

router.post('/login', (req: Request, res: Response) => {
    const user: UsersController = new UsersController();
    const userReq: LoginUser = { username: req.body.username, password: req.body.password };
    return user.getTokenWhenLogging(req, res, userReq);
});

export default router;
