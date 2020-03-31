import { Selector as $, t } from 'testcafe';
import Page from '../page'

class AdminDashboardPage extends Page {
    constructor() {
        super();
        this.btnOfficerDashboard    = $('.ad-pn-32');
        this.btnEvents              = $('span').withText('Events');
    }

    async gotoOfficerDashboard() {
        await t.click(this.btnOfficerDashboard);
    }

    async gotoEvents() {
        await t.click(this.btnEvents);
    }
}
export default new AdminDashboardPage();