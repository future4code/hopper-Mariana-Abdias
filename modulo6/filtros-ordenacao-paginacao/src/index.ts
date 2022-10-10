import { app } from './app'
import { getAllOrderUsers } from './endpoints/getAllOrderUsers'
import { getAllUsersByName } from './endpoints/getAllUsersByName'
import { getAllUsersByType } from './endpoints/getAllUsersByType'
import { getAllUsersByPage } from './endpoints/getAllUsersByPage'
import { getAllUsersFilterAndOrderAndPage } from './endpoints/getAllUsersFilterAndOrderAndPage'

app.get('/users', getAllUsersByName)
app.get('/user/:type', getAllUsersByType)
app.get('/search', getAllOrderUsers)
app.get('/page', getAllUsersByPage)
app.get('/fullsearch', getAllUsersFilterAndOrderAndPage)
