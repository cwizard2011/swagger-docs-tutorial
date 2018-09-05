const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./configuration/swagger')

// Create global app objects
const app = express();

// use swagger-Ui-express for your app documentation endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Your Routes start here

// Your Routes end here

// finally, let's start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`'Listening on port '${server.address().port}`);
});
