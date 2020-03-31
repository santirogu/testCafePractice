import { Selector as $, t } from 'testcafe';
import Page from '../page'

class EventsPage extends Page {
    constructor() {
        super();
        this.btnCreateNewEvent  = $('.button-primary');
        this.txtEventName       = $('input[formcontrolname="EventName"]');
        this.txtDescription     = $('input[formcontrolname="Description"]');
        this.btnSave            = $('button[type="submit"]');
    }

    async createEvent(event) {
        await t
            .click(this.btnCreateNewEvent)
            .typeText(this.txtEventName, event.eventName)
            .typeText(this.txtDescription, event.description)
            .click(this.btnSave);
    }
}

export default new EventsPage();