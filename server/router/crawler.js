const express = require('express');
const puppeteer = require('puppeteer');
const firebase = require('../config/firebase');
const router = express.Router();

router.get('/five-thirty-eight', (req, res) => {
  crawler();
});
const crawler = async () => {
  try {
    const browser  = await puppeteer.launch({ headless: true });
    const fivethirtyeightPage = await browser.newPage();
    const pollyVotePage = await browser.newPage();

    // FiveThiryEight
    await fivethirtyeightPage.goto('https://projects.fivethirtyeight.com/polls/president-general/national/');
    const fivethirtyeightResult = await fivethirtyeightPage.evaluate(async () => {
      const biden = document.querySelector('.label-group .Biden-general');
      const trump = document.querySelector('.label-group .Trump-general');
        return {
          date: Date.now(),
          compnay: '538',
          biden: biden.textContent,
          trump: trump.textContent,
        }
      });
    await fivethirtyeightPage.waitFor(3000);
    await fivethirtyeightPage.close();
    
    // Pollyvote
    await pollyVotePage.goto('https://pollyvote.com/en/category/forecasting-method/pollyvote/');
    await pollyVotePage.waitFor(1000);
    const pollyVoteResult = await pollyVotePage.evaluate(async () => {
      const table = document.getElementsByClassName('level-0')[0];
      const biden = table.nextSibling.nextSibling.textContent;
      const trump = table.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
      return {
        date: Date.now(),
        compnay: 'pollyvote',
        biden,
        trump,
      }
    });
    console.log(fivethirtyeightResult,  pollyVoteResult);
    await pollyVotePage.waitFor(3000);
    await pollyVotePage.close();
    await browser.close();
  } catch (e) {
    console.error(e);
  }
}

const crawler = async () => {
  try {
    const browser  = await puppeteer.launch({ headless: true });
    const fivethirtyeightPage = await browser.newPage();
    const pollyVotePage = await browser.newPage();

    // FiveThiryEight
    await fivethirtyeightPage.goto('https://projects.fivethirtyeight.com/polls/president-general/national/');
    const fivethirtyeightResult = await fivethirtyeightPage.evaluate(async () => {
      const biden = document.querySelector('.label-group .Biden-general');
      const trump = document.querySelector('.label-group .Trump-general');
        return {
          date: Date.now(),
          compnay: '538',
          biden: biden.textContent,
          trump: trump.textContent,
        }
      });
    await fivethirtyeightPage.waitFor(3000);
    await fivethirtyeightPage.close();
    
    // Pollyvote
    await pollyVotePage.goto('https://pollyvote.com/en/category/forecasting-method/pollyvote/');
    await pollyVotePage.waitFor(1000);
    const pollyVoteResult = await pollyVotePage.evaluate(async () => {
      const table = document.getElementsByClassName('level-0')[0];
      const biden = table.nextSibling.nextSibling.textContent;
      const trump = table.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
      return {
        date: Date.now(),
        compnay: 'pollyvote',
        biden,
        trump,
      }
    });
    
    await pollyVotePage.waitFor(3000);
    await pollyVotePage.close();
    await browser.close();
  } catch (e) {
    console.error(e);
  }
}

module.exports = router;
