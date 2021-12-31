import './SearchBar.css'
import React from 'react';
import Filter from '../../../../shared/icons/Vector.png'
import { FaSortAmountUp, FaSearch } from 'react-icons/fa'
import { Button } from '@mui/material'
function SearchBar() {

    return (
        <div className="Bar">
            <div className="baobigger">
                <FaSearch id="Search" alt="searchIcon" />
                <input className="input" placeholder="Search here..."></input>
            </div>
            <Button id="Delete" >Filter&nbsp;<FaSortAmountUp className="Filter" src={Filter} /></Button>
        </div >
    );
}

export default SearchBar;
