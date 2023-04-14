"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Admin_1 = __importDefault(require("./Admin"));
const Public_1 = __importDefault(require("./Public"));
const router = (0, express_1.Router)();
const baseRoute = "/api";
router.use(baseRoute, Admin_1.default);
router.use(baseRoute, Public_1.default);
exports.default = router;
