const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 5000;
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(passport.initialize());
mongoose.set("useFindAndModify", false);

require("./middleware/passport")(passport);

//DB config
const db = require("./config/keys").mongoURI;
const projectHistoryRouter = require("./routes/projecthistoryRoute");

//MongoDB connect
mongoose
  // .connect("mongodb://localhost/bernard-kpi", { useNewUrlParser: true, useUnifiedTopology: true })
  .connect(
    "mongodb+srv://user:user@mern.a77ou.mongodb.net/akh-analytic?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//use routes
app.use("/api/user", require("./routes/usersRoute"));
app.use("/api/project", projectHistoryRouter);

if (true) {
  // Serve static assets if in production
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
http.listen(port, () => {
  console.log("server is running on port: " + port);
});
