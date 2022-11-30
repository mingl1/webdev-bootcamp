CREATE TABLE owners2 (
	id serial primary key,
	first_name varchar(30),
	last_name varchar(30),
	city varchar(30),
	state char(2),
	email varchar(100)
);
CREATE TABLE pets2 (
id serial primary key,
species varchar(30),
pet_name varchar(30),
age int,
owner_id int references owners2 (id)
-- no comma at last colomn name
);
ALTER TABLE pets2
ADD CONSTRAINT pets2_pkey primary key (id)

INSERT INTO owners(
	last_name,
	email
)
values(
	'Peters',
	'peters@gmail.com'
)
select * from owners
delete from owners
where id=2
ALTER TABLE pets2
DROP CONSTRAINT pets2_owner_id_fkey
ALTER TABLE pets2
ADD CONSTRAINT pets2_owner_id_fkey foreign key(owner_id)  references owners2(id)