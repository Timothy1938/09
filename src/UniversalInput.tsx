import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type UniversalInputPropsType = {
    addElement:(v:string)=>void

}
export const UniversalInput = (props:UniversalInputPropsType) => {
    const[value,setValue] = useState('')
    const[error,setError] = useState(false)
    const onChangeHandler = (e:string) => {
      setValue(e)
    }
    const fireCollback = () => {
        if(value.trim() !== ''){
        props.addElement(value)
        setValue('')
            setError(false)
    } else {setError(true)}
    }
    const onKeyPressHandler = (k:string) => {
        console.log(k)
      if(k === 'Enter'){
          fireCollback()
      }
    }
  return ( <div className="App">
    <TextField value={value} onChange={(event)=>onChangeHandler(event.currentTarget.value)}
           onKeyPress={(e)=>onKeyPressHandler(e.key)}  label={"Type value"} error={error} helperText={error?"Incorrect value":""}/>
          <AddCircleOutlineIcon fontSize={"large"} onClick={fireCollback}>+</AddCircleOutlineIcon>
      {/*{error && <div className={"errorText"}>Title is required</div>}*/}
      </div>
)}
