"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dataSource_1 = __importDefault(require("./config/dataSource"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', userRoutes_1.default);
app.use('/api', categoryRoutes_1.default);
const PORT = process.env.PORT || 33010;
dataSource_1.default.initialize()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization:', error);
});
