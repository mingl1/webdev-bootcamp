-- Part A1
select count(director_id), nationality
from directors
group by(nationality);

--Part A2
select sum(movie_length), movie_lang
from movies
group by (age_certificate, movie_lang);

--Part A3
select movie_lang, sum(movie_length)
from movies
group by (movie_lang)
having sum(movie_length)>500;

--Part B1
select first_name, last_name, movie_name,release_date
from movies join directors 
on movies.director_id=directors.director_id
where movie_lang in ('Chinese','Korean','Japanese');

--Part B2
select movie_name,release_date,international_takings
from movie_revenues join movies 
on movies.movie_id=movie_revenues.movie_id
where movie_lang ='English'
order by international_takings;

--Part B3
select movie_name,domestic_takings,international_takings
from movie_revenues join movies
on movies.movie_id = movie_revenues.movie_id
where international_takings is null or domestic_takings is null
order by movie_name;

--Part C1
select actors.first_name, actors.last_name
from directors 
join movies on 
directors.director_id=movies.director_id
join movies_actors on 
movies_actors.movie_id = movies.movie_id
join actors on 
actors.actor_id = movies_actors.actor_id
where directors.first_name='Wes' and directors.last_name='Anderson';

--Part C2
SELECT directors.first_name, directors.last_name,
 	SUM(domestic_takings) AS total_domestic_takings 
	FROM movies  
	JOIN movie_revenues ON
	movie_revenues.movie_id = movies.movie_id
	LEFT JOIN directors 
	ON directors.director_id=movies.director_id
	GROUP BY(directors.first_name,directors.last_name)
	HAVING SUM(domestic_takings) IS NOT null
	ORDER BY total_domestic_takings DESC
	LIMIT 1


-- For the final project, I plan on	
