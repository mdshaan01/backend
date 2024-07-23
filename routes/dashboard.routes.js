const express = require("express")
const { dashboard } = require("../controllers/dashboard.controller")
const { editOrAddSetting, getSetting } = require("../controllers/setting.controller")
const router = express.Router()


router.get("/dashboard/alldata",dashboard)
router.post("/setting/editOrAddSetting",editOrAddSetting)
router.get("/setting/getSetting",getSetting)



module.exports = router