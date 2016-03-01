# Grability Test

Para llevar a cabo prueba para desarrollador UI Web de [Grability inc](http://www.grability.com/), decidi utilizar el framework [polymer 1.0](https://www.polymer-project.org/1.0/) basado en [Web Components](http://webcomponents.org/) y Herramientas de  Desarrollo que corren sobre [Node.js](https://nodejs.org/en/) tales como [Gulp](http://gulpjs.com/) y [Bower](http://bower.io/), en este repository se muestra el resultado final de utilizar todas estas tecnoligias pero les dejo una pequeña gia de como instalar las herramientas de desarrollo que he utilizado ubicadas en la carpeta que he llamado `build_system`.

Puede ver la prueba [aqui](http://ctrujillozt.github.io/grability-test/)

para cambiar la configuracion del servicio json que se recibe deben cambiar en `index.html` el parametro `url` de la etiqueta `ex-list`

```html
<body class="fullbleed layout vertical center-center">
    <div id="sheet">
        <ex-list url="news_mock.json"></ex-list>
    </div>
</body>
```

## Instalacion de Herramientas de Desarrollo

### node.js

para instalar [node.js](https://nodejs.org/en/) segir las instruciones dadas en su pagina web segun su sistema operativo.

### bower

ingrese a la consola y corra el comando ```npm install -g bower```, si su sistema operativo es Linix o Mac use ```sudo```.

### gulp

ingrese a la consola y corra el comando ```npm install -g gulp```, si su sistema operativo es Linix o Mac use ```sudo```.

### instalación final de dependencias

ingrese a la consola en la carperta del proyecto y entre la carpeta `build_system` ```cd build_system/``` del proyecto  y corra el comando ```npm install && bower install```, si su sistema operativo es Linix o Mac use ```sudo```.

## Como usar las Herramientas de Desarrollo

### Prosesar libreria de Polymer

En muchos casos la libreria de polymer esta compuesta por muchos archivos que hacen que la carga de la pagina sea muy lenta, para esto lo que hago es reducir todos esos archivos a uno solo con [vulcanize](https://github.com/sindresorhus/gulp-vulcanize) y luego separo las partes javascript y html del mismo en dos archivos con [crisper](https://github.com/ragingwind/gulp-crisper), para hacer esto solo ejecute el comando   ```gulp build:polymer``` desde la consola ubicado en la carpeta `build_system` del proyecto.

### Minificar javascript

Para minificar los archivos javascript utilizados solo ejecute el comando   ```gulp build:js``` desde la consola ubicado en la carpeta `build_system` del proyecto.

### Copiar librerias de bower al proyecto

Para copiar las librerias que se estan utilizdo de bower al proyecto solo ejecute el comando   ```gulp cp``` desde la consola ubicado en la carpeta `build_system` del proyecto.

### Borrar dependencias de desarrollo

Para borrar las dependencias de desarrollo ejecute el comando   ```gulp del:dev``` desde la consola ubicado en la carpeta `build_system` del proyecto.

### desarrollo agil

con el comando ```gulp``` se correran observers que ejecutaran automaticamente los procesos de polymer y minificacion de javascript cuando se modifiquen los archivos que esten relacionados en estos.

## Referencias

+[Polymer 1.0](https://www.polymer-project.org/1.0/)
+[Web Components](http://webcomponents.org/)
+[Node.js](https://nodejs.org/en/)
+[Gulp](http://gulpjs.com/)
+[Bower](http://bower.io/)
+[Vulcanize](https://github.com/sindresorhus/gulp-vulcanize)
+[Crisper](https://github.com/ragingwind/gulp-crisper)
