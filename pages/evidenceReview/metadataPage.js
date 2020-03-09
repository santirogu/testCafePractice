import { Selector as $, t } from 'testcafe';
import Page from '../page'

class MetadataPage extends Page {
    constructor() {
        super();
        this.txtOfficerName = $('#jsonIdOfficerId input');
        this.txtPartner     = $('#jsonIdPartnerId input');
        this.txtUnit        = $('#jsonIdUnitId input');
        this.txtEvent       = $('#jsonIdEventList input');
        this.btnClearEvent  = $('#jsonIdEventList .k-clear-value');
        this.txtTicketOne   = $('#jsonId21211');
        this.txtTicketTwo   = $('#jsonId21551');
        this.txtDispatchOne = $('#jsonId21561');
        this.txtDispatchTwo = $('#jsonId21571');
        this.txtNotes       = $('#jsonId21131');
        this.slcRetained    = $('#jsonId2151');
        this.txtLatitude    = $('#jsonId2110281');
        this.txtLongitude   = $('#jsonId2110291');
        this.txtLocation    = $('#jsonId2110301');
        this.slcTriggeredBy = $('#jsonId2141');
        this.btnSaveChanges = $('.button-primary');
    }

    async fillMetadata(metadata) {
        metadata.officerName    !== '' && await t
                                                .typeText(this.txtOfficerName, metadata.officerName, { replace: true })
                                                .pressKey('enter');
        metadata.partner        !== '' && await t
                                                .typeText(this.txtPartner, metadata.partner, { replace: true })
                                                .pressKey('enter');
        metadata.unit           !== '' && await t
                                                .typeText(this.txtUnit, metadata.unit, { replace: true })
                                                .pressKey('enter');
        metadata.event          !== '' && await t
                                                .click(this.txtEvent)
                                                .click(this.btnClearEvent)
                                                .typeText(this.txtEvent, metadata.event)
                                                .pressKey('enter');
        metadata.ticketOne      !== '' && await t.typeText(this.txtTicketOne, metadata.ticketOne, { replace: true });
        metadata.ticketTwo      !== '' && await t.typeText(this.txtTicketTwo, metadata.ticketTwo, { replace: true });
        metadata.dispatchOne    !== '' && await t.typeText(this.txtDispatchOne, metadata.dispatchOne, { replace: true });
        metadata.dispatchTwo    !== '' && await t.typeText(this.txtDispatchTwo, metadata.dispatchTwo, { replace: true });
        metadata.notes          !== '' && await t.typeText(this.txtNotes, metadata.notes, { replace: true });
        metadata.retained       !== '' && await t.click(this.slcRetained).click(this.slcRetained.find('option').withText(metadata.retained));
        metadata.latitude       !== '' && await t.typeText(this.txtLatitude, metadata.latitude, { replace: true });
        metadata.longitude      !== '' && await t.typeText(this.txtLongitude, metadata.longitude, { replace: true });
        metadata.location       !== '' && await t.typeText(this.txtLocation, metadata.location, { replace: true });
        metadata.triggeredBy    !== '' && await t.click(this.slcTriggeredBy).click(this.slcTriggeredBy.find('option').withText(metadata.triggeredBy));
        await t.click(this.btnSaveChanges);
    }
}
export default new MetadataPage();