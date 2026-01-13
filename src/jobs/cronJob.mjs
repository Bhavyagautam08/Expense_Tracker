import cron from "node-cron"
import { processRecurringTransactions } from "../services/recurringService.mjs"

cron.schedule("0 0 * * *" , async() =>{
    console.log("Cron Job started ") ;

    try{
        await processRecurringTransactions() ;
        console.log("Cron Job is done ");
    }catch(error){
        console.error(error) ;
    }
})