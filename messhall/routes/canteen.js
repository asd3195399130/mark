const express = require("express");
const router = express.Router();
const {
  getmenulist,
  addmenulist,
  updatemenulist,
  deletemenulist,
} = require("../Controller/MenuControll");
// const { updatemenu } = require("../Database/foots");

router.get("/Menulist", getmenulist);
router.post("/addlist", addmenulist);
router.post("/update/:id", updatemenulist);
router.delete("/dellist/:id", deletemenulist);
module.exports = router;
