// JavaScript Ultra Simple
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');
    const table = document.querySelector('.data-table tbody');

    // Formulario
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;

            if (!email) {
                alert('Completa el email');
                return;
            }

            // Agregar fila
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>Usuario</td>
                <td>Nuevo</td>
                <td>${email}</td>
                <td>${telefono || 'No especificado'}</td>
            `;
            
            table.appendChild(newRow);
            form.reset();
            alert('Registro enviado');
        });
    }
     // Navegación
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                e.preventDefault();
                alert('Deshabilitado');
            }
        });
    });
});   