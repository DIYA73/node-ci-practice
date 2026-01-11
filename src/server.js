"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const server = http_1.default.createServer((req, res) => {
    res.end(`Running in ${NODE_ENV} mode`);
    console.log(process.env.MONGO_URI);
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
