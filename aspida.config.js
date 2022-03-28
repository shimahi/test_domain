module.exports = [
  { input: 'src/api/universities' },
  {
    input: 'src/api/petstore',
    openapi: { inputFile: 'https://petstore.swagger.io/v2/swagger.json' },
  },
]
