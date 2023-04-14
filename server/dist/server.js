"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = __importDefault(require("./app/routers"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json({ limit: "9999999999mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "9999999999mb", extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(routers_1.default);
app.listen(PORT, () => console.log(`-----------> Servidor rodando na porta ${PORT}!`));
mongoose_1.default.connect(process.env.MONGO_CONNECTION_URL)
    .then(() => console.log(`-----------> Bando de dados conectado`))
    .catch(e => console.log("Erro ao se conectar com o banco: " + e));
