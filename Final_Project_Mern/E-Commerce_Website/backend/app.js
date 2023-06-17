const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser);
 
//routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api", user);
app.use("/api", product);
app.use("/api", order);

//middleware for errors
app.use(errorMiddleware);

module.exports = app