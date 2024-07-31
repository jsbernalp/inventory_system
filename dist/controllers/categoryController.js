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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryHandler = exports.updateCategoryHandler = exports.listCategories = exports.addCategory = void 0;
const categoryService_1 = require("../services/categoryService");
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, categoryService_1.createCategory)(req.body);
        console.log('Response to client:', user);
        res.status(201).json(user);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
});
exports.addCategory = addCategory;
const listCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, categoryService_1.getAllCategories)();
        res.status(200).json(users);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
});
exports.listCategories = listCategories;
const updateCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { categoryName } = req.body;
    try {
        const categoryId = parseInt(id, 10);
        const category = yield (0, categoryService_1.updateCategory)(categoryId, categoryName);
        res.status(200).json(category);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
});
exports.updateCategoryHandler = updateCategoryHandler;
const deleteCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const categoryId = parseInt(id, 10);
        const category = yield (0, categoryService_1.deleteCategory)(categoryId);
        res.status(200).json(category);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
});
exports.deleteCategoryHandler = deleteCategoryHandler;
