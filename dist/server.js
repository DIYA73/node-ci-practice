"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Server is running!");
});
const startServer = async () => {
    try {
        await (0, db_1.connectDB)();
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};
startServer();
