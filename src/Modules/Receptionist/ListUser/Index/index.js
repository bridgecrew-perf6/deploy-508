import './index.css'
import React, { useState } from 'react';
import UserTable from '../UserTable/UserTable';
import SearchBar from '../SearchBar/SearchBar';

function ListUser() {
    const [loading, setLoading] = useState(false)
    const [listIdDelete, setListId] = useState([])
    return (
        <div className="ListUser">
            <SearchBar list={listIdDelete} 
                callBack={() => {
                    setListId([])
                    setLoading(!loading)
                }}
            ></SearchBar>
            <UserTable 
                loading = {loading}
                updateList={(list) => {
                    setListId(list);
                    console.log(list);
                }} 
             ></UserTable>
        </div>
    );
}

export default ListUser;