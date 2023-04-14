"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouters = exports.baseRoute = void 0;
const Admin_1 = __importDefault(require("../../controllers/Admin"));
exports.baseRoute = "/admin";
exports.adminRouters = [
    {
        path: `${exports.baseRoute}/create-project`,
        method: "post",
        controller: Admin_1.default.createProject
    },
    {
        path: `${exports.baseRoute}/get-projects`,
        method: "get",
        controller: Admin_1.default.getProjects
    },
    {
        path: `${exports.baseRoute}/get-repositories`,
        method: "get",
        controller: Admin_1.default.getRepositories
    },
    {
        path: `${exports.baseRoute}/favorite-project`,
        method: "put",
        controller: Admin_1.default.favoriteProject
    },
    {
        path: `${exports.baseRoute}/reload-repo-project`,
        method: "put",
        controller: Admin_1.default.reloadRepoProject
    },
    {
        path: `${exports.baseRoute}/update-project`,
        method: "put",
        controller: Admin_1.default.updateProject
    },
    {
        path: `${exports.baseRoute}/delete-project`,
        method: "delete",
        controller: Admin_1.default.deleteProject
    }
];
