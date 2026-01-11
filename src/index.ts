const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';
const isDevelopment = !isProduction;

console.log(`Running in ${NODE_ENV} mode`);


