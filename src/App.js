import React, { useContext } from 'react';
import { NetworkProvider, NetworkContext } from './context/NetworkContext';
import Header from './components/Header';
import NetworkRequests from './components/NetworkRequests';
import RequestDetails from './components/RequestDetails';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import { colors } from '@mui/material';
import Filter from './components/Filter';
import RequestList from './components/RequestList';
const App = () => {
  const { filteredRequests, selectedRequest, setSelectedRequest, startMonitoring,loading } = useContext(NetworkContext);


  return (
    <div>
     <div>
      
     <div style={{display:'flex',justifyContent:'space-evenly',backgroundColor:'#002147',color:'white'}}>
      <HighlightAltIcon style={{marginTop:'20px'}}/>
     <LaptopIcon style={{marginTop:'20px',marginLeft:'-28px'}}/>
     <p>|</p>
      <p>Elements </p>
      <p>Console</p>
      <p style={{textDecoration:'underline'}}>Network</p>
      <p>Sources</p>
      <p>Performance</p>
      <p>Memory</p>
      <p>Application</p>
      <p>LightHouse</p>
      <KeyboardDoubleArrowRightIcon style={{marginTop:'20px'}}/>
      <div style={{display:'flex',width:'10%',marginLeft:'90px'}}>
      <WarningAmberIcon style={{marginTop:'20px',color:'yellow'}}/>
      <p style={{marginRight:'10px',marginTop:'20px'}}>70</p>
      <AnnouncementIcon style={{marginTop:'20px',color:'red'}}/>
      <p  style={{marginRight:'10px',marginTop:'20px'}}>20</p>
      </div>
     </div>


    <div style={{backgroundColor:'#00001A'}}>
    <div style={{width:'60%',display:'flex',justifyContent:'space-around',paddingTop:'10px',color:'white'}}>
      <StopCircleIcon style={{color:'red',marginLeft:'30px'}} />
      <DoNotDisturbAltIcon />
      <p style={{marginTop:'-2px'}}>|</p>
      <FilterAltIcon style={{color:'red'}}/>
      <SearchIcon />
      <p style={{marginTop:'-2px'}}>|</p>
      <input type='checkbox' style={{marginTop:'-8px',width:'15px'}}/>
      <p style={{marginTop:'-1px',marginLeft:'-20px'}}>Preserve log</p>

      <p style={{marginTop:'-2px'}}>|</p>

      <input type='checkbox' style={{marginTop:'-8px',width:'15px'}}/>
      <p style={{marginTop:'-1px',marginLeft:'-20px'}}>Disable Cache</p>
      

      <ArrowDropDownIcon />
      <WifiPasswordIcon />
      <p style={{marginTop:'-2px'}}>|</p>

      <UploadIcon />
      <DownloadIcon/>
   
    </div>
    <div style={{width:'0%'}}></div>
    <hr style={{color:'white',border:'2px solid white'}}/>
    </div>
   
    </div >
    <div style={{backgroundColor:'#00001A'}}>
    <div style={{width:'60%',backgroundColor:'#00001A',marginTop:'-10px',paddingTop:'10px',paddingBottom:'6px',display:'flex',color:'white',justifyContent:'space-evenly'}}>
     <Header onStartMonitoring={startMonitoring} />
     <p style={{marginTop:'-2px'}}>|</p>
      <input type='checkbox' style={{marginTop:'-8px',width:'15px'}}/>
      <p style={{marginTop:'-1px',marginLeft:'-20px'}}>Invert</p>

      <p style={{marginTop:'-2px'}}>|</p>

      <input type='checkbox' style={{marginTop:'-8px',width:'15px'}}/>
      <p style={{marginTop:'-1px',marginLeft:'-20px'}}>Hide Data URLs</p>
      <p style={{marginTop:'-2px'}}>|</p>

      <input type='checkbox' style={{marginTop:'-8px',width:'15px'}}/>
      <p style={{marginTop:'-1px',marginLeft:'-20px'}}>Hide Extension URLs</p>
      </div>
      <div></div>
    </div>
     

   <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'#00001A',color:'white'}}>
   <Filter/>
    <input type='checkbox' style={{marginTop:'-9px',width:'15px'}}/>
      <p style={{marginTop:'6px',marginLeft:'-70px'}}>Blocked response</p>
      <input type='checkbox' style={{marginTop:'-8px',width:'15px',backgroundColor:'#00001A'}}/>
      <p style={{marginTop:'6px',marginLeft:'-70px'}}>Blocked Request</p>
     
    </div> 
   
    
   <div style={{backgroundColor:'#00001A'}}>

      <div style={{ display: 'flex',backgroundColor:'#00001A',color:'white',paddingTop:'-80px',height:'full' }}>
      

      {loading ? (
          <div style={{justifyContent:'center',color:'red',height:'500vh'}}>Please wait for requests...</div>
        ) : (
          <>
            <NetworkRequests requests={filteredRequests} onSelectRequest={setSelectedRequest} />
            <RequestDetails request={selectedRequest} />
          </>
        )}
     


       
      </div>
   </div>
    </div>
  );
};



export default App;
