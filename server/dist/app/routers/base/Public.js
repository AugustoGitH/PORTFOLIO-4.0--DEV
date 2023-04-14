"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouters = exports.baseRoute = void 0;
const Public_1 = __importDefault(require("../../controllers/Public"));
exports.baseRoute = "/public";
exports.publicRouters = [
    {
        path: `${exports.baseRoute}/get-projects`,
        method: "get",
        controller: Public_1.default.getProjects
    },
    {
        path: `${exports.baseRoute}/login`,
        method: "post",
        controller: Public_1.default.login
    },
    {
        path: `${exports.baseRoute}/verify-credential`,
        method: "get",
        controller: Public_1.default.verifyCredential
    },
    {
        path: `${exports.baseRoute}/view-project`,
        method: "put",
        controller: Public_1.default.viewProject
    },
    {
        path: `${exports.baseRoute}/like-project`,
        method: "put",
        controller: Public_1.default.likeProject
    },
];
