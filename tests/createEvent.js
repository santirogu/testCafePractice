import credentials          from '../data/credentials';
import LoginPage            from '../pages/login/sso/loginPage';
import AdminDashboardPage   from '../pages/admin_dashboard/adminDashboardPage';
import EventsPage           from '../pages/events/eventsPage';

fixture `Create new Event`
    .beforeEach(async (t) => {
        await LoginPage.goto();
        await LoginPage.login(credentials.username, credentials.password);
    });

    test('Create Purge event for Integrity Check feature', async () => {
        await AdminDashboardPage.gotoEvents();
        const event = {
            eventName: 'Purge',
            description: 'Purge'
        };
        await EventsPage.createEvent(event);
    });