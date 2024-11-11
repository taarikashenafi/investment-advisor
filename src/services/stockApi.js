// services/stockApi.js
import axios from 'axios';

const FMP_API_KEY = import.meta.env.VITE_FMP_API_KEY;
const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const POLYGON_API_KEY = import.meta.env.VITE_POLYGON_API_KEY;

// Create axios instances for each API
const fmpApi = axios.create({
  baseURL: 'https://financialmodelingprep.com/api'
});

const finnhubApi = axios.create({
  baseURL: 'https://finnhub.io/api/v1'
});

const polygonApi = axios.create({
  baseURL: 'https://api.polygon.io/v2'
});

// Cache implementation
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  cache.delete(key);
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    timestamp: Date.now(),
    data
  });
};

// Search suggestions
export const getSearchSuggestions = async (query) => {
  if (!query) return [];
  
  const cacheKey = `search_${query}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fmpApi.get(`/v3/search?query=${query}&limit=10&apikey=${FMP_API_KEY}`);
    const suggestions = response.data.map(item => ({
      symbol: item.symbol,
      name: item.name,
      type: item.type
    }));
    
    setCachedData(cacheKey, suggestions);
    return suggestions;
  } catch (error) {
    console.error('Error fetching search suggestions:', error);
    return [];
  }
};

// Company profile and basic info
const getCompanyProfile = async (ticker) => {
  const cacheKey = `profile_${ticker}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fmpApi.get(`/v3/profile/${ticker}?apikey=${FMP_API_KEY}`);
    const profile = response.data[0];
    setCachedData(cacheKey, profile);
    return profile;
  } catch (error) {
    console.error('Error fetching company profile:', error);
    throw error;
  }
};

// Real-time price data
export const getRealTimePrice = async (ticker) => {
  try {
    const response = await finnhubApi.get(`/quote?symbol=${ticker}&token=${FINNHUB_API_KEY}`);
    return {
      currentPrice: response.data.c,   // Current price
      change: response.data.d,          // Change
      changePercent: response.data.dp  // Change percentage
    };
  } catch (error) {
    console.error('Error fetching real-time price:', error);
    throw error;
  }
};

// Historical price data
const getHistoricalData = async (ticker, timeRange) => {
  const cacheKey = `history_${ticker}_${timeRange}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const now = new Date();
  let fromDate;

  switch (timeRange) {
    case '5D':
      fromDate = new Date(now - 5 * 24 * 60 * 60 * 1000);
      break;
    case '1M':
      fromDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case '6M':
      fromDate = new Date(now.setMonth(now.getMonth() - 6));
      break;
    case '1Y':
      fromDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    case '5Y':
      fromDate = new Date(now.setFullYear(now.getFullYear() - 5));
      break;
    case 'ALL':
      fromDate = new Date('2000-01-01');
      break;
    default:
      fromDate = new Date(now.setMonth(now.getMonth() - 1));
  }

  try {
    const response = await polygonApi.get(
      `/aggs/ticker/${ticker}/range/1/day/${fromDate.toISOString().split('T')[0]}/${new Date().toISOString().split('T')[0]}?apiKey=${POLYGON_API_KEY}`
    );
    
    const formattedData = response.data.results.map(item => ({
      date: new Date(item.t).toLocaleDateString(),
      price: item.c
    }));

    setCachedData(cacheKey, formattedData);
    return formattedData;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }
};

// News data
const getNewsData = async (ticker) => {
  const cacheKey = `news_${ticker}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await finnhubApi.get(
      `/company-news?symbol=${ticker}&from=${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}&to=${new Date().toISOString().split('T')[0]}&token=${FINNHUB_API_KEY}`
    );
    
    const news = response.data.slice(0, 5).map(item => ({
      id: item.id,
      title: item.headline,
      date: new Date(item.datetime * 1000).toLocaleDateString(),
      url: item.url
    }));

    setCachedData(cacheKey, news);
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Sentiment analysis
export const getSentimentData = async (ticker) => {
  try {
    const response = await fmpApi.get(`/v3/rating/${ticker}?apikey=${FMP_API_KEY}`);
    return {
      ratingRecommendation: response.data[0]?.ratingRecommendation
    };
  } catch (error) {
    console.error('Error fetching sentiment data:', error);
    throw error;
  }
};

// Main function to get all stock data
export const getStockData = async (ticker, timeRange = '1M') => {
  try {
    const [profile, price, historical, news, sentiment] = await Promise.all([
      getCompanyProfile(ticker),
      getRealTimePrice(ticker),
      getHistoricalData(ticker, timeRange),
      getNewsData(ticker),
      getSentimentData(ticker)
    ]);

    return {
      name: profile.companyName,
      ticker: profile.symbol,
      price: price.currentPrice,
      change: price.change,
      changePercent: price.changePercent,
      chartData: historical,
      sentiment,
      news,
      profile: {
        industry: profile.industry,
        sector: profile.sector,
        website: profile.website,
        description: profile.description,
        employees: profile.fullTimeEmployees,
        ceo: profile.ceo
      }
    };
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};