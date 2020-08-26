require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.FRED;

// 경제성장률: 분기
// 가처분소득: 월
// 주식가격(Dow, S&P, NASDAQ)
// 주택가격지수
// 임금상승률: Earning
// 실업률 
// 인플레이션율
const list = [
  'gdp',
  'disposable',
  'nasdaq',
  'dji',
  'housePrice',
  'averageHourlyEarnnig',
  'unemployment',
  'inflationRate'
]
function urlGenerator(code, unit='lin') {
  return`https://api.stlouisfed.org/fred/series/observations?series_id=${code}&api_key=${API_KEY}&file_type=json&units=${unit}&frequency=q`;
};

async function getData() {
  const result = await Promise.all([
    gdp,
    disposableIncome,
    nasdaq,
    dji,
    housePriceIndex,
    averageHourlyEarningTotalPrivate,
    unemploymetRate,
    inflationRate
  ]);
  const data = parseObservation(result);
  return data;
}

function parseObservation(data) {
  return data.map(({ data: { observations }}, i) => (
    {
      title: list[i],
      data: observations,
    }
  ));
}

const GDP_URL = urlGenerator('GDPC1', 'pc1');
const DISPOSALBE_INCOME_URL = urlGenerator('DSPIC96', 'pc1');
const NASDAQ_URL = urlGenerator('NASDAQCOM');
const DJI_URL = urlGenerator('DJIA');
const HOUSE_PRICE_URL = urlGenerator('CSUSHPINSA');
const AVERAGE_HOURLY_EARING_TOTAL_PRIVATE_URL = urlGenerator('AHETPI', 'pc1');
const UNEMPLOYMENT_RATE_URL = urlGenerator('UNRATE');
const INFLATION_RATE_URL = urlGenerator('CPILFESL', 'pc1');

const gdp = axios.get(GDP_URL);
const disposableIncome = axios.get(DISPOSALBE_INCOME_URL);
const nasdaq = axios.get(NASDAQ_URL);
const dji = axios.get(DJI_URL);
const housePriceIndex = axios.get(HOUSE_PRICE_URL);
const averageHourlyEarningTotalPrivate = axios.get(AVERAGE_HOURLY_EARING_TOTAL_PRIVATE_URL);
const unemploymetRate = axios.get(UNEMPLOYMENT_RATE_URL);
const inflationRate = axios.get(INFLATION_RATE_URL);

module.exports = {
  getData,
  data: getData(),
};

// https://stackoverflow.com/questions/52669596/promise-all-with-axios