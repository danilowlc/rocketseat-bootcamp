import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import IFindAllInMonthProvider from "../dtos/IFindAllInMonthProviderDTO";
import Appointment from "../infra/typeorm/entities/Appointment";

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthProvider(data: IFindAllInMonthProvider): Promise<Appointment[]>;
}
