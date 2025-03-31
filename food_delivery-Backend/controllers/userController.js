const user = require("../models/UserSchema");
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");


// for post the signup data
const signpost = [
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("pass", "incorrect password").isLength({ min: 5 }),
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.pass,salt);

    try {
      await user.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        pass: secPass,
      });
      resp.json({ success: true });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  },
];


// for post the or get the login
const logpostt = [
  body("email").isEmail(),
  body("pass", "incorrect password").isLength({ min: 5 }),
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return resp
          .status(400)
          .json({ error: "try logging with right credentials" });
      }
      if (req.body.pass !== userData.pass) {
        return resp
          .status(400)
          .json({ error: "try logging with right credentials" });
      }
      return resp.json({ success: true });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  },
];

module.exports = { signpost, logpostt };
