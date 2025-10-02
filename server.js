const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const { swaggerDocs, swaggerUi } = require("./swagger");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;
connectDb();
app.use(express.json()); //middleware ->  parse json data from the body and attatch it to req.body
app.use("/app/contacts", require("./routes/contactRoutes")); //middleware -> /app/contacts
app.use("/app/user", require("./routes/userRoutes"));
app.use(errorHandler);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))


app.listen(port, () => {
  console.log("Server running on port", port);
});
