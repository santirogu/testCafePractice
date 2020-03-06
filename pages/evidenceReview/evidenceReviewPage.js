import { Selector as $, t } from 'testcafe';
import Page from '../page';
import MetadataPage from './metadataPage';

class EvidenceReviewPage extends Page {
    constructor() {
        super();
        this.btnEditMetadata    = $('#openmeta');
        this.lblNotes           = $('span').withText('Notes').parent('label').sibling('div').child('label');
    }

    async editMetadata(metadata) {
        await t.click(this.btnEditMetadata);
        await MetadataPage.fillMetadata(metadata);
    }

    async getNotesValue() {
        return await this.lblNotes.innerText;
    }
}
export default new EvidenceReviewPage();