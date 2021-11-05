const router = require("express").Router()
const Projects = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const projectList = await Projects.getProjects()
        res.status(200).json(projectList)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Projects.createProject(req.body)
        res.status(201).json(newProject)
    } catch(err){
        next(err)
    }
})

module.exports = router;

router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "something went wrong",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router