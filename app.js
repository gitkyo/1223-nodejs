//import express
import express from 'express';

//load env variables
import dotenv from 'dotenv';
dotenv.config();

//import DB manager file
import('./db/mongodb.js');

//create express app
const app = express();

//set port, listen for requests
const PORT = 8080;

//creation d'un model de donnée pour les taches afin de faciliter l'ajout de données
import {Task} from './models/tasks.js';

//fonction pour ajouter une tache
const addTasks = async () => {

    const task = new Task({
        description: 'Apprendre Mongoose ORM',
        completed: false
    });    

    try{
        await task.save()
        console.log('tache ajoute')

    }catch(e){
        console.log(e)
    }

}

// addTasks();

//code pour ajouter une page web front end
//ici la difficulté est de trouver le chemin absolu du fichier index.html car le chemin relatif ne fonctionne pas avec express et node en mode module
// ex de chemin absolue : C:\Users\Utilisateur\Desktop\cours\NodeJS\TaskManager\public\index.html
// ex de chemin relatif : ./public/index.html

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 
const publishDirectoryPath = path.join(__dirname, '/public')


//set public directory - Pas besoin de faire un app.get pour chaque fichier
app.use(express.static(publishDirectoryPath))


/*
* Dans le même esprit, ajouter un model pour les users
* et ajouter un user dans la BDD
*
* Ajouter une route post pour ajouter un user/tache
* Ajouter une route get pour récupérer un user/tache
*/
    
//lancement du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});