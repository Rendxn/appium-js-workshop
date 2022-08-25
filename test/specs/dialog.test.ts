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

  it.skip('Verify that the app adjusts when orientation is changed', async () => {
    console.log(await driver.getOrientation())
    await driver.setOrientation('LANDSCAPE')

    await driver.saveScreenshot('./screenshots/landscape.png')
    await dialog.appBtn.click()

    await driver.setOrientation('PORTRAIT')
    await driver.back()
    await driver.saveScreenshot('./screenshots/portrait.png')
  })

  it.skip('Verify scroll', async () => {
    await dialog.viewBtn.click()
    await driver.touchAction([
      { action: 'press', x: 500, y: 1400 },
      { action: 'moveTo', x: 500, y: 300 },
      'release',
      { action: 'press', x: 500, y: 1400 },
      { action: 'moveTo', x: 500, y: 300 },
      'release',
      { action: 'press', x: 500, y: 1400 },
      { action: 'moveTo', x: 500, y: 300 },
      'release',
    ])
    await dialog.tabsBtn.click()
    await dialog.contentByIdBtn.click()

    const tabs = await dialog.tabs

    for (const tab of tabs) {
      const isEnabled = await tab.isEnabled()
      const isSelected = await tab.isSelected()
      const isDisplayed = await tab.isDisplayed()

      console.log({ isEnabled, isSelected, isDisplayed })
    }
  })

  it.skip('Verify timeouts', async () => {
    // driver.setImplicitTimeout(10000)
    // driver.setTimeouts(10000)
    // driver.pause(10000)

    await dialog.viewBtn.click()
    // dialog.tabsBtn.click()
  })

  it.only('Verify the repeat alarm options has attribute checked when selected', async () => {
    await dialog.appBtn.click()
    await dialog.alertDialogBtn.click()
    await dialog.repeatAlarmBtn.click()
    const text = await dialog.getWeekdayByIndex(0).getText()
    let isChecked = await dialog.getWeekdayByIndex(0).getAttribute('checked')
    expect(text).toEqual('Every Monday')
    expect(isChecked).toEqual('false')

    await dialog.getWeekdayByIndex(0).click()
    isChecked = await dialog.getWeekdayByIndex(0).getAttribute('checked')
    expect(isChecked).toEqual('true')
  })
})
