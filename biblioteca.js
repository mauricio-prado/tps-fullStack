// Crear la clase Biblioteca con sus atributos (nombre, direccion, telefono,localidad), constructor, getters y setters
//La misma estará compuesta por libros (deben crear la clase libro completa y utilizarla como atributo de la Biblioteca)
//Crear instancias de la biblioteca y a traves de la misma consultar el nombre del libro y mostrarlo por consola
//Crear una funcionalidad libre de la biblioteca y utilizarla para mostrar algun tipo de salida por consola
import { Libros } from "./libritos";
class Biblioteca{
    private nombre:string;
    private direccion:string;
    private telefono:number;
    private localidad:string;

    private libros:Libros[];

    public constructornombre(nombre:string, direccion:string, telefono:number, localidad:string,libros:Libros[]){;
        this.nombre =
        this.direccion=direccion;
        this.telefono=telefono;
        this.localidad=localidad;
        this.libros=libros
    }

    public setNombre(nombre:string){
        this.nombre=nombre
    }
    public setDireccion(direccion:string){
        this.direccion=direccion
    }
    public setTelefono(telefono:number){
        this.telefono=telefono
    }
    public setLocalidad(localidad:string){
        this.localidad=localidad;
    }
    
    public setLibros(libros:Libros[]){
        this.libros=libros;
    }
    
    public getNombre():string{
        return this.nombre
    }

    public getdireccion():string{
        return this.direccion
    }

    public getTelefono():number{
        return this.telefono
    }

    public getLocalidad():string{
        return this.localidad
    }
   
    public getLibros():Libros[]{
        return this.libros
    }
    public getInfoBiblioteca():void{
        console.log(`
        Datos de mi biblioteca
        Nombre: ${this.nombre}
        Direccion:${this.direccion}
        Telefono:${this.telefono}
        Localidad:${this.localidad}`)
    }

    public buscadorLibros(nombre:string):void{
        const search =libros.map(element => element)   
         search.forEach(element => {
            if(element.nombreLibro === nombre){
                console.log(element)
            }
         });
    }

}

const libros:Libros[]=[new Libros("ines","cars", "rueda","infantil"),
                       new Libros("matias","iron man","rayos","accion"),
                    ]
const biblioteca:Biblioteca = new Biblioteca("biblioteca raumi`s","a mitad de cuadra ",247743,"las flores",libros)

biblioteca.getInfoBiblioteca()

biblioteca.buscadorLibros("iron man")
