const LoginPage = require('../pageobjects/login.page');
// const CloudPage = require('../pageobjects/cloud.page')

describe("My Login application",  () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
  });

  // it('should reset password successfully', async () => {
  //   await CloudPage.open();
  //   await CloudPage.reset(process.env.TEST_EMAIL);
  // })
  it("should url 202 existing", async () => {
    // if (await expect(LoginPage.btnHome).isDisplayed() == true) {
    // await LoginPage.btnHome.click();

    // await LoginPage.btnHome.click();
    // } 
    await browser.debug();
    const el = await browser.getUrl();
    console.log(el);
    // el.isEqual(`${process.env.BASE_URL}${process.env.TEST_HOME}`);
  });
});


