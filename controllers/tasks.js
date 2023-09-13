/*
* PARTIE CONTROLLER
*/

//creation d'un model de donnée pour les taches afin de faciliter l'ajout de données
import {Task} from './../models/tasks.js';

//fonction pour ajouter une tache
export const addTasks = async (req, res) => {
    
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)       
    }catch(e){
        res.status(400).send(e)  
    }

}

//fonction pour lire les taches
export const getTasks = async (req, res) => {
    
    try{
        const tasks = await Task.find({})
        res.send(tasks)
        //Note : ici on pourrai éventuellement envoyer les données dans une vue à l'aide de moteur de template, soit un fichier ejs, soit un fichier pug
    }catch(e){
        res.status(500).send()
    }
}