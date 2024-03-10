const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//   author: ObjectId,
  image: String,
  name: { type:String, required: true, max:[20, '最大20文字までです']},
  price: String,
  description: String,
  Heading1: String,
  Heading2: String,
  Heading3: String,
  text1: String,
  text2: String,
  text3: String,
  listtext: String,
});

module.exports = mongoose.model('Product', ProductSchema);
