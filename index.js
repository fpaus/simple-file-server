const express = require('express');
const swaggerUiExpress = require('swagger-ui-express');
const specs = require('./docs/swagger-options');
const route = require('./route');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
const customCssUrl =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.1.0/swagger-ui.min.css';
app.use(
  '/docs',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(specs, { customCssUrl }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', route);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
