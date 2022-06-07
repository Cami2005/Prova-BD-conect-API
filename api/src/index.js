import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import heroiController from './Controller/heroiController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(heroiController);

server.listen(process.env.port, () => console.log (`API conectada ${process.env.PORT}`));