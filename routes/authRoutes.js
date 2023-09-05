import express from 'express'
const router = new express.Router()

//routing 
router.post('./register', registerControler )

export default router