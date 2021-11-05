function getResourceById(resource_id) {
    return Promise.resolve(`awesome ${resource_id}`)
}

module.exports = {getResourceById}