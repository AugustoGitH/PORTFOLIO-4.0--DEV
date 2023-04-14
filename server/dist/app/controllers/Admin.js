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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("../../database/models/Project"));
const getRepositorieGit_1 = __importDefault(require("../../services/getRepositorieGit"));
exports.default = {
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { repoId } = _a, restProject = __rest(_a, ["repoId"]);
            const repositorie = yield (0, getRepositorieGit_1.default)(repoId || 0);
            try {
                const newProject = Object.assign(Object.assign({}, restProject), (repositorie ? repositorie : {}));
                const statusCreation = new Project_1.default(newProject).save();
                console.log(statusCreation);
                res.status(200).send({
                    message: "Projeto criado com sucesso!"
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao criar um projeto! --------> ${error}`);
                res.status(500).send({
                    message: "Ocorreu um erro interno no servidor ao tentar criar o seu projeto."
                });
            }
        });
    },
    getProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project_1.default.find({});
                res.status(200).send({
                    message: "Projetos resgatados com sucesso!",
                    data: projects
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao resgatar projetos! --------> ${error}`);
                res.status(500).send({
                    message: "Ocorreu um erro interno no servidor ao buscar seus projetos."
                });
            }
        });
    },
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    },
    getRepositories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    },
    favoriteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    },
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    },
    reloadRepoProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
