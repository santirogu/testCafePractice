import { Selector as $, t } from 'testcafe';
import Page from '../page'

class AdvancedSearchPage extends Page {
    constructor() {
        super();
        this.txtDateStartedFrom = $('#jsonIdSearchDateStartedFrom input');
        this.btnSearch          = $('.frm-controls .button-primary');
    }

    async fillAdvancedSearchWithFilters(filters) {
        filters.dateStartedFrom !== '' && await t
                                                .click(this.txtDateStartedFrom)
                                                .pressKey('left left left left left')
                                                .typeText(this.txtDateStartedFrom, filters.dateStartedFrom);
        await t.click(this.btnSearch);
    }
}
export default new AdvancedSearchPage();