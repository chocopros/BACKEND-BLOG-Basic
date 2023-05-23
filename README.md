# SKELETON TEMPLE
- Express
- PostgreSQL
- Sequelize ORM
- Autentificacion con Tokens
- Bcrypt para hashear contrasenas.
- Uso de Json Web Token

---

 # USER FUNTIONS
- Rutas de Login y creacion de usuario (register).
- Herramienta para publicar img de perfil.
- CRUD de usuarios con auntentificacion y manejo de permisos.
- /users/:id DELETE, PUT
- /users/me

---

# .env
- info about the DB and variables de entorno

---

# CMD
npm init --y
npm i express uuid sequelize dotenv pg pg-hstore bcrypt passport passport-jwt jsonwebtoken
npm i -D nodemon

---

# BLOG API

- Front:
    - Obtener todas las publicaciones.
    - Obtener una en especifico.
    - Obtener todas las Categorias.
    - Obtener todos los post de una categoria en especifico.
    - Obtener todos los post que he creado.
    - Obtener todos los post de un usuario en especifico.
    - Podemos Paginar los posts.
    - Acciones de Crud sobre Posts.
    - Crear Categorias.

---

# JSON
```
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit60",
        "next": "localhost:9000/api/v1/posts?start=61&limit68",
        "data": [
            {
                "id": "1",
                "tittle": "title lorem ipsum",
                "content": "text255 lorem ipsum",
                "created": {
                    "id": "uuid",
                    "name": "Sahid",
                    "email": "jesuschock93@gmail.com"
                },
                "category": {
                    "id": 4,
                    ""name: "Tecnology"
                }
            }
        ]
            
    }
```

