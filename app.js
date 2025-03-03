import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";

//import xss from 'xss-clean'
import {
  PORT,
  DATABASE_URL,
  JWT_KEY,
  JWT_EXPIRED_TIME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_SECURITY,
  EMAIL_USER,
  EMAIL_PASSWORD,
  WEB_CACHE,
  MAX_JSON_SIZE,
  REQUEST_TIME,
  REQUEST_NUMBER,
} from "./app/config/config.js";
import routes from "./routes/api.js";

const app = express();
const port = PORT;

// APP MIDDLEWARES
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
//app.use(xss())
app.use(
  rateLimit({
    windowMs: REQUEST_TIME,
    max: REQUEST_NUMBER,
    message: "Too many requests from this IP, please try again in a minute",
  })
);

app.use("/api", routes);

//web cache
app.set("cache", WEB_CACHE);
//connect to database
mongoose
  .connect(DATABASE_URL, { autoIndex: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
