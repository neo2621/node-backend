const express = require('express')
const bodyParser = require('body-parser')
const userroutes = require(`./src/users/routes`);
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

  app.use(`./api/v1/users`, userroutes);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })