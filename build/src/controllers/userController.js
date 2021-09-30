"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const User_1 = require("../models/User");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name } = req.body;
                console.log(email);
                const createdUser = yield User_1.User.findOne({ email });
                if (createdUser) {
                    return res.status(400).send({
                        erro: "Usuário já cadastrado",
                    });
                }
                const user = yield User_1.User.create({ email, name });
                return res.status(200).send({
                    user,
                });
            }
            catch (err) {
                console.log(err);
                return res.status(500).send({
                    err,
                });
            }
        });
    }
}
const userController = new UserController();
exports.userController = userController;
