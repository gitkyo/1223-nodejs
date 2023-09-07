//Task model
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    }, completed: {
        type: Boolean,
        default: false
    }
});

//definition de notre model à enregistrer
export const Task = mongoose.model('Task', taskSchema);


