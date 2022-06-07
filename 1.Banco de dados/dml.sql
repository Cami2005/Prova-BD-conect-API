use SuperHeroi;

insert into tb_heroi (nm_heroi , ds_superpoder , bt_voa)
values ('Hulk', 'Força', false);

select id_heroi id,
		nm_heroi		nome,
		ds_superpoder	poder,
		bt_voa			voa
        from tb_heroi;
