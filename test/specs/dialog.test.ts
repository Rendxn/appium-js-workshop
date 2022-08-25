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

  it('Verify that the app adjusts when orientation is changed', async () => {
    console.log(await driver.getOrientation())
    await driver.setOrientation('LANDSCAPE')

    await driver.saveScreenshot('./screenshots/landscape.png')
    await dialog.appBtn.click()

    await driver.setOrientation('PORTRAIT')
    await driver.back()
    await driver.saveScreenshot('./screenshots/portrait.png')
  })

  it('Verify scroll', async () => {
    await dialog.viewBtn.click()
    await driver.touchAction([
      { action: 'press', x: 500, y: 1000 },
      { action: 'moveTo', x: 500, y: 500 },
      'release',
    ])
  })
})
