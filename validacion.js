document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservaForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const apoderado = document.getElementById("apoderado").value.trim();
            const estudiante = document.getElementById("estudiante").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const distrito = document.getElementById("distrito").value;
            const fecha = document.getElementById("fecha").value;

            if (!apoderado || !estudiante || !email || !telefono || !distrito || !fecha) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            alert(`Reserva enviada:\n\napoderado: ${apoderado}\nestudiante: ${estudiante}\nemail: ${email}\nTeléfono: ${telefono}\ndistrito: ${distrito}\nfecha: ${fecha}`);
            form.reset();
        });
    }
});
