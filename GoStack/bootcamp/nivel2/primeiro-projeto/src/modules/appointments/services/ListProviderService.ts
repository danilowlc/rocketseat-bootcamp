import { inject, injectable } from "tsyringe";

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProviderService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

  ){}

  public async execute({ user_id }: IRequest): Promise<User[]> {

    const users = await this.usersRepository.findAllProvider({
      except_user_id: user_id,
    });

    return users;
  }
}
export default ListProviderService;
