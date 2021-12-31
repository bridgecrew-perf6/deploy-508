import React, { useEffect, useState } from 'react';
import './SearchBar.css'
import axios from 'axios';
import { FaTrash, FaSearch } from 'react-icons/fa'
import { Button } from "@mui/material"

function SearchBar({ list, callBack, callBackOpen }) {
  const [listDelete, setListDelete] = useState([]);

  async function deleteUser(id) {
    const token = localStorage.getItem("token")
    const result = await axios.delete(`https://nmcnpm.herokuapp.com/api/v2/bike/delete/` + id, { headers: { "Authorization": `Bearer ${token}` } })
  }

  useEffect(() => {
    setListDelete(list);
    console.log(list);
  }, [list])

  return (
    <div className="Bar">
      <div className="Baoinstaff">
        <FaSearch id="Search" />
        <input className="input" placeholder="Search here..."></input>
      </div>
    </div >
  )
}

export default SearchBar;
