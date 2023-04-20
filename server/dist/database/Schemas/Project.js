"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaProject = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const SchemaProject = (data) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().min(4).max(47).required(),
        images: joi_1.default.object({
            cover: joi_1.default.string().required(),
            images: joi_1.default.array().items(joi_1.default.string()).optional()
        }).required(),
        type: joi_1.default.string().required(),
        technologiesUsed: joi_1.default.array().items(joi_1.default.string()).min(2).required(),
        websiteLink: joi_1.default.string().optional().allow(""),
        videoLink: joi_1.default.string().optional().allow(""),
        repoId: joi_1.default.number().optional().allow(null),
    });
    return schema.validate(data);
};
exports.SchemaProject = SchemaProject;
