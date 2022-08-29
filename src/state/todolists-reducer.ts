import {filterType, TodolistType} from "../AppWithRedux";
import {v1} from "uuid";
import {todolistId1, todolistId2} from "./tasks-reducer";


export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST",
    id: string
}
export type AddTodolistAT = {
    type: "ADD-TODOLIST",
    title: string
    todolistId:string
}
export type ChangeTodolistFilterAT = {
    type: "CHANGE-TODOLIST-FILTER",
    id: string,
    filter: filterType
}
export type ChangeTodolistTitleAT = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string,
    title: string
}

type ActionsTypes = RemoveTodolistAT | AddTodolistAT | ChangeTodolistFilterAT | ChangeTodolistTitleAT

/*
type actionType = {
    type:string
    [key: string]: string
}*/
const initialState:Array<TodolistType> = []

export const todolistsReducer = (state:Array<TodolistType> = initialState,action:ActionsTypes):Array<TodolistType> => {
  switch (action.type) {
      case "REMOVE-TODOLIST":
          return state.filter(tl=>tl.id !== action.id)
      case "ADD-TODOLIST":
          return [...state,{id:action.todolistId, title: action.title, filter: "all"}]
      case 'CHANGE-TODOLIST-FILTER':
          return  state.map(tl=>tl.id === action.id? {...tl, filter: action.filter}:tl)

      case 'CHANGE-TODOLIST-TITLE':
          return state.filter(tl=>tl.id !== action.id)
      default: return state
  }
}
export const removeTodolistAC = (todolistId:string):RemoveTodolistAT => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodolistAC = (title:string):AddTodolistAT => {
    return { type: 'ADD-TODOLIST', title: title, todolistId:v1()}
}
export const changeTodolistTitleAC = (todolistId:string, title:string):ChangeTodolistTitleAT => {
    return { type: 'CHANGE-TODOLIST-TITLE', id: todolistId, title:title}
}
export const changeTodolistFilterAC = (todolistId:string,newFilter:filterType):ChangeTodolistFilterAT => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id: todolistId,
        filter: newFilter
    }
}
