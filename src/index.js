var express = require("express");
var app = express();
var handlebars = require("express-handlebars");
var morgan = require("morgan");
var route = require("./routes");
var methodOverride = require("method-override");

app.listen(2500);

//Connect to DB
var db = require("./config/db");
db.connect();
app.use(methodOverride("_method"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//HTPP logger
app.use(morgan("combined"));
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "src/resources/views");
//routes init
route(app);
