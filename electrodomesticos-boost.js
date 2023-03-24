class Electrodomestico {
  constructor(nombre, precioBase, color, consumoEnergetico, peso) {
    this.nombre = nombre;
    this.precioBase = precioBase;
    this.color = color;
    this.consumoEnergetico = consumoEnergetico;
    this.peso = peso;
  }
  esDeBajoConsumo() {
  if (miElectrodomestico.esDeBajoConsumo()) {
  console.log("El electrodoméstico es de bajo consumo.");
}  else {
  console.log("El electrodoméstico no es de bajo consumo.");
}
}
   calcularBalance() {
    return this.precioBase / this.peso;
  }

  esDeAltaGama() {
    let balance = this.calcularBalance();
    if (balance > 3) {
      console.log(`${this.nombre} es un producto de alta gama.`);
      return true;
    } else {
      console.log(`${this.nombre} no es un producto de alta gama.`);
      return false;
    }
  }
}

const miElectrodomestico = new Electrodomestico("Lavadora", 500, "Blanco", 120, 50);

console.log(miElectrodomestico.esDeBajoConsumo());
console.log(miElectrodomestico.calcularBalance());
console.log(miElectrodomestico.esDeAltaGama());

class lavarropa {
  public estaPrendido: boolean;
  public velocidadActual: number;
  public marca:string;
  public tipo:String;
  public color:string;
  public esBajoConsumo:boolean;

}
constructor(paramEstaPrendido:boolean,paramVelocidad:number,paramMarca:string,paramTipo:boolean,paramColor:string)
{
  this.estaPrendido = paramEstaPrendido;
  this.canalActual = paramCanal;
  this.volumenActual = paramVolumen;
  this.marca = paramMarca;
  this.esSmartTv = paramTipo;
  this.color = paramColor;
}
{
public prenderApagar():void
 {
  if(this.estaPrendido == false) { 
          this.estaPrendido=true;
  } else { 
          this.estaPrendido=false;
  }
 }
public setEstaPrendido(paramPrendido:boolean):void{
  this.estaPrendido = paramPrendido;
}
public getEstaPrendido():boolean{
  return this.estaPrendido;
}