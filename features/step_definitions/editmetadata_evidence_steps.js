import credentials              from '../../data/credentials';
import metadata                 from '../../data/metadata';
import LoginPage                from '../../pages/login/sso/loginPage';
import AdminDashboardPage       from '../../pages/admin_dashboard/adminDashboardPage';
import OfficerDashboardPage     from '../../pages/officer_dashboard/officerDashboardPage';
import EvidenceReviewPage       from '../../pages/evidenceReview/evidenceReviewPage';

const {Given, When, Then} = require('cucumber');

Given('I navigate to the evidence review page', async () => {
    await LoginPage.goto();
    await LoginPage.login(credentials.username, credentials.password);
    await AdminDashboardPage.gotoOfficerDashboard();
    await OfficerDashboardPage.search({ dateStartedFrom : '01012020' });
    await OfficerDashboardPage.openEvidence(0);
    return 'pending';
});

When('I fill out the basic information on metadata pop-up and click on save button', async () => {
    await EvidenceReviewPage.editMetadata(metadata);
    return 'pending';
});

Then('the information should be saved', async () => {
    await t
          .takeScreenshot()
          .expect(await EvidenceReviewPage.getToastSuccessValue())
          .eql('Information updated successfully!', 'Oh! I cannot save the metadata.');
    return 'pending';
});