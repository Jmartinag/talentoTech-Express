const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserSchema = require('../models/User');
const UserController = require('../controllers/UserController'); //Importando el controllador
const multer = require('multer');
const userController = new UserController(); // creando una instancia de ese controlador

router.get('/house', async (req, res) => {
     //Traer todos los usuarios
     let users = await UserSchema.find(); 
     res.json(users)
 })