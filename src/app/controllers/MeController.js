var Cat = require("../models/Cat");
var { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  storedCats(req, res, next) {
    Cat.find({})
      .then((cats) =>
        res.render("me/stored-cats", {
          cats: mutipleMongooseToObject(cats),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
