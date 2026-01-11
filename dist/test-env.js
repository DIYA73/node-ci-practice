"use strict";

const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const envPath = path.join(process.cwd(), ".env.test");

console.log("Looking for:", envPath);
console.log("File exists:", fs.existsSync(envPath));

dotenv.config({ path: envPath });

console.log("MONGO_URI =", process.env.MONGO_URI);
