const baseRouter = require("../routers/index");
const cubeRouter = require("../routers/cube")

module.exports = (app) => {
    app.use("/", baseRouter)
    app.use("/cube", cubeRouter)

};