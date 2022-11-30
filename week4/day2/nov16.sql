CREATE TABLE movies (
	movie_id SERIAL primary key,
	movie_name varchar(50), 
	movie_length int, 
	movie_lang varchar(20), 
	release_date DATE, 
	age_certificate varchar(5), 
	director_id int references directors(director_id)
);

CREATE TABLE movies_actors (
	actor_id int references actors(actor_id),
	movie_id int references movies(movie_id)
)
CREATE TABLE movie_revenues(
	revenue_id SERIAL primary key,
	movie_id int references movies(movie_id),
	domestic_takings numeric(6,2),
	international_takings numeric(6,2)
)
ALTER TABLE movies_actors
ADD CONSTRAINT movies_actors_pkey1 primary key (actor_id, movie_id)

ALTER TABLE directors
ALTER COLUMN last_name SET NOT NULL;


select count(*) from actors
union all
select count(*) from directors
union all
select count(*) from movies
union all
select count(*) from movie_revenues
union all
select count(*) from movies_actors

select * from actors
where gender='M' and date_of_birth > '1970-01-01'
order by date_of_birth

select * from actors

select movie_name, movie_lang from movies
where movie_lang in ('English', 'Spanish', 'Korean')

select first_name, last_name from directors
where nationality in ('British', 'French', 'German')and 
date_of_birth > '1950-01-01' and date_of_birth < '1980-12-31'

INSERT INTO actors