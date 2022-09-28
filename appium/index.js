const wdio = require("webdriverio");

// console.log('Joyride test: running in environment', JSON.stringify(process.env));
let platformName;
let browserName;
let automationName;
if (process.env.DEVICEFARM_DEVICE_PLATFORM_NAME === "Android") {
    console.log('Joyride Test: Running on Android.');
    platformName = 'Android';
    browserName = 'Chrome';
    automationName = 'UIAutomator2';
} else if (process.env.DEVICEFARM_DEVICE_PLATFORM_NAME === "iOS") {
    console.log('Joyride Test: Running on iOS.');
    platformName = 'iOS';
    browserName = 'Safari';
    automationName = 'XCUITest';
} else {
    console.log('Joyride Test: Running on Desktop.');
    platformName = undefined;
    browserName = 'Chrome';
}

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName,
        browserName,
        automationName
    }
};


async function main() {
    const browser = await wdio.remote(opts);

    //const field = await client.$("android.widget.EditText");
    //await field.setValue("Hello World!");
    //const value = await field.getText();
    //assert.strictEqual(value,"Hello World!");
    await browser.url('https://joyride.fm?stats=true')
    await browser.pause(3000)
    const tutorialButton = await browser.$('#tutorialButton')
    await tutorialButton.click()
    await browser.pause(1500)
    const startTutorial = await browser.$('#startTutorial')
    await startTutorial.click()
    await browser.pause(2000)
    const nextEarnPoints = await browser.$('#nextEarnPoints')
    await nextEarnPoints.click()
    await browser.pause(10000)
    const nextTilt = await browser.$('#nextTilt')
    await nextTilt.click()
    await browser.pause(10000)
    const nextLeap = await browser.$('#nextLeap')
    await nextLeap.click()
    await browser.pause(10000)
    const nextLong = await browser.$('#nextLong')
    await nextLong.click()
    await browser.pause(5000)
    await browser.deleteSession();
}

main();