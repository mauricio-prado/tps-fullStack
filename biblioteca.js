// Crear la clase Biblioteca con sus atributos (nombre, direccion, telefono,localidad), constructor, getters y setters
//La misma estará compuesta por libros (deben crear la clase libro completa y utilizarla como atributo de la Biblioteca)
//Crear instancias de la biblioteca y a traves de la misma consultar el nombre del libro y mostrarlo por consola
//Crear una funcionalidad libre de la biblioteca y utilizarla para mostrar algun tipo de salida por consola

     var Biblioteca = function(){
        function Biblioteca(nombre, direccion, telefono, localidad, libros) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.localidad = localidad;
        this.libros = libros;
    }
}
Biblioteca.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
};
Biblioteca.prototype.setDireccion = function (direccion) {
    this.direccion = direccion;
};
Biblioteca.prototype.setTelefono = function (telefono) {
    this.telefono = telefono;
};
Biblioteca.prototype.setLocalidad = function (localidad) {
    this.localidad = localidad;
};
Biblioteca.prototype.setLibros = function (libros) {
    this.libros = libros;
};
Biblioteca.prototype.getNombre = function () {
    return this.nombre;
};
Biblioteca.prototype.getdireccion = function () {
    return this.direccion;
};
Biblioteca.prototype.getTelefono = function () {
    return this.telefono;
};
Biblioteca.prototype.getLocalidad = function () {
    return this.localidad;
};
Biblioteca.prototype.getLibros = function () {
    return this.libros;
};
Biblioteca.prototype.getInfoBiblioteca = function () {
console.log("\n Datos de la biblioteca\n Nombre: ".concat(this.nombre, "\n Direccion:").concat(this.direccion, "\n Telefono:").concat(this.telefono, "\n Localidad:").concat(this.localidad));
};

Biblioteca.prototype.buscadorLibros = function (nombre) {
    var search = libros.map(function (element) { return element; });
    search.forEach(function (element) {
        if (element.nombreLibro === nombre) {
            console.log(element);
        }
    });
};
return Biblioteca;{
var libros = [new libros_1.Libros("moni", "harri poter", "pluma", "aventura"),
new libros_1.Libros("juana", "crepusculo", "10ojos", "romance"),
new libros_1.Libros("marta", "francotirador", "ojitosAzuloes", "accion")];

var biblioteca = new Biblioteca("biblioteca Rusa", "en la esquina", 222222, "mi barrio", libros);
biblioteca.getInfoBiblioteca();
biblioteca.buscadorLibros("crepuculo");
}

"use strict";
exports.__esModule = true;
var libros_1 = require("./libros");