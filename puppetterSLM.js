const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        //slowMo: 250 // slow down by 250ms
    });
    const page = await browser.newPage();
    const title = '.post > .entry-body > .entry-header > .post-thumbnail > a > .attachment-ixion-featured-image';
    const tagsSelector = '.post > .entry-body > .entry-footer > .tags-links a';
    // const tags = 'div.entry-meta span.cat-links a';

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://blog.shortletsmalta.com');
    await page.waitForSelector(title);
    await page.click(title);
    await navigationPromise;

    await page.waitForSelector(tagsSelector);
    /*const select = await page.evaluate(() =>
        Array.from(
            document.querySelector('.post > .div > .footer > .span > .tags-links a')
        ).map(tags => tags.innerHTML)
    );
    console.warn(tags)*/
    // console.table(select);

    browser.close();
}

run();

// #post-4999 > div > header > div.entry-meta > span.cat-links > a:nth-child(1)
// #post-4999 > div > footer > span > a:nth-child(1)
// '.post > .entry-body > .entry-footer > .tags-links a')