import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { getCategoryByID } from '../Store/ListCategoryStore';

export default function CategoryItem({ data, setChosenData }) {
  const handleClick = async () => {
    console.log(data._id)
    const result = await getCategoryByID(data._id);
    setChosenData(result)
    console.log(data)
  }
  return (
    <Box>
      <Card sx={{ display: 'flex', borderRadius: "10px", border: "1px solid blue", cursor:"pointer" }} onClick={handleClick}>
        <Box>
          <CardMedia
            component="img"
            sx={{ width: "71px", marginLeft: "13px", marginTop: "28px", border: "1px solid blue", borderRadius: "6px" }}
            image={data.image}
            alt="Bike category"
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {data.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {data.cost}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

          </Box>
        </Box>
      </Card>
    </Box>
  );
}