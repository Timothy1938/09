import {EditableSpan} from "./EditableSpan";
import {filterType, TasksStateType, TaskType} from "./AppWithRedux";
import {UniversalInput} from "./UniversalInput";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "./state/store";
import {changeTodolistTitleAC} from "./state/todolists-reducer";

type TodolistPropsType = {
    id: string
    title: string
    changeFilter:(todolistId:string, filter:filterType)=>void
    filter:filterType
    changeTodolistTitle:(t:string,id:string)=>void
}



export const Todolist = (props: TodolistPropsType) => {
    const dispatch = useDispatch()
    const tasks = useSelector<AppRootStore, Array<TaskType>>(state => state.tasks[props.id])
    const onChangeHandler = (filter:filterType) => {
        props.changeFilter(props.id, filter)
    }
    let filteredTasks = tasks
    switch (props.filter) {
        case "completed":
            filteredTasks = filteredTasks.filter(t => t.isDone)
            break;
        case "active":
            filteredTasks = filteredTasks.filter(t => !t.isDone)
            break;
    }
    return (
        <div className="App">
            <h3>{<EditableSpan onChange={(v)=> dispatch(changeTodolistTitleAC(v,props.id))} title={props.title}/>}</h3>
            <UniversalInput addElement={(title)=>dispatch(addTaskAC(title,props.id))}/>
            {tasks.length !== 0?
            <div style={{minHeight:"150px"}}>
                {
                filteredTasks.map((t: TaskType) => {
                    const onChange = (v: string) => {
                        dispatch(changeTaskTitleAC(v, t.id, props.id))
                        //props.onChange(v, t.id, props.id)
                    }
                    const onClickHandler = () => {
                        dispatch(changeTaskStatusAC(t.id, !t.isDone, props.id))
                        //props.changeTasksStatus(t.id, props.id, !t.isDone)
                    }
                    return <div><IconButton onClick={()=>dispatch(removeTaskAC(t.id, props.id))} size="small">
                        <Delete fontSize="inherit" />
                    </IconButton>
                        <EditableSpan onChange={onChange} title={t.title}/><Checkbox checked={t.isDone} onClick={onClickHandler}/></div>
                })
            }</div>:
                <div>Your list is empty</div>}
            <Button variant={props.filter==="all"?"contained":"text"} onClick={(e)=>onChangeHandler("all")}>All</Button><Button variant={props.filter==="active"?"contained":"text"}  color={"secondary"} onClick={(e)=>onChangeHandler("active")}>Active</Button><Button variant={props.filter==="completed"?"contained":"text"}  color={"primary"} onClick={(e)=>onChangeHandler("completed")}>Completed</Button>

            {/*<button onClick={FilerTasks}>All</button><button>Active</button><button>Completed</button>*/}
        </div>
    )
}