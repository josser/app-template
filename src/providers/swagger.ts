import swaggerJsdoc from 'swagger-jsdoc';

export default {
  token: 'swagger',
  useValue: swaggerJsdoc({
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/**/*'],
})    
}
