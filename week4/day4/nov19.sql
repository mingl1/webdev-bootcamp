SELECT actors.first_name,actors.last_name, movie_name from directors
join movies on directors.director_id=movies.director_id
join movies_actors on movies.movie_id=movies_actors.movie_id
join actors on movies_actors.actor_id=actors.actor_id
order by first_name


select first_name, last_name, nationality, movie_name,movie_lang,
movie_length from movies right join directors
on directors.director_id=movies.director_id
order by first_name

select first_name, last_name, age_certificate from directors left join
movies on movies.director_id= directors.director_id
order by age_certificate


select first_name, last_name, count(movie_id) from directors join
movies on movies.director_id= directors.director_id
group by first_name, last_name
order by count(movie_id) desc