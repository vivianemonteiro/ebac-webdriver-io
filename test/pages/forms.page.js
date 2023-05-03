
const Page = require('./page');


class FormsPage extends Page {
   
    get #enterformspage (){
        return $('//android.widget.Button[@content-desc="Forms"]/android.view.ViewGroup/android.widget.TextView')
    }

    async goToForms (){
        this.#enterformspage.click()
    }

    get inputField () {
        return $('#text-input');
    }

    get switchBtn () {
        return $('#switch');
    }

    get drpDwn () {
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
    }

    get drpOption () {
        return $('///hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]')
    }
  
    get actvBtn () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async forms (username, option) {
        await this.inputField.setValue(username);
        await this.switchBtn.click();
        await (await this.drpDwn).click();
        await this.drpOption.click(option);
        await this.actvBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('forms');
    }
}

module.exports = new FormsPage();
