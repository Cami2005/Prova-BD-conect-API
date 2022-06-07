import { con } from "./conection.js";

export async function SuperHeroi (heroi) {
   const comando= ` insert into tb_heroi (nm_heroi , ds_superpoder , bt_voa)
values ( ?,?, ?)`
    const[resposta]= await con.query (comando, [heroi.nome, heroi.superpoderes, heroi.voa])
    return resposta;

}