export const b = 'b'
/*
import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './AppWithReducers.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import {UniversalInput} from "./UniversalInput";
import {IconButton, Toolbar, AppBar, Typography, Button, Grid, Container, Paper,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {userReducer} from "./state/user-reducer";
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";

export type filterType = "all" | "active" | "completed"

export type TasksStateType = {
  [key: string]: Array<TaskType>
}
export type FilterValuesType = "all" | "active" | "completed"
export type TodolistType = {
  id: string
  title:string
  filter: FilterValuesType
}
export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
function AppWithReducers() {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const [todolists, dispatchToTodolistsReducer] = useReducer(todolistsReducer,[
    {id: todolistId1, title: "What to learn",filter: "all"},
    {id: todolistId2, title: "What to buy",filter: "all"}
  ])


  const [tasks, dispatchToTasksReducer] = useReducer(tasksReducer,{
    [todolistId1]: [
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "React", isDone: false},
      {id: v1(), title: "CSS", isDone: true}
    ],
    [todolistId2]: [
      {id: v1(), title: "Book", isDone: false},
      {id: v1(), title: "Milk", isDone: true}

    ]
  })
  const onChange = (v:string, taskId:string, todolistId:string) => {
    let action = changeTaskTitleAC(v, taskId, todolistId)
    dispatchToTasksReducer(action)
  }
  const addTask = (v:string, todolistId:string) => {
    let action = addTaskAC(v,todolistId)
    dispatchToTasksReducer(action)
  }
  const addTodolist = (title:string) => {
    let action = addTodolistAC(title)
    dispatchToTodolistsReducer(action)
  }
  const removeTask = (taskId:string, todolistId:string) => {
    let action = removeTaskAC(taskId,todolistId)
    dispatchToTasksReducer(action)
  }
  const removeTodolist = (todolistId:string) => {
    let action = removeTodolistAC(todolistId)
    dispatchToTodolistsReducer(action)
    dispatchToTasksReducer(action)
  }
  const changeTaskStatus = (taskId:string,todolistId:string,isDone:boolean) => {
    let action = changeTaskStatusAC(taskId,isDone,todolistId)
    dispatchToTasksReducer(action)
  }
  const changeFilter = (todolistId:string, filter:filterType) => {
    let action = changeTodolistFilterAC(todolistId,filter)
    dispatchToTodolistsReducer(action)
  }
  const changeTodolistTitle = (t:string,id:string) => {
    let action = changeTodolistTitleAC(t,id)
    dispatchToTodolistsReducer(action)
  }

  return (
      <div className="AppWithReducers">
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
        <Grid container style={{padding:"10px"}}>
        <UniversalInput addElement={addTodolist}/>
        </Grid>
        <Grid container spacing={5}>
        {todolists.map(tl=>{
            let filteredTasks = tasks[tl.id]
          switch (tl.filter){
            case "completed":
              filteredTasks = filteredTasks.filter(t=>t.isDone)
                  break;
            case "active":
              filteredTasks = filteredTasks.filter(t=>!t.isDone)
              break;
        }

      return <Grid item ><Paper style={{padding:"10px"}}><Todolist
          id={tl.id}
          onChange={onChange}
          title={tl.title}
          addTask={addTask}
          removeTask={removeTask}
          tasks={filteredTasks}
          changeTasksStatus={changeTaskStatus}
          changeFilter={changeFilter}
          filter={tl.filter}
          changeTodolistTitle={changeTodolistTitle}
      /></Paper></Grid>

        }

  )}</Grid>
        </Container>
      </div>
)
}

export default AppWithReducers;

*/
