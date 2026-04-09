let programaSeleccionado = "";

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
        ["Historia de la Educación", "Maestro y Escenarios", "Neuropedagogía", "TIC e Interculturalidad", "Lengua y Comunicación", "Cátedra Libertadora", "Medios y Mediaciones"],
        ["Modelos y Perspectivas", "Infancias: Primeros Años", "Desarrollo Cognitivo", "Inglés I", "Ética y Responsabilidad", "Electiva Formación Integral I"],
        ["Experiencias Significativas", "Pensamiento Lingüístico", "Inglés II", "Fundamentos de Matemáticas", "Electividad Disciplinar I"],
        ["Currículo y Gestión", "Escuela y Diversidad", "Desarrollo Biopsicológico", "Didáctica General", "Inglés III", "Electividad Disciplinar II"],
        ["Evaluación", "Educación Inclusiva", "Inglés IV", "Cultura del Emprendimiento", "Electividad Disciplinar III"],
        ["Pedagogía para DDHH", "Praxis Integral Primera Infancia", "Saber Didáctico: Expresión Lúdica", "Seminario de Investigación I"],
        ["Seminario de Infancia", "Praxis Pedagógica Aúlica", "Saber Didáctico: Expresión Corporal", "Diseños Metodológicos", "Teaching English"],
        ["Praxis Escenarios Familiares", "Salud y Nutrición", "Saber Didáctico: Procesos de Pensamiento", "Seminario Investigación II"],
        ["Políticas y Tendencias", "Praxis Hospitalaria", "Proyecto Pedagógico Flexible", "Seminario Investigación III"]
    ],
    "Educación Especial": [
        ["Historia de la Educación", "Maestro y Escenarios", "Neuropedagogía", "TIC e Interculturalidad", "Lengua y Comunicación", "Cátedra Libertadora", "Gestión de la Información"],
        ["Modelos y Perspectivas", "Infancias: Primeros Años", "Desarrollo Cognitivo", "Inglés I", "Ética y Responsabilidad", "Electiva Formación Integral I"],
        ["Experiencias Significativas", "Pensamiento Lingüístico", "Inglés II", "Fundamentos de Matemáticas", "Electividad Disciplinar I"],
        ["Currículo y Gestión", "Escuela y Diversidad", "Didáctica General", "Inglés III", "Electividad Disciplinar II"],
        ["Evaluación", "Educación Inclusiva", "Inglés IV", "Emprender, Innovar", "Electividad Disciplinar III"],
        ["Epistemología de la Diferencia", "Praxis Enfoque Diferencial", "Didácticas Educación Especial", "Seminario Investigación I", "Estadística y Probabilidad"],
        ["Currículo para Diversidad", "Praxis Discapacidad Intelectual", "Enseñanza Discapacidad Intelectual", "Diseños Metodológicos", "Electiva Formación Integral II"],
        ["Transcurrir de Vida", "Praxis Discapacidad Sensorial", "Enseñanza Discapacidad Sensorial", "Seminario Investigación II", "Pensamiento Complejo"],
        ["Políticas y Tendencias", "Praxis Discapacidad Motora", "Diseño Universal Aprendizaje (DUA)", "Seminario Investigación III", "Teaching English"]
    ],
    "Educación Infantil - Virtual": [
        ["Cátedra Libertadora", "Gestión de la Información", "Maestro y Escenarios", "Neuroeducación", "TIC e Interculturalidad", "Historia de la Educación"],
        ["Ética y Responsabilidad", "Infancias: Primeros Años", "Desarrollo Cognitivo", "Modelos y Perspectivas", "Inglés I"],
        ["Experiencias Significativas", "Desarrollo Pensamiento Lingüístico", "Fundamentos de Matemáticas", "Inglés II"],
        ["Didáctica General", "Escuela y Diversidad", "Currículo y Gestión", "Inglés III", "Emprendimiento"],
        ["Evaluación", "Educación Inclusiva", "Estadística y Probabilidad", "Inglés IV"],
        ["Seminario Investigación I", "Metodología Cuantitativa", "Praxis Integral Primera Infancia", "Saber Didáctico: Expresión Lúdica"],
        ["Seminario Investigación II", "Metodología Cualitativa", "Praxis Pedagógica Aúlica", "Saber Didáctico: Expresión Artística"],
        ["Saber Didáctico: Pensamiento y Lenguaje", "Salud y Nutrición", "Praxis Escenarios Rurales", "Teaching English"]
    ],
    "Etnoeducación": [
        ["Orígenes de la Etnoeducación", "Cátedra Libertadora", "Competencias Comunicativas", "TIC e Interculturalidad"],
        ["Multiculturalidad e Interculturalidad", "Lenguas Nativas I", "Epistemología de la Pedagogía", "Inglés I"],
        ["Espacio y Territorio", "Planes de Vida", "Teorías del Aprendizaje", "Didáctica"],
        ["Proyecto Educativo Comunitario", "Etnografía", "Enfoques Curriculares", "Inglés II"],
        ["Cátedra Estudios Afrocolombianos", "Pedagogía Propia", "Evaluación", "Inglés III"],
        ["Enseñanza Lenguas Nativas II", "Etnociencia y Diálogo", "Legislación Educativa", "Investigación I"],
        ["Práctica de Inmersión I", "Etnomatemática", "Etnoliteratura", "Investigación II"],
        ["Práctica de Inmersión II", "Lenguas Nativas III", "Didácticas Etnoeducación", "Seminario Investigación III"]
    ]
};

function seleccionarCarrera(programa, vistaId = 'mapa-general') {
    programaSeleccionado = programa;
    const tag = `Licenciatura en ${programa}`;
    document.getElementById('tag-general').innerText = tag;
    document.getElementById('tag-cronologico').innerText = tag;
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
    window.scrollTo(0, 0);
}

function obtenerEtiquetaTiempo(index) {
    const esVirtual = programaSeleccionado.includes("Virtual") || programaSeleccionado === "Etnoeducación";
    return esVirtual ? `PERIODO ${index + 1}` : `SEMESTRE ${index + 1}`;
}

function generarMapaGeneral() {
    const contenedor = document.getElementById('contenedor-malla-filas');
    contenedor.innerHTML = ""; 

    const semestres = bdMaterias[programaSeleccionado];

    semestres.forEach((materiasDelSemestre, index) => {
        const fila = document.createElement('div');
        fila.className = 'fila-semestre';

        let materiasDiv = document.createElement('div');
        materiasDiv.className = 'materias-grid';

        materiasDelSemestre.forEach((nombreMateria) => {
            const divMateria = document.createElement('div');
            divMateria.className = 'materia-cell';
            divMateria.onclick = () => verDetalle(index + 1, nombreMateria);
            divMateria.innerText = nombreMateria;
            materiasDiv.appendChild(divMateria);
        });

        fila.innerHTML = `<div class="etiqueta-semestre">${obtenerEtiquetaTiempo(index)}</div>`;
        fila.appendChild(materiasDiv);
        contenedor.appendChild(fila);
    });
}

function generarMapaCronologico() {
    const contenedor = document.getElementById('estaciones-roadmap');
    contenedor.innerHTML = ""; 

    const semestres = bdMaterias[programaSeleccionado];

    semestres.forEach((materiasDelSemestre, index) => {
        const divEstacion = document.createElement('div');
        divEstacion.className = 'estacion-roadmap';

        let listaMateriasHtml = "";
        materiasDelSemestre.forEach((nombreMateria) => {
            listaMateriasHtml += `<div class="materia-roadmap" onclick="verDetalle(${index + 1}, '${nombreMateria}')">${nombreMateria}</div>`;
        });

        divEstacion.innerHTML = `
            <div class="punto-circulo">${index + 1}</div>
            <div class="caja-info">
                <h3>${obtenerEtiquetaTiempo(index)}</h3>
                <div class="lista-materias-roadmap">
                    ${listaMateriasHtml}
                </div>
            </div>
        `;
        contenedor.appendChild(divEstacion);
    });
}

function verDetalle(num, nombreMateria) {
    const etiqueta = obtenerEtiquetaTiempo(num - 1);
    document.getElementById('modal-materia-nombre').innerText = nombreMateria;
    document.getElementById('modal-tag-semestre').innerText = `${etiqueta} - ${programaSeleccionado}`;
    document.getElementById('modal-objetivo').innerText = "Propósito: Fortalecer las competencias disciplinares y el componente investigativo según el plan de estudios vigente.";
    document.getElementById('modal-requisitos').innerText = "Créditos según plan de estudios. Requiere cumplimiento de prerrequisitos de área.";

    document.getElementById('modal-overlay').classList.remove('oculto');
    document.getElementById('modal-detalle').classList.remove('oculto');
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.add('oculto');
    document.getElementById('modal-detalle').classList.add('oculto');
}
