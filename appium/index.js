const wdio = require("webdriverio");

const opts = {
    capabilities: {
        browserName: 'chrome'
    }
};

async function main() {
    const client = await wdio.remote(opts);

    //const field = await client.$("android.widget.EditText");
    //await field.setValue("Hello World!");
    //const value = await field.getText();
    //assert.strictEqual(value,"Hello World!");
    await browser.url('https://joyride.fm')
    const apiLink = await browser.$('=API')
    await apiLink.click()

    await client.deleteSession();
}

main();