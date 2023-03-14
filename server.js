
const express = require("express");
var exphbs  = require('express-handlebars');
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000;
const app = express();
require('dotenv').config();
const mysqlHelper = require("./common/mysqlHelper")
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.set("port", port);

const routes = require("./routes/routes")
app.use("/",routes)

app.listen(port, () => {
  mysqlHelper.init();
  console.log(`Example app listening on port ${port}`)
})