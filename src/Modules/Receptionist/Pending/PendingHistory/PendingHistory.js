import './PendingHistory.css'
import React from 'react';
import Content from '../Content/Content';
import SearchBar from '../SearchBar/SearchBar';
function PendingHistory() {
    return (
        <div className="PendingHis">
            <SearchBar></SearchBar>
            <Content></Content>
        </div>
    );
}

export default PendingHistory;
