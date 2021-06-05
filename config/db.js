const mongoose = require('mongoose');
const cubeStorage = require("../services/cube")

module.exports = async (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost/cubicle', { useNewUrlParser: true, useUnifiedTopology: true });

        const db = mongoose.connection
        db.on("error", (err) => {
            reject(err.message)
        })
        db.on("open", () => {
            app.use((req, res, next) => {
                req.cubeStorage = cubeStorage

                next()
            })

            resolve("connected!")
        })
    })
}