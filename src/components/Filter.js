import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const filters = [
  { label: 'All', value: 'ALL' },
  { label: 'XHR', value: 'XHR' },
  { label: 'JS', value: 'JS' },
  { label: 'CSS', value: 'CSS' },
  { label: 'IMG', value: 'IMG' },
  { label: 'Media', value: 'MEDIA' },
  { label: 'Font', value: 'FONT' },
  { label: 'Document', value: 'DOC' },
  { label: 'WebSocket', value: 'WS' },
  { label: 'Manifest', value: 'MANIFEST' },
  { label: 'Other', value: 'OTHER' },
];

const Filter = () => {
  const { filter, setRequestFilter } = useContext(NetworkContext);

  return (
    <div style={{ marginBottom: '20px' }}>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        {filters.map((filterOption) => (
          <button
            key={filterOption.value}
            onClick={() => setRequestFilter(filterOption.value)}
            style={{
              padding: '7px 20px',
              cursor: 'pointer',
              backgroundColor: filter === filterOption.value ? '#007BFF' : '#f1f1f1',
              color: filter === filterOption.value ? '#fff' : '#000',
              border: '1px solid #007BFF',
              borderRadius: '5px',
            }}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
