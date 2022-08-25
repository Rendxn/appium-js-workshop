export class DialogPage {
  get appBtn() {
    return $('~App')
  }
  get alertDialogBtn() {
    return $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
  }
  get textEntryDialogBtn() {
    return $('//android.widget.Button[@content-desc="Text Entry dialog"]')
  }
  get usernameField() {
    return $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]'
    )
  }
  get passwordField() {
    return $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]'
    )
  }
  get dialogOkBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]')
  }
  get cancelBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button2"]')
  }
  get viewBtn() {
    return $('//android.widget.TextView[@content-desc="Views"]')
  }
}
