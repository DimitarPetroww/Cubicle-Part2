const Cube = require("../models/Cube")

async function create(cube) {
    const existing = new Cube(cube)

    return existing.save()
}
async function getAll() {
    return Cube.find({}).lean()
}
async function getOne(id) {
    return Cube.findById(id).lean()
}


module.exports = {
    create,
    getAll,
    getOne
}