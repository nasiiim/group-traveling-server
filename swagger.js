const swaggerAutogen = require('swagger-autogen')

const outputFile = './swagger_output.json'
// const endpointsFiles = ['./routes/trip.routes.js','./routes/auth.routes.js']
const endpointsFiles = ['./app.js']

// const endpointsFiles = [
//     {
//       filePath: './routes/trip.routes.js',
//       prefix: '/trips'
//     },
//     {
//       filePath: './routes/auth.routes.js',
//       prefix: '/auth'
//     }
//   ]

swaggerAutogen(outputFile, endpointsFiles)