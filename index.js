const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');
const MailRouter = require("./routes/mail.route");

app.use(cors({origin: '*'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit:'50mb'}));

// Routes
app.use("/api", MailRouter);

app.get('/', function (req, res) {
  res.send('Hello, PAXDAV Mailer Server is Live')
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Mail Server running on port ${PORT}`));