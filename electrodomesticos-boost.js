var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(nombre, precioBase, color, consumoEnergetico, peso) {
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }
    Electrodomestico.prototype.esDeBajoConsumo = function () {
        if (miElectrodomestico.esDeBajoConsumo()) {
            console.log("El electrodoméstico es de bajo consumo.");
        }
        else {
            console.log("El electrodoméstico no es de bajo consumo.");
        }
    };
    Electrodomestico.prototype.calcularBalance = function () {
        return this.precioBase / this.peso;
    };
    Electrodomestico.prototype.esDeAltaGama = function () {
        var balance = this.calcularBalance();
        if (balance > 3) {
            console.log("".concat(this.nombre, " es un producto de alta gama."));
            return true;
        }
        else {
            console.log("".concat(this.nombre, " no es un producto de alta gama."));
            return false;
        }
    };
    return Electrodomestico;
}());
var miElectrodomestico = new Electrodomestico("Lavadora", 500, "Blanco", 120, 50);
console.log(miElectrodomestico.esDeBajoConsumo());
console.log(miElectrodomestico.calcularBalance());
console.log(miElectrodomestico.esDeAltaGama());
var mielectrodoméstico = /** @class */ (function () {
    function mielectrodoméstico() {
    }
    return mielectrodoméstico;
}());
constructor(paramEstaPrendido, boolean, paramVelocidad, number, paramMarca, string, paramTipo, boolean, paramColor, string);
{
    this.estaPrendido = paramEstaPrendido;
    this.canalActual = paramCanal;
    this.volumenActual = paramVolumen;
    this.marca = paramMarca;
    this.esSmartTv = paramTipo;
    this.color = paramColor;
}
{
    prenderApagar();
    void {
        Electrodomestico:Electrodomestico.estaPrendido == false
    };
    {
        this.estaPrendido = true;
    }
    {
        this.estaPrendido = false;
    }
}
setEstaPrendido(paramPrendido, boolean);
void {
    this: Electrodomestico.estaPrendido = paramPrendido
};
getEstaPrendido();
boolean;
{
    return this.estaPrendido;
}
