import { FaSearch } from 'react-icons/fa'
import "./SearchBar.css"

export default function SearchBike (){
    
    return(
        <div className="Bar" >
            <div className="baobigger">
                <FaSearch id="Search"/>
                <input className="input" placeholder="Let find a bike for you ..."></input>
            </div>
        </div>
    )
}