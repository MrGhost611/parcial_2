// js/controller/ControladorParqueadero.js
class ControladorParqueadero {
    constructor() {
        this.vehiculos = this.cargarVehiculos();
    }

    cargarVehiculos() {
        const datos = localStorage.getItem('vehiculos');
        if (!datos) return [];

        const vehiculosData = JSON.parse(datos);
        return vehiculosData.map(v => new Vehiculo(v.placa, v.tipoVehiculo, v.horasEstacionado));
    }

    guardarVehiculos() {
        localStorage.setItem('vehiculos', JSON.stringify(this.vehiculos));
    }

    agregarVehiculo(placa, tipoVehiculo, horasEstacionado) {
        if (!placa || !tipoVehiculo || horasEstacionado <= 0) {
            alert('Datos inválidos');
            return false;
        }

        const nuevoVehiculo = new Vehiculo(placa, tipoVehiculo, horasEstacionado);
        this.vehiculos.push(nuevoVehiculo);
        this.guardarVehiculos();
        return true;
    }

    obtenerTotalDiario() {
        return this.vehiculos.reduce((total, v) => total + v.tarifaTotal, 0);
    }
}