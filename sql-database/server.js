const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require(`./src/users/routes`);
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.use(`./api/v1/users`, userRoutes);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })