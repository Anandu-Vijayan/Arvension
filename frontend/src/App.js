import './App.css';
import React,{useEffect, useState} from "react"
import {render} from "react-dom"
import Button from '@mui/material/Button';
import { Slider, TextField } from '@mui/material';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';



function App() {
  const [Principal,setPrincipal]=useState()
  const [years,setYears]=useState()
  const [intrest,setIntrest]=useState()
  const [result,setResult]=useState()
  const [compount,setCompount]=useState()
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    calculate()
  }, [value])
  

  const calculate=()=>{
    const result=Principal*Math.pow(1+intrest,value);
    setResult(result.toFixed(2));
    setCompount(result-Principal)
  }
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      console.log(newValue)
    }
  };


  return (
    <div className="App">
      <h1>Compound Interest</h1>
      <form
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField label="What is the principal Amount" type="number" variant="outlined" onChange={(e)=>setPrincipal(e.target.value)} />
      </div>
      <div style={{marginTop:"10px"}}>
      <TextField label="Annual Intrest rate ?" type="number" variant="outlined" onChange={(e)=>setIntrest(e.target.value/100)} />
      </div>
      
    </form>
    <Box sx={{mt:5}}>
      <h2>Years</h2>
      <Slider sx={{width:'300px'}}  onChange={handleChange}  value={value} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    <br></br>
    
      <div style={{fontSize:"30px"}}>Total Amount = {isNaN(result)? 0:result}</div>
      <div>
      <div style={{fontSize:"30px"}}>Compount Intrest = {isNaN(compount)? 0:compount}</div>
      </div>
    
    </div>
  );
}

export default App;
