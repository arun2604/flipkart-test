const {By,Key,Builder} = require('selenium-webdriver');
require('chromedriver');

const test = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize()

  await driver.get("https://www.flipkart.com/");
  await driver.findElement(By.xpath('/html/body/div[2]/div/div/button')).click()
  await driver.findElement(By.name('q')).sendKeys('redmi 10')
  await driver.findElement(By.xpath('//*[@id="container"]/div/div[1]/div[1]/div[2]/div[2]/form/div/button')).click()

  await driver.get('https://www.flipkart.com/redmi-note-12-pro-5g-onyx-black-128-gb/p/itmbc9fd7adaa32a?pid=MOBGH2UVMHEPGSHM&lid=LSTMOBGH2UVMHEPGSHMZTFAGO&marketplace=FLIPKART&q=redmi+12+pro&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_2_8_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_8_na_na_ps&fm=Search&iid=a81cbe33-01e3-4196-b515-41914690f4c5.MOBGH2UVMHEPGSHM.SEARCH&ppt=sp&ppn=sp&ssid=tks104kne80000001686118804859&qH=38db84aa91264518')

  await driver.findElement(By.xpath('//*//*[@id="container"]/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[1]/button')).click()
  await driver.takeScreenshot().then(
    function(image) {
      require('fs').writeFileSync('E:\screenSHot\screenshot_img',image,'base64')
    }
  )
}
test()
