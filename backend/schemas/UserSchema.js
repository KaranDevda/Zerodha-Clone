const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const plugin = passportLocalMongoose.default || passportLocalMongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.plugin(plugin);

module.exports = { UserSchema };