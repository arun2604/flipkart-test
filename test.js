const {By,Key,Builder} = require('selenium-webdriver');
require('chromedriver');

const test = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.flipkart.com/");
  await driver.findElement(By.xpath('/html/body/div[2]/div/div/button')).click()
  await driver.findElement(By.name('q')).sendKeys('iphone 14')
  await driver.findElement(By.xpath('//*[@id="container"]/div/div[1]/div[1]/div[2]/div[2]/form/div/button')).click()

  await driver.get('https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAIB1T9P&marketplace=FLIPKART&q=iphone+14&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&iid=50c33213-5bd1-48ff-bad2-4ccc442f93c3.MOBGHWFHSV7GUFWA.SEARCH&ssid=2ku318ql280000001685986603082&qH=860f3715b8db08cd')
  await driver.findElement(By.xpath('//*//*[@id="container"]/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[1]/button')).click()
  await driver.findElement(By.xpath('//*[@id="container"]/div/div[2]/div/div/div[1]/div/div[4]/div/form/button/span')).click()

  await driver.takeScreenshot()
}
test()