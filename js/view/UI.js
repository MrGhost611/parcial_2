// js/view/UI.js
class UI {
    static mostrarVehiculos(vehiculos) {
        const tbody = document.querySelector('#tabla-vehiculos tbody');
        tbody.innerHTML = '';

        vehiculos.forEach(vehiculo => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.tipoVehiculo}</td>
                <td>${vehiculo.horasEstacionado}</td>
                <td>$${vehiculo.tarifaTotal.toFixed(2)}</td>
            `;
            tbody.appendChild(fila);
        });
    }

    static mostrarTotalDiario(total) {
        const totalDiv = document.getElementById('total-recaudado');
        totalDiv.textContent = `Total recaudado hoy: $${total.toFixed(2)}`;
    }

    static limpiarFormulario() {
        document.getElementById('placa').value = '';
        document.getElementById('tipo').value = 'C';
        document.getElementById('horas').value = '';
    }
}