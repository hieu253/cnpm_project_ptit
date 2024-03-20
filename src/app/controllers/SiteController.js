var Cat = require("../models/Cat");
var { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //[GET]/
  index(req, res, next) {
    Cat.find({})
      .then((cats) => {
        res.render("home", {
          cats: mutipleMongooseToObject(cats),
        });
      })
      .catch(next);

    //res.render('home')
  }

  //[GET]/search
}

module.exports = new SiteController();
