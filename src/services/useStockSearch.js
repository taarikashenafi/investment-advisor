// hooks/useStockSearch.js
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { getSearchSuggestions } from '../services/stockApi';

export const useStockSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedFetchSuggestions = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const results = await getSearchSuggestions(searchQuery);
        setSuggestions(results);
      } catch (err) {
        setError('Failed to fetch suggestions');
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedFetchSuggestions(query);
    return () => debouncedFetchSuggestions.cancel();
  }, [query, debouncedFetchSuggestions]);

  return {
    query,
    setQuery,
    suggestions,
    isLoading,
    error,
    clearSuggestions: () => setSuggestions([])
  };
};