const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptiosn = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'External API',
      version: '1.0.0',
      description: 'External API Information',
    },
  },
  apis: [path.resolve(`./docs/**/*.yaml`)],
};

module.exports = swaggerJsdoc(swaggerOptiosn);
