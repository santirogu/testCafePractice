import { Selector as $, t } from 'testcafe';
import Page from '../page';
import MetadataPage from './metadataPage';

class EvidenceReviewPage extends Page {
    constructor() {
        super();
        this.btnEditMetadata    = $('#openmeta');
        this.toastSuccess       = $('.toast-success div');
        this.lblOfficerId       = $('span').withText('Officer Id').parent('label').sibling('div').child('label');
        this.lblNotes           = $('span').withText('Notes').parent('label').sibling('div').child('label');
    }

    async editMetadata(metadata) {
        await t.wait(5000).click(this.btnEditMetadata);
        await MetadataPage.fillMetadata(metadata);
    }

    async getToastSuccessValue() {
        return await this.toastSuccess.innerText;
    }

    async getOfficerIdValue() {
        return await this.lblOfficerId.innerText;
    }

    async getNotesValue() {
        return await this.lblNotes.innerText;
    }
}
export default new EvidenceReviewPage();