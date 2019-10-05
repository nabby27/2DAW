import { UsersRepository } from '../../../src/domain/users/repositories/usersRepository';
import { LoginUser } from '../../../src/domain/users/value_objects/loginUser.vo';

export class UsersRepositoryInMemory implements UsersRepository {

    private users: LoginUser[] = [];
    private token = '';

    public addUser(user: LoginUser) {
        this.users.push(user);
    }

    public setUsers(users: LoginUser[]) {
        this.users = users;
    }

    public setToken(token: string) {
        this.token = token;
    }

    public getTokenWhenLogging(user: LoginUser): Promise<string> {
        return new Promise((resolve, reject) => {
            this.users.forEach((userInMemory) => {
                if (user.username === userInMemory.username &&
                    user.password === userInMemory.password) {
                    resolve(this.token);
                }
            });
            reject('user or password incorrect');
        });
    }

}
