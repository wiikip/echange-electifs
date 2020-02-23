#Création de la base de donnée

CREATE TABLE annonces(id serial, created_at date, electif_source text, electif_souhaité text[], SGcréneau text, auth_id text, message text, fullname text, PRIMARY KEY(id));

#Configuration
Il faut modifier la valeur de config dans back/routes/api.js (ligne 5)