const router = require("express").Router()
const Resource = require('./model')

router.get('/resources', (req, res, next) => {
    Resource.getResourceById(req.params.resource_id)
        .then((resource) => {
            res.json(resource)
        })
        .catch(next())
})

router.post('/resources', (req, res, next) => {
  
  })


router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "something went wrong",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router