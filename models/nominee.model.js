const mongoose = require("mongoose");

const nomineeSchema = mongoose.Schema(
  {
    mail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    segment: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const nomineeModel = mongoose.model("auth", nomineeSchema);
module.exports = {
  nomineeModel,
};
