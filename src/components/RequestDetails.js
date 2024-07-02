import React from 'react';

const RequestDetails = ({ request }) => {
  if (!request) return <div style={{ flex: 1 }}>Select a request to see details</div>;

  return (
    <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', marginLeft: '10px' }}>
      <h2>Request Details</h2>
      <h3>General</h3>
      <pre>{JSON.stringify({
        url: request.url,
        method: request.method,
        status: request.responseStatus,
        duration: request.timing.duration,
      }, null, 2)}</pre>
      
      <h3>Request Headers</h3>
      <pre>{JSON.stringify(request.headers, null, 2)}</pre>
      
      <h3>Request Payload</h3>
      <pre>{request.postData}</pre>
      
      <h3>Response Headers</h3>
      <pre>{JSON.stringify(request.responseHeaders, null, 2)}</pre>
      
      <h3>Response Body</h3>
      <pre>{request.responseBody}</pre>
    </div>
  );
};

export default RequestDetails;
