import credentials          from '../data/credentials';
import metadata             from '../data/metadata';
import LoginPage            from '../pages/login/sso/loginPage';
import AdminDashboardPage   from '../pages/admin_dashboard/adminDashboardPage';
import OfficerDashboardPage from '../pages/officer_dashboard/officerDashboardPage';
import EvidenceReviewPage   from '../pages/evidenceReview/evidenceReviewPage';

fixture `Edit Evidence Metadata`
    .beforeEach(async (t) => {
        await LoginPage.goto();
        await LoginPage.login(credentials.username, credentials.password);
    });

    test('Edit Basic Information on metadata pop-up', async t => {
        await AdminDashboardPage.gotoOfficerDashboard();
        await OfficerDashboardPage.search({ dateStartedFrom : '01012020' });
        await OfficerDashboardPage.openEvidence(0);
        await EvidenceReviewPage.editMetadata(metadata)
        const actualValue = await EvidenceReviewPage.getNotesValue();
        await t
            .expect(actualValue)
            .eql(metadata.notes, 'I am sorry my friend, but the text [' + actualValue + '] is not equal to [' + metadata.notes + ']');
    });