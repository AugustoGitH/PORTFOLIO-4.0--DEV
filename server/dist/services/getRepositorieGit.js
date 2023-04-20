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
const axios_1 = __importDefault(require("axios"));
const github_1 = require("../constants/github");
const Repositorie = {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: repositories } = yield axios_1.default.get(github_1.URLUSER, {
                    headers: {
                        Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`
                    }
                });
                return repositories;
            }
            catch (error) {
                console.log("Ocorreu um erro ao resgatar repositorios ------>" + error);
                return null;
            }
        });
    },
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: repositories } = yield axios_1.default.get(github_1.URLUSER, {
                    headers: {
                        Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`
                    }
                });
                return repositories.find(repo => repo.id === id) || null;
            }
            catch (error) {
                console.log("Ocorreu um erro ao resgatar repositorios ------>" + error);
                return null;
            }
        });
    },
    findTechnologies(languagesUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: technologiesUsed } = yield axios_1.default.get(languagesUrl);
                return technologiesUsed;
            }
            catch (error) {
                console.log("Ocorreu um erro ao resgatar tecnologias usadas no repositorio ------>" + error);
                return null;
            }
        });
    }
};
exports.default = Repositorie;
