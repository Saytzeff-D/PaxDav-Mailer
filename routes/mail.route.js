const express = require("express");
const { mailUser, newMsg } = require("../controllers/mail.controller");

const MailRouter = express.Router();

MailRouter.post("/sendmail", mailUser);
MailRouter.post("/newMsg", newMsg);

module.exports = MailRouter;