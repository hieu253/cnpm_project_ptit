var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

var Cat = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: "name" },
});

module.exports = mongoose.model("Cat", Cat);
