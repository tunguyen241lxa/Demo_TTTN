const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get roleUser() { return $("#form-usertype");}
    get inputUsername () { return $("#form-username"); }
    get inputPassword () { return $("#form-password"); }
    get btnSubmit() { return $('button[type="submit"]') }

  /**
   * Confirm password
   * 
   * 
  */
  get inputOldPass() {
    return $("#old_password");
  }

  get inputNewPass1() {
    return $("#new_passwordl1");
  }

  get reInputNewPass() {
    return $("#new_passwordl1_1");
  }

  get inputPass2() {
    return $("#new_passwordl2");
  }

  get reInputPass2() {
    return $("#new_passwordl2_1");
  }

  get btnSubAccount() {
    return $('button[type="submit"]')
    
  }

  get btnLogSys() {
    return $("a.btn-light");
  }

  get btnPageSys() {
    return $("a.btn-get-started");
  }

  get btnLogAccount() {
    return $("button[type='button']")
  }

  get btnEditPage() {
    return $(".singlebutton button.btn-secondary");
  }

  get btnDefault() {
    return $(".singlebutton:nth-child(1) button.btn-secondary");
  }

  get courseMenuSet() {
    return $("a#action-menu-toggle-9");
  }

  get courseMenuAct() {
    return $(".show .dropdown-menu a.editing_hide");
  }

  get boardCard() {

    return $(".card-text .dashboard-card-deck .dashboard-card:nth-child(1)");
  }

  get menuCard() {
    return $("#page-footer");
  }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
  async login(username, password) {
    await (await this.btnPageSys).click();
    await (await this.btnLogSys).click();
    await (await this.btnLogAccount).click();
    await (await this.roleUser).selectByAttribute("value", "svcq");;
    await (await this.inputUsername).setValue(username);
    await (await this.inputPassword).setValue(password);
    await (await this.btnSubmit).click();
  }

   
  
  async confirmAccount(password1, password2) {
    await (await this.inputOldPass).setValue(password2);
    await (await this.inputNewPass1).setValue(password1);
    await (await this.reInputNewPass).setValue(password1);
    await (await this.inputPass2).setValue(password2);
    await (await this.reInputPass2).setValue(password2);
    await (await this.btnSubAccount).click();
  }

  async edit() {
    await (await this.btnEditPage).click();
    await (await this.btnDefault).isExisting();

    await (await this.boardCard).scrollIntoView();

    await (await this.courseMenuSet).click();
    await (await this.courseMenuAct).click();
    await (await this.boardCard).not.isExisting();

    await (await this.btnDefault).click();  
    await (await this.menuCard).scrollIntoView();
    await (await this.boardCard).isExisting();
    
  }
  
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
  openConfirmAcc() {
    return super.open("");
  }
}

module.exports = new LoginPage();
