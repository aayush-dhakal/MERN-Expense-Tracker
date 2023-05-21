const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const path = require("path");

dotenv.config();

connectDb();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

// providing location for static file. By setting up this middleware, Express will automatically handle requests for static files (e.g., CSS, JavaScript, images) by looking for them in the specified directory and serving them to the client.
app.use(express.static(path.join(__dirname, "./client/build")));

// rendering the static index file created from react build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
