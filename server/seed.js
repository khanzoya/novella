import express from 'express';
import bcrypt from 'bcrypt'
import { Admin } from "./models/Admin.js";
import './db.js'


async function AdminAccount(){
try{
    const adminCount = await Admin.countDocuments()
    if(adminCount === 0){
        const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
        const newAdmin = new Admin({
            username: 'admin',
            password: hashPassword
        })
        await newAdmin.save()
        console.log("Admin account created")
    }
    else{
        console.log("Admin account already existed")
    }
} catch(err){
        console.error("Error creating admin account:", err.message);
    }
}

AdminAccount()