import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://canada123:canada123@cluster0.vsiuazv.mongodb.net/expensedb?retryWrites=true&w=majority";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}