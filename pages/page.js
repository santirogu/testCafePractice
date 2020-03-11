import { t } from 'testcafe';

const env = "https://qacommand-autom.usgoviowa.cloudapp.usgovcloudapi.net:803/";

export default class Page {
    constructor() {
        this.baseUrl = env;
    }

   /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   * @return {promise}
   */
    async goto(relativeUrl = null) {
        if (relativeUrl) {
            await t.navigateTo(`${this.baseUrl}${relativeUrl}`);
        } else {
            await t
                .maximizeWindow()
                .navigateTo(this.baseUrl);
        }
    }
}