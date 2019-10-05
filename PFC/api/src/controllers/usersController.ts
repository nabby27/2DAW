import { Request, Response } from 'express';
import { GetTokenWhenLoginAction } from '../domain/users/actions/getTokenWhenLoginAction';
import { LoginUser } from '../domain/users/value_objects/loginUser.vo';
import { UsersRepositoryImpl } from '../infraestructure/repositories/usersRepositoryImpl';

export class UsersController {

    private getTokenWhenLoginAction: GetTokenWhenLoginAction;
    private usersRepositoryImpl: UsersRepositoryImpl;

    constructor() {
        this.getTokenWhenLoginAction = new GetTokenWhenLoginAction();
        this.usersRepositoryImpl = new UsersRepositoryImpl();
    }

    public async getTokenWhenLogging(req: Request, res: Response, user: LoginUser) {
        this.getTokenWhenLoginAction.execute(this.usersRepositoryImpl, user)
            .then((token) => res.status(200).json({ token }))
            .catch((msg) => res.status(400).json({ error: msg }));
    }

}
