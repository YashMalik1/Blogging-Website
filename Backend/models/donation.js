const mongoose = require("mongoose");

const Donation = mongoose.model("Donation", {
  amount : {
    type: Number,
    required: true,
  },

  transactionDate: {
    type: Date,
    required: true,
  },

  writer: {
    type: String,
    required: true,
  },
});

module.exports = Donation;
