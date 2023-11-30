const express = require("express");
const router = express.Router();
const Donation = require("../models/donation");

const stripe = require("stripe")(
  "sk_test_51OHvxUSJpl8GTwfkbsV5bIfZMaJe9Zxj3nWFk57qOJum9CExg4SjOnIIySNaFaPsjro42kom3rJiBsbAtzovTY1g00cK7RdRih"
);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_d48e186dcd51249b35a3db9fb54a81a8f54f52a47aa57d5115ad3c5d62f7c2d8";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        endpointSecret
      );
    } catch (err) {
      console.log(err);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    let amount;
    let writerHandle;

    if (event.type === "checkout.session.completed") {
      const paymentIntentSucceeded = event.data.object;
      amount = paymentIntentSucceeded.amount_total;
      for (const item of paymentIntentSucceeded.custom_fields) {
        if (item.key === "providethewritershandle") {
          writerHandle = item.text.value;
          break;
        }
      }
    }

    if (amount && writerHandle) {
      await Donation.create({
        amount: amount,
        transactionDate: new Date(),
        writer: writerHandle,
      })
        .then((donation) => {
          console.log(donation);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

module.exports = router;
