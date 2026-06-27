import mongoose from "mongoose";

const connectDB= async ()=>{
  await mongoose.connect('mongodb://localhost:27017/stdManage')
  .then(()=>{
    console.log('MongooDB connect Successfully ')
  })
}

export default connectDB