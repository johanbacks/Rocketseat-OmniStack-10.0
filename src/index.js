const express = require ("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Semana10:semana10@cluster0-dumev.mongodb.net/test?retryWrites=true&w=majority" , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);
app.listen(3333);
