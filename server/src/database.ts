import mongoose from "mongoose";
import "dotenv/config";
const DBURL =
  process.env.DBURL

mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("✅ MongoDB Connected.... "))
  .catch((err) => console.log(err));
