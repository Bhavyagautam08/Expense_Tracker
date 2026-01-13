import express from "express" 
import dotenv from "dotenv" 
import router from "./routes/expenseRoutes.mjs"
import "./jobs/cronJob"

dotenv.config() 

const app = express() ;

app.use(express.json()) ;
app.use("/api/expenses" , router) ;

const PORT = process.env.PORT || 4000 ;

app.listen(PORT , () =>{
    console.log(`Server is live on ${PORT}`) ;
})