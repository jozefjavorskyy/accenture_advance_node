const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./routes/userRoute");
const auth = require("./routes/authRoute");

mongoose
  .connect("mongodb://localhost/accenture_node", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("database started successfully");
  })
  .catch((err) => {
    console.log("fail to connect", err);
  });

app.use(express.json());

app.use("/api/user", user);
app.use("/api/auth", auth);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("3000 port is ready");
});
