$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AutoMainPage.feature");
formatter.feature({
  "name": "in Autoreader Main Page taking some of webelement",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should able to see \"\u003cmethod\u003e\" browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "method"
      ]
    },
    {
      "cells": [
        "Browse by Make"
      ]
    },
    {
      "cells": [
        "Browse by Style"
      ]
    },
    {
      "cells": [
        "Advanced Search"
      ]
    },
    {
      "cells": [
        "Search"
      ]
    },
    {
      "cells": [
        "Make"
      ]
    },
    {
      "cells": [
        "Model"
      ]
    }
  ]
});
formatter.scenario({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Browse by Make\" browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_able_to_see_browser(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.automation.stepDefination.MainPageStep.user_should_able_to_see_browser(MainPageStep.java:27)\r\n\tat ✽.user should able to see \"Browse by Make\" browser(file:src/test/resources/Features/AutoMainPage.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Browse by Style\" browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_able_to_see_browser(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ER7PL0P\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Tuba\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7055ecf1abe084111435a603b2a5c9f9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.automation.stepDefination.MainPageStep.user_should_able_to_see_browser(MainPageStep.java:27)\r\n\tat ✽.user should able to see \"Browse by Style\" browser(file:src/test/resources/Features/AutoMainPage.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Advanced Search\" browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_able_to_see_browser(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ER7PL0P\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Tuba\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7055ecf1abe084111435a603b2a5c9f9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.automation.stepDefination.MainPageStep.user_should_able_to_see_browser(MainPageStep.java:27)\r\n\tat ✽.user should able to see \"Advanced Search\" browser(file:src/test/resources/Features/AutoMainPage.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Search\" browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_able_to_see_browser(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ER7PL0P\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Tuba\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7055ecf1abe084111435a603b2a5c9f9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.automation.stepDefination.MainPageStep.user_should_able_to_see_browser(MainPageStep.java:27)\r\n\tat ✽.user should able to see \"Search\" browser(file:src/test/resources/Features/AutoMainPage.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Make\" browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_able_to_see_browser(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ER7PL0P\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Tuba\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7055ecf1abe084111435a603b2a5c9f9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.automation.stepDefination.MainPageStep.user_should_able_to_see_browser(MainPageStep.java:27)\r\n\tat ✽.user should able to see \"Make\" browser(file:src/test/resources/Features/AutoMainPage.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "On the home page, verify that the following types of elements are present",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@autotrader"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to access autotrader web page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Model\" browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_able_to_see_browser(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ER7PL0P\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Tuba\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7055ecf1abe084111435a603b2a5c9f9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.automation.stepDefination.MainPageStep.user_should_able_to_see_browser(MainPageStep.java:27)\r\n\tat ✽.user should able to see \"Model\" browser(file:src/test/resources/Features/AutoMainPage.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});