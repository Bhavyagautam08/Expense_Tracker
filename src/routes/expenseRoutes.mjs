import express from "express";
import { addExpense, getExpenses, getExpenseAnalytics } from "../controllers/expenseController.mjs";
import { validation } from "../middlewares/validation.mjs";

const router = express.Router();

router.post("/addExpense", validation, addExpense);

router.get("/getExpenses", validation, getExpenses);

router.get("/getAnalytics", validation, getExpenseAnalytics);

export default router;
