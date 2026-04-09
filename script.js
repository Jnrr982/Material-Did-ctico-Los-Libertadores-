let programaSeleccionado = "";

// Base de datos extraída de los planes de estudio oficiales (9 Semestres)
const bdMaterias = {
    "Educación Infantil": [
        ["Cátedra Libertadora", "Gestión de la Información", "Maestro y Escenarios Educativos", "Neuropedagogía y Aprendizaje", "TIC e Interculturalidad", "Historia de la Educación", "Lengua y Comunicación"],
        ["Ética y Responsabilidad Social", "Infancias: Primeros Años", "Desarrollo Cognitivo", "Modelos y Perspectivas", "Electiva Formación Integral I", "Inglés I"],
        ["Inglés II", "Experiencias Significativas", "Desarrollo Pensamiento Lingüístico", "Electiva Disciplinar I", "Fundamentos de Matemáticas"],
        ["Desarrollo Biopsicológico", "Electividad Disciplinar II", "Didáctica General", "Escuela y Diversidad", "Currículo y Gestión Educativa", "Inglés III"],
        ["Electividad Disciplinar III", "Evaluación", "Educación Inclusiva", "Inglés IV", "Emprender, Innovar y Construir"],
        ["Seminario Investigación I", "Estadística y Probabilidad", "Pedagogía para DDHH", "Praxis Integral Primera Infancia", "Saber Didáctico: Expresión Lúdica"],
        ["Diseños Metodológicos", "Praxis Pedagógica Aúlica", "Saber Didáctico: Expresión Corporal", "Seminario de Infancia", "Pensamiento Complejo"],
        ["Seminario Investigación II", "Salud y Nutrición", "Saber Didáctico: Pensamiento y Lenguaje", "Praxis Escenarios Familiares", "Electiva Formación Integral II"],
        ["Seminario Investigación III", "Teaching English", "Proyecto Pedagógico Flexible", "Políticas y Tendencias", "Praxis Hospitalaria"]
    ],
    "Educación Infantil - Cartagena": [
        ["Historia de la Educación", "Maestro y Escenarios", "Neuropedagogía", "TIC e Interculturidad", "Lengua y Comunicación", "Cátedra Libertadora", "Medios y Mediaciones"],
        ["Modelos y Perspectivas", "Infancias: Primeros Años", "Desarrollo Cognitivo", "Inglés", "Ética y Responsabilidad", "Electiva Formación Integral I"],
        ["Experiencias Significativas", "Pensamiento Lingüístico", "Inglés II", "Fundamentos de Matemáticas", "Electividad Disciplinar I"],
        ["Currículo y Gestión", "Escuela y Diversidad", "Desarrollo Biopsicológico", "Didáctica General", "Inglés III", "Electividad Disciplinar II"],
        ["Evaluación", "Educación Inclusiva", "Inglés IV", "Cultura del Emprendimiento", "Electividad Disciplinar III"],
        ["Pedagogía para DDHH", "Praxis Integral", "Saber Didáctico: Expresión Lúdica", "Seminario de Investigación I"],
        ["Seminario de Infancia", "Praxis Pedagógica Aúlica", "Saber Didáctico: Expresión Corporal", "Diseños Metodológicos", "Teaching English"],
        ["Praxis Escenarios Familiares", "Salud y Nutrición", "Saber Didáctico: Procesos de Pensamiento", "Seminario Investigación II"],
        ["Políticas y Tendencias", "Praxis Hospitalaria", "Proyecto Pedagógico Flexible", "Seminario Investigación III"]
    ],
    "Educación Especial": [
        ["Historia de la Educación", "Maestro y Escenarios", "Neuropedagogía", "TIC e Interculturalidad", "Lengua y Comunicación", "Cátedra Libertadora", "Gestión de la Información"],
        ["Modelos y Perspectivas", "Infancias: Primeros Años", "Desarrollo Cognitivo", "Com. Básica Lengua Extranjera", "Ética y Responsabilidad", "Electiva Formación Integral I"],
        ["Experiencias Significativas", "Pensamiento Lingüístico", "Com. Lengua Extranjera", "Fundamentos de Matemáticas", "Electividad Disciplinar I"],
        ["Currículo y Gestión", "Escuela y Diversidad", "Pensamiento Científico", "Didáctica General", "Com. Intermedia Lengua Extranjera", "Electividad Disciplinar II"],
        ["Evaluación", "Educación Inclusiva", "Com. Avanzada Lengua Extranjera", "Emprender, Innovar", "Electividad Disciplinar III"],
        ["Epistemología Diferencia", "Praxis Enfoque Diferencial", "Didácticas Ed. Especial", "Seminario Investigación I", "Estadística y Probabilidad"],
        ["Currículo para Diversidad", "Praxis Discapacidad Intelectual", "Enseñanza Discap. Intelectual", "Diseños Metodológicos", "Electiva Formación Integral II"],
        ["Transcurrir de Vida", "Praxis Discapacidad Sensorial", "Enseñanza Discap. Sensorial", "Seminario Investigación II", "Pensamiento Complejo"],
        ["Políticas y Tendencias", "Praxis Discapacidad Motora", "Diseño Universal Aprendizaje", "Seminario Investigación III", "Teaching English"]
    ]
};

function seleccionarCarrera(programa, vistaId) {
    programaSeleccionado = programa;
    document.getElementById('tag-general').innerText = `Licenciatura en ${programa}`;
    document.getElementById('tag-cronologico').innerText = `Licenciatura en ${programa}`;
    cambiarSeccion(vistaId); 
}

function cambiarSeccion(seccionId) {
    document.getElementById('seleccion-programa').className = 'pantalla-oculta';
    document.getElementById('mapa-general').className = 'pantalla-oculta';
    document.getElementById('mapa-cronologico').className = 'pantalla-oculta';

    document.getElementById(seccionId).className = 'pantalla-activa';

    const menus = document.querySelectorAll('.nav-institucional .nav-btn');
    menus.forEach(menu => menu.classList.remove('activo'));

    if(seccionId === 'seleccion-programa') menus[0].classList.add('activo');
    if(seccionId === 'mapa-general') { 
        menus[1].classList.add('activo'); 
        generarMapaGeneral(); 
    }
    if(seccionId === 'mapa-cronologico') { 
        menus[2].classList.add('activo'); 
        generarMapaCronologico(); 
    }
}

function generarMapaGeneral() {
    const contenedor = document.getElementById('contenedor-malla-filas');
    contenedor.innerHTML = ""; 

    // Obtenemos el arreglo de semestres de la carrera seleccionada
    const semestres = bdMaterias[programaSeleccionado];

    semestres.forEach((materiasDelSemestre, index) => {
        const s = index + 1; // Número de semestre (1 al 9)
        const fila = document.createElement('div');
        fila.className = 'fila-semestre';

        let materiasDiv = document.createElement('div');
        materiasDiv.className = 'materias-grid';

        // Recorremos las materias reales de ese semestre
        materiasDelSemestre.forEach((nombreMateria) => {
            const divMateria = document.createElement('div');
            divMateria.className = 'materia-cell';
            divMateria.onclick = () => verDetalle(s, nombreMateria);
            divMateria.innerText = nombreMateria;
            materiasDiv.appendChild(divMateria);
        });

        fila.innerHTML = `<div class="etiqueta-semestre">SEMESTRE ${s}</div>`;
        fila.appendChild(materiasDiv);
        contenedor.appendChild(fila);
    });
}

function generarMapaCronologico() {
    const contenedor = document.getElementById('estaciones-roadmap');
    contenedor.innerHTML = ""; 

    const semestres = bdMaterias[programaSeleccionado];

    semestres.forEach((materiasDelSemestre, index) => {
        const s = index + 1;
        const divEstacion = document.createElement('div');
        divEstacion.className = 'estacion-roadmap';

        let listaMateriasHtml = "";
        materiasDelSemestre.forEach((nombreMateria) => {
            listaMateriasHtml += `<div class="materia-roadmap" onclick="verDetalle(${s}, '${nombreMateria}')">${nombreMateria}</div>`;
        });

        divEstacion.innerHTML = `
            <div class="punto-circulo">${s}</div>
            <div class="caja-info">
                <h3>SEMESTRE ${s}</h3>
                <div class="lista-materias-roadmap">
                    ${listaMateriasHtml}
                </div>
            </div>
        `;
        contenedor.appendChild(divEstacion);
    });
}

// Ahora recibe el nombre de la materia real para mostrarlo en el cuadro
function verDetalle(sem, nombreMateria) {
    document.getElementById('modal-materia-nombre').innerText = nombreMateria;
    document.getElementById('modal-tag-semestre').innerText = `Semestre ${sem} - ${programaSeleccionado}`;
    document.getElementById('modal-objetivo').innerText = "Propósito didáctico: Fortalecer las competencias pedagógicas y tecnológicas del estudiante en esta área específica.";
    document.getElementById('modal-requisitos').innerText = "Haber aprobado el nivel anterior y cumplir con los requisitos mínimos exigidos por la facultad.";

    document.getElementById('modal-overlay').classList.remove('oculto');
    document.getElementById('modal-detalle').classList.remove('oculto');
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.add('oculto');
    document.getElementById('modal-detalle').classList.add('oculto');
}
