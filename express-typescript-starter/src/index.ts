import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

function createAndStartHttpSever(pid: number) {
  const app = express();

  if (!process.env.PORT) {
    process.exit(1);
  }
  const PORT = Number(process.env.PORT);

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res, next) => {
    res.json({ message: 'app is working on pic ' + pid });
  });

  app.get('/loop', (req, res, next) => {
    while (true) {
      console.log('looping on ', pid);
    }
  });

  app.listen(pid, () => {
    console.log(`Listening on port http://localhost:${pid}`);
  });

  console.log(`Worker ${pid} started`);
}

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  createAndStartHttpSever(process.pid);
}
