import React from 'react';

import './search-panel.css';
import ItemStatusFilter from '../item-status-filter';

class SearchPanel extends React.Component {
    state={
       term: ''
    };
    onSearchChange = (e)=> {
       const term = e.target.value;
       this.setState({term});
       this.props.onSearchChange(term);
    };
    render(){
        return (
            <React.Fragment>
                <input type="text"
                       className="form-control search-input"
                       placeholder="type to search"
                       value={this.state.term}
                       onChange={this.onSearchChange}
                />
                {/*<ItemStatusFilter/>*/}
            </React.Fragment>

        );
    }
}

export default SearchPanel;
