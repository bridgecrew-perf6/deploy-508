import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { getStation } from "../Store/ListStationStore"
import ListStationScreen from "./StationScreen/index"
import SearchBike from "./SearchBar/SearchBar"
import AddStation from "./AddStation/AddStation"
import EditStation from "./EditStation/EditStation"

export default function ListStationComponent() {
    const [data, setData] = useState(null)
    const [needLoading, setNeedLoading]=useState(1)
    const [addStation, setAddStation]=useState(false)
    const [editing, setEditing]=useState(false)
    const [chosenStation, setChosenStation] = useState(null);
    useEffect(() => {
        const getAllData = async () => {
            const result = await getStation();
            if(result==="Failed to fetch"){
                alert("Failed to fetch data")
            }else{
            setData(result); 
            }
        }
        getAllData();
    }, [needLoading])
    return (
        <Box width="100%" height="100%">
            {
                addStation&&(<AddStation setAddStation={setAddStation} needLoading={needLoading} setNeedLoading={setNeedLoading}></AddStation>)
            }
            {
                editing&&(<EditStation setEditing={setEditing} needLoading={needLoading} setNeedLoading={setNeedLoading} stationInfo={chosenStation}></EditStation>)
            }
            <SearchBike setAddStation={setAddStation} />
            <Grid container direction="column"
                sx={{
                    marginTop: "136px", marginLeft: "26px",
                    background: "white",
                    width: "1500px",
                    height: "900px",
                    borderRadius: "40px",
                }}
                spacing={2}>

                {data ? <ListStationScreen stations={data} setEditing={setEditing} chosenStation={chosenStation} setChosenStation={setChosenStation} needLoading={needLoading} setNeedLoading={setNeedLoading} /> : <p></p>}

            </Grid>
        </Box>
    )
}