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
exports.authorController = void 0;
const Author_1 = require("../models/Author");
class AuthorController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("alo");
                const authors = Author_1.Author.find({}).exec();
                return res.status(200).send({
                    authors,
                });
            }
            catch (err) {
                return res.status(500).send({
                    err,
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                console.log(name);
                const author = yield Author_1.Author.create({ name });
                return res.status(200).send({
                    author,
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
const authorController = new AuthorController();
exports.authorController = authorController;
