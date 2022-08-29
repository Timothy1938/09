export const x = 'x'

/*
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import {UniversalInput} from "./UniversalInput";
import {IconButton, Toolbar, AppBar, Typography, Button, Grid, Container, Paper,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

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
function App() {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const [todolists, setTodolists] = useState<Array<TodolistType>>([
    {id: todolistId1, title: "What to learn",filter: "all"},
    {id: todolistId2, title: "What to buy",filter: "all"}
  ])


  const [tasks, setTasks] = useState<TasksStateType>({
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
    let todolistTasks = tasks[todolistId]
    let newTodolistTasks = todolistTasks.map(t=>t.id === taskId ? {...t,title:v} : {...t})
    tasks[todolistId] = newTodolistTasks
    setTasks({...tasks})
  }
  const addTask = (v:string, todolistId:string) => {

    let todolistTasks = tasks[todolistId]
    let newTask = {id: v1(), title: v, isDone: false}
    let newTodolistTasks = [newTask, ...todolistTasks]
    tasks[todolistId] = newTodolistTasks
    setTasks({...tasks})
  }
  const addTodolist = (title:string) => {
    let todolistId = v1()
    setTodolists([{id:todolistId, title: title, filter: "all"}, ...todolists])
    tasks[todolistId] = []
  }
  const removeTask = (taskId:string, todolistId:string) => {
    let todolistTask = tasks[todolistId]
    let newTodolistTask = todolistTask.filter(t=>t.id !== taskId)
    tasks[todolistId] = newTodolistTask
    setTasks({...tasks})
  }
  const removeTodolist = (todolistId:string) => {
    let newTodolists = todolists.filter(tl=>tl.id !== todolistId)
    setTodolists([...newTodolists])
    delete tasks[todolistId]
  }
  const changeTaskStatus = (taskId:string,todolistId:string,isDone:boolean) => {
    let todolistsTasks = tasks[todolistId]
    let newTodolistsTasks = todolistsTasks.map(t=>t.id === taskId ? {...t, isDone} : {...t})
    tasks[todolistId] = newTodolistsTasks
    setTasks({...tasks})
  }
  const changeFilter = (todolistId:string, filter:filterType) => {
    let newTodolists = todolists.map(tl=>tl.id === todolistId? {...tl, filter}:tl)
    setTodolists([...newTodolists])
  }
  const changeTodolistTitle = (t:string,id:string) => {
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

export default App;

*/
