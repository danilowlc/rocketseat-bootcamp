import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';
import CreateAppointmentsService from './CreateAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentsService;

describe('CreateAppointment', () => {

  beforeEach(()=> {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentsService(fakeAppointmentsRepository);
  })

  it('should be able to create a new appointment', async () => {

    jest.spyOn(Date, 'now').mockImplementationOnce(()=> {
      return new Date(2020, 4, 10, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      user_id: 'user',
      provider_id: 'user_id',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('user_id');
  });

  it('should not be able to create two appointments on the same time', async () => {

    const appointmentDate = new Date(2021, 0, 12, 16);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: 'user',
      provider_id: 'user_id',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: 'user',
        provider_id: 'user_id',
      })
    ).rejects.toBeInstanceOf(AppError);

  });

  it('should not be able to create an appointment on a past date', async () => {

    jest.spyOn(Date, 'now').mockImplementationOnce(()=> {
      return new Date(2020, 4, 10, 12).getTime();
    });

    expect(
      createAppointment.execute({
        date: new Date(2020, 4, 10, 11),
        user_id: 'user',
        provider_id: 'user_id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with same user as provider', async () => {

    jest.spyOn(Date, 'now').mockImplementationOnce(()=> {
      return new Date(2020, 4, 10, 12).getTime();
    });

    expect(
      createAppointment.execute({
        date: new Date(2021, 0, 11, 13),
        user_id: 'user_id',
        provider_id: 'user_id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8am and after 5pm', async () => {

    jest.spyOn(Date, 'now').mockImplementationOnce(()=> {
      return new Date(2021, 0, 10, 13).getTime();
    });

    expect(
      createAppointment.execute({
        date: new Date(2021, 0, 11, 7),
        user_id: 'user_id',
        provider_id: 'provider_id',
      })
    ).rejects.toBeInstanceOf(AppError);

    expect(
      createAppointment.execute({
        date: new Date(2021, 0, 11, 18),
        user_id: 'user_id',
        provider_id: 'provider_id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

});
