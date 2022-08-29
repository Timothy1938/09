import {KeyboardEventHandler, useState} from "react";

type EditableSpanPropsType = {
  onChange:(v:string)=>void
  title:string
}
export const EditableSpan = (props:EditableSpanPropsType) => {
  const onChange = (v:string) => {
    props.onChange(v)
    setInputValue(props.title)
  }
  const onKeyPressHandler = (v:any) => {
    if(v === 'Enter'){
      setEditableMode(false)
    }
  }
  const [inputValue,setInputValue] = useState(props.title)
  const [editableMode, setEditableMode] = useState(false)
  const turnOffEditableMode = () => {
    setEditableMode(false)
  }
  const activateEditableMode = () => {
    setEditableMode(true)
  }
  return editableMode ?
      <input autoFocus
          value={inputValue} onBlur={turnOffEditableMode}
             onKeyPress={(event)=>onKeyPressHandler(event.currentTarget.value)}
             onChange={(event)=>onChange(event.currentTarget.value)}/> :
      <span onDoubleClick={activateEditableMode}>{props.title}</span>
}