const FormsPage = require('/login.page')
const SecurePage = require('/secure.page')

describe('Fill the form screen', () => {
    it('should fill the form', async () => {
        await FormsPage.open()

        await FormsPage.forms('Testing fill the field', 'Appium is awesome')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'This button is active')   
    })
})


