import { SuperHeroi } from "../repository/heroiRepository.js";

import {Router} from 'express';


const server= Router();


server.post('/inserir', async (req, resp) => {
    try {
        const superheroiinserir= req.body;
        const S= await SuperHeroi(superheroiinserir);
        resp.send(S);
        
    } catch (err) {
        
    }
});

export default server;