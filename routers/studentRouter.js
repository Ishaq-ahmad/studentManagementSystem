import express, { Router } from 'express'
const router= express.Router()


import student from '../models/studentModel.js'


router.get('/addStudent', (req, res)=>{
    res.render('addStudent')
})

router.post('/addStudent', async (req, res)=>{
    await student.create(req.body);
    res.redirect('/')
})

router.get('/viewStudent/:id', async (req, res)=>{
 
    const user= await student.findById(req.params.id)
    res.render('view-student', {user})

})



router.get('/students', async (req, res)=>{
    const users = await student.find();
    res.render('students' , {users})
})  




router.get("/editStudent/:id", async (req, res)=>{
    const user= await student.findById(req.params.id)

    res.render('edit', {user})
})

router.post('/editStudent/:id', async (req, res)=>{
    await student.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/students')
})


router.get('/delete/:id', async (req, res)=>{
    await student.findByIdAndDelete(req.params.id)
    res.redirect('/students')
})
export default router