import { Selector as $, t } from 'testcafe';
import Page from '../page'

class MetadataPage extends Page {
    constructor() {
        super();
        this.txtTicketOne   = $('#jsonId21211');
        this.txtNotes       = $('#jsonId21131');
        this.btnSaveChanges = $('.button-primary');
    }

    async fillMetadata(metadata) {
        metadata.notes      !== '' && await t.typeText(this.txtNotes, metadata.notes, { replace: true });
        await t.click(this.btnSaveChanges);
    }
}
export default new MetadataPage();