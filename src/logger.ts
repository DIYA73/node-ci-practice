import winston from 'winston';

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
    format: process.env.NODE_ENV === 'production'
    ? winston.format.json()
    : winston.format.combine(winston.format.colorize(), winston.format.simple()),
    transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ...(process.env.NODE_ENV !== 'production' ? [new winston.transports.Console()] : [])
    ]
});

export default logger;
