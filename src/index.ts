import 'reflect-metadata';
import './providers/index.js'
import app from './app.js';
import http from 'http';
import config from './config.js';

http.createServer(app.callback()).listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`);
});
