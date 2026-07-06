import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: false
    }
})

const sampleModel = mongoose.model('Sample', sampleSchema);

export default sampleModel;