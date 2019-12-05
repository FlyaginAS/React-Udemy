import React from 'react';

import './search-panel.css';
import ItemStatusFilter from './item-status-filter';

const SearchPanel = () => {
  return (
      <React.Fragment>
          <input type="text"
                 className="form-control search-input"
                 placeholder="type to search" />
          <ItemStatusFilter/>
      </React.Fragment>

  );
};

export default SearchPanel;
