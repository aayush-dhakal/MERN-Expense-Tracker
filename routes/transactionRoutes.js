const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

//routes
// add transaction POST Method
router.post("/", addTransaction);

router.get("/", getAllTransaction); // using post because we are passing userId in body

router.put("/", editTransaction);

router.delete("/", deleteTransaction);

module.exports = router;
