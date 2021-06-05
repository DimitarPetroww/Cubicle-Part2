const baseRouter = require("../routers/index");
const cubeRouter = require("../routers/cube");
const notFound = require("../controllers/notFound");

module.exports = (app) => {
    app.use("/", baseRouter)
    app.use("/cube", cubeRouter)


    app.get("*", notFound.GET)
};