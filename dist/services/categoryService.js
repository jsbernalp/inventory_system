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
exports.deleteCategory = exports.updateCategory = exports.getAllCategories = exports.createCategory = void 0;
const Category_1 = require("../models/Category");
const dataSource_1 = __importDefault(require("../config/dataSource"));
const categoryRepository = dataSource_1.default.getRepository(Category_1.Category);
const createCategory = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = categoryRepository.create(userData);
        return yield categoryRepository.save(user);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Error creating category: ${errorMessage}`);
    }
});
exports.createCategory = createCategory;
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield categoryRepository.find();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Error retrieving categories: ${errorMessage}`);
    }
});
exports.getAllCategories = getAllCategories;
const updateCategory = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryRepository = dataSource_1.default.getRepository(Category_1.Category);
    try {
        const category = yield categoryRepository.findOneBy({ id });
        if (!category) {
            throw new Error(`Category with id ${id} not found`);
        }
        category.categoryName = name;
        yield categoryRepository.save(category);
        return category;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Error creating category: ${errorMessage}`);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryRepository = dataSource_1.default.getRepository(Category_1.Category);
    try {
        const result = yield categoryRepository.delete(id);
        if (result.affected === 0) {
            throw new Error(`Category with id ${id} not found`);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Error deleting category: ${errorMessage}`);
    }
});
exports.deleteCategory = deleteCategory;
