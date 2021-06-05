const express = require("express")
const create = require("../controllers/create")


const router = express.Router()

router.get("/create", create.GET)
router.post("/create", create.POST)


module.exports = router