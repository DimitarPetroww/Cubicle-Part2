const express = require("express")
const createAccessory = require("../controllers/createAccessory")

const router = express.Router()

router.get("/create", createAccessory.GET)
router.post("/create", createAccessory.POST)


module.exports = router