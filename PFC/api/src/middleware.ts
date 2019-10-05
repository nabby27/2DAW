import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export class Middleware {

    static logged(req: Request, res: Response, next: NextFunction) {
        let token = req.headers['authorization'] !== undefined ? req.headers['authorization'] : '';
        if (token === '') {
            res.status(401).send({ error: 'Unauthorized' });
        } else {
            token = token.replace('Bearer ', '');
            const secret_string: string = process.env.SECRET_STRING_FOR_TOKEN || 'SecretString';
            jwt.verify(token, secret_string, (err: any, user: any) => {
                if (err) {
                    res.status(401).send({ error: 'Unauthorized' });
                } else {
                    next();
                }
            });
        }
    }

    static admin(req: Request, res: Response, next: NextFunction) {

    }

}
