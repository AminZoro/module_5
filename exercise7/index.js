const app = require("./app");

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up:${port}`);
});

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("../swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
