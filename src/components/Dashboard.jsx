import React from 'react';
import StockSearch from './StockSearch';
import Watchlist from './Watchlist';
import NewsFeed from './NewsFeed';
import StockDetails from './StockDetails';
import SentimentAnalysis from './SentimentAnalysis';

function Dashboard() {
  return (
    <div className="dashboard">
      <StockSearch />
      <div className="dashboard-content">
        <Watchlist />
        <StockDetails />
        <SentimentAnalysis />
      </div>
      <NewsFeed />
    </div>
  );
}

export default Dashboard; 