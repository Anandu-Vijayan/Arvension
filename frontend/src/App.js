import './App.css';
import React,{useState} from "react"
import {render} from "react-dom"
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';



function App() {
  const [Principal,setPrincipal]=useState()
  const [years,setYears]=useState()
  const [intrest,setIntrest]=useState()
  const [result,setResult]=useState()

  const calculate=()=>{
    const result=Principal*Math.pow(1+intrest,years);
    setResult(result.toFixed(2));
  }


  return (
    <div className="App">
      <h1>Compound intrest</h1>
      <form
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="What is the principal" type="number" variant="outlined" onChange={(e)=>setPrincipal(e.target.value)} />
      <TextField label="How many Years" type="number" variant="outlined" onChange={(e)=>setYears(e.target.value)} />
      <TextField label="Annual Intrest rate ?" type="number" variant="outlined" onChange={(e)=>setIntrest(e.target.value/100)} />
      <Button variant='contained' color="primary" onClick={()=>{calculate()}}>calculate</Button>
      <br></br>
      <div style={{fontSize:"30px"}}>{result}</div>
    </form>
    </div>
  );
}

export default App;
