"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const allowedOrigins = (process.env.CORS_ORIGIN ?? "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
app.disable("x-powered-by");
app.use((0, cors_1.default)({
    credentials: true,
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }
        callback(new Error(`Origin is not allowed by CORS: ${origin}`));
    },
}));
app.use(express_1.default.json({ limit: "1mb" }));
app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "api", uptime: process.uptime() });
});
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
