import { Selector as $, t } from 'testcafe';
import Page from '../../page'

class LoginPage extends Page {
    constructor() {
        super();
        this.txtUserName   = $('#Username');
        this.txtPassword   = $('#Password');
        this.btnLogin      = $('.login');
    }

    async login(username, password) {
        await t
            .typeText(this.txtUserName, username)
            .typeText(this.txtPassword, password)
            .click(this.btnLogin);
    }
}
export default new LoginPage();