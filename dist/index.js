"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new mongodb_1.MongoClient(process.env.MONGO_URI);
async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("mydb");
        const result = await db.collection("orders").aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "product_id",
                    foreignField: "_id",
                    as: "product"
                }
            },
            { $unwind: "$product" }
        ]).toArray();
        console.log(JSON.stringify(result, null, 2));
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}
run();
