import { useState } from 'react';
import Logo from '../../../shared/icons/Search.png'
// import AddCategory from '../AddCategory/AddCategory';
import "./SearchBar.css"

export default function SearchBike (){
    
    return(
        <div className="Dung_NA_SearchBike" >
            <div className="Dung_NA_Bao">
                    <div className="Dung_NA_Searchic">
                        <img className="Dung_NA_Searchimg" src={Logo} alt="" />
                    </div>
                    <input className="Dung_NA_input" placeholder="Let find a bike for you ..."></input>
            </div>
        </div>
    )
}