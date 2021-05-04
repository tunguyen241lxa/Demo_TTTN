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
    get btnHome() { return $("button.btn"); }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login(username, password) {
        await (await this.roleUser).selectByAttribute("value", "svcq");;
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

  
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
