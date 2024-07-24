const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET));

const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: [
      process.env.CLIENT_URL, // keep this one, after checking the value in `server/.env`
    ],
  })
);

app.use(express.json());

// Import the API router
const apiRouter = require("./routers/api/router");

app.use(apiRouter);

const reactBuildPath = path.join(__dirname, "/../../client/dist");
const publicFolderPath = path.join(__dirname, "/../public");

// Serve react resources

app.use(express.static(reactBuildPath));

// Serve server resources

app.use(
  "/assets",
  express.static(path.join(publicFolderPath, "assets"), { maxAge: "1y" })
);

// Redirect unhandled requests to the react index file

app.get("*", (_, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

const logErrors = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);

  next(err);
};

app.use(logErrors);

module.exports = app;
