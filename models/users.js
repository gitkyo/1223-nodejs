//user Model
import mongoose from 'mongoose'
import validator from 'validator'
  
const userShema = new mongoose.Schema({ 
    name: {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        default : 0,
        validate(value){
            if(value < 0) throw new Error('Age must be positive')
        }
    },
    email : { 
        type : String,
        lowercase : true,
        unique : true,
        trim : true,
        required : true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Email is invalid')
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 7,
        trim : true,
        validate(value){
            if(value.toLowerCase().includes('password')) throw new Error('le mot de passe ne peut pas contenir password')            
        }
    }
})


//creation d'un model de donnée pour les users afin de faciliter l'ajout de données
export const User = mongoose.model('User', userShema)