import React, { useState } from 'react';

const Header = ({ onStartMonitoring }) => {
  const [url, setUrl] = useState('');

  const handleStartMonitoring = () => {
    onStartMonitoring(url);
  };

  return (
    <div>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter URL"
        style={{backgroundColor:'#00001A',color:'white',
          borderColor:'white',height:'20px'
          ,borderRadius:'7px',width:'200px',
        }} 
      />
      <button onClick={handleStartMonitoring}
      style={{marginLeft:'10px',borderRadius:'7px',height:'30px'}} 
      >Start Monitoring</button>
    </div>
  );
};

export default Header;
