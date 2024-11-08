import React, { useState, useEffect } from 'react';
import Layout from './Layout'
import { Search, Star, StarOff, AlertTriangle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useStockSearch } from '../services/useStockSearch';
import { getStockData } from '../services/stockApi';

const Dashboard = () => {
  const {
    query,
    setQuery,
    suggestions,
    isLoading: isSearchLoading,
    error: searchError,
    clearSuggestions
  } = useStockSearch();

  const [selectedStock, setSelectedStock] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [timeRange, setTimeRange] = useState('1M');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const mockStockData = {
    name: "Apple Inc.",
    ticker: "AAPL",
    price: 173.25,
    change: 2.50,
    changePercent: 1.47,
    chartData: Array(30).fill().map((_, i) => ({
      date: new Date(Date.now() - (30-i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      price: 150 + Math.random() * 30
    })),
    sentiment: "Buy",
    news: [
      { id: 1, title: "Apple Announces New iPhone", date: "2024-03-15" },
      { id: 2, title: "Q1 Earnings Beat Expectations", date: "2024-03-14" },
    ]
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchStockData = async () => {
      if (!selectedStock) return;

      setIsLoading(true);
      setError(null);

      try {
        const data = await getStockData(selectedStock, timeRange);
        setStockData(data);
      } catch (err) {
        setError('Failed to fetch stock data. Please try again later.');
        setStockData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockData();
  }, [selectedStock, timeRange]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      setSelectedStock(query.toUpperCase());
      setQuery('');
      clearSuggestions();
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (symbol) => {
    setSelectedStock(symbol);
    setQuery('');
    clearSuggestions();
    setShowSuggestions(false);
  };

  const toggleFavorite = () => {
    if (!selectedStock) return;
    
    setFavorites(prev => {
      if (prev.includes(selectedStock)) {
        return prev.filter(stock => stock !== selectedStock);
      }
      return [...prev, selectedStock];
    });
  };

  return (
    <Layout>
    <div className="p-4 md:p-6 max-w-7xl mx-auto min-h-dvh flex items-center justify-center">
      {/* Search Bar */}
      <div className="relative mb-6 w-full max-w-md mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Search for a stock..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || isSearchLoading}
          >
            Search
          </button>
        </form>

        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.symbol}
                onClick={() => handleSuggestionClick(suggestion.symbol)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                <span className="font-medium">{suggestion.symbol}</span>
                <span className="ml-2 text-gray-600">{suggestion.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Favorites */}
      {favorites.length > 0 && (
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {favorites.map(symbol => (
            <button
              key={symbol}
              onClick={() => setSelectedStock(symbol)}
              className={`px-3 py-1 rounded-full border ${
                selectedStock === symbol ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {symbol}
            </button>
          ))}
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : stockData ? (
        <div className="grid gap-6">
          {/* Main Stock Info Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold">{stockData.name}</CardTitle>
                <p className="text-xl text-gray-600">{stockData.ticker}</p>
              </div>
              <button
                onClick={toggleFavorite}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                {favorites.includes(selectedStock) ? 
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" /> :
                  <StarOff className="h-6 w-6" />
                }
              </button>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold">${stockData.price.toFixed(2)}</span>
                <span className={`text-xl ${stockData.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stockData.change >= 0 ? '+' : ''}{stockData.change.toFixed(2)} ({stockData.changePercent.toFixed(2)}%)
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Chart Card */}
          <Card>
            <CardHeader>
              <div className="flex gap-2 overflow-x-auto">
                {['5D', '1M', '6M', '1Y', '5Y', 'ALL'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded ${
                      timeRange === range ? 'bg-blue-600 text-white' : 'bg-gray-100'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stockData.chartData}>
                    <XAxis dataKey="date" />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Sentiment and News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Recommendation</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {stockData.sentiment.recommendation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Price Target</p>
                    <p className="text-xl font-bold">
                      ${stockData.sentiment.priceTarget.toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent News</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {stockData.news.map((item) => (
                    <li key={item.id} className="border-b pb-2">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          Search for a stock to see details
        </div>
      )}
    </div>
    </Layout>
  );
};

export default Dashboard;


