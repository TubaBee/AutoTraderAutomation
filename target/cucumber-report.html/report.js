$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AutoMainPage.feature");
formatter.feature({
  "name": "in Autoreader Main Page taking some of webelement",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Advanced Search page examples",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@advanceSearch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to access autotrader main page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click advance search",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_click_advance_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter zipcode",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_enter_zipcode()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"zip32701\"]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ER7PL0P\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Tuba\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63836}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b4a40220077c7c1df16572a857524ba0\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"zip32701\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.automation.stepDefination.MainPageStep.user_enter_zipcode(MainPageStep.java:58)\r\n\tat ✽.user enter zipcode(file:src/test/resources/Features/AutoMainPage.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Certified checkbox under Condition",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_click_Certified_checkbox_under_Condition()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Convertible checkbox under Style",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_click_Convertible_checkbox_under_Style()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User choose year 2017 to 2020",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_choose_year_to(Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User choose BMW under Make",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_choose_BMW_under_Make()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});