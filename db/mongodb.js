// CRUD create read update delete
import mongoose from 'mongoose'

export const connectDB = async () => {
    const url = 'mongodb://'+process.env.HOST+'/'+process.env.DBNAME;
    try {
        await mongoose.connect(url, { });
    } catch (error) {
        console.log(error)
    }
}

//Exemple de connexion à la BDD avec mongodb 

/*
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }


    /*
    * Exemple d'ajout de donnée avec la méthode insertOne()
    * Il est préférable d'utiliser à l'avenir des models de donnée
    */

    // const db = client.db(databaseName)
    
    
    //insert one document into the collection
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    //insert many documents into the collection
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    //insert many documents into the collection
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })
// })


