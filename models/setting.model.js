const { default: mongoose } = require("mongoose");


// create schema
const settingSchema = new mongoose.Schema({
  name: {
    type: String, default: null
  },
  logo: String,
  copyright: String,
  metaname:String,
  metadescription:String,
  metalogo:String,
  metakeyword:String,
});
exports.Setting = mongoose.model("setting", settingSchema);