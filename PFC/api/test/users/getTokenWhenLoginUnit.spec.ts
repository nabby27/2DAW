import { GetTokenWhenLoginAction } from '../../src/domain/users/actions/getTokenWhenLoginAction';
import { LoginUser } from '../../src/domain/users/value_objects/loginUser.vo';
import { UsersRepositoryInMemory } from './repositories/usersRepositoryInMemory';

describe('Unit test to | Get token when user login |', () => {

    let getTokenWhenLoginAction: GetTokenWhenLoginAction;
    let usersRepositoryInMemory: UsersRepositoryInMemory;

    beforeEach(() => {
        getTokenWhenLoginAction = new GetTokenWhenLoginAction();
        usersRepositoryInMemory = new UsersRepositoryInMemory();
    });

    it('should get error message when user or password incorrect', async () => {
        await getTokenWhenLoginAction.execute(usersRepositoryInMemory, { username: 'nabby', password: '1234' })
            .catch((error: any) => {
                expect('user or password incorrect').toEqual(error);
            });
    });

    it('should get token when user and password is correct', async () => {
        const user: LoginUser = { username: 'nabby', password: '1234' };
        const token = 'abcd...';
        usersRepositoryInMemory.addUser(user);
        usersRepositoryInMemory.setToken(token);

        const response = await getTokenWhenLoginAction.execute(usersRepositoryInMemory, user);

        expect(token).toEqual(response);
    });

});
