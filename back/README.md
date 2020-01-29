# Back site echange électifs

## Routes:
    
    * `/api`: toutes les requêtes provenant du front


## Session:

    La variable `session` contient:
        * `acces_token`: le token d'accès fournit par l'Auth
        * `expires_at`: date à laquelle le token d'accès expire
        * `refresh_token`: token utilisé pour obtenir un nouveau token après expiration