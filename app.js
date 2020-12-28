const express = require("express");
const swaggerUi = require("swagger-ui-express");
const ymlfile = require("./documentation")

const app = express();

// load env variables and create .env.example file
const dotenv_safe = require("dotenv-safe");
dotenv_safe.config();

// middleware
app.use('/api', swaggerUi.serve, swaggerUi.setup(ymlfile));

// listening on environment port if defined or 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Node JS API is listening on port: ${port}`);
});