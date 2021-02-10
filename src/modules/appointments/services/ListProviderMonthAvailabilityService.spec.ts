import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmentRepository = new FakeAppointmentRepository();
        listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
            fakeAppointmentRepository,
        );
    });

    it('should be able to list available month from provider', async () => {
        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 8, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 9, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 10, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 11, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 12, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 13, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 14, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 15, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 16, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 25, 17, 0, 0),
        });

        await fakeAppointmentRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 0, 26, 8, 0, 0),
        });

        const availability = await listProviderMonthAvailability.execute({
            provider_id: 'user',
            year: 2021,
            month: 1,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                { day: 24, available: true },
                { day: 25, available: false },
                { day: 26, available: true },
                { day: 27, available: true },
            ]),
        );
    });
});
