"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Force dotenv to load .env from backend root
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../.env") });
const mongodb_1 = require("mongodb");
let db;
async function connectDB() {
    if (db)
        return db;
    const uri = process.env.MONGO_URI;
    if (!uri)
        throw new Error("MONGO_URI not defined in .env");
    const client = new mongodb_1.MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB!");
    const mockUsers = [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Sara' }
    ];
    db = client.db();
    return db;
}
