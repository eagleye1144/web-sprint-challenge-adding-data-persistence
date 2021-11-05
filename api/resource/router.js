const router = require("express").Router()
const Resources = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resourceList = await Resources.getResources()
        res.status(200).json(resourceList)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.createResource(req.body)
        res.status(201).json(newResource)
    } catch(err){
        next(err)
    }
})


router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "something went wrong",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router