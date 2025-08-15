// Función para agregar el cuadro de estratificación sin usar innerHTML
function agregarCuadroEstratificacion() {
    // Verificar si el sidebar ya existe
    if (!document.getElementById('infoSidebar')) {
        // Crear el contenedor del sidebar
        var sidebar = document.createElement('div');
        sidebar.id = 'infoSidebar';

        // Crear el botón de cierre del sidebar
        var closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.textContent = '×';
        closeButton.onclick = function() {
            closeSidebar();  // Llamar a la función para cerrar el sidebar
        };

        // Crear el título del sidebar
        var title = document.createElement('h2');
        title.textContent = 'Estratificación de Niveles en la Lucha contra la Anemia';

        // Crear la tabla para los niveles
        var table = document.createElement('table');
        table.style.width = '100%';
        table.style.border = '1px solid #ddd';
        table.style.textAlign = 'left';

        // Crear el encabezado de la tabla
        var thead = document.createElement('thead');
        var headerRow = document.createElement('tr');
        var headerCell1 = document.createElement('th');
        headerCell1.textContent = 'Nivel';
        var headerCell2 = document.createElement('th');
        headerCell2.textContent = 'Descripción';
        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Crear el cuerpo de la tabla con las filas de los niveles
        var tbody = document.createElement('tbody');
        var levels = [
            { nivel: 'Muy Alto', descripcion: 'Cuenta con una muy alta concentración de centros poblados sin acceso al agua, sin electricidad, programas sociales. Muy alta concentración de centros poblados sin nivel educativo, material en paredes deficientes, usuarios de PGH georreferenciados en Pobreza Extrema. Zonas niveles altitudinales de 4500 msnm a más y zona de selva a menos de 150 msnm, muy alta concentración de centros poblados en zonas rurales. Distritos con muy alta concentración de Porcentaje de Anemia en el Programa Juntos entre 6 a 12 meses y la concentración de centros de salud.' },
            { nivel: 'Alto', descripcion: 'Cuenta con una alta concentración de centros poblados sin acceso al agua, sin electricidad, programas sociales. Alta concentración de centros poblados sin nivel educativo, material en paredes deficientes, usuarios de PGH georreferenciados en Pobreza Extrema. Zonas niveles altitudinales de 150 msnm a 500 msnm en zona de selva, alta concentración de centros poblados en zonas rurales. Distritos con alta concentración de Porcentaje de Anemia en el Programa Juntos entre 6 a 12 meses y la concentración de centros de salud.' },
            { nivel: 'Medio Alto', descripcion: 'Cuenta con una media alta concentración de centros poblados sin acceso al agua, sin electricidad, programas sociales. Media Alta concentración de centros poblados sin nivel educativo, material en paredes deficientes, usuarios de PGH georreferenciados en Pobreza Extrema. Zonas niveles altitudinales de 3500 msnm a 4500 msnm, media alta concentración de centros poblados en zonas rurales. Distritos con media alta concentración de Porcentaje de Anemia en el Programa Juntos entre 6 a 12 meses y la concentración de centros de salud.' },
            { nivel: 'Medio', descripcion: 'Cuenta con una concentración media de centros poblados sin acceso al agua, sin electricidad, programas sociales. Concentración media de centros poblados sin nivel educativo, material en paredes deficientes, usuarios de PGH georreferenciados en Pobreza Extrema. Zonas niveles altitudinales de 2500 msnm a 3500 msnm, concentración media de centros poblados en zonas rurales. Distritos con concentración media de Porcentaje de Anemia en el Programa Juntos entre 6 a 12 meses y la concentración de centros de salud.' },
            { nivel: 'Bajo', descripcion: 'Cuenta con una baja concentración de centros poblados sin acceso al agua, sin electricidad, programas sociales. Baja concentración de centros poblados sin nivel educativo, material en paredes deficientes, usuarios de PGH georreferenciados en Pobreza Extrema. Zonas niveles altitudinales de 400 msnm a 2500 msnm, baja concentración de centros poblados en zonas rurales. Distritos con baja concentración de Porcentaje de Anemia en el Programa Juntos entre 6 a 12 meses y la concentración de centros de salud.' },
            { nivel: 'Muy Bajo', descripcion: 'Cuenta con una muy baja concentración de centros poblados sin acceso al agua, sin electricidad, programas sociales. Muy baja concentración de centros poblados sin nivel educativo, material en paredes deficientes, usuarios de PGH georreferenciados en Pobreza Extrema. Zonas niveles altitudinales a menos de 400 msnm, muy baja concentración de centros poblados en zonas rurales. Distritos con muy baja concentración de Porcentaje de Anemia en el Programa Juntos entre 6 a 12 meses y la concentración de centros de salud.' }
        ];

        levels.forEach(function(level) {
            var row = document.createElement('tr');
            var cell1 = document.createElement('td');
            cell1.textContent = level.nivel;
            var cell2 = document.createElement('td');
            cell2.textContent = level.descripcion;
            row.appendChild(cell1);
            row.appendChild(cell2);
            tbody.appendChild(row);
        });

        // Agregar el cuerpo de la tabla al elemento de la tabla
        table.appendChild(tbody);

        // Agregar todos los elementos al sidebar
        sidebar.appendChild(closeButton);
        sidebar.appendChild(title);
        sidebar.appendChild(table);

        // Añadir el sidebar al cuerpo de la página
        document.body.appendChild(sidebar);

        // Crear y aplicar los estilos sin usar innerHTML
        var style = document.createElement('style');
        document.head.appendChild(style);

        style.textContent = `
            #infoSidebar {
                width: 300px;
                height: 100%;
                position: absolute;
                bottom: 0;
                left: -300px;  /* Oculto inicialmente */
                background-color: rgba(255, 255, 255, 0.9);
                padding: 20px;
                z-index: 999;
                box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
                transition: left 0.3s ease-in-out;
                overflow-y: auto; /* Agregar scroll si el contenido es largo */
            }
            #infoSidebar h2 {
                margin-top: 0;
                font-size: 18px;
                font-weight: bold;
            }
            #infoSidebar .close-btn {
                background-color: #f1f1f1;
                padding: 5px;
                border: none;
                font-size: 18px;
                cursor: pointer;
                text-align: right;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
        `;
    }
}

// Función para abrir el sidebar
function openSidebar() {
    document.getElementById('infoSidebar').style.left = '0'; // Despliega el sidebar
}

// Función para cerrar el sidebar
function closeSidebar() {
    document.getElementById('infoSidebar').style.left = '-300px'; // Cierra el sidebar
}

// Llamar a la función para agregar el cuadro de estratificación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    agregarCuadroEstratificacion(); // Agrega el cuadro al cargar la página
    // Si lo deseas abrir automáticamente, descomenta la siguiente línea
    openSidebar(); 
});
