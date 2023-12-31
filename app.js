/*
* PARTIE SUPERIEUR COMPRENANT SOUVENT LES IMPORTS DE DEPENDANCES
*/

//import express
import express from 'express';

//load env variables
import dotenv from 'dotenv';
dotenv.config();

//import DB manager file
import {connectDB} from './db/mongodb.js';
connectDB();

//create express app
const app = express();

//set port, listen for requests
const PORT = 8080;

//config app to use/parse json
app.use(express.json())

//on informe express qu'il utilise notre routeur
import {taskRouter} from './routers/tasks.js';
app.use(taskRouter)



//import d'un model de donnée pour les users afin de faciliter l'ajout de données
import {User} from './models/users.js';

//fonction pour ajouter un user
const addUsers = async (req, res) => {
   
    const user = new User(req.body)

    try{
        await user.save()        
        res.status(201).send(user)

    }catch(e){

        res.status(400).send(e)  

    }
}

//fonction pour lire les users
const getUsers = async (req, res) => {

    try{
        const users = await User.find({})
        res.send(users)
        //Note : ici on pourrai éventuellement envoyer les données dans une vue à l'aide de moteur de template, soit un fichier ejs, soit un fichier pug
    }catch(e){
        res.status(500).send()
    }
}

//route to add a user
app.post('/users', async (req, res) => {  
    //appel du controller addUsers
    addUsers(req, res);
})

//route to get all users
app.get('/users', async (req, res) => {
    //appel du controller getUsers
    getUsers(req, res);
})


/*
* PARTIE FRONT - STATIC FILES
*/
    

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


//Configuration du serveur avec un "set public directory" - Pas besoin de faire un app.get pour chaque fichier
app.use(express.static(publishDirectoryPath))


/*
* lancement du serveur
*/

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});