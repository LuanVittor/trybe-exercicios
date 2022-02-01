SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;

SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies as m
inner join Pixar.BoxOffice as b on m.id = b.movie_id;

SELECT m.title, b.international_sales
FROM Pixar.Movies as m
inner join Pixar.BoxOffice as b on m.id = b.movie_id
where b.international_sales > b.domestic_sales;

SELECT m.title, b.rating
from Pixar.Movies as m
INNER JOIN Pixar.BoxOffice as b on m.id = b.movie_id
ORDER BY rating DESC;

SELECT t.name, t.location, m.title, m.director, m.length_minutes
from Pixar.Theater as t
LEFT JOIN Pixar.Movies as m on t.id = m.theater_id
ORDER BY t.name;


SELECT t.id, t.name, t.location, m.title, m.director, m.length_minutes
from Pixar.Theater as t
RIGHT JOIN Pixar.Movies as m on t.id = m.theater_id
ORDER BY t.name;

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
from Pixar.Movies as m
inner JOIN Pixar.BoxOffice as b on m.id = b.movie_id
where b.rating > 8;
