const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//import API ☆☆☆☆☆☆☆☆☆☆☆☆☆☆
const blogRoute = require("./routes/blog"); //slug and validate example
const vaccine = require("./routes/vaccine");
const vaccine_epiRoute = require("./routes/vaccine_epi");
const vaccine_optionalRoute = require("./routes/vaccine_optional");
const user = require('./routes/user')

const app = express();

//connect to cloud database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("Connection Successfully"))
  .catch((err) => console.log("err"));

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route ☆☆☆☆☆☆☆☆☆☆☆☆☆☆
app.use("/api", blogRoute);
app.use("/api", vaccine);
app.use("/api", vaccine_epiRoute);
app.use("/api", vaccine_optionalRoute);
app.use("/api", user);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Start Server On Port ${port}`));

//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerConfig");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
