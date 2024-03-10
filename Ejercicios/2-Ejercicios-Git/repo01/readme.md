# Pasos para crear y subir un directorio
## Primer paso

1. *Entrar en el Terminal de Git Bash desde el VSCode.*
2. *Entrar en la carpeta donde quieres crear el repositorio, y escribir:*

- `git init (nombre del repositorio)`

*Así generamos el repositorio con el **.git** dentro de él.*

## Segundo paso

*Produzcamos el archivo **readme.md**. Lo crearemos bien de la manera simple creando un archivo nuevo, o bien haciendo uso del comando:*

- `touch (nombre del archivo)` 🡢 *Para crear el documento vacío.*

- `cat > (nombre del archivo)` 🡢 *Para crear el documento y escribir el texto del documento en la misma terminal.*

## Tercer paso

- `git add .` 🡢 *Para añadir todos los archivos del repositorio dentro del staging area.*

- `git add (nombre del archivo)` 🡢 *Para añadir solo un archivo dentro del staging area.*

- `git status` 🡢 *Muestra los archivos del staging area en relación con el repositorio antes de hacer el commit.*

![Imagen de un git status](img/get%20status.png)

- `git rm --cached (nombre del archivo)` 🡢 *Eliminará el archivo pertinente del staging area y no lo agregaría en el próximo commit que hagas.*

![Imagen de un git rm --cached](img/git%20rm%20--cached.png)

## Cuarto paso

`git commit -m "Comentario sobre el commit"` 🡢 *Cuando tengamos los ficheros preparados en el staging area, ya podemos hacer el envío al repositorio local con el commit.*

![Imagen de un git commit](img/git%20commit.png)

## Quinto paso

1. `git log` 🡢 *Nos permite visualizar un historial con los distintos commits que hemos realizado y tenemos en local y en remoto.*

![Imagen de un git log](img/git%20log.png)

2. *Crear el repositorio en el servidor remoto (Usaremos **GitHub**), para ello es ir a donde hay un + y crear un repositorio nuevo público.*

## Sexto paso

*Para subir el commit en el repositorio de **GitHub** por primera vez, hay que seguir estos pasos:*

1. git remote add origin https://github.com/sergiorobla/repo01.git

2. git branch -M main

3. git push -u origin main

- `git push` 🡢 *Cuando ya no sea la primera vez que tienes que hacer un push, siempre usaremos este comando para subir el commit al repositorio en remoto.* 

![Imagen del git push](img/git%20push.png)

- `git remote -v` 🡢 *Cuando hayamos asociado el repositorio remoto con el repositorio local, podremos hacer un remote, para ver los repositorios remotos asociados.*

![Imagen del git remote -v](img/git%20remote%20-v.png)

***CON ESTO TENDRIAMOS TODO LO NECESARIO PARA CREAR UN REPOSITORIO Y SUBIRLO A UN REPOSITORIO REMOTO COMO "GITHUB"***
---