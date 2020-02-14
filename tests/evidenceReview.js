import { Selector } from 'testcafe';
import credentials from '../data/credentials'

fixture `Edit Evidence Metadata`
    .page `https://qacommand-autom.usgoviowa.cloudapp.usgovcloudapi.net:803/`;

    test('Start', async t => {
        const evidencesList = Selector('.recent-video-section ul li');
        const noteTextToType = 'Automation';
        await t
            .maximizeWindow()
            .typeText('#Username', credentials.username)
            .typeText('#Password', credentials.password)
            .click('.login')
            .click('.ad-pn-32')
            .click('.adv-search-btn')
            .click('#jsonIdSearchDateStartedFrom input')
            .pressKey('left left left left left')
            .typeText('#jsonIdSearchDateStartedFrom input', '01012020')
            .click('.frm-controls .button-primary')
            .click(evidencesList.nth(0))
            .click('#openmeta')
            .typeText('#jsonId21131', noteTextToType)
            .click('.button-primary')
            .expect().eql(noteTextToType);

    });