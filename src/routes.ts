import { Router } from "express"
import { authorController } from "./controllers/authorController"
import { bookController } from "./controllers/bookController"
import { genreController } from "./controllers/genreController"
import { publishingCompanyController } from "./controllers/publishingCompanyController"
import { sessionController } from "./controllers/sessionController"
import { userController } from "./controllers/userController"

const routes = Router()

routes.get("/authors", authorController.index)
routes.post("/authors", authorController.create)

routes.get("/publishers", publishingCompanyController.index)
routes.post("/publishers", publishingCompanyController.create)

routes.get("/books", bookController.index)
routes.post("/books", bookController.create)

routes.get("/genres", genreController.index)

routes.post("/register", userController.create)
routes.post("/sessions", sessionController.create)

export { routes }
