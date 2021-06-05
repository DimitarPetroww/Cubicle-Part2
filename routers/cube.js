const express = require("express")
const create = require("../controllers/create")


const router = express.Router()

router.get("/create", create.GET)


module.exports = router