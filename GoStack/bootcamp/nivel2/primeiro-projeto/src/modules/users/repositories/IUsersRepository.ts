import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";
import IFindAllProvidersDTO from "@modules/appointments/dtos/IFindAllProvidersDTO";

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findAllProvider(data: IFindAllProvidersDTO): Promise<User[]>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
