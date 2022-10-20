import { app } from "./app"
import { UserArqController } from "./controller/UserArqController"


const userArqController = new UserArqController()


app.post('/userArq', userArqController.createUserArq)
app.get('/userArq', userArqController.getAllUserArq)
app.delete('/userArq/:id', userArqController.deleteUserArq)
