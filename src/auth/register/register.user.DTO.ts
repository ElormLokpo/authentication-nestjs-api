const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


export const RegisterUserSchema = new mongoose.Schema({
    firstname:String,
    lastname: String,
    othernames: String,
    age: Number,
    email:{
        type: String,
        validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Not a valid email type']
    },
    address: String,
    picture: String,
    password:String,
    pin: Number,
    phone: String,
    gender: String,
    title: String 
}, {timestamps:true});


RegisterUserSchema.pre('save', async function(){
    if(this.password || this.pin){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.pin = await bcrypt.hash(this.pin, salt);
    }
})


export interface RegisterUserDTO{
    firstname:string,
    lastname: string,
    othernames: string,
    age: number,
    email: string,
    address: string,
    picture: string,
    password:string,
    pin: number,
    phone: string,
    gender: string,
    title: string 
}