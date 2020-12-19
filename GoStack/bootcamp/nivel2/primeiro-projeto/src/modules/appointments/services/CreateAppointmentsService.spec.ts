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

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123');
  });

  it('should not be able to create two appointments on the same time', async () => {

    const appointmentDate = new Date(2020, 11, 7, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123123',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123123123',
      })
    ).rejects.toBeInstanceOf(AppError);

  });
});
