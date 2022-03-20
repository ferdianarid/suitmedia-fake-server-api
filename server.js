// initial jsonserver
const fakeServer = require("json-server")

// create instance from fake server
const application = fakeServer.create()

// route fake data
const router = fakeServer.router("db.json")

// json server middleware
const middlewares = fakeServer.defaults()

// server port | default 5500
const port = process.env.PORT || 5500

// use middleware and route
application.use(middlewares)
application.use(router)

// server listen
application.listen(port)