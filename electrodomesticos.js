class Electrodomestico {
    constructor(nombre, precioBase, color, consumoEnergetico , peso)}
    {
      this.nombre = nombre;
      this.precioBase = precioBase;
      this.color = color;
      this.consumoEnergetico = consumoEnergetico;
      this.peso = peso;
    }
    
    { Electrodomestico.esDeBajoConsumo(); boolean
      return this.consumoEnergetico < 100;
      console.log(Electrodomestico.esDeBajoConsumo()); 
    }
    calcularBalance()
    {
      Electrodomestico.calcularBalance(); boolean
        return this.precioBase / this.peso;
      console.log(Electrodomestico.calcularBalance());
    }
    
    esDeAltaGama() 
    {
      let balance = this.calcularBalance();
      if (balance > 3) {
        console.log(`${this.nombre} es un producto de alta gama.`);
        return true;
      } else {
        console.log(`${this.nombre} no es un producto de alta gama.`);
        return false;
      }
    }
  
  