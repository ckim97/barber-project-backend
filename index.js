// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = 8080 || process.env.PORT

// server.use( jsonServer.rewriter({
//     "/barbershops/:id" : "barbershops/:id?_embed=barbers"
// }))

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})