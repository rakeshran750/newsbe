// models/News.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  image: { type: String },
  publishTime: { type: String }
},{timestamps:true});


module.exports = mongoose.model('News', newsSchema);