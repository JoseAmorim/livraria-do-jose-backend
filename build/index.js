"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./src/routes");
// rest of the code remains same
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://Joshep:joshepv@cluster0.7zbwn.mongodb.net/database?retryWrites=true&w=majority", () => {
    console.log("connected to database");
});
const PORT = 8000;
app.use(express_1.default.json());
app.use(routes_1.routes);
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
