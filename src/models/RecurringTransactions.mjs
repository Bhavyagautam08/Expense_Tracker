import mongoose from "mongoose" 

const transactionSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "User" ,
            required : true 
        },
        amount : {
            type : Number ,
            required : true 
        },
        category : {
            type : String ,
            required : true
        },
        frequency : {
            type : String ,
            enum : ['daily', 'weekly', 'monthly', 'yearly'],
        },
        startDate : {
            type : Date 
        },
        nextRunDate : {
            type : Date ,
            index : true
        },
        isActive : {
            type : Boolean ,
            index : true 
        }
    },
    {timestamps : true}
)

transactionSchema.index({nextRunDate : 1 , isActive : 1}) ;

const transaction = mongoose.model("transaction" , transactionSchema) ;

export default transaction ;
