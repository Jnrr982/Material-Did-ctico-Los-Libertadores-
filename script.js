let programaSeleccionado = "";

// Base de datos estructurada: n = Nombre, c = Créditos, t = Clase CSS (Categoría)
const bdMaterias = {
    "Educación Infantil Bogotá": [
        [
            { n: "Cátedra Libertadora", c: 3, t: "cat-transversal" },
            { n: "Gestión de la Información", c: 2, t: "cat-transversal" },
            { n: "Maestro y Escenarios Educ.", c: 3, t: "cat-basico" },
            { n: "Neuropedagogía", c: 2, t: "cat-basico" },
            { n: "TIC e Interculturalidad", c: 2, t: "cat-basico" },
            { n: "Historia de la Educación", c: 2, t: "cat-basico" },
            { n: "Lengua y Comunicación", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Ética y Responsabilidad", c: 3, t: "cat-transversal" },
            { n: "Infancias: Primeros Años", c: 3, t: "cat-basico" },
            { n: "Desarrollo Cognitivo", c: 2, t: "cat-basico" },
            { n: "Modelos Pedagógicos", c: 2, t: "cat-basico" },
            { n: "Electiva Integral I", c: 3, t: "cat-electivo" },
            { n: "Inglés I", c: 3, t: "cat-transversal" }
        ]
        // Se pueden agregar los demás semestres siguiendo este mismo patrón {n, c, t}
    ],
    "Educación Infantil Cartagena": [
        [
            { n: "Historia de la Educación", c: 2, t: "cat-basico" },
            { n: "Maestro y Escenarios", c: 3, t: "cat-basico" },
            { n: "Neuropedagogía", c: 2, t: "cat-basico" },
            { n: "TIC e Interculturidad", c: 2, t: "cat-basico" },
            { n: "Lengua y Comunicación", c: 3, t: "cat-transversal" },
            { n: "Cátedra Libertadora", c: 3, t: "cat-transversal" },
            { n: "Medios y Mediaciones", c: 2, t: "cat-transversal" }
        ]
    ],
    "Educación Especial Bogotá": [
        [
            { n: "Historia Educación", c: 2, t: "cat-basico" },
            { n: "Maestro y Escenarios", c: 3, t: "cat-basico" },
            { n: "Neuropedagogía", c: 2, t: "cat-basico" },
            { n: "TIC e Interculturidad", c: 2, t: "cat-basico" },
            { n: "Lengua y Comunicación", c: 3, t: "cat-transversal" },
            { n: "Cátedra Libertadora", c: 3, t: "cat-transversal" },
            { n: "Gestión Información", c: 2, t: "cat-transversal" }
        ]
    ],
    "Educación Infantil Virtual": [
        [
            { n: "Historia de la Educación", c: 2, t: "cat-basico" },
            { n: "Modelos y Perspectivas", c: 2, t: "cat-basico" },
            { n: "Proc. Psicológicos: Sensación", c: 3, t: "cat-basico" },
            { n: "TIC e Interculturalidad", c: 2, t: "cat-basico" },
            { n: "Filosofía y Educación", c: 3, t: "cat-transversal" },
            { n: "Electiva Disciplinar I", c: 3, t: "cat-electivo" },
            { n: "Lectura y Escritura", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Currículo y Gestión Educativa", c: 2, t: "cat-basico" },
            { n: "Psicología del desarrollo", c: 2, t: "cat-basico" },
            { n: "Proc. Psicológicos: Aprendizaje", c: 3, t: "cat-basico" },
            { n: "Didáctica General", c: 2, t: "cat-basico" },
            { n: "Epistemología Investigación", c: 3, t: "cat-investigacion" },
            { n: "Electiva Disciplinar II", c: 3, t: "cat-electivo" },
            { n: "Inglés I", c: 3, t: "cat-transversal" }
        ]
    ],
    "Etnoeducación Virtual": [
        [
            { n: "Historia de la Educación", c: 2, t: "cat-basico" },
            { n: "TIC e Interculturalidad", c: 2, t: "cat-basico" },
            { n: "Historia de la Etnoeducación", c: 3, t: "cat-disciplinar" },
            { n: "Pedagogías Otras", c: 3, t: "cat-disciplinar" },
            { n: "Planes de Vida", c: 3, t: "cat-disciplinar" },
            { n: "Fundamentos de Matemáticas", c: 3, t: "cat-transversal" },
            { n: "Cátedra Libertadora", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Modelos y Perspectivas", c: 2, t: "cat-basico" },
            { n: "Español I", c: 3, t: "cat-transversal" },
            { n: "Territorio y Territorialidad", c: 3, t: "cat-disciplinar" },
            { n: "Estudios Afrocolombianidad", c: 3, t: "cat-disciplinar" },
            { n: "Proyecto Educ. Comunitario", c: 4, t: "cat-disciplinar" },
            { n: "Inglés I", c: 3, t: "cat-transversal" }
        ]
    ]
};

// Función para determinar si es Semestre o Cuatrimestre (Periodo)
function getEtiquetaTiempo(indice) {
    if (programaSeleccionado.includes("Virtual")) {
        return `PERIODO ${indice + 1}`;
    }
    return `SEMESTRE ${indice + 1}`;
}

function seleccionarCarrera(programa, vistaId) {
    programaSeleccionado = programa;
    document.getElementById('tag-general').innerText = `${programa}`;
    document.getElementById('tag-cronologico').innerText = `${programa}`;
    cambiarSeccion(vistaId); 
}

function cambiarSeccion(seccionId) {
    // 1. Ocultar TODAS las pantallas
    document.getElementById('seleccion-programa').classList.remove('pantalla-activa');
    document.getElementById('seleccion-programa').classList.add('pantalla-oculta');
    
    document.getElementById('mapa-general').classList.remove('pantalla-activa');
    document.getElementById('mapa-general').classList.add('pantalla-oculta');
    
    document.getElementById('mapa-cronologico').classList.remove('pantalla-activa');
    document.getElementById('mapa-cronologico').classList.add('pantalla-oculta');

    // 2. Mostrar SOLO la pantalla seleccionada
    document.getElementById(seccionId).classList.remove('pantalla-oculta');
    document.getElementById(seccionId).classList.add('pantalla-activa');

    // 3. Quitar estado activo de los botones del menú superior
    const menus = document.querySelectorAll('.nav-institucional .nav-btn');
    menus.forEach(menu => menu.classList.remove('activo'));

    // 4. Ejecutar funciones y marcar menú
    if(seccionId === 'seleccion-programa') {
        document.getElementById('btn-inicio').classList.add('activo');
    }
    if(seccionId === 'mapa-general') { 
        generarMapaGeneral(); 
    }
    if(seccionId === 'mapa-cronologico') { 
        generarMapaCronologico(); 
    }
    
    // Subir scroll arriba
    window.scrollTo(0, 0);
}

function generarMapaGeneral() {
    const contenedor = document.getElementById('contenedor-malla-filas');
    contenedor.innerHTML = ""; 
    const periodos = bdMaterias[programaSeleccionado];

    if(!periodos) {
        contenedor.innerHTML = "<h3 style='text-align:center;'>Agrega las materias de esta carrera en la base de datos (script.js)</h3>";
        return;
    }

    periodos.forEach((materiasDelPeriodo, index) => {
        const fila = document.createElement('div');
        fila.className = 'fila-semestre';

        let materiasDiv = document.createElement('div');
        materiasDiv.className = 'materias-grid';

        materiasDelPeriodo.forEach((mat) => {
            const divMateria = document.createElement('div');
            // Se le asigna la clase general y la clase de color (mat.t)
            divMateria.className = `materia-cell ${mat.t}`; 
            divMateria.onclick = () => verDetalle(index + 1, mat);
            
            // Nombre de la materia y el badge de créditos adentro
            divMateria.innerHTML = `
                ${mat.n}
                <span class="badge-creditos">${mat.c} Cr.</span>
            `;
            materiasDiv.appendChild(divMateria);
        });

        fila.innerHTML = `<div class="etiqueta-semestre">${getEtiquetaTiempo(index)}</div>`;
        fila.appendChild(materiasDiv);
        contenedor.appendChild(fila);
    });
}

function generarMapaCronologico() {
    const contenedor = document.getElementById('estaciones-roadmap');
    contenedor.innerHTML = ""; 
    const periodos = bdMaterias[programaSeleccionado];

    if(!periodos) return;

    periodos.forEach((materiasDelPeriodo, index) => {
        const divEstacion = document.createElement('div');
        divEstacion.className = 'estacion-roadmap';

        let listaMateriasHtml = "";
        materiasDelPeriodo.forEach((mat) => {
            listaMateriasHtml += `
            <div class="materia-roadmap ${mat.t}" onclick="verDetalle(${index + 1}, {n:'${mat.n}', c:${mat.c}, t:'${mat.t}'})">
                <span>${mat.n}</span>
                <span class="badge-creditos" style="position:static;">${mat.c} Cr.</span>
            </div>`;
        });

        divEstacion.innerHTML = `
            <div class="punto-circulo">${index + 1}</div>
            <div class="caja-info">
                <h3>${getEtiquetaTiempo(index)}</h3>
                <div class="lista-materias-roadmap">
                    ${listaMateriasHtml}
                </div>
            </div>
        `;
        contenedor.appendChild(divEstacion);
    });
}

// Ahora recibe el objeto completo de la materia para mostrar créditos y categoría
function verDetalle(numPeriodo, mat) {
    document.getElementById('modal-materia-nombre').innerText = mat.n;
    document.getElementById('modal-tag-semestre').innerText = `${getEtiquetaTiempo(numPeriodo - 1)} - ${programaSeleccionado}`;
    document.getElementById('modal-tag-creditos').innerText = `${mat.c} Créditos`;
    
    // Convertir el nombre de la clase a un nombre legible
    let nombreCategoria = "General";
    if(mat.t === "cat-basico") nombreCategoria = "Básico / Pedagogía";
    if(mat.t === "cat-practica") nombreCategoria = "Práctica Pedagógica";
    if(mat.t === "cat-disciplinar") nombreCategoria = "Disciplinar / Didáctica";
    if(mat.t === "cat-transversal") nombreCategoria = "Transversal / Generales";
    if(mat.t === "cat-investigacion") nombreCategoria = "Investigación";
    if(mat.t === "cat-electivo") nombreCategoria = "Electividad";
    
    document.getElementById('modal-categoria').innerText = nombreCategoria;

    document.getElementById('modal-overlay').classList.remove('oculto');
    document.getElementById('modal-detalle').classList.remove('oculto');
}

function cerrarModal() {
    // Forzamos a que se agregue la clase oculto
    document.getElementById('modal-overlay').classList.add('oculto');
    document.getElementById('modal-detalle').classList.add('oculto');
    
    // Por si acaso, también podemos asegurar el estilo directo
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal-detalle').style.display = 'none';
}

// EJECUTA ESTO AL FINAL DE TU ARCHIVO JS:
// Esto garantiza que el modal esté cerrado cuando la página termine de cargar
window.onload = function() {
    cerrarModal();
};
