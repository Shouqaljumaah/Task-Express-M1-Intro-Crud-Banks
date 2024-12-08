const express = require("express");

const router = express.Router();
const accounts = require("../../accounts");

const {
  createAccounts,
  updateAccounts,
  deleteAccounts,
} = require("./controllers");

router.get("/", (req, res) => {
  res.status(200).json(accounts);
});

router.post("/", createAccounts);
router.delete("/:accountId", deleteAccounts);
router.put("/:accountId", updateAccounts);

module.exports = router;
