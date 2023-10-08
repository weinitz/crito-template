/*
const puppeteer = require('puppeteer');
test('check spacing between container and headline-show-case', async () => {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1800, height: 1080 });

    const elementHandleContainer = await page.$('#showcase');
    const boxContainer = await elementHandleContainer.boundingBox();

    const elementHandleHeadlineShowCase = await page.$('.content');
    const boxHeadlineShowCase = await elementHandleHeadlineShowCase.boundingBox();

    const spacing = boxHeadlineShowCase.y - boxContainer.y;

    expect(spacing).toBe(65);

    await browser.close();
});
*/

const puppeteer = require('puppeteer');

describe('HTML and CSS check', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({headless: "new"});
    page = await browser.newPage();
    await page.goto('http://localhost:5173/index.html');
    await page.setViewport({ width: 1800, height: 1080 });
  });

  afterAll(() => {
    browser.close();
  });

  test('.contact-information-bar__content-box position and height', async () => {
    const element = await page.$('.contact-information-bar > div:nth-child(2)');
    const box = await element.boundingBox();

    expect(box.y).toBe(12);
    expect(box.height).toBe(25);
  });

  test('.header__menu__nav position', async () => {
    const element1 = await page.$('.contact-information-bar > div:nth-child(2)');
    const box1 = await element1.boundingBox();

    const element2 = await page.$('.header__menu > nav');
    const box2 = await element2.boundingBox();

    expect(box2.y - (box1.y + box1.height)).toBeCloseTo(49, -1);
  });

  test('.header height', async () => {
    const element = await page.$('.header');
    const box = await element.boundingBox();

    expect(box.height).toBe(120);
  });
});
