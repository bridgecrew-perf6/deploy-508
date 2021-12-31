import React  from 'react';
import './Pay.css';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TextField } from '@mui/material';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        suffix=",000đ"
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  

function AddMoney({ 
    // infor, 
    callBack }) {

    const [values, setValues] = React.useState({
      numberformat: '',
    });
    const handleChange = (event) => {
        console.log("handling")
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };  
        // test
    const infor ={
        name: "cũng ra gì đấy chứ",
        identifyNumber: "id1000",
        balance: 12220000,
        phoneNumber: "0987654321"
    }
    
  console.log(infor);


  async function addMoney() {
    const url = 'https://nmcnpm.herokuapp.com/api/v2/user/balance/add/:id'+infor.identifyNumber
    console.log(url)
    const token = localStorage.getItem("token")
    const data = {
        balance : infor.balance+values
    }
    console.log(data)
    await axios.post(url, data, {
      headers: { "Authorization": `Bearer ${token}` },
    })
      .then(res => {
        console.log(res.data)
        if (res.data.status == "success") {
          window.confirm("Adding successfull")
          callBack()
        } else {
          window.confirm(res.data.msg)
        }
      }).catch(function (error) {
        console.log(error);
      });
    
  }
  
  return (
  <div class = "popsup-pay-long">
      {/* header start */}
      <div class = "header-pay-long">Add money to your account</div>
      {/* header end */}
      <div class ="title-pay-long">Account Info</div>
      {/* cotent start */}
      <div class = "content-pay-long">
          {/* show info start */}
          <div class = "row-pay-long">
              <div class ='col-pay-long'>
                  <label >Indentify Number</label>
                  <input disabled="true" value={infor.identifyNumber}></input>
              </div>
              <div class ='col-pay-long'>
                  <label >Name</label>
                  <input disabled="true" value={infor.name}></input>
              </div>
          </div>
          <div class = "row-pay-long">
              <div class ='col-pay-long'>
                  <label >Balance</label>
                  <input disabled="true" value={infor.balance}></input>
              </div>  
              <div class ='col-pay-long'>
                  <label >Phone Number</label>
                  <input disabled="true" value={infor.phoneNumber}></input>
              </div>
             
          </div>
        {/* show info end */}

<div id="bottom-enter-amount">
  <div className="row-pay-long title-pay-long">Enter the amount you wanna add to the account</div>
{/* Nạp tiền start */}
<div class = "row-pay-long" id="row-entermoney-long">
       <form>
       <TextField
        id="input-text"
          // label="Enter the amount here"
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          placeholder="Enter the amount here"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </form>
</div>
{/* Nạp tiền end */}

          {/* OK */}
          <div class="row-pay-long" id="pay-back-long">
              <button type="button"  onClick={ addMoney
                  }>OK</button>
              <button type="button" style= {{backgroundColor: '#959494'}} onClick={ callBack
                  }>Cancle</button>
          </div>
</div>
      </div>
      {/* content end */}
  </div>
  );
}


export default AddMoney;