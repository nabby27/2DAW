import { LoginUser } from '../value_objects/loginUser.vo';

export interface UsersRepository {

    getTokenWhenLogging(user: LoginUser): Promise<string>;

}
