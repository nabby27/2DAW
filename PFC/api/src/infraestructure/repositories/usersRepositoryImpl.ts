import jwt from 'jsonwebtoken';
import mysql from 'mysql';
import db from '../../constants';
import { UsersRepository } from '../../domain/users/repositories/usersRepository';
import { LoginUser } from '../../domain/users/value_objects/loginUser.vo';

export class UsersRepositoryImpl implements UsersRepository {
    constructor() { }

    async getTokenWhenLogging(user: LoginUser): Promise<string> {
        return new Promise((resolve, reject) => {
            const query = mysql.format(
                'SELECT * FROM CMS_AUTH WHERE username = ? and password = ?',
                [user.username, user.password],
            );
            db.query(query, (error, rows) => {
                if (error) {
                    reject('something goes wrong');
                }
                if (rows.length > 0) {
                    const token = this.createToken(user);
                    resolve(token);
                } else {
                    reject('user or password incorrect');
                }
            });
        });
    }

    createToken = (user: LoginUser): string => {
        const tokenData = {
            username: user.username,
        };
        const secret_string: string = process.env.SECRET_STRING_FOR_TOKEN || 'SecretString';
        const token = jwt.sign(tokenData, secret_string, {
            expiresIn: '1d',
        });

        return token;
    }

}
