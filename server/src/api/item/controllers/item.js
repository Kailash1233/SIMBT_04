"use strict";

const Stripe = require("stripe");

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
/**
 * item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item");
