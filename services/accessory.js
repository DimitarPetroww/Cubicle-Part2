const Accessory = require("../models/Accessory")

async function create(accessory) {
    const existing = new Accessory(accessory)

    return existing.save()
}
async function getAll() {
    return Accessory.find({}).lean()
}
async function getOne(id) {
    return Accessory.findById(id).lean()
}


module.exports = {
    create,
    getAll,
    getOne
}