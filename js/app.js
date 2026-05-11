// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    const controlador = new ControladorParqueadero();

    function actualizarVista() {
        UI.mostrarVehiculos(controlador.vehiculos);
        UI.mostrarTotalDiario(controlador.obtenerTotalDiario());
    }

    actualizarVista();

    const form = document.getElementById('form-vehiculo');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const placa = document.getElementById('placa').value.trim();
        const tipo = document.getElementById('tipo').value;
        const horas = parseInt(document.getElementById('horas').value);

        if (controlador.agregarVehiculo(placa, tipo, horas)) {
            UI.limpiarFormulario();
            actualizarVista();
        }
    });
});