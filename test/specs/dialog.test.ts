import { DialogPage } from 'test/pageobjects'

describe('Dialog - ', () => {
  let dialog: DialogPage

  before(() => {
    dialog = new DialogPage()
  })

  it('Verify that the text entry dialog username & password fields are editable', async () => {
    await dialog.appBtn.click()
    await dialog.alertDialogBtn.click()
    await dialog.textEntryDialogBtn.click()

    await dialog.usernameField.clearValue()
    await dialog.usernameField.addValue('Test User')

    await dialog.passwordField.clearValue()
    await dialog.passwordField.addValue('Test Pass')

    const text = await dialog.usernameField.getText()
    expect(text).toEqual('Test User')

    await dialog.dialogOkBtn.click()
  })
})
