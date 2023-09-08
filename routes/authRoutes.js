import express from 'express'
import {registerControler, loginController} from '../controller/authController.js'

 // router object 
const router = new express.Router()

//routing object
router.post('/register', registerControler )

// LOGIN POST 
router.post('/login', loginController)

export default router