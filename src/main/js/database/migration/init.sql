CREATE TABLE mesures_poids
(
    id SERIAL PRIMARY KEY NOT NULL,
    id_bac INT NOT NULL,
    poids FLOAT NOT NULL,
    times DATE
);


insert into mesures_poids (id_bac, poids, times) values (1, 1.5, '2020-01-01');
insert into mesures_poids (id_bac, poids, times) values (1, 1.6, '2020-01-02');
insert into mesures_poids (id_bac, poids, times) values (1, 1.7, '2020-01-03');
insert into mesures_poids (id_bac, poids, times) values (1, 1.8, '2020-01-04');