#Création de la base de donnée

CREATE TABLE annonces(id int, created_at date, electif_source text, electif_souhaité text[], SGcréaneau text, auth_id text, message text, PRIMARY KEY(id));

#Configuration
Il faut modifier la valeur de config dans back/routes/api.js (ligne 5)