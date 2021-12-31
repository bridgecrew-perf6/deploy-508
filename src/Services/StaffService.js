import axios from "axios"
const url = "https://nmcnpm.herokuapp.com/api/v2/";

export const getAllStation = async () => {
    const token = localStorage.getItem("token");
    const result = await axios.get(url + "station", {
        headers: { "Authorization": `Bearer ${token}` }
    })
    return result.data;
}

export const getStationByID = async (id) => {
    const token = localStorage.getItem("token");
    const result = await axios.get(url + `station/detail/statistic/${id}`, {
        headers: { "Authorization": `Bearer ${token}` }
    })

    return result.data;
}

export const getLocations = async () => {
    const token = localStorage.getItem("token");
    const result = await axios.get(url + "location", {
        headers: { "Authorization": `Bearer ${token}` }
    })
    return result.data;
}

export const getLocationForAdding= async (id)=>{
    const token = localStorage.getItem("token");
    const result = await axios.get(url + "locations", {
        headers: { "Authorization": `Bearer ${token}` }
    })
    return result.data;
}

export const getStaffForAdding = async () => {
    const token = localStorage.getItem("token");
    const result = await axios.get(url+"staff", {
        headers: { "Authorization": `Bearer ${token}` }
    })
    return result.data;

}

export const editingStation = async (data, stationID) => {
    const token = localStorage.getItem("token");
    const result = await axios.put(url + "station/edit/" + stationID, data,
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    return result.data;
}
export const addNewLocation = async (data) => {
    const token = localStorage.getItem("token");
    console.log(data)
    const result = await axios.post(url + "location/add", data,
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    return result.data;
}

export const addNewStation = async (data) => {
    const token = localStorage.getItem("token");
    const result = await axios.post(url + "station/add", {
        name: data.name,
        location: data.place,
        staff: data.employee,
        phoneNumber: data.phoneNumber
    },
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    return result.data;
}

export const getStaffs = async () => {
    const token = localStorage.getItem("token");
    const url1 = "https://nmcnpm.herokuapp.com/api/v1/accounts?type=staff"
    const result = await axios.get(url1, {
        headers: { "Authorization": `Bearer ${token}` }
    })
    return result.data;

}


export const deleteStationService=async (id)=>{
    const token = localStorage.getItem("token");
    const result = await axios.delete(url+`station/delete/${id}`,
  {
    headers: { "Authorization": `Bearer ${token}` },
  })
  return result.data;
}



