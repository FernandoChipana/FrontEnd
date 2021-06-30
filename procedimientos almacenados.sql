/* Especialidad */
create procedure usp_registrarFespecialidad(
@nesp nvarchar(10),
@nombre nvarchar(10)
)
as
begin

insert into FESPECIALIDAD(Nº_ESP,NOMBRE)
values
(
@nesp,
@nombre
)
end
go

create procedure usp_modificarFespecialidad(
@nesp nvarchar(10),
@nombre nvarchar(10)
)
as
begin

update FESPECIALIDAD set 
Nº_ESP = @nesp,
NOMBRE = @nombre
where Nº_ESP = @nesp
end
go

create procedure usp_obtenerFespecialidad(@nesp nvarchar(10))
as
begin
select Nº_ESP,NOMBRE from FESPECIALIDAD where Nº_ESP = @nesp
end
go

create procedure usp_listarFespecialidad
as
begin
select Nº_ESP,NOMBRE from FESPECIALIDAD
end
go

create procedure usp_eliminarFespecialidad(
@nesp nvarchar(10)
)
as
begin
delete from FESPECIALIDAD where Nº_ESP = @nesp
end
go

/*Turnos*/

create procedure usp_registrarTurnos(
@turcod char(1),
@serv nvarchar(3),
@codcon nvarchar(18),
@turini datetime,
@turfin datetime,
@turtime varchar(3),
@lun varchar(1),
@mar varchar(1),
@mie varchar(1),
@jue  varchar(1),
@vier varchar(1),
@sab nvarchar(1),
@dom nvarchar(1),
@obs varchar(255),
@estado varchar(1)
)
as
begin
insert into turnos(Turcod,Serv,codcon,turuni,turfin,turtime,Lun,Mar,Mie,Jue,Vier,Sab,Dom,Obs,Estado)
values
(
@turcod,
@serv,
@codcon,
@turini,
@turfin,
@turtime,
@lun,
@mar,
@mie,
@jue,
@vier,
@sab,
@dom,
@obs,
@estado
)
end
go

create procedure usp_modificarTurnos(
@cmp char(6),
@turcod char(1),
@serv nvarchar(3),
@codcon nvarchar(18),
@turini datetime,
@turfin datetime,
@turtime varchar(3),
@lun varchar(1),
@mar varchar(1),
@mie varchar(1),
@jue  varchar(1),
@vier varchar(1),
@sab nvarchar(1),
@dom nvarchar(1),
@obs varchar(255),
@estado varchar(1)
)
as
begin
update turnos set 
Turcod = @turcod,
Serv = @serv,
codcon = @codcon,
turuni = @turini,
turfin = @turfin,
turtime = @turtime,
Lun = @lun,
Mar = @mar,
Mie = @mie,
Jue = @jue,
Vier = @vier,
Sab = @sab,
Dom = @dom,
Obs = @obs,
Estado = @estado
where Cmp = @cmp
end
go

create procedure usp_obtenerTurnos(@cmp char(6))
as
begin
select Turcod,Serv,codcon,turuni,turfin,turtime,Lun,Mar,Mie,Jue,Vier,Sab,Dom,Obs,Estado from turnos where Cmp = @cmp
end
go

create procedure usp_listarTurnos
as
begin
select Turcod,Serv,codcon,turuni,turfin,turtime,Lun,Mar,Mie,Jue,Vier,Sab,Dom,Obs,Estado from turnos
end
go

create procedure usp_eliminarTurnos(
@cmp char(6)
)
as
begin
delete from turnos where Cmp = @cmp
end
go

/* FMEDICOS */

create procedure usp_registrarFmedicos(
@cmp char(6),
@nomb nvarchar(50),
@serv nvarchar(3),
@nesp nvarchar(10),
@dni nvarchar(10),
@fecnac datetime,
@celu nvarchar(15),
@email nvarchar(30)
)
as
begin
insert into FMEDICOS(CMP,NOMB,SERV,Nº_ESP,DNI,FEC_NAC,CELU,EMAIL)
values
(
@cmp,
@nomb,
@serv,
@nesp,
@dni,
@fecnac,
@celu,
@email
)
end
go

create procedure usp_modificarFmedicos(
@cmp char(6),
@nomb nvarchar(50),
@serv nvarchar(3),
@nesp nvarchar(10),
@dni nvarchar(10),
@fecnac datetime,
@celu nvarchar(15),
@email nvarchar(30)
)
as
begin
update FMEDICOS set 
CMP = @cmp,
NOMB = @nomb,
SERV = @serv,
Nº_ESP = @nesp,
DNI = @dni,
FEC_NAC = @fecnac,
CELU = @celu,
EMAIL = @email
where CMP = @cmp
end
go

create procedure usp_obtenerFmedicos(@cmp char(6))
as
begin
select CMP,NOMB,SERV,Nº_ESP,DNI,FEC_NAC,CELU,EMAIL from FMEDICOS where CMP = @cmp
end
go

create procedure usp_listarFmedicos
as
begin
select CMP,NOMB,SERV,Nº_ESP,DNI,FEC_NAC,CELU,EMAIL from FMEDICOS
end
go

create procedure usp_eliminarFmedicos(
@cmp char(6)
)
as
begin
delete from FMEDICOS where CMP = @cmp
end
go 

/* FMCLINIC */

create procedure usp_registrarFmclicnic(
@nomb nvarchar(200),
@tipdoc nvarchar(1),
@ndoc nvarchar(50),
@fena datetime,
@sexo nvarchar(1),
@email nvarchar(255),
@fono nvarchar(50)
)
as
begin
insert into FMCLINIC(NOMB,TIPDOC,NDOC,FENA,SEXO,EMAIL,FONO)
values
(
@nomb,
@tipdoc,
@ndoc,
@fena,
@sexo,
@email,
@fono
)
end
go

create procedure usp_modificarFmclinic(
@codc int,
@nomb nvarchar(200),
@tipdoc nvarchar(1),
@ndoc nvarchar(50),
@fena datetime,
@sexo nvarchar(1),
@email nvarchar(255),
@fono nvarchar(50)
)
as
begin
update FMCLINIC set 
NOMB = @nomb,
TIPDOC = @tipdoc,
NDOC = @ndoc,
FENA = @fena,
SEXO = @sexo,
EMAIL = @email,
FONO = @fono
where CODC = @codc
end
go

create procedure usp_obtenerFmclinic(@codc int)
as
begin
select CODC,NOMB,TIPDOC,NDOC,FENA,SEXO,EMAIL,FONO from FMCLINIC where CODC = @codc
end
go

create procedure usp_listarFmclinic
as
begin
select CODC,NOMB,TIPDOC,NDOC,FENA,SEXO,EMAIL,FONO from FMCLINIC
end
go

create procedure usp_eliminarFmclinic(
@codc int
)
as
begin
delete from FMCLINIC where CODC = @codc
end
go 

create view view_turnos
as 
select m.Cmp, m.NOMB, e.NOMBRE, t.codcon,  t.Turcod, t.turuni, t.turfin ,t.turtime,t.Lun,
t.Mar,
 t.Mie ,
t.Jue,
t.Vier,
 t.Sab ,
 t.Dom,
t.Obs
from  turnos t right join  FMEDICOS m on t.Cmp =m.CMP inner join FESPECIALIDAD e on m.Nº_ESP=e.Nº_ESP 

select * from view_turnos