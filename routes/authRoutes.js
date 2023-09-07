import express from 'express'
import {registerControler} from '../controller/authController.js'

 // router object 
const router = new express.Router()

//routing object
router.post('/register', registerControler )

export default router