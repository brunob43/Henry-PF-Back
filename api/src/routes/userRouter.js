const { Router } = require("express")
const {getDelUsersHandler, getUsersHandler, getIDUsersHandler, updateUsersHandler, postUsersHandler, deleteUsersHandler} = require("../handlers/userHandlers")

const userRouter = Router()


userRouter.get("/", getUsersHandler)

userRouter.get("/:id", getIDUsersHandler)

userRouter.get("/del", getDelUsersHandler)

userRouter.put("/:internal_id", updateUsersHandler)

userRouter.post("/", postUsersHandler)

userRouter.delete("/:internal_id", deleteUsersHandler)   //Borrado lógico

module.exports = userRouter