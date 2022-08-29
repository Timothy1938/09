import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import {UniversalInput} from "./UniversalInput";
import {IconButton, Toolbar, AppBar, Typography, Button, Grid, Container, Paper,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC} from "./state/todolists-reducer";
import {
  addTaskAC,
  changeTaskStatusAC, changeTaskTitleAC,
  removeTaskAC,
  tasksReducer
} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "./state/store";

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
function AppWithRedux() {
  const dispatch = useDispatch()
  const todolists = useSelector<AppRootStore, Array<TodolistType>>(state => state.todolists)

  const addTodolist = (title:string) => {
    let action = addTodolistAC(title)
    dispatch(action)
  }
  const changeFilter = (todolistId:string, filter:filterType) => {
    dispatch(changeTodolistFilterAC(todolistId,filter))
  }
  const changeTodolistTitle = (t:string,id:string) => {
    dispatch(changeTodolistTitleAC(t,id))
    todolists.map(tl=>tl.id === id? {...tl, title:t}:tl)
  }

  return (
      <div className="App">
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



                  return <Grid item ><Paper style={{padding:"10px"}}><Todolist
                      id={tl.id}
                      title={tl.title}
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

export default AppWithRedux;

