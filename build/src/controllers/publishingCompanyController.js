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
exports.publishingCompanyController = void 0;
const PublishingCompany_1 = require("../models/PublishingCompany");
class PublishingCompanyController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("alo");
                const publishers = PublishingCompany_1.PublishingCompany.find({}).exec();
                return res.status(200).send({
                    publishers,
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
                const publisher = yield PublishingCompany_1.PublishingCompany.create({ name });
                return res.status(200).send({
                    publisher,
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
const publishingCompanyController = new PublishingCompanyController();
exports.publishingCompanyController = publishingCompanyController;
