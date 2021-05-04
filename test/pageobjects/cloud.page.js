const Page = require("./page");

class CloudPage extends Page {
  get btnResetPassword() {
    return $('button[type="button"]');
  }
  get inputEmail() {
    return $("#form-email");
  }
  get roleResetPass() {
    return $("#form-usertype");
  }

  async reset(emailUser) {
    await (await this.btnResetPassword).click();
    await (await this.inputEmail).setValue();
    await (await this.roleResetPass).selectByAttribute("value", "svcq");;

  }



  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("forgotpwd");
  }
}

module.exports = new CloudPage();
