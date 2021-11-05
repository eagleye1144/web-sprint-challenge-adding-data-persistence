const router = require("express").Router()
const Tasks = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const taskList = await Tasks.getTasks()
        res.status(200).json(taskList)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.createTask(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }      
})


router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "something went wrong",
        message: err.message,
        stack:err.stack
    })
})

module.exports = router