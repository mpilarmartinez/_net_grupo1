# _net_grupo1
net_grupo1

Pasos para el hacer el swagger

Paso 1: crea la base de datos 
CREATE DATABASE IF NOT EXISTS net_grupo1;
paso 2: hacer las migraciones
  abrir el terminal en visual studio e ir al proyecto backend
  ls ver si esta la carpeta backend
  cd .\backend\
  dotnet ef migrations add Initial -o Db/Migrations -c backend.Db.AppDbContext -v
  dotnet ef database update Initial -c backend.Db.AppDbContext -v
paso 3: probar metodos en swagger
  Comprobar que hace cambios en la base de datos
  SELECT * FROM net_grupo1.nombre_de_la_tabla(en miniscula);

eliminar la migracion
dotnet ef migrations remove
eliminar base de datos
DROP DATABASE IF EXISTS net_grupo1;
