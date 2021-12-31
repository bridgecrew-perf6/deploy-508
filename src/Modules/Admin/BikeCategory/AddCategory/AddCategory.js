import './AddCategory.css'
import Button from '@mui/material/Button';
import { TextField, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { addNewCategory } from '../../Store/ListCategoryStore';
import axios from 'axios';


function AddCategory({ setAdding, setNeedLoading, needLoading }) {
    const [category, setCategory] = useState({
        name: '',
        cost: '',
        image: '',
        description: ''
    })
    const [file,setFile] = useState({
        file:null
    })
    const handleClick = async (data) => {
        let date= Date.now();
        const formData = new FormData();
        formData.append("file", file);
        console.log(file,formData)
        try {
          const response = await axios.post("https://api.bandeck.com/v1/user/storage/upload?access_token=w4fCq2xrZsKYwpLCm2zCmMKUbMKWaW3CmmjDhmhuwpxuwp1waWrDhcKUwpfCmcKdwpQ=&name="+date,formData,{
            headers: { "Content-Type": "multipart/form-data" },
          });
          setCategory({image:"https://cdn.bandeck.com/"+response.data.data.id,name:data.name,cost:data.cost,description:data.description})
        } catch(error) {
          console.log(error)
        }
        console.log(category)
        // const uploadImages = await uploadFile(file);
        // console.log("upload imagae", uploadImages)
        const result = await addNewCategory(data)
        console.log(result);
        if (result.status === "success") {
            alert("Them moi thanh cong")
            setAdding(false)
            setNeedLoading(needLoading + 1)
        } else {
            alert(result.msg)
        };
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCategory({...category,[event.target.name]:value})
    }
    const handleChangeFile = (event)=>{
        const file= event.target.files[0];
        console.log(file)
        setFile(file)
        setCategory({...category})
    }
    return (
        <div className='Dung_NA_AddCategory'>
            <h6 className='Dung_NA_TitleOfAddCateScr' >Thêm</h6>

            <div className='Dung_NA_AddInforOfCate'>
                <span style={{
                    display: "flex",
                    alignSelf: "center",
                    width: "10%"
                }}>Tên loại xe</span>
                <TextField sx={{
                    width: "20%",

                    marginLeft: "3%",
                    borderRadius: "30px"
                }}

                    name="name"
                    fullWidth
                    value={category.name}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                />

            </div>
            <div className='Dung_NA_AddInforOfCate'>
                <span style={{
                    display: "flex",
                    width: "10%"
                }}>Giá thuê</span>
                <TextField sx={{
                    width: "20%",

                    marginLeft: "3%"
                }}
                    label=""
                    name="cost"
                    fullWidth
                    value={category.cost}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                />
                <span style={{
                    marginLeft: "2%"
                }}>đ/giờ</span>
            </div>
            <div className='Dung_NA_AddInforOfCate'>
                <span style={{
                    display: "flex",
                    width: "10%"
                }}>Ảnh mô tả</span>
                {/* <TextField sx={{
                    width: "80%",
                    marginLeft: "3%"
                }}
                    label=""
                    name="image"
                    fullWidth
                    value={category.image}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                /> */}
                <label htmlFor="contained-button-file" style={{marginLeft:"3%"}}>
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleChangeFile} />
                </label>
            </div>
            <div style={{
                display: "flex",
                fontFamily: "Inter",
                flexDirection: "row",
                height: "8%",
                width: "100%",
                fontWeight: "600",
                marginTop: "4%",
                marginLeft: "3%",
            }}>
                <span style={{
                    display: "flex",
                    width: "10%"
                }}>Mô tả</span>
                <TextField sx={{
                    width: "80%",
                    marginTop: "-1%",
                    marginLeft: "3%",
                }}
                    label=""
                    name="description"
                    fullWidth
                    value={category.description}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                    multiline
                    rows={4}
                />
            </div>
            <Button id='Dung_NA_AddCateButton' variant="contained" onClick={() => handleClick(category)}>Thêm +</Button>
            <Button id='Dung_NA_XButton' sx={{
                backgroundColor: "red"
            }} variant="contained" onClick={() => { setAdding(false) }}>Cancel</Button>
        </div>
    )
}
export default AddCategory
