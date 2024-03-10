# Sintaxis de Markdown

En este apartado veremos toda la sintaxis de Markdown y todas las opciones que tenemos.
- [Sintaxis de Markdown](#sintaxis-de-markdown)
  - [Títulos o Encabezados](#títulos-o-encabezados)
  - [Párrafos, saltos de línea y líneas sin contenido](#párrafos-saltos-de-línea-y-líneas-sin-contenido)
  - [Comentarios](#comentarios)
  - [Negrita](#negrita)
  - [Cursiva](#cursiva)
  - [Cursiva + negrita](#cursiva--negrita)
  - [Citas](#citas)
  - [Listas](#listas)
  - [Enlaces o links](#enlaces-o-links)
  - [Subrayado](#subrayado)
  - [Tachado](#tachado)
  - [Líneas separadoras o regla horizontales](#líneas-separadoras-o-regla-horizontales)
  - [Imágenes](#imágenes)
  - [Imágenes con enlace](#imágenes-con-enlace)
  - [Código en línea](#código-en-línea)
  - [Códigos de bloque](#códigos-de-bloque)
  - [Caracteres especiales](#caracteres-especiales)
  - [Task list](#task-list)
  - [Tablas de contenido (TOC)](#tablas-de-contenido-toc)
  - [Tablas](#tablas)
  - [Mensajes de advertencia](#mensajes-de-advertencia)


## Títulos o Encabezados

Nos permiten definir títulos o secciones de un contenido.

```
# Encabezado h1 
## Encabezado h2
### Encabezado h3
#### Encabezado h4
##### Encabezado h5
###### Encabezado h6
```

## Párrafos, saltos de línea y líneas sin contenido

- Para escribir un párrafo escribimos el texto sin nada mas.
- Si queremos añadir un salto de línea, debemos escribir dos espacios y darle ENTER.
- Para dejar una línea vacía pulsar ENTER y dejar una línea vacía.

## Comentarios

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
## Negrita

Se escribe el texto rodeado con dos asteriscos a cada lado `**texto**` .

O sino, también es posible rodearlo de dos barra bajas como alternativa `__texto__`

## Cursiva

Se escribe el texto rodeado de un asterisco a cada lado `*texto*`.

O sino, también es posible rodearlo de dos barra bajas como alternativa `_texto_`

## Cursiva + negrita

Existe la posibilidad de combinar negritas y cursivas en ambas de la siguientes maneras.

```
***Texto en negrita y cursiva con asteriscos***  
___Textos en negrita y cursiva con barra bajas___
```

## Citas

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
## Listas

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
## Enlaces o links

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
## Subrayado

No existe el subrayado.

El motivo es que en Markdown no tiene una sintaxis definida para subrayar texto.

Supongo que esto se debe a que el texto subrayado es difícil de leer y que solamente se utiliza para realizar hipervínculos.

## Tachado

Si queremos tachar un texto, debemos englobarlo entre ~~ .
`~~Texto tachado~~`

## Líneas separadoras o regla horizontales

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

## Imágenes

Nos permiten mostrar imágenes dentro de nuestro documento de Markdown.

```
![Este contenido se mostrará cuando la imagen no se pueda cargar, como texto alternativo](https://user-images.githubusercontent.com/32896437/153675215-dff3448c-56bc-4da0-9cf1-6a394fd9c6f8.png "Texto a mostrar cuando nos situamos sobre la imagen. En este caso sería Baile de la película Pulp Fiction")
```
![Este contenido se mostrará cuando la imagen no se pueda cargar, como texto alternativo](https://user-images.githubusercontent.com/32896437/153675215-dff3448c-56bc-4da0-9cf1-6a394fd9c6f8.png "Texto a mostrar cuando nos situamos sobre la imagen. En este caso sería Baile de la película Pulp Fiction")

## Imágenes con enlace

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

## Código en línea

si queremos escribir solamente un pedazo de código en una línea utilizamos 
\`code\`

```
Etiqueta HTML5: `<!DOCTYPE html>`
```
## Códigos de bloque

Si queremos escribir un bloque de código hacemos englobando nuestro código entre ```.

También se puede utilizar ~~~ como alternativa.

En ambos casos, podemos especificar el lenguaje que estamos utilizando.

Se pondria detras de ~~~ html.
## Caracteres especiales

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

## Task list

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

## Tablas de contenido (TOC)

Existe la posibilidad de crear una tabla de contenido.

Vamos a utilizar un plugin Markdown All in One para automatizar la creación de la tabla de contenidos.

Hacemos Ctrl + Shift + P, entonces buscamos Markdown All in One: Create Table of Contents.
## Tablas

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
## Mensajes de advertencia

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