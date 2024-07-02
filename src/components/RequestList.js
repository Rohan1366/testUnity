import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';
import './RequestList.css';

const RequestList = () => {
  const { filteredRequests, selectedRequest, setSelectedRequest } = useContext(NetworkContext);

  return (
    <div className="request-list-container">
      <div className="request-list-header">
        <div>Method</div>
        <div>URL</div>
        <div>Status</div>
        <div>Time</div>
      </div>
      {filteredRequests.map((request, index) => (
        <div
          key={index}
          className={`request-list-item ${selectedRequest === request ? 'active' : ''}`}
          onClick={() => setSelectedRequest(request)}
        >
          <div>{request.method}</div>
          <div>{request.url}</div>
          <div>{request.responseStatus}</div>
          <div>{request.timing.duration}ms</div>
        </div>
      ))}
    </div>
  );
};

export default RequestList;
