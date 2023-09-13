/*
* PARTIE ROUTEUR
*/

import express from 'express'

//import controller
import { addTasks, getTasks } from '../controllers/tasks.js'


//création du routeur pour les taches
export const taskRouter = new express.Router()


//route to add a task
taskRouter.post('/tasks', async (req, res) => {       
    //appel du controller addTasks   
    addTasks(req, res);
})

//route to get all tasks
taskRouter.get('/tasks', async (req, res) => {    
    //appel du controller getTasks
    getTasks(req, res);
})