import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.port, () => console.log (`API conectada ${process.env.PORT}`));