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
exports.bookController = void 0;
const Author_1 = require("../models/Author");
const Book_1 = require("../models/Book");
const PublishingCompany_1 = require("../models/PublishingCompany");
const User_1 = require("../models/User");
class BookController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("alo");
                const books = Book_1.Book.find({}).exec();
                return res.status(200).send({
                    books,
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
                const { title, synopsis, pages, author_id, publisher_id, user_id } = req.body;
                const author = yield Author_1.Author.findById(author_id).exec();
                const publisher = yield PublishingCompany_1.PublishingCompany.findById(publisher_id).exec();
                const book = yield Book_1.Book.create({
                    title,
                    synopsis,
                    pages,
                    author,
                    publisher,
                });
                yield User_1.User.findByIdAndUpdate(user_id, {
                    $push: { books: book },
                }).exec();
                yield (author === null || author === void 0 ? void 0 : author.update({
                    $push: { books: book },
                }).exec());
                yield (publisher === null || publisher === void 0 ? void 0 : publisher.update({
                    $push: { books: book },
                }).exec());
                return res.status(200).send({
                    book,
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
const bookController = new BookController();
exports.bookController = bookController;
