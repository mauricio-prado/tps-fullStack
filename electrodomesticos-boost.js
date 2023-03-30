lass Electrodomestico {
    constructor(nombre, precioBase, color, consumoEnergetico, peso) {
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }

    esDeBajoConsumo() {
        return this.consumoEnergetico < 100;
    }

    calcularBalance() {
        return this.precioBase / this.peso;
    }

    esDeAltaGama() {
        const balance = this.calcularBalance();
        if (balance > 3) {
            console.log(`${this.nombre} es un producto de alta gama.`);
            return true;
        } else {
            console.log(`${this.nombre} no es un producto de alta gama.`);
            return false;
        }
    }
}

class MiElectrodomestico extends Electrodomestico {
    constructor(paramEstaPrendido, paramCanal, paramVolumen, paramMarca, paramTipo, paramColor) {
        super("TV", 1000, "Negro", 150, 60);
        this.estaPrendido = paramEstaPrendido;
        this.canalActual = paramCanal;
        this.volumenActual = paramVolumen;
        this.marca = paramMarca;
        this.esSmartTv = paramTipo;
        this.color = paramColor;
    }

    prenderApagar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        } else {
            this.estaPrendido = false;
        }
    }

    setEstaPrendido(paramPrendido) {
        this.estaPrendido = paramPrendido;
    }

    getEstaPrendido() {
        return this.estaPrendido;
    }
}

const miElectrodomestico = new Electrodomestico("Lavadora", 500, "Blanco", 120, 50);
console.log(miElectrodomestico.esDeBajoConsumo());
console.log(miElectrodomestico.calcularBalance());
console.log(miElectrodomestico.esDeAltaGama());

const miTV = new MiElectrodomestico(false, 1, 10, "Samsung", true, "Negro");
console.log(miTV.getEstaPrendido());
miTV.prenderApagar();
console.log(miTV.getEstaPrendido());
miTV.setEstaPrendido(true);
console.log(miTV.getEstaPrendido());
