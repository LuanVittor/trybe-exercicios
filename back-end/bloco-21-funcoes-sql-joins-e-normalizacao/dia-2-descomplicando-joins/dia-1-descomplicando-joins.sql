SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

select 220 DIV 12;

SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

SELECT CURRENT_DATE();
SELECT NOW();

SELECT DATEDIFF('2020-01-31', '2020-11-01');

SELECT TIMEDIFF('08:30:10', '09:30:10');

SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

SELECT timediff('2030-01-20', current_date());

SELECT timediff('10:25:45', '11:00:00');

-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

select * from sakila.film;

SELECT AVG(length) as 'media de duracao' from sakila.film;
SELECT MIN(length) as 'minima duracao' from sakila.film;
SELECT MAX(length) as 'maxima duracao' from sakila.film;
SELECT SUM(length) as 'soma de duracao' from sakila.film;
SELECT count(length) as 'soma' from sakila.film;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
