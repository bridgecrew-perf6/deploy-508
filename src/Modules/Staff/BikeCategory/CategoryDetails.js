import { Box, Button, Grid, Typography } from '@mui/material'

export default function CategoryDetails({data, needLoading, setNeedLoading}) {

    return (
        <Box>
            <Grid container sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "720px",
                width: "950px",
                border: "1px solid rgb(102, 102, 240)",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "30px"
            }}>
                <Grid sx={{display: "flex",
                            alignSelf: "center",
                            position: "relative",
                            height: "40%",
                            }} item>
                    <img style={{ width: "auto", height: "100%",border: "1px solid blue" }} src={data.data?.image} alt='Hello' />
                </Grid>
                <Grid container item direction="column">
                    <Grid container item direction="row">
                        <Grid item xs={6} >
                            <Typography variant="h6" sx={{marginLeft:"20%"}}>Model:{data.data?.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" sx={{marginLeft:"40%"}} >Số lượng:{data.length}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item direction="row" >
                        <Grid item xs={6} align="center">
                            <Typography variant="h6" sx={{marginLeft:"-20%"}}>Giá thuê: {data.data?.cost}d/giờ</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx>
                        <Typography variant="subtitle1" sx={{marginLeft:"10%", marginRight:"8%", marginTop:"-4%", height:"112px"}}>Mô tả: {data.data?.description} </Typography>
                    </Grid>
                </Grid>
                <Grid container item direction="row" sx={{marginBottom:"5px"}}>
                </Grid>
            </Grid>
        </Box>
    )
}