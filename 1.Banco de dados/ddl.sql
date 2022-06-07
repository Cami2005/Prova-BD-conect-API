create database SuperHeroi;

use SuperHeroi;

create table tb_heroi (
id_heroi		int primary key auto_increment,
nm_heroi		varchar(100),
ds_superpoder	varchar(100),
bt_voa			boolean
);