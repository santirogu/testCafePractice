import { Selector as $, t } from 'testcafe';
import Page from '../page'
import AdvancedSearchPage from './advancedSearchPage'

class OfficerDashboardPage extends Page {
    constructor() {
        super();
        this.btnSearch  = $('.adv-search-btn');
        this.evidencesList = $('#latest ul li');
    }

    async search(filters) {
        await t.click(this.btnSearch);
        await AdvancedSearchPage.fillAdvancedSearchWithFilters(filters);
    }

    async openEvidence(index) {
        await t.click(this.evidencesList.nth(index));
    }
}
export default new OfficerDashboardPage();