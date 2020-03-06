import { Selector as $, t } from 'testcafe';
import Page from '../page'

class AdminDashboardPage extends Page {
    constructor() {
        super();
        this.btnOfficerDashboard    = $('.ad-pn-32');
    }

    async gotoOfficerDashboard() {
        await t.click(this.btnOfficerDashboard);
    }
}
export default new AdminDashboardPage();