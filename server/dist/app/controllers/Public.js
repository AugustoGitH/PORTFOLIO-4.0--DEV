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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("../../database/models/Project"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.default = {
    verifyCredential(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.cookies[process.env.TOKEN_AUTHENTICATION_NAME];
            if (!token) {
                return res.send({
                    message: 'Token não encontrado!',
                    isAuthenticated: false
                });
            }
            try {
                const decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
                res.send({
                    message: 'Você possui a permissão necessária!',
                    isAuthenticated: true
                });
            }
            catch (error) {
                res.send({
                    message: 'Você não possui a permissão necessária!',
                    isAuthenticated: false
                });
            }
        });
    },
    getProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project_1.default.find({});
                res.status(200).send({
                    message: 'Projetos resgatados com sucesso!',
                    data: projects
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao buscar projetos na rota publica -------> ${error}`);
                res.status(500).send({
                    message: 'Ocorreu um erro interno no servidor na tentativa de resgatar projetos.'
                });
            }
        });
    },
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password } = req.body;
            const { NAME_ADMIN, PASSWORD_ADMIN, TOKEN_SECRET, TOKEN_AUTHENTICATION_NAME } = process.env;
            const passAndUserMatch = bcryptjs_1.default.compareSync(password || '.', PASSWORD_ADMIN);
            if (!name || !password || name !== NAME_ADMIN || !passAndUserMatch) {
                return res.status(401).send({
                    message: 'Nome de usuário ou senha incorretos!'
                });
            }
            try {
                const token = jsonwebtoken_1.default.sign({
                    adminName: name,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                }, TOKEN_SECRET);
                res.cookie(TOKEN_AUTHENTICATION_NAME, token, {
                    secure: true,
                    httpOnly: true
                });
                res.status(200).send({
                    message: 'Bem-vindo Carrara!'
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao fazer login -------> ${error}`);
                res.status(500).send({
                    message: 'Ocorreu um erro interno no servidor!'
                });
            }
        });
    },
    likeProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProject, stateLike } = req.body;
            const FAVORITE = 'favorite';
            const DESFAVORITE = 'desfavorite';
            try {
                const project = yield Project_1.default.findById(idProject);
                if (!project) {
                    return res.status(404).send({
                        message: 'Projeto não encontrado'
                    });
                }
                const statusUpdate = yield Project_1.default.findByIdAndUpdate(idProject, {
                    $inc: {
                        likes: stateLike === FAVORITE ? 1 : stateLike === DESFAVORITE ? -1 : 0
                    }
                });
                return res.status(200).send({
                    message: 'O projeto foi curtido com sucesso!'
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao curtir projeto -------> ${error}`);
                res.status(500).send({
                    message: 'Ocorreu um erro interno no servidor!'
                });
            }
        });
    },
    viewProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProject } = req.body;
            try {
                const project = yield Project_1.default.findById(idProject);
                if (!project) {
                    return res.status(404).send({
                        message: 'Projeto não encontrado'
                    });
                }
                const statusUpdate = yield Project_1.default.findByIdAndUpdate(idProject, {
                    $inc: { views: 1 }
                });
                res.status(200).send({
                    message: 'O projeto foi visualizado com sucesso!'
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao visualizar projeto -------> ${error}`);
                res.status(500).send({
                    message: 'Ocorreu um erro interno no servidor!'
                });
            }
        });
    }
};
