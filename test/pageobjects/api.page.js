const Page = require("./page");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ApiPage extends Page {

  

  open () {
      return super.open("202/my/");
  }
}

module.exports = new ApiPage();
