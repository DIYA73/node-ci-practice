import { current as config } from './confige';
import http from 'http';
import logger from './logger';


const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`Running in ${NODE_ENV} mode`);
console.log(`DB URL: ${config.db}`);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Running in ${NODE_ENV} mode\n`);
});

logger.info('Server started');
logger.debug('Debug info only in development');
server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
