let programaSeleccionado = "";

// Base de datos estructurada y limpia (Sin duplicados)
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
        ],
        [
            { n: "Inglés II", c: 3, t: "cat-transversal" },
            { n: "Experiencias Significativas", c: 4, t: "cat-basico" },
            { n: "Desarrollo Pensamiento Lingüístico", c: 3, t: "cat-basico" },
            { n: "Electiva Disciplinar I", c: 3, t: "cat-electivo" },
            { n: "Fundamentos de Matemáticas", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Desarrollo Biopsicológico", c: 2, t: "cat-basico" },
            { n: "Electividad Disciplinar II", c: 3, t: "cat-electivo" },
            { n: "Didáctica General", c: 2, t: "cat-basico" },
            { n: "Escuela y Diversidad", c: 5, t: "cat-basico" },
            { n: "Currículo y Gestión Educativa", c: 2, t: "cat-basico" },
            { n: "Inglés III", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Electividad Disciplinar III", c: 3, t: "cat-electivo" },
            { n: "Evaluación", c: 3, t: "cat-basico" },
            { n: "Educación Inclusiva", c: 5, t: "cat-basico" },
            { n: "Inglés IV", c: 3, t: "cat-transversal" },
            { n: "Emprender, Innovar", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Seminario Investigación I", c: 2, t: "cat-investigacion" },
            { n: "Estadística y Probabilidad", c: 3, t: "cat-transversal" },
            { n: "Pedagogía para DDHH", c: 3, t: "cat-basico" },
            { n: "Praxis Integral Primera Infancia", c: 7, t: "cat-practica" },
            { n: "Saber Didáctico: Expresión Lúdica", c: 2, t: "cat-disciplinar" }
        ],
        [
            { n: "Diseños Metodológicos", c: 2, t: "cat-investigacion" },
            { n: "Praxis Pedagógica Aúlica", c: 7, t: "cat-practica" },
            { n: "Saber Didáctico: Expresión Corporal", c: 2, t: "cat-disciplinar" },
            { n: "Seminario de Infancia", c: 3, t: "cat-investigacion" },
            { n: "Pensamiento Complejo", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Seminario Investigación II", c: 2, t: "cat-investigacion" },
            { n: "Salud y Nutrición", c: 2, t: "cat-transversal" },
            { n: "Saber Didáctico: Pensamiento y Lenguaje", c: 2, t: "cat-disciplinar" },
            { n: "Praxis Escenarios Familiares", c: 8, t: "cat-practica" },
            { n: "Electiva Formación Integral II", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Seminario Investigación III", c: 2, t: "cat-investigacion" },
            { n: "Teaching English", c: 2, t: "cat-transversal" },
            { n: "Proyecto Pedagógico Flexible", c: 2, t: "cat-practica" },
            { n: "Políticas y Tendencias", c: 2, t: "cat-basico" },
            { n: "Praxis Hospitalaria", c: 8, t: "cat-practica" }
        ]
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
        ],
        [
            { n: "Modelos y Perspectivas", c: 3, t: "cat-basico" },
            { n: "Infancias: Primeros Años", c: 3, t: "cat-basico" },
            { n: "Desarrollo Cognitivo", c: 2, t: "cat-basico" },
            { n: "Inglés I", c: 3, t: "cat-transversal" },
            { n: "Ética y Responsabilidad", c: 3, t: "cat-transversal" },
            { n: "Electiva Integral I", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Experiencias Significativas", c: 4, t: "cat-basico" },
            { n: "Pensamiento Lingüístico", c: 3, t: "cat-basico" },
            { n: "Inglés II", c: 3, t: "cat-transversal" },
            { n: "Fundamentos de Matemáticas", c: 3, t: "cat-transversal" },
            { n: "Electividad Disciplinar I", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Currículo y Gestión", c: 2, t: "cat-basico" },
            { n: "Escuela y Diversidad", c: 5, t: "cat-basico" },
            { n: "Desarrollo Biopsicológico", c: 2, t: "cat-basico" },
            { n: "Didáctica General", c: 2, t: "cat-basico" },
            { n: "Inglés III", c: 3, t: "cat-transversal" },
            { n: "Electividad Disciplinar II", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Evaluación", c: 3, t: "cat-basico" },
            { n: "Educación Inclusiva", c: 5, t: "cat-basico" },
            { n: "Inglés IV", c: 3, t: "cat-transversal" },
            { n: "Cultura del Emprendimiento", c: 3, t: "cat-transversal" },
            { n: "Electividad Disciplinar III", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Pedagogía para DDHH", c: 3, t: "cat-basico" },
            { n: "Praxis Integral", c: 7, t: "cat-practica" },
            { n: "Saber Didáctico: Lúdica", c: 3, t: "cat-disciplinar" },
            { n: "Seminario Investigación I", c: 3, t: "cat-investigacion" }
        ],
        [
            { n: "Seminario de Infancia", c: 3, t: "cat-investigacion" },
            { n: "Praxis Pedagógica Aúlica", c: 7, t: "cat-practica" },
            { n: "Saber Didáctico: Corporal", c: 2, t: "cat-disciplinar" },
            { n: "Diseños Metodológicos", c: 3, t: "cat-investigacion" },
            { n: "Teaching English", c: 2, t: "cat-transversal" }
        ],
        [
            { n: "Praxis Escenarios Familiares", c: 8, t: "cat-practica" },
            { n: "Salud y Nutrición", c: 3, t: "cat-transversal" },
            { n: "Saber Didáctico: Pensamiento", c: 3, t: "cat-disciplinar" },
            { n: "Seminario Investigación II", c: 3, t: "cat-investigacion" }
        ],
        [
            { n: "Políticas y Tendencias", c: 2, t: "cat-basico" },
            { n: "Praxis Hospitalaria", c: 8, t: "cat-practica" },
            { n: "Proyecto Flexible", c: 3, t: "cat-practica" },
            { n: "Seminario Investigación III", c: 3, t: "cat-investigacion" }
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
        ],
        [
            { n: "Modelos y Perspectivas", c: 2, t: "cat-basico" },
            { n: "Infancias: Primeros Años", c: 3, t: "cat-basico" },
            { n: "Desarrollo Cognitivo", c: 2, t: "cat-basico" },
            { n: "Com Básica Lengua Extranjera", c: 3, t: "cat-transversal" },
            { n: "Ética y Responsabilidad", c: 3, t: "cat-transversal" },
            { n: "Electiva Integral I", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Experiencias Significativas", c: 4, t: "cat-basico" },
            { n: "Pensamiento Lingüístico", c: 3, t: "cat-basico" },
            { n: "Expresión Lengua Extranjera", c: 3, t: "cat-transversal" },
            { n: "Fundamentos Matemáticas", c: 3, t: "cat-transversal" },
            { n: "Electividad Disciplinar I", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Currículo y Gestión Educativa", c: 2, t: "cat-basico" },
            { n: "Escuela y Diversidad", c: 5, t: "cat-basico" },
            { n: "Desarrollo Pens. Científico", c: 2, t: "cat-basico" },
            { n: "Didáctica General", c: 2, t: "cat-basico" },
            { n: "Com Intermedia Lengua Ext.", c: 3, t: "cat-transversal" },
            { n: "Electividad Disciplinar II", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Evaluación", c: 3, t: "cat-basico" },
            { n: "Educación Inclusiva", c: 5, t: "cat-basico" },
            { n: "Com Avanzada Lengua Ext.", c: 3, t: "cat-transversal" },
            { n: "Emprender, Innovar", c: 3, t: "cat-transversal" },
            { n: "Electividad Disciplinar III", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Epistemología Diferencia", c: 2, t: "cat-basico" },
            { n: "Praxis Enfoque Diferencial", c: 7, t: "cat-practica" },
            { n: "Didácticas Ed. Especial", c: 3, t: "cat-disciplinar" },
            { n: "Seminario Investigación I", c: 2, t: "cat-investigacion" },
            { n: "Estadística y Probabilidad", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Currículo Diversidad", c: 2, t: "cat-basico" },
            { n: "Praxis Discapacidad Intelectual", c: 7, t: "cat-practica" },
            { n: "Enseñanza Discap. Intelectual", c: 3, t: "cat-disciplinar" },
            { n: "Diseños Metodológicos", c: 2, t: "cat-investigacion" },
            { n: "Electiva Formación Integral II", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Transcurrir Vida y Contextos", c: 2, t: "cat-basico" },
            { n: "Praxis Discapacidad Sensorial", c: 8, t: "cat-practica" },
            { n: "Enseñanza Discap. Sensorial", c: 2, t: "cat-disciplinar" },
            { n: "Seminario Investigación II", c: 2, t: "cat-investigacion" },
            { n: "Pensamiento Complejo", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Políticas Educativas Derecho", c: 2, t: "cat-basico" },
            { n: "Praxis Discapacidad Motora", c: 8, t: "cat-practica" },
            { n: "Ambientes y DUA", c: 2, t: "cat-disciplinar" },
            { n: "Seminario Investigación III", c: 2, t: "cat-investigacion" },
            { n: "Teaching English", c: 2, t: "cat-transversal" }
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
        ],
        [
            { n: "Evaluación", c: 3, t: "cat-basico" },
            { n: "Infancias: Primeros Años", c: 5, t: "cat-basico" },
            { n: "Proc. Psicológicos: Lenguaje", c: 3, t: "cat-basico" },
            { n: "Saber Didáctico: Lúdica", c: 2, t: "cat-disciplinar" },
            { n: "Electiva Disciplinar III", c: 2, t: "cat-electivo" },
            { n: "Inglés II", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Praxis Familia y Escuela", c: 5, t: "cat-practica" },
            { n: "Perspectivas Educativas", c: 2, t: "cat-basico" },
            { n: "Proyecto Pedagógico Flexible", c: 2, t: "cat-practica" },
            { n: "Electiva Formación Integral", c: 3, t: "cat-electivo" },
            { n: "Inglés III", c: 3, t: "cat-transversal" },
            { n: "Cátedra Libertadora", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Seminario de Infancias", c: 3, t: "cat-investigacion" },
            { n: "Praxis Integral Primera Infancia", c: 7, t: "cat-practica" },
            { n: "Saber Didáctico: Pensamiento", c: 2, t: "cat-disciplinar" },
            { n: "Metodología Cuantitativa", c: 3, t: "cat-investigacion" },
            { n: "Emprendimiento", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Políticas en Ed. Infantil", c: 2, t: "cat-basico" },
            { n: "Pedagogía DDHH", c: 3, t: "cat-basico" },
            { n: "Praxis Pedagógica Aúlica", c: 7, t: "cat-practica" },
            { n: "Metodología Cualitativa", c: 3, t: "cat-investigacion" },
            { n: "Estadística y Probabilidad", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Infancias y Subjetividades", c: 3, t: "cat-basico" },
            { n: "Políticas y Lineamientos", c: 2, t: "cat-basico" },
            { n: "Praxis Escenarios Rurales", c: 8, t: "cat-practica" },
            { n: "Saber Didáctico: Artística", c: 2, t: "cat-disciplinar" },
            { n: "Seminario Investigación I", c: 3, t: "cat-investigacion" }
        ],
        [
            { n: "Pedagogía Crítica y Social", c: 3, t: "cat-basico" },
            { n: "Praxis Hospitalaria", c: 8, t: "cat-practica" },
            { n: "Salud y Nutrición", c: 2, t: "cat-transversal" },
            { n: "Teaching English", c: 2, t: "cat-transversal" },
            { n: "Seminario Investigación II", c: 3, t: "cat-investigacion" }
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
        ],
        [
            { n: "Español II", c: 3, t: "cat-transversal" },
            { n: "Maestros y Escenarios", c: 5, t: "cat-practica" },
            { n: "Lenguas Nativas I", c: 3, t: "cat-disciplinar" },
            { n: "Inglés II", c: 3, t: "cat-transversal" },
            { n: "Electiva I", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Didáctica General", c: 2, t: "cat-basico" },
            { n: "Español III", c: 3, t: "cat-transversal" },
            { n: "Práctica Inmersión I", c: 5, t: "cat-practica" },
            { n: "Multiculturalidad", c: 3, t: "cat-disciplinar" },
            { n: "Lenguas Nativas II", c: 3, t: "cat-disciplinar" },
            { n: "Inglés III", c: 3, t: "cat-transversal" }
        ],
        [
            { n: "Evaluación", c: 3, t: "cat-basico" },
            { n: "Currículo y Gestión", c: 2, t: "cat-basico" },
            { n: "Práctica Inmersión II", c: 6, t: "cat-practica" },
            { n: "Lenguas Nativas III", c: 3, t: "cat-disciplinar" },
            { n: "Didácticas Etnoeducación", c: 3, t: "cat-disciplinar" }
        ],
        [
            { n: "Práctica Pedagógica I", c: 8, t: "cat-practica" },
            { n: "Escuela Etnoeducativa", c: 3, t: "cat-disciplinar" },
            { n: "Etnomatemática", c: 3, t: "cat-disciplinar" },
            { n: "Seminario Investigación I", c: 2, t: "cat-investigacion" },
            { n: "Electiva II", c: 3, t: "cat-electivo" }
        ],
        [
            { n: "Práctica Pedagógica II", c: 8, t: "cat-practica" },
            { n: "Legislación Educativa", c: 3, t: "cat-disciplinar" },
            { n: "Etnociencia", c: 3, t: "cat-disciplinar" },
            { n: "Seminario Investigación II", c: 3, t: "cat-investigacion" }
        ],
        [
            { n: "Práctica Pedagógica III", c: 8, t: "cat-practica" },
            { n: "Identidad y Memoria", c: 3, t: "cat-disciplinar" },
            { n: "Etnoliteratura", c: 3, t: "cat-disciplinar" },
            { n: "Seminario Investigación III", c: 4, t: "cat-investigacion" }
        ]
    ]
};

// Objeto para generar objetivos automáticos según la categoría
const objetivosPorCategoria = {
    "cat-basico": "Proporcionar los fundamentos teóricos, históricos y pedagógicos esenciales para el desarrollo del perfil docente.",
    "cat-practica": "Desarrollar habilidades en escenarios reales para aplicar el conocimiento y reflexionar sobre la acción educativa.",
    "cat-disciplinar": "Profundizar en los saberes específicos, didácticas y metodologías propias de la licenciatura.",
    "cat-investigacion": "Fomentar el pensamiento crítico, análisis de datos y la estructuración de proyectos para resolver problemas educativos.",
    "cat-transversal": "Fortalecer competencias generales como segunda lengua, emprendimiento, valores institucionales y comunicación.",
    "cat-electivo": "Permitir la flexibilidad del currículo para que el estudiante profundice en áreas de su interés personal y profesional."
};

function getEtiquetaTiempo(indice) {
    if (programaSeleccionado.includes("Virtual")) {
        return `SEMESTRE ${indice + 1}`;
    }
    return `SEMESTRE ${indice + 1}`;
}

// ---------------------------------------------------------
// FUNCIÓN CENTRAL PARA SELECCIÓN DESDE LOS DESPLEGABLES
// ---------------------------------------------------------
function seleccionarCarrera(programa, vistaId) {
    programaSeleccionado = programa;

    // Actualizamos los subtítulos de los Mapas
    const tagGeneral = document.getElementById('tag-general');
    if(tagGeneral) tagGeneral.innerText = `${programa}`;

    const tagCronologico = document.getElementById('tag-cronologico');
    if(tagCronologico) tagCronologico.innerText = `${programa}`;

    // Actualizamos los subtítulos del Reglamento y la Práctica para que sean específicos de la carrera
    const subReglamento = document.getElementById('subtitulo-reglamento');
    if(subReglamento) subReglamento.innerText = `Programa: ${programa}`;

    const subPractica = document.getElementById('subtitulo-practica');
    if(subPractica) subPractica.innerText = `Programa: ${programa}`;

    // Finalmente ejecutamos el cambio de sección normal
    cambiarSeccion(vistaId); 
}

// ---------------------------------------------------------
// LA MAGIA DE LA NAVEGACIÓN
// ---------------------------------------------------------
const TODAS_LAS_SECCIONES = [
    'pantalla-bienvenida',
    'pantalla-reglamento',
    'pantalla-practica',
    'seleccion-programa',
    'mapa-general',
    'mapa-cronologico'
];

function cambiarSeccion(seccionId) {
    // 1. Apagar TODO de forma segura y automática
    TODAS_LAS_SECCIONES.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.classList.remove('pantalla-activa');
            elemento.classList.add('pantalla-oculta');
        }
    });

    // 2. Encender SOLO la pantalla que queremos ver
    const destino = document.getElementById(seccionId);
    if (destino) {
        destino.classList.remove('pantalla-oculta');
        destino.classList.add('pantalla-activa');
    }

    // 3. Quitar estado activo de todos los botones del menú superior
    const menus = document.querySelectorAll('.nav-institucional .nav-btn');
    menus.forEach(menu => menu.classList.remove('activo'));

    // 4. Encender el botón del menú superior que corresponde según la vista
    if(seccionId === 'pantalla-bienvenida' || seccionId === 'seleccion-programa') {
        const btn = document.getElementById('btn-inicio');
        if(btn) btn.classList.add('activo');
    } else if(seccionId === 'pantalla-reglamento') {
        const btn = document.getElementById('btn-reglamento');
        if(btn) btn.classList.add('activo');
    } else if(seccionId === 'pantalla-practica') {
        const btn = document.getElementById('btn-practica');
        if(btn) btn.classList.add('activo');
    }

    // 5. Cargar los mapas si el usuario entró a uno de ellos
    if(seccionId === 'mapa-general') { 
        generarMapaGeneral(); 
    }
    if(seccionId === 'mapa-cronologico') { 
        generarMapaCronologico(); 
    }

    // Devolver al usuario arriba de la página
    window.scrollTo(0, 0);
}
// ---------------------------------------------------------

function generarMapaGeneral() {
    const contenedor = document.getElementById('contenedor-malla-filas');
    contenedor.innerHTML = ""; 
    const semestres = bdMaterias[programaSeleccionado];

    if(!semestres) return;

    semestres.forEach((materiasDelSemestre, indexSemestre) => {
        const fila = document.createElement('div');
        fila.className = 'fila-semestre';

        let materiasDiv = document.createElement('div');
        materiasDiv.className = 'materias-grid';

        materiasDelSemestre.forEach((mat, indexMateria) => {
            const divMateria = document.createElement('div');
            divMateria.className = `materia-cell ${mat.t}`; 

            // Pasamos los índices para buscar la materia en la base de datos de forma segura
            divMateria.onclick = () => verDetalle(indexSemestre, indexMateria);

            divMateria.innerHTML = `
                ${mat.n}
                <span class="badge-creditos">${mat.c} Cr.</span>
            `;
            materiasDiv.appendChild(divMateria);
        });

        fila.innerHTML = `<div class="etiqueta-semestre">${getEtiquetaTiempo(indexSemestre)}</div>`;
        fila.appendChild(materiasDiv);
        contenedor.appendChild(fila);
    });
}

function generarMapaCronologico() {
    const contenedor = document.getElementById('estaciones-roadmap');
    contenedor.innerHTML = ""; 
    const semestres = bdMaterias[programaSeleccionado];

    if(!semestres) return;

    semestres.forEach((materiasDelSemestre, indexSemestre) => {
        const divEstacion = document.createElement('div');
        divEstacion.className = 'estacion-roadmap';

        let listaMateriasHtml = "";
        materiasDelSemestre.forEach((mat, indexMateria) => {
            listaMateriasHtml += `
            <div class="materia-roadmap ${mat.t}" onclick="verDetalle(${indexSemestre}, ${indexMateria})">
                <span>${mat.n}</span>
                <span class="badge-creditos" style="position:static;">${mat.c} Cr.</span>
            </div>`;
        });

        divEstacion.innerHTML = `
            <div class="punto-circulo">${indexSemestre + 1}</div>
            <div class="caja-info">
                <h3>${getEtiquetaTiempo(indexSemestre)}</h3>
                <div class="lista-materias-roadmap">
                    ${listaMateriasHtml}
                </div>
            </div>
        `;
        contenedor.appendChild(divEstacion);
    });
}

// Función encargada de llenar el modal con la info correcta
function verDetalle(indexSemestre, indexMateria) {
    const mat = bdMaterias[programaSeleccionado][indexSemestre][indexMateria];

    // Nombres y Créditos
    document.getElementById('det-nombre').innerText = mat.n;
    document.getElementById('det-creditos').innerText = mat.c;
    document.getElementById('modal-tag-semestre').innerText = `${getEtiquetaTiempo(indexSemestre)} - ${programaSeleccionado}`;

    // Categoría visual
    let nombreCategoria = "General";
    if(mat.t === "cat-basico") nombreCategoria = "Básico / Pedagogía";
    if(mat.t === "cat-practica") nombreCategoria = "Práctica Pedagógica";
    if(mat.t === "cat-disciplinar") nombreCategoria = "Disciplinar / Didáctica";
    if(mat.t === "cat-transversal") nombreCategoria = "Transversal / Generales";
    if(mat.t === "cat-investigacion") nombreCategoria = "Investigación";
    if(mat.t === "cat-electivo") nombreCategoria = "Electividad";

    document.getElementById('det-categoria').innerText = nombreCategoria;

    // Asignar objetivo automático basado en su categoría
    document.getElementById('det-objetivo').innerText = objetivosPorCategoria[mat.t] || "Desarrollar competencias integrales según el plan de estudios.";

    // Requisitos lógicos
    let requisitoTexto = "Ninguno";
    if (indexSemestre > 0) {
        requisitoTexto = "Aprobación de créditos del periodo anterior según lineamientos de la facultad.";
    }
    if (mat.n.includes("Inglés") || mat.n.includes("Español") || mat.n.includes("Investigación") || mat.n.includes("Práctica")) {
        const num = mat.n.split(" ").pop();
        if(num === "II" || num === "III" || num === "IV") {
            requisitoTexto = "Aprobación del nivel anterior de esta misma asignatura.";
        }
    }
    document.getElementById('det-requisitos').innerText = requisitoTexto;

    // Mostrar el modal
    document.getElementById('modal-overlay').classList.remove('oculto');
    document.getElementById('modal-detalle').classList.remove('oculto');
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.add('oculto');
    document.getElementById('modal-detalle').classList.add('oculto');
}

window.onload = function() {
    cerrarModal();
};
