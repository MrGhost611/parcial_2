// js/model/Vehiculo.js
class Vehiculo {
    constructor(placa, tipoVehiculo, horasEstacionado) {
        this.placa = placa;
        this.tipoVehiculo = tipoVehiculo;
        this.horasEstacionado = horasEstacionado;
        this.tarifaTotal = this.calcularTarifa();
    }

    calcularTarifa() {
        const tarifaBase = 1000; // $1.000 por hora
        let recargo = 0;

        switch (this.tipoVehiculo) {
            case 'M': recargo = 2000; break;
            case 'C': recargo = 5000; break;
            case 'K': recargo = 8000; break;
            case 'B': recargo = 15000; break;
            default: recargo = 0;
        }

        return (tarifaBase * this.horasEstacionado) + recargo;
    }
}