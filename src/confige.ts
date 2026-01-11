// src/config.ts

const confige = {
    development: {
    port: 4000,
    db: 'mongodb://localhost:27017/nodetest_dev',
    logLevel: 'debug',
    },
    production: {
    port: process.env.PORT || 4000,
    db: process.env.MONGO_URI,
    logLevel: 'warn',
    },
} as const; // make object readonly (optional)

type Env = keyof typeof confige; // 'development' | 'production'

// Ensure env is one of the keys
const env = (process.env.NODE_ENV as Env) || 'development';

export const current = confige[env];
