const LoginPage = require('../pageobjects/login.page');
const ApiPage = require('../pageobjects/api.page')
const CloudPage = require('../pageobjects/cloud.page')


describe("My Login application",  () => {
  it("should login with valid credentials", async () => {
    // await LoginPage.open();
    // await LoginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    // await ApiPage.getData(process.env.TEST_API);
  });

  it("should menucard edit successfull", async () => {
    // await LoginPage.edit();

  })
  // it('should reset password successfully', async () => {
  //   await CloudPage.open();
  //   await CloudPage.reset(process.env.TEST_EMAIL);
  // })
  it("should change password successfully", async () => {
    // const elAccount = await $("button.btn");
    // await elAccount.click();
    // await LoginPage.confirmAccount(
    //   process.env.TEST_PASSWORD,
     
    //   process.env.TEST_PASSWORD2
    // );

  });
});

describe("Check Api", () => {
  it("should display the correct of course api", async () => {
    await CloudPage.open();
    await CloudPage.reset(process.env.TEST_EMAIL);
    let url = await CloudPage.imageCapcha();
    console.log("uri", url);
    // Set the download behavior of the page right before the download

    // await browser.switchWindow(url);
    // await browser.cdp("Page", "setDownloadBehavior", {
    //   behavior: "allow",
    //   downloadPath: "./img",
    // });

    const options = {
      url: url,
      dest: "./test/img/img.png", // will be saved to /path/to/dest/image.jpg
    };
    await CloudPage.downloadImg(options);
    // Give enough time to let the file download
    await browser.pause(5000);
    const filePath = "./test/img/img.png";

    await browser.newWindow('https://brandfolder.com/workbench/extract-text-from-image');
    const el = await $(".fsp-drop-pane__input");
    await el.scrollIntoView();
    const remoteFilePath = await browser.uploadFile(filePath);

    await el.setValue(remoteFilePath);
    await browser.pause(10000);

    const text = await $("textarea#extracted_text");
    const getTextCapcha = await text.getText();
    console.log("Text capcha:", getTextCapcha);
    
    await browser.pause(3000);
    browser.switchWindow('https://id.ou.edu.vn/auth/forgotpwd');
    const confirmCapcha = await $("input#form-captcha");
    await confirmCapcha.setValue(getTextCapcha);

    const btnConfirmCapcha = await $("button#resetbtn");
    await btnConfirmCapcha.click();

    // await CloudPage.batchAnnotateFiles(fileName);
    // await CloudPage.readImg(fileName);
  });
})


