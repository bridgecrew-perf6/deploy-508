import './SearchBar.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaSearch } from 'react-icons/fa'
import { Button } from "@mui/material"

export default function SearchBike ({needLoading, setNeedLoading, setAddStation}){

    return(
        
        <div className="Bar" >
            
            <div className="baobigger">
        <FaSearch id="Search"/>
        <input className="input" placeholder="Search here..."></input>
      </div>
        <Button id="Delete" onClick={()=>{setAddStation(true)}} >New Station</Button>
        </div>
    )
}