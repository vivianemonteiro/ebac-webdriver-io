const FormsPage = require("../screens/forms.screen");

describe('Fill the Form', () => {
    it('should fill the form', async ()  => {
        await FormsPage.goToForms()
    });
})