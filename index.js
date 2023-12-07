const jsonServer = require('json-server')

const index = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

index.use(middlewares)
index.use('/api', router)
index.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})
