# 🛠️ Bloque de Git y Markdown 📝

- [🛠️ Bloque de Git y Markdown 📝](#️-bloque-de-git-y-markdown-)
  - [1. ¿Qué es GIT? 💻](#1-qué-es-git-)
    - [Beneficios de GIT ✨](#beneficios-de-git-)
    - [Instalando GIT ⚙️](#instalando-git-️)
    - [GIT Bash 🐚](#git-bash-)
  - [2. Como desplazarnos por GIT 🚶‍♂️](#2-como-desplazarnos-por-git-️)
    - [Comandos para desplazarnos con GitBash 🔍](#comandos-para-desplazarnos-con-gitbash-)
    - [¿Qué es un repositorio? 📁](#qué-es-un-repositorio-)
    - [Tipos de repositorio 🏢](#tipos-de-repositorio-)
    - [¿Porqué tener dos tipos de repositorios? 🤔](#porqué-tener-dos-tipos-de-repositorios-)
  - [3. Configurando Git ⚙️](#3-configurando-git-️)
    - [Creando un repositorio local 🏠](#creando-un-repositorio-local-)
    - [¿Qué es un snapshot? 📸](#qué-es-un-snapshot-)
    - [Estados de GIT 🔄](#estados-de-git-)
    - [Moviendo ficheros 📂](#moviendo-ficheros-)
  - [4. Git status 🔍](#4-git-status-)
    - [Añadiendo los ficheros al staging area ➕](#añadiendo-los-ficheros-al-staging-area-)
    - [Retornando un fichero al working directory ↩️](#retornando-un-fichero-al-working-directory-️)
    - [Git commit 📝](#git-commit-)
    - [Git log 📜](#git-log-)
    - [Git push 🚀](#git-push-)
  - [5. Asociando el repositorio remoto con el repositorio local 🔗](#5-asociando-el-repositorio-remoto-con-el-repositorio-local-)
    - [Cambiando de repositorios remotos 🔄](#cambiando-de-repositorios-remotos-)
    - [Git pull 🔄🔽](#git-pull-)
    - [Git clone 📥](#git-clone-)
  - [6. Desplazandonos entre commits temporalmente ⏪🔄](#6-desplazandonos-entre-commits-temporalmente-)
  - [7. Git branch - creando una rama 🌿](#7-git-branch---creando-una-rama-)
    - [Juntando la rama con main 🔀](#juntando-la-rama-con-main-)
    - [Eliminando las ramas 🗑️](#eliminando-las-ramas-️)
  - [Enlaces de interés 🔗](#enlaces-de-interés-)
- [Sintaxis de Markdown ✍️](#sintaxis-de-markdown-️)
  - [Títulos o Encabezados 📝](#títulos-o-encabezados-)
  - [Párrafos, saltos de línea y líneas sin contenido 📄](#párrafos-saltos-de-línea-y-líneas-sin-contenido-)
  - [Comentarios 💬](#comentarios-)
  - [Negrita 💪](#negrita-)
  - [Cursiva 🔤](#cursiva-)
  - [Cursiva + negrita 💪🔤](#cursiva--negrita-)
  - [Citas 🗣️](#citas-️)
  - [Listas 📋](#listas-)
  - [Enlaces o links 🔗](#enlaces-o-links-)
  - [Subrayado 🔍](#subrayado-)
  - [Tachado 🚫](#tachado-)
  - [Líneas separadoras o regla horizontales 🔲](#líneas-separadoras-o-regla-horizontales-)
  - [Imágenes 🖼️](#imágenes-️)
  - [Imágenes con enlace 🖼️🔗](#imágenes-con-enlace-️)
  - [Código en línea 💻](#código-en-línea-)
  - [Códigos de bloque 🔠💻🔠](#códigos-de-bloque-)
  - [Caracteres especiales 🔤🔠](#caracteres-especiales-)
  - [Task list 📝☑️](#task-list-️)
  - [Tablas de contenido (TOC) 📚🔍](#tablas-de-contenido-toc-)
  - [Tablas 📊](#tablas-)
  - [Mensajes de advertencia ⚠️](#mensajes-de-advertencia-️)

## 1. ¿Qué es GIT? 💻

GIT es un Sistema de control de versiones, es un software que se encarga de controlar/administrar las distintas versiones de un programa.

Es OpenSource (código abierto) y fue creado por Linus Tolward (el padre del kernel de Linux).

### Beneficios de GIT ✨

- Nos facilita que varias personas puedan trabajar con un mismo proyecto.

- Revertir los cambios realizados es un "snapshot" (captura del estado del proyecto actual). Ya que GIT es una especie de máquina del tiempo.

- Nos proporciona un registro mediante al que podemos ver quién y cuando ha realizado un cierto cambio.

| 📌 GIT nos permite realizar "snapshots" del estado de nuestro proyecto para posteriormente poder desplazarnos entre ellas como si de una máquina del tiempo se tratase. |
|-|

### Instalando GIT ⚙️

Para instalar GIT vamos a su [web oficial](https://git-scm.com/downloads), en el cual también tenemos acceso al libro [Pro Git](https://git-scm.com/book/en/v2) de forma totalmente gratuita.

### GIT Bash 🐚

Cuando instalamos GIT (en Windows), se nos instalará una especie de terminal Git Bash.

Git Bash, es la forma más completa que tener para trabajar con GIT. Pese a ello, existen otras formas de trabajar con GIT mediante a una interfaz gráfica.

Git Bash, al ser una emulación de la terminal Linux/UNIX, utiliza los comandos de Linux.

## 2. Como desplazarnos por GIT 🚶‍♂️

### Comandos para desplazarnos con GitBash 🔍

- `pwd` 🡢 Imprime la ruta del directorio actual.
  (La ruta por defecto raíz, es el directorio del usuario.)
- `ls` 🡢 Lista el contenido del directorio actual.
- `cd` 🡢 Para cambiar de directorio.
- `cd ..` 🡢 Para retroceder de directorio.
- `mkdir` 🡢 Para crear un directorio.
- `touch` 🡢 Para crear un archivo dentro de un directorio

### ¿Qué es un repositorio? 📁

Un repositorio es la manera que tenemos de indicarle al sistema operativo y a GIT que un directorio trabajará con el sistema de control de versiones GIT.

### Tipos de repositorio 🏢

- Local Repositori 🡢 Es el repositorio que tenemos descargado físicamente en nuestro equipo (en local). Y sobre el, trabajamos solamente nosotros.  
  Una vez realizados los cambios, finalmente podemos (o no) subirlos al repositorio remoto.

- Remote repository 🡢 Es el repositorio que tenemos en la nube, es decir, alojado sobre una de las plataformas de código como, por ejemplo: GitHub, BitBucker o GitLab. Y en el que se trabaja de forma colaborativa con el resto del equipo.

### ¿Porqué tener dos tipos de repositorios? 🤔

- Ante el caso de perdida del repositorio local tenemos un Backup externo fuera de nuestro dispositivo (repository remote).
- Nos permite colaborar con otros usuarios de forma sencilla (repository remote).
- Nos ofrece la posibilidad de realizar desarrollos en local y decidir cuando estos serán compartidos con el resto del equipo (repository local).

## 3. Configurando Git ⚙️

Para poder trabajar con los repositorios remotos, es necesario configurar el user.name y el user.mail de la siguiente manera:

```
git config --global user.name "nombre de usuario"
git config --global user.mail "mail de usuario"
```

Entonces ya una vez creados, para poder ver el user.name y user.mail haremos esto:

```
git config user.name
git config user.mail
```

### Creando un repositorio local 🏠

Un directorio sin más no es considerado un repositorio en GIT.

Para que un directorio sea considerado un repositorio hay que indicárselo al sistema operativo y a GIT mediante el comando `git init`.

Para ello haremos el siguiente comando:

```
git init (nombre del repositorio)
```

Si no utilizamos git init, la carpeta sera un directorio sin más.

Pero cuando utilizamos este comando, le estamos indicando al sistema operativo y al software de GIT que vamos a crear un repositorio lo que nos creará un directorio en el interior del repositorio `.git` que estará oculto en el interior del repositorio.

### ¿Qué es un snapshot? 📸

Un Snapshot nos permite capturar el estado actual de los ficheros que se han añadido o modificado del proyecto.

En GIT somos nosotros los encargados de decidir en que momento queremos realizar un Snapshot de los cambios.

Git se basa en un sistema incremental en el que se realizan distintas Snapshots.

Veamos un ejemplo:

![Ejemplo snap1](./img/ejemplo%20snapshot1.png)
![Ejemplo snap2](./img/ejemplo%20snapshot2.png)

### Estados de GIT 🔄

- Working directory 🡢 Donde trabajamos con nuestros ficheros.
- Staging area 🡢 donde vas preparando los archivos que vas a subir al repositorio local.
- Local repository 🡢 Contiene los archivos que han sido guardados en nuestra máquina.
- Remote repository 🡢 Contiene los ficheros que son accesibles por el equipo al completo.

### Moviendo ficheros 📂

Imaginaos que nuestro repositorio local es un avión.

- Inicialmente los pasajeros (ficheros) están en el working directory sin billetes.
- Git add permite decidir los pasajeros (ficheros) que pueden volar y por tanto hacer el embarque, para ello, son pasados al staging area.
- Git commit introduce los ficheros "en el avión", es decir, los pasa al repositorio local.
- Git push envía "el avión", es decir, permite que los cambios de los ficheros vayan hacía el repositorio remoto.

## 4. Git status 🔍

Nos permite ver en que situación área de trabajo se encuentran nuestros ficheros:

![git status](./img/git%20status.png)

### Añadiendo los ficheros al staging area ➕

Ahora que ya tenemos cambios en el working directory, vamos a añadirlos en nuestro staging area mediante el comando git add.

Podemos añadir un solo fichero:
```
git add index.html
```

Podemos añadir todos los ficheros nuevos:

```
git add .
```

### Retornando un fichero al working directory ↩️

Si finalmente no queremos subir un fichero y ya lo tenemos en el staging area, podemos echarlo hacía atrás de la siguiente manera:

```
git rm --cached index.html
```

### Git commit 📝

Una vez tenemos los ficheros preparados en el staging area. Ya podemos realizar el envío a repositorio local:

```
git commit -m "Creo el fichero index.html"
```

Se utiliza para pasar los ficheros del staging area al repositorio local.

### Git log 📜

Nos permite visualizar un historial con los distintos commits que hemos realizado.

En cada commit, podemos ver:

- El identificador del commit
- El autor del commit
- La fecha del commit
- El mensaje del commit

### Git push 🚀

Nos permite subir los cambios a un repositorio remoto.

Antes de intentar realizar el push, debemos asociar un repositorio con el proyecto.

Ya que sino... Vemos que nos dice que no está configurado a donde debe subirlos:

![git push con error](./img/git%20push%20con%20error.png)

## 5. Asociando el repositorio remoto con el repositorio local 🔗

Si nos fijamos en el repositorio que se acaba de crear tenemos los pasos para asociar un repositorio ya existente.

![git remote add origin](./img/git%20remote%20add%20origin.png)

Si hacemos un remote para ver los repositorios remotos asociados, podemos ver que no tenemos nada asociado. Por ello, no podemos realizar el envío de información a nuestro repositorio remoto.

![git remote -v](./img/git%20remote%20-v.png)

Si pegamos el código que nos proporciona GitHub, vamos a asociar el repositorio remoto con nuestro repositorio local, crear una rama main y finalmente subir los cambios a dicha rama.

Una vez nos autentificamos en GitHub, podremos ver que:

- Tenemos el push realizado, por lo que los cambios ya deben aparecer en el repositorio remoto.
- Y además tenemos el repositorio remoto configurado.

Si vamos a GitHub podemos ver que tenemos un commit realizado en el repositorio remoto, concretamente en la rama Main (a no ser que hayas creado una rama nueva para crear alli los cambios).

### Cambiando de repositorios remotos 🔄

Cuando estamos en un repositorio y queremos asociar nuestro repositorio local a otro repositorio remoto primeramente tendremos que hacer:

![git remote con repositorio](./img/git%20remote%20-v%20con%20repositorio.png)

Viendo que tenemos este repositorio remoto asociado, tendriamos que cambiar la url del repositorio a la que queremos poner con el siguiente comando:

```
git remote set-url origin (url del repositorio remoto)
```

![git remote set-url origin](./img/git%20remote%20set-url%20origin.png)

Así cambiariamos la url del repositorio remoto, para volver a cambiarlo hariamos los mismos pasos.

### Git pull 🔄🔽

Ahora que el repositorio está en la nube, es posible que algún compañero que tenga permisos realicé una modificación en el código del proyecto y realicé una subida.

Lo que puede suponer que nuestro repositorio no este actualizado.

Nosotros lo vamos a hacer de una forma poco elegante directamente desde Git para ver lo que hace git pull.

Si esto nos pasa, nos fijaremos que, actualmente tenemos mas commits en el repositorio remoto y nosotros tendremos menos en nuestro repositorio local, por lo que tenemos que actualizar el repositorio utilizando git pull, con el siguiente comando:

```
git pull origin main
git log
```
Luego hariamos el git log para poder ver que tengamos el commit nuevo y que el branch main y origin/main estan a la par.

### Git clone 📥

Otra manera de trabajar con un proyecto, es directamente clonando el repositorio.

Inclusive muchos desarrolladores cuando empiezan un proyecto desde 0 suelen crear el repositorio en GitHub y posteriormente clonarlo ya que estará listo para trabajar con él.

```
git clone https://github.com/sergiroblanson/repo.git
```

Si luego hacemos un `git remote -v` veremos que tenemos los repositorios remotos a nuestra disposición.

## 6. Desplazandonos entre commits temporalmente ⏪🔄

Si hacemos un `git log --graph --oneline --decorate` vemos los commits y, mediante con HEAD, podemos saber sobre que commit estamos trabajando.

![git log](./img/git%20log%20--graph%20--oneline%20--decorate.png)

El HEAD, por tanto, es el puntero mediante al cual le indicamos a GIT sobre que commit estamos situados actualmente.

Para situarnos en el commit 1, se haria con: `git checkout hash` (hash es el numero del commit "el amarillo")

![git checkout](./img/git%20checkout%20numero.png)

Si ahora miramos nuestro repositorio o ficheros, podemos ver que esta tal y como estaba en el primer commit, ya que los cambios que has realizado estaban en los commits posteriores.

Si hacemos otro `git log --graph --oneline --decorate` vemos que solamente nos muestra el commit en el que estamos situados.

![git log despues](./img/git%20log%20--graph%20--oneline%20--decorate%20despues.png)

Esto es porque tenemos que utilizar el comando:

`git log --graph --oneline --decorate --reflog`

Con este comando podremos ver que estamos situados en el primer commit y todos los commits que hemos echo despues:

![--reflog](./img/git%20log%20--graph%20--oneline%20--decorate%20--reflog.png)

Para volver al commit donde estabamos situados, para ello hariamos el mismo proceso pero con el número del ultimo commit (en el caso que hayas guardado todos los cambios con un commit).

`git checkout hash` (hash es el numero del ultimo commit)

![git checkout](./img/git%20checkout%20y%20git%20log.png)

En el caso que queramos volver al branch principal escribiriamos `git checkout main`.

Para visualizar los cambios realizados en un commit podemos utilizar `git show`.

## 7. Git branch - creando una rama 🌿

Hasta ahora todo nuestro trabajo se ha realizado en la rama master o main, pero esto nos puede suponer que si no tenemos la rama actualizada y otro compañero sube los cambios podamos tener conflictos que son difíciles de resolver.

Por ello, se aconseja trabajar en nuestro código desde una rama independiente.

Para visualizar las ramas actuales hacemos el comando `git branch`, veremos que solamente tenemos main.

Para trabajar con ramas lo primero que tenemos que hacer es crear una rama, utiizamos `git branch nombreRama`.

Ahora si volvemos a visualizar las ramas, veremos que tenemos una rama nueva llamada nombreRama (o el nombre que le hayas dado).

Con esto creamos la rama pero no nos situamos en ella, para situarnos en la rama hacemos el comando `git checkout nombreRama`.

Una vez echo esto, si hacemos un `git log --all --decorate --oneline --graph `, podemos ver que el HEAD apunta a la rama que hemos creado.

A partir de ahora, todos los archivos nuevos que pongamos, solo estaran existiendo dentro de esta rama nueva.

Para subir la rama al repositorio remoto haremos este comando: `$ git push -u origin nombreRama`, asi subiriamos la rama y todo lo creado dentro de esta rama despues de hacer el commit.

### Juntando la rama con main 🔀

Para juntar una rama con main, primero nos situamos en la rama main y hacemos un `git merge nombreRama` (de la rama que queremos mergear/fusionar).

- Cuando hacemos solo `git merge nombreRama`, estamos utilizando el tipo de merge fast-forward(ff), significa avance rápido y nos permite fusionar la rama que acabamos de crear con la rama main sin realizar un commit de confirmación.
- Cuando hacemos `git merge --no-ff nombreRama -m "comentarioRama"`, estamos haciendo el No fast-forward(nff), que crea una nueva confirmación con varios padres, lo que proporciona un mejor seguimiento del historial.

![tipos de merge](./img/git%20merges.png)

Una vez echo el merge, podemos visualizar que los cambios han salido correctamente con `git log --all --decorate --oneline --graph`.

### Eliminando las ramas 🗑️

Para eliminar una rama en local realizamos el siguiente comando:

```
git branch -d nombreRama
```

Para eliminar una rama en remoto utilizamos el siguiente comando:

```
git push origin --delete nombreRama
```

## Enlaces de interés 🔗

[Learn Git Branching](https://learngitbranching.js.org/?locale=es_ES): Nos permite aprender sobre varios aspectos de Git de forma muy visual.

Un truco para filtrar fechas en un repo es:

```
git log --since='Feb 1 2022' --until='Feb 28 2022'
```

La siguiente web: [Skyline Github](https://skyline.github.com/) nos permite realizar un skyline en función de los commits que hemos realizado.

# Sintaxis de Markdown ✍️

En este apartado veremos toda la sintaxis de Markdown y todas las opciones que tenemos.

## Títulos o Encabezados 📝

Nos permiten definir títulos o secciones de un contenido.

```
# Encabezado h1 
## Encabezado h2
### Encabezado h3
#### Encabezado h4
##### Encabezado h5
###### Encabezado h6
```

## Párrafos, saltos de línea y líneas sin contenido 📄

- Para escribir un párrafo escribimos el texto sin nada mas.
- Si queremos añadir un salto de línea, debemos escribir dos espacios y darle ENTER.
- Para dejar una línea vacía pulsar ENTER y dejar una línea vacía.

## Comentarios 💬

Los comentarios sirven para comentar el código que tenemos para que sea mas entendible.

Hay dos tipos de comentarios:

1. Comentarios que pueden estar en la misma línea con otro elemento.

`<!-- Comentario -->`

2. Comentarios que no pueden estar en la misma línea con otro elemento:

```
[comment]: <> (Comentario que debe ir solo)
[//]: <> (Comentario que debe ir solo)
[//]: # (Comentario que debe ir solo)
```
## Negrita 💪

Se escribe el texto rodeado con dos asteriscos a cada lado `**texto**` .

O sino, también es posible rodearlo de dos barra bajas como alternativa `__texto__`

## Cursiva 🔤

Se escribe el texto rodeado de un asterisco a cada lado `*texto*`.

O sino, también es posible rodearlo de dos barra bajas como alternativa `_texto_`

## Cursiva + negrita 💪🔤

Existe la posibilidad de combinar negritas y cursivas en ambas de la siguientes maneras.

```
***Texto en negrita y cursiva con asteriscos***  
___Textos en negrita y cursiva con barra bajas___
```

## Citas 🗣️

Se generan utilizando el símbolo de mayor que > antes de la frase.

`>“¡A mi señal, ira y fuego!🔥” – Máximo Décimo Meridio.`

También se pueden escribir en varios párrafos de la siguiente manera:

```
>"¡A mi señal, ira y fuego!🔥"
> Máximo Décimo Meridio.
```

Además, también se pueden utilizar varios niveles de la siguiente manera:

```
>"¡A mi señal, ira y fuego!🔥" – Máximo Décimo Meridio.
>>Frase de la película
>>> "Gladiator"
```
## Listas 📋

También podemos escribir listas. Dentro de las listas tenemos:

- Listas desordenadas: para escribir listas ordenadas utilizamos los caracteres * , - o + . Si importar hasta el alternarlos, ya que el resultado es el mismo.
```
- Item 1
- Item 2
* Item 3
* Item 4
+ Item 5
+ Item 6
```
- Listas ordenadas: se utiliza el número seguido de un punto. Por ejemplo, para escribir el primer elemento escribiríamos: 1.
```
1. Item 1
2. Item 2
3. Item 3
```
- Listas anidadas: existe la posibilidad de anidar listas de la siguiente manera:
```
1. Item 1  
    1.1. Subitem 1.1  
    1.2. Subitem 1.2
2. Item 2
    * Subitem ded item2
* Item 3
    * Subitem ded item3
    * Subitem del subitem3
```
## Enlaces o links 🔗

Nos permiten enlazar nuestro documento con otras webs o recursos.

El ejemplo más sencillo sería realizado mediante al link automático:

`<http://google.com/>`

<http://google.com/>

Otra alternativa al link automático sería la siguiente:

`[Ir a Google](http://www.google.es)`

[Ir a Google](http://www.google.es)

Aunque también podemos añadir un texto descriptivo cuando nos situamos encima de la siguiente manera:

`[Visitar Google](https://www.google.es "Texto (cuando ponemos el cursor encima)")`

[Visitar Google](https://www.google.es "Texto (cuando ponemos el cursor encima)")

## Subrayado 🔍

No existe el subrayado.

El motivo es que en Markdown no tiene una sintaxis definida para subrayar texto.

Supongo que esto se debe a que el texto subrayado es difícil de leer y que solamente se utiliza para realizar hipervínculos.

## Tachado 🚫

Si queremos tachar un texto, debemos englobarlo entre ~~ .
`~~Texto tachado~~`

## Líneas separadoras o regla horizontales 🔲

Nos permiten separar un contenido de otro. 

```
## Líneas separadoras escrita sin espacios (se verá igual que la otra)
Contenido 1
*** 
Contenido 2
---
Contenido 3
___
## Líneas separadoras escrita con espacios (se verá igual que la otra)
Contenido 1
* * *
Contenido 2
- - -
Contenido 3
_ _ _
```
Es importante tener cuidado ya que si los guiones `---` están juntos es necesario dejar un espacio entre el texto y el contenido para evitar que lo interprete como un encabezado.

## Imágenes 🖼️

Nos permiten mostrar imágenes dentro de nuestro documento de Markdown.

```
![Este contenido se mostrará cuando la imagen no se pueda cargar, como texto alternativo](https://user-images.githubusercontent.com/32896437/153675215-dff3448c-56bc-4da0-9cf1-6a394fd9c6f8.png "Texto a mostrar cuando nos situamos sobre la imagen. En este caso sería Baile de la película Pulp Fiction")
```
![Este contenido se mostrará cuando la imagen no se pueda cargar, como texto alternativo](https://user-images.githubusercontent.com/32896437/153675215-dff3448c-56bc-4da0-9cf1-6a394fd9c6f8.png "Texto a mostrar cuando nos situamos sobre la imagen. En este caso sería Baile de la película Pulp Fiction")

## Imágenes con enlace 🖼️🔗

Existe la posibilidad de combinar imágenes y enlaces de la siguiente manera:

```
[![a](https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)](www.google.es)
```

[![a](https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)](www.google.es)

Aunque también es posible separar los enlaces para que sea un poco más claro de la siguiente manera:

```
<!-- Ruta URL de la IMG + Descripción-->
[1]:https://user-images.githubusercontent.com/32896437/153675215-dff3448c-56bc-4da0-9cf1-6a394fd9c6f8.png "Pulp Fiction"
<!-- Enlace -->
[2]: https://es.wikipedia.org/wiki/Pulp_Fiction
<!-- Juntando la descrición con el resto de partes partes -->
[![ALT text][1]][2]
```

<!-- Ruta URL de la IMG + Descripción-->
[1]:https://user-images.githubusercontent.com/32896437/153675215-dff3448c-56bc-4da0-9cf1-6a394fd9c6f8.png "Pulp Fiction"
<!-- Enlace -->
[2]: https://es.wikipedia.org/wiki/Pulp_Fiction
<!-- Juntando la descrición con el resto de partes partes -->
[![ALT text][1]][2]

## Código en línea 💻

si queremos escribir solamente un pedazo de código en una línea utilizamos 
\`code\`

```
Etiqueta HTML5: `<!DOCTYPE html>`
```
## Códigos de bloque 🔠💻🔠

Si queremos escribir un bloque de código hacemos englobando nuestro código entre ```.

También se puede utilizar ~~~ como alternativa.

En ambos casos, podemos especificar el lenguaje que estamos utilizando.

Se pondria detras de ~~~ html.

## Caracteres especiales 🔤🔠

Si queremos escribir los conocidos como caracteres especiales como son:

```
\  barra invertida
`  acento invertido
*  asterisco
_  guión bajo
{} llaves
[] corchetes
() paréntesis
#  almohadilla
+  símbolo de suma
-  guión
.  punto
!  exclamación
```

Conseguiriamos omitir el formato de Markdown. Debemos escribir una \ barra invertida junto al correspondiente carácter. Vamos a ver algunos ejemplos:

```
\*  
\.  
\`  
\_
```

## Task list 📝☑️

Nos permite realizar listados con una serie de tareas.

Vamos a ver un ejemplo:

```
# Task List
- [ ] Elemento no finalizado  
- [x] Elemento finalizado
# Task List + iconos
:white_check_mark: Elemento finalizado  
:x: Elemento finalizado
```

\# Task List

- [ ] Elemento no finalizado  
- [x] Elemento finalizado

\# Task List + iconos

:white_check_mark: Elemento finalizado  
:x: Elemento finalizado

## Tablas de contenido (TOC) 📚🔍

Existe la posibilidad de crear una tabla de contenido.

Vamos a utilizar un plugin Markdown All in One para automatizar la creación de la tabla de contenidos.

Hacemos Ctrl + Shift + P, entonces buscamos Markdown All in One: Create Table of Contents.

## Tablas 📊

A parte de las tabla de contenido que acabamos de ver también podemos realizar tablas sin que estás seas de contenido. Vamos a ver un ejemplo:

```
|Header |Column 1 | Column 2 | Column 3  |
|:--- |:---- |:----:| ----:|
|1. Row| is | is | is  |
|2. Row| left | nicely | right  |
|3. Row| aligned | centered | aligned  |
```

|Header |Column 1 | Column 2 | Column 3  |
|:--- |:---- |:----:| ----:|
|1. Row| is | is | is  |
|2. Row| left | nicely | right  |
|3. Row| aligned | centered | aligned  |

## Mensajes de advertencia ⚠️

Existe además la posibilidad de realizar unos “mensajes de advertencia” mediante a las tablas. Vamos a ver un ejemplo:

```
| :exclamation:  This is very important   |
|-----------------------------------------|
| :zap:        Ignore at your own risk!   |
|-----------------------------------------|
| :warning: WARNING          |
|:---------------------------|
| I should warn you ...      |
| :boom: DANGER              |
|:---------------------------|
| Will explode when clicked! |
```
| :exclamation:  This is very important   |
|-----------------------------------------|
| :zap:        Ignore at your own risk!   |
|-----------------------------------------|
| :warning: WARNING          |
|:---------------------------|
| I should warn you ...      |
| :boom: DANGER              |
|:---------------------------|
| Will explode when clicked! |