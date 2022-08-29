import {filterType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {addTodolistAC, AddTodolistAT, RemoveTodolistAT} from "./todolists-reducer";


export type RemoveTaskAT = {
    type: 'REMOVE-TASK',
    taskId:string
    todolistId:string
}
export type AddTaskAT = {
    type: 'ADD-TASK',
    title:string
    todolistId:string
}
export type ChangeTaskStatusAT = {
    type:'CHANGE-TASK-STATUS'
    taskId:string
    isDone:boolean
    todolistId:string
}
export type ChangeTaskTitleAT = {
    type:'CHANGE-TASK-TITLE'
    title:string
    taskId:string
    todolistId:string
}



type ActionsTypes = RemoveTaskAT | AddTaskAT | ChangeTaskStatusAT | AddTodolistAT | ChangeTaskTitleAT | RemoveTodolistAT

/*
type actionType = {
    type:string
    [key: string]: string
}*/
export let todolistId1 = v1()
export let todolistId2 = v1()
const initialState = {}

export const tasksReducer = (state:TasksStateType = initialState,action:ActionsTypes):TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {...state,
            [action.todolistId]: state[action.todolistId].filter(t=>t.id !== action.taskId)
            }
        case "ADD-TASK":
            let task = {id:v1(),title:action.title, isDone: false}
            return {...state, [action.todolistId]: [task, ...state[action.todolistId]]}
        case "CHANGE-TASK-STATUS":
        return {...state, [action.todolistId]:  state[action.todolistId].map(t=>t.id === action.taskId? {...t,isDone:!t.isDone}: {...t})}
        case "ADD-TODOLIST":
            return {...state, [action.todolistId]: []}
        case "CHANGE-TASK-TITLE":
        {
            return {...state, [action.todolistId]: state[action.todolistId].map(t=>t.id===action.taskId? {...t, title:action.title}: t)}
        }

        default:
            return state
    }
}
          export const removeTaskAC = (taskId:string, todolistId: string): RemoveTaskAT => {
              return {type: 'REMOVE-TASK', taskId, todolistId}
          }
          export const addTaskAC = (title: string,todolistId:string): AddTaskAT => {
              return {type: 'ADD-TASK', title, todolistId} as const
          }
          export const changeTaskStatusAC = (taskId:string,isDone:boolean,todolistId:string):ChangeTaskStatusAT => {
            return {
                type:'CHANGE-TASK-STATUS',
                taskId,
                isDone,
                todolistId
            }
          }
          export const changeTaskTitleAC = (title:string, taskId:string, todolistId:string):ChangeTaskTitleAT => {
            return {
                type:'CHANGE-TASK-TITLE',
                title,
                taskId,
                todolistId
            }
          }

