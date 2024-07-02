import React, { createContext, useState, useEffect } from 'react';

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('ALL');

  const startMonitoring = async (url) => {
    setLoading(true);
    try {
      const response = await fetch('https://testunityback.onrender.com/monitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRequests(data);
      applyFilter(data, filter);
    } catch (error) {
      console.error('Error fetching network requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilter = (requests, filter) => {
    let filtered = requests;
    if (filter !== 'ALL') {
      filtered = requests.filter(request => {
        if (filter === 'XHR') return request.headers['x-requested-with'] === 'XMLHttpRequest';
        if (filter === 'JS') return request.url.endsWith('.js');
        if (filter === 'CSS') return request.url.endsWith('.css');
        if (filter === 'IMG') return request.url.match(/\.(jpeg|jpg|gif|png|svg|webp)$/);
        if (filter === 'MEDIA') return request.url.match(/\.(mp4|mp3|ogg|wav)$/);
        if (filter === 'FONT') return request.url.match(/\.(woff|woff2|ttf|otf)$/);
        if (filter === 'DOC') return request.url.match(/\.(html|pdf|doc|docx)$/);
        if (filter === 'WS') return request.url.startsWith('ws');
        if (filter === 'MANIFEST') return request.url.endsWith('manifest.json');
        return false;
      });
    }
    setFilteredRequests(filtered);
  };

  useEffect(() => {
    applyFilter(requests, filter);
  }, [filter, requests]);

  const setRequestFilter = (filter) => {
    setFilter(filter);
    applyFilter(requests, filter);
  };

  return (
    <NetworkContext.Provider value={{
      requests,
      filteredRequests,
      selectedRequest,
      setSelectedRequest,
      startMonitoring,
      loading,
      filter,
      setRequestFilter,
    }}>
      {children}
    </NetworkContext.Provider>
  );
};
