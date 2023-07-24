const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const { connection } = require("./config/db");
const { nomineeModel } = require("./models/nominee.model");

app.use(express.json());
app.use(cors());

// app.post("/nominee", async (req, res) => {
//   try {
//     console.log(req.body);
//     await nomineeModel.create(req.body);
//     return res.end();
//   } catch (error) {
//     return res.json({error})
//   }
// });

app.get("/nominee", async (req, res) => {
  const { email } = req.query;
  try {
    const nominee = await nomineeModel.findOne({mail : email});
    if(!nominee){
        return res.status(404).json({
            status : "fail",
            message : "Sorry! we can find Nominee"
        })
    }
    return res.json({
        status : "success",
        message : "We Got One Record",
        data : nominee
    })
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Somthing Went Wrong",
    });
  }
});

app.listen(PORT, () => {
  connection();
  console.log({ server: `listening at the ${PORT}` });
});
