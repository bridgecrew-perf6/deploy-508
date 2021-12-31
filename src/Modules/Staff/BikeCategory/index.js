import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteCategory, getCategoryByID } from "../Store/ListCategoryStore";
import SearchBike from "../SearchBar/SearchBar";
import CategoryDetails from "./CategoryDetails";
import ListCategory from "./ListCategory";
import './BikeCategory.css'



export default function BikeCategoriesOfStaff(){
    const [categories, setCategories] = useState([])
    const [chosenCategory, setChosenCategory]= useState(null);
    const [isAdding, setAdding] = useState(false)
    const [needLoading, setNeedLoading]= useState(1)
    const [edit, setEdit] = useState(false)
    async function getCategory(){
        let url = `https://nmcnpm.herokuapp.com/api/v2/staff/manage/category`;
        let token = localStorage.getItem("token");
        axios.get(url,{headers:{"Authorization":`Bearer ${token}`}})
        .then(doc=> {
            console.log(doc.data.data)
            setCategories(doc.data.data);
            if(doc.data.data>0){
            getCategoryByID(doc.data.data[0]?._id)
            .then((data)=>{
                setChosenCategory(data)
            })
        }
        })
        
    }
    
    useEffect(() => {
        getCategory()

    },[needLoading])
    
    return(
    <Box sx={{
        marginTop: "-58%",
        marginLeft: "17%"
    }} >
  

        <Grid container direction="column">
            <Grid sx={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Grid container item>
                    <SearchBike/>
                </Grid>
            </Grid>
            <Grid sx={{
                backgroundColor:"white",
                height: "850px",
                width: "1510px",
                marginLeft: "50px",
                marginTop: "10px"

            }}>
                <Grid container item direction="row" sx={{marginTop:"1%"}}>
                    <Grid item xs={6}>
                    <Typography variant="h6" sx={{
                        fontFamily:"Inter",
                        fontWeight: "Bold",
                        fontSize: "1.5vw",
                        marginLeft: "5%"
                    }}>Category</Typography>
                    </Grid>
                    <Grid sx={{
                        width: "15%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end"
                    }} item xs={6}>
                        <Typography sx={{}} variant="caption">Sắp xếp theo:</Typography>
                        <select style={{
                            position: "relative",
                            display: "flex",
                            height: "40%",
                            width: "20%",
                            alignSelf: "center",
                            border: "1px solid black",
                            marginRight: "5%",
                            borderRadius: "5px"
                        }}>
                            <option>Doanh thu cao - thấp</option>
                            <option>Doanh thu thấp - cao</option>
                            <option>Giá cao - thấp</option>
                            <option>Giá thấp - cao</option>
                        </select>
                        

                    </Grid>
                </Grid>
                <Grid container item direction="row">
                    <Grid container item xs={4} sx={{
                        marginTop: "3%"
                    }}>
                        {categories.length>0?(<ListCategory  categories={categories} setChosenData={setChosenCategory}/>):(<h2>No data found</h2>)}
                    </Grid>
                    <Grid container item xs={8}>
                    {chosenCategory?(<CategoryDetails data={chosenCategory} setNeedLoading={setNeedLoading} needLoading={needLoading}/> ):(<p></p>)}
                    </Grid>
                </Grid>
                <Grid container item direction="row" sx={{marginBottom:"5px"}}>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    )
}