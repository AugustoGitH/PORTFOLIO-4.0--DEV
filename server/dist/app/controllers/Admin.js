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
const Project_2 = require("../../database/Schemas/Project");
exports.default = {
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProject = req.body;
            const { repoId, repoLink } = newProject;
            const { error } = (0, Project_2.SchemaProject)(req.body);
            if (error)
                return res.status(404).send({
                    message: error.message,
                });
            const repositorie = repoId ? yield getRepositorieGit_1.default.findOneById(repoId) : null;
            const techsRepo = repositorie
                ? yield getRepositorieGit_1.default.findTechnologies(repositorie.languages_url)
                : null;
            const project = Object.assign(Object.assign({}, newProject), (repositorie && techsRepo && !repoLink
                ? {
                    repoLink: repositorie.svn_url,
                    repositoryTechnologiesPoints: techsRepo,
                }
                : repoLink
                    ? {
                        repoLink,
                    }
                    : {}));
            try {
                new Project_1.default(project).save();
                res.status(200).send({
                    message: "Projeto criado com sucesso!",
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao criar um projeto! --------> ${error}`);
                res.status(500).send({
                    message: "Ocorreu um erro interno no servidor ao tentar criar o seu projeto.",
                });
            }
        });
    },
    updateImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProject, images } = req.body;
        });
    },
    getProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project_1.default.find({});
                res.status(200).send({
                    message: "Projetos resgatados com sucesso!",
                    data: projects,
                });
            }
            catch (error) {
                console.log(`Ocorreu um erro ao resgatar projetos! --------> ${error}`);
                res.status(500).send({
                    message: "Ocorreu um erro interno no servidor ao buscar seus projetos.",
                });
            }
        });
    },
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { idProject } = _a, valuesEdited = __rest(_a, ["idProject"]);
            const repositorie = valuesEdited.repoId
                ? yield getRepositorieGit_1.default.findOneById(valuesEdited.repoId)
                : null;
            const techsRepo = repositorie
                ? yield getRepositorieGit_1.default.findTechnologies(repositorie.languages_url)
                : null;
            try {
                Promise.all([
                    Project_1.default.updateMany({ orderOfFive: valuesEdited.orderOfFive }, { orderOfFive: 0 }),
                    Project_1.default.findByIdAndUpdate(idProject, Object.assign(Object.assign({}, valuesEdited), (repositorie && techsRepo
                        ? {
                            repoLink: repositorie.svn_url,
                            repositoryTechnologiesPoints: techsRepo,
                        }
                        : {}))),
                ]);
                res.status(200).send({
                    message: "Projeto atualizado com sucesso!",
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({
                    message: "Erro interno no servidor ao atualizar o processo!",
                });
            }
        });
    },
    getRepositories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repositories = yield getRepositorieGit_1.default.findAll();
            res.status(200).send({
                message: "Repositorios resgatados com sucesso!",
                data: { repositories },
            });
        });
    },
    favoriteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    },
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProject } = req.params;
            try {
                yield Project_1.default.deleteOne({ _id: idProject });
                res.status(200).send({
                    message: "Projeto deletado com sucesso!",
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({
                    message: "Ocorreu um erro interno no servidor ao deletar projeto!",
                });
            }
        });
    },
    reloadRepoProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    },
};
