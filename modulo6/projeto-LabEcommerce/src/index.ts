import { app } from './app'
import { createUsers } from './endpoints/createUsers'
import { getAllUsers } from './endpoints/getAllUsers'
import { createProducts } from './endpoints/createProducts'
import { getAllProducts } from './endpoints/getAllProducts'
import { createPurchases } from './endpoints/createPurchases'
import { getPurchasesByUser } from './endpoints/getPurchasesByUser'

app.post('/users', createUsers)
app.get('/users', getAllUsers)
app.post('/products', createProducts)
app.get('/products', getAllProducts)
app.post('/purchases', createPurchases)
app.get('/users/:user_id/purchases', getPurchasesByUser)