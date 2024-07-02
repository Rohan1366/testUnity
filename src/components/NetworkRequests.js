import React from 'react';

const NetworkRequests = ({ requests, onSelectRequest }) => {
  return (
    <div style={{ flex: 1 , backgroundColor:'#00001A',color:'white',height:'500vh'}}>
      <h2>Network Requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index} onClick={() => onSelectRequest(request)} style={{ cursor: 'pointer', marginBottom: '10px', listStyleType: 'none', border: '1px solid #ccc', padding: '5px' }}>
            {request.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetworkRequests;
