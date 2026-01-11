"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const strict_1 = __importDefault(require("node:assert/strict"));
const calculator_js_1 = require("../src/calculator.js");
;
(0, node_test_1.default)('add numbers', () => {
    strict_1.default.strictEqual((0, calculator_js_1.add)(2, 3), 5);
});
(0, node_test_1.default)('multiply numbers', () => {
    strict_1.default.strictEqual((0, calculator_js_1.multiply)(2, 3), 6);
});
