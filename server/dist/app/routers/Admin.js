"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const credentialCheckAccess_1 = __importDefault(require("../utils/credentialCheckAccess"));
const Admin_1 = require("./base/Admin");
const createRouters_1 = __importDefault(require("../utils/createRouters"));
const router = (0, express_1.Router)();
(0, createRouters_1.default)({
    router,
    middleware: credentialCheckAccess_1.default,
    routers: Admin_1.adminRouters
});
exports.default = router;
