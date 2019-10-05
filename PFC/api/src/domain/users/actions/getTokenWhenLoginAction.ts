import { UsersRepository } from '../repositories/usersRepository';
import { LoginUser } from '../value_objects/loginUser.vo';

export class GetTokenWhenLoginAction {

    public async execute(usersRepository: UsersRepository, user: LoginUser): Promise<string> {
        return await usersRepository.getTokenWhenLogging(user);
    }

}
