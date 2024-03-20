var Cat = require("../models/Cat");
var { mongooseToObject } = require("../../util/mongoose");

class CatController {
  //[GET]/cats/create
  create(req, res, next) {
    res.render("cats/create");
  }
  //[GET]/cats/:slug
  show(req, res, next) {
    Cat.findOne({ slug: req.params.slug })
      .then((cat) => {
        res.render("cats/show", { cat: mongooseToObject(cat) });
      })
      .catch(next);
  }
  //[POST]/cats/store
  store(req, res, next) {
    var formData = req.body;
    var cat = new Cat(formData);
    cat
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Cat.findById(req.params.id)
      .then((cat) =>
        res.render("cats/edit", {
          cat: mongooseToObject(cat),
        })
      )
      .catch(next);
  }
  //[PUT]  /cats/:id
  update(req, res, next) {
    Cat.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/cats"))
      .catch(next);
  }
  //[DELETE]  /cats/:id
  delete(req, res, next) {
    Cat.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CatController();
