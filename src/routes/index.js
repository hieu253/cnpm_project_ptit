var siteRouter = require("./site");
var catsRouter = require("./cats");
var meRouter = require("./me");
function route(app) {
  app.use("/me", meRouter);
  app.use("/cats", catsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
