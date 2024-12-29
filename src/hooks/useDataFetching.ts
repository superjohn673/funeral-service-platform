import { useState, useEffect } from "react";
import axios from "../configs/axios";
import { apiCache } from "../services/cache";

interface FetchOptions {
  cacheKey?: string;
  dependencies?: any[];
}

export function useDataFetching<T>(url: string, options: FetchOptions = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (options.cacheKey) {
          const cachedData = apiCache.get<T>(options.cacheKey);
          if (cachedData) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }

        const response = await axios.get(url);
        setData(response.data);

        if (options.cacheKey) {
          apiCache.set(options.cacheKey, response.data);
        }
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, options.dependencies || [url]);

  return { data, loading, error };
}
