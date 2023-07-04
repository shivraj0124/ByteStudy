const express = require("express");
const app = express();
const mongoose = require("mongoose");
const d = require("./Models/Department");
const admin = require("./Routers/Admin");
app.use(express.json());

var mongoDB ="mongodb+srv://bytedevs2121:hOcrlw04HQFxrGwg@cluster0.vwunbbd.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("coonection succsess");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/api/v1", admin);

app.listen(5000, () => {
  console.log("running");
});
