let programaSeleccionado = "";

// ==========================================
// 1. BASES DE DATOS
// ==========================================

// Base de datos de materias
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

// Base de Datos de Reglamento
const bdReglamento = {
    "alcance": {
        t: "Alcance",
        d: "El Reglamento Estudiantil rige para todos los estudiantes de la Institución desde su inscripción (presencial, distancia y virtual) y en todos los niveles de formación, así como para los egresados.",
        req: "Aplica a: Aspirantes, Estudiantes Activos y Egresados."
    },
    "criterios": {
        t: "Criterios Orientadores",
        d: "Se fundamenta en la integralidad, la participación, la garantía de derechos y el cumplimiento de las normas. Busca fortalecer el sentido de pertenencia y el compromiso como ciudadanos.",
        req: "Base: Valores institucionales de responsabilidad y honradez."
    },
    "admision": {
        t: "Admisión",
        d: "Es el proceso mediante el cual la Institución evalúa si un inscrito reúne las condiciones para ser admitido y autoriza su matrícula.",
        req: "Notificación: A través del correo electrónico."
    },
    "aplazamiento": {
        t: "Aplazamiento de Matrícula",
        d: "Acto mediante el cual el estudiante solicita autorización para suspender su proceso formativo en el período lectivo en el cual se matriculó.",
        req: "Trámite: Solicitud formal ante la dependencia encargada."
    },
    "calendario": {
        t: "Calendario Académico",
        d: "Organización y programación de las actividades académicas, administrativas y de apoyo aprobadas por el Consejo Superior.",
        req: "Aplica a: Toda la comunidad educativa."
    },
    "cancelacion": {
        t: "Cancelación de Matrícula",
        d: "Acto de retirar todos los espacios académicos matriculados en un período. Procede durante el período vigente y hasta el último día de clases.",
        req: "Límite: Hasta el último día de clase del calendario."
    },
    "evaluacion": {
        t: "Evaluación del Aprendizaje",
        d: "Proceso permanente para estimular la formación integral mediante la apreciación de competencias adquiridas. Se califica de 0.0 a 5.0 (Aprobación mínima 3.0).",
        req: "Cortes: 30% primer parcial, 30% segundo parcial, 40% final."
    },
    "homologacion": {
        t: "Homologación",
        d: "Proceso donde las facultades reconocen cursos aprobados en otras IES reconocidas por el MEN o extranjeras, o internamente. Límite máximo: 60% de los créditos.",
        req: "Nota Mínima para Homologar: 3.0 sobre 5.0."
    },
    "opcion-grado": {
        t: "Opción de Grado",
        d: "Requisito para aplicar competencias en la solución de problemas. Tipos: Proyecto, Cursos Coterminales, Pasantía, Seminario o Creación de Empresa.",
        req: "Calificación: Aprobado (3.5 a 5.0) o Reprobado (0.0 a 3.4)."
    },
    "pygo": {
        t: "Programa PyGO",
        d: "Programa de Permanencia y Graduación Oportuna, liderado por Bienestar Universitario para apoyar a estudiantes en su logro académico y mitigar factores de riesgo.",
        req: "Aplica: Especialmente si el promedio semestral baja de 3.5."
    },
    "transferencias": {
        t: "Transferencias",
        d: "Puede ser Externa (de otra IES) o Interna (cambio de programa dentro de Los Libertadores). Se requiere análisis de contenidos y disponibilidad de cupo.",
        req: "Tiempo de Respuesta: 8 días hábiles (Interna) / 10 días (Externa)."
    },
    "derechos": {
        t: "Derechos y Deberes",
        d: "Derecho a recibir formación integral, expresar ideas y trato digno. Deber de acatar reglamentos, respetar a la comunidad y cuidar la infraestructura.",
        req: "Documento: Presentar el Carné Estudiantil siempre."
    },
    "disciplinario": {
        t: "Régimen Disciplinario",
        d: "Busca formar egresados respetuosos. Las faltas se clasifican en Leves, Graves y Muy Graves. Sanciones: Amonestación, Matrícula Condicional, Suspensión o Cancelación.",
        req: "Garantías: Debido proceso, defensa y recursos de apelación."
    }
};

// Base de Datos de Prácticas
const bdPracticas = {
    "lineamientos": {
        t: "Lineamientos y Requisitos",
        d: "Las prácticas son un espacio de intervención profesional obligatoria. No generan relación laboral (salvo contrato de aprendizaje). Deben tener aval del Director de Departamento.",
        req: "Requisito: Afiliación obligatoria a ARL."
    },
    "modalidades": {
        t: "Modalidades de Práctica",
        d: "Opciones: Empresarial, Social, Investigativa, Intra-laboral (proyecto de mejora donde ya trabaja), Internacional, Emprendimiento o Interna.",
        req: "Duración y Créditos: Según plan de estudios vigente."
    },
    "formatos": {
        t: "Formatos de Informe",
        d: "Se requiere la firma de un convenio o alianza (Convenio Marco, Específico). El estudiante debe entregar informes de seguimiento establecidos por su Facultad.",
        req: "Supervisión: Un tutor académico y un supervisor en la empresa."
    },
    "evaluacion": {
        t: "Evaluación y Seguimiento",
        d: "La práctica es un espacio académico que requiere calificación. El centro de práctica debe certificar las horas, lo cual apoyará la hoja de vida del estudiante.",
        req: "Aprobación: Según normas de evaluación (Mínimo 3.0)."
    }
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


// ==========================================
// 2. UTILIDADES
// ==========================================

function getEtiquetaTiempo(indice) {
    if (programaSeleccionado.includes("Virtual")) {
        return `SEMESTRE ${indice + 1}`;
    }
    return `SEMESTRE ${indice + 1}`;
}


// ==========================================
// 3. NAVEGACIÓN Y SELECCIÓN
// ==========================================

function seleccionarCarrera(programa, vistaId) {
    programaSeleccionado = programa;

    const tagGeneral = document.getElementById('tag-general');
    if(tagGeneral) tagGeneral.innerText = `${programa}`;

    const tagCronologico = document.getElementById('tag-cronologico');
    if(tagCronologico) tagCronologico.innerText = `${programa}`;

    const subReglamento = document.getElementById('subtitulo-reglamento');
    if(subReglamento) subReglamento.innerText = `Programa: ${programa}`;

    const subPractica = document.getElementById('subtitulo-practica');
    if(subPractica) subPractica.innerText = `Programa: ${programa}`;

    cambiarSeccion(vistaId); 
}

const TODAS_LAS_SECCIONES = [
    'pantalla-bienvenida',
    'pantalla-reglamento',
    'pantalla-practica',
    'seleccion-programa',
    'mapa-general',
    'mapa-cronologico'
];

function cambiarSeccion(seccionId) {
    // Apagar TODO
    TODAS_LAS_SECCIONES.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.classList.remove('pantalla-activa');
            elemento.classList.add('pantalla-oculta');
        }
    });

    // Encender SOLO la destino
    const destino = document.getElementById(seccionId);
    if (destino) {
        destino.classList.remove('pantalla-oculta');
        destino.classList.add('pantalla-activa');
    }

    // Limpiar botones menú
    const menus = document.querySelectorAll('.nav-institucional .nav-btn');
    menus.forEach(menu => menu.classList.remove('activo'));

    // Activar botón superior correcto
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

    // Cargar mapas si es necesario
    if(seccionId === 'mapa-general') generarMapaGeneral(); 
    if(seccionId === 'mapa-cronologico') generarMapaCronologico(); 

    window.scrollTo(0, 0);
}


// ==========================================
// 4. GENERACIÓN DE MAPAS
// ==========================================

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
            divMateria.onclick = () => verDetalleMateria(indexSemestre, indexMateria);
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
            <div class="materia-roadmap ${mat.t}" onclick="verDetalleMateria(${indexSemestre}, ${indexMateria})">
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


// ==========================================
// 5. GESTIÓN DE MODALES
// ==========================================

// Detalle para Materias
function verDetalleMateria(indexSemestre, indexMateria) {
    const mat = bdMaterias[programaSeleccionado][indexSemestre][indexMateria];

    document.getElementById('det-nombre').innerText = mat.n;
    document.getElementById('det-creditos').innerText = mat.c;
    document.getElementById('modal-tag-semestre').innerText = `${getEtiquetaTiempo(indexSemestre)} - ${programaSeleccionado}`;

    let nombreCategoria = "General";
    if(mat.t === "cat-basico") nombreCategoria = "Básico / Pedagogía";
    if(mat.t === "cat-practica") nombreCategoria = "Práctica Pedagógica";
    if(mat.t === "cat-disciplinar") nombreCategoria = "Disciplinar / Didáctica";
    if(mat.t === "cat-transversal") nombreCategoria = "Transversal / Generales";
    if(mat.t === "cat-investigacion") nombreCategoria = "Investigación";
    if(mat.t === "cat-electivo") nombreCategoria = "Electividad";

    document.getElementById('det-categoria').innerText = nombreCategoria;
    document.getElementById('det-categoria').style.display = "inline-block";

    document.getElementById('det-objetivo').innerText = objetivosPorCategoria[mat.t] || "Desarrollar competencias integrales según el plan de estudios.";

    let requisitoTexto = "Ninguno";
    if (indexSemestre > 0) requisitoTexto = "Aprobación de créditos del periodo anterior según lineamientos.";
    if (mat.n.includes("Inglés") || mat.n.includes("Español") || mat.n.includes("Investigación") || mat.n.includes("Práctica")) {
        const num = mat.n.split(" ").pop();
        if(["II", "III", "IV"].includes(num)) requisitoTexto = "Aprobación del nivel anterior de esta misma asignatura.";
    }

    document.getElementById('lbl-requisitos').innerText = "Requisitos:";
    document.getElementById('det-requisitos').innerText = requisitoTexto;

    document.getElementById('lbl-creditos').style.display = "block";
    document.getElementById('det-creditos').style.display = "block";

    abrirModal();
}

// Detalle para Reglamento
function mostrarDetalleReglamento(clave) {
    const info = bdReglamento[clave];
    if(!info) return;

    document.getElementById('det-nombre').innerText = info.t;
    document.getElementById('modal-tag-semestre').innerText = "Reglamento Estudiantil";
    document.getElementById('det-categoria').style.display = "none"; // Ocultar tag de categoría

    document.getElementById('det-objetivo').innerText = info.d;

    document.getElementById('lbl-requisitos').innerText = "Consideraciones:";
    document.getElementById('det-requisitos').innerText = info.req;

    // Ocultar la caja de créditos porque no aplica
    document.getElementById('lbl-creditos').style.display = "none";
    document.getElementById('det-creditos').style.display = "none";

    abrirModal();
}

// Detalle para Prácticas
function mostrarDetallePractica(clave) {
    const info = bdPracticas[clave];
    if(!info) return;

    document.getElementById('det-nombre').innerText = info.t;
    document.getElementById('modal-tag-semestre').innerText = "Práctica Pedagógica";
    document.getElementById('det-categoria').style.display = "none";

    document.getElementById('det-objetivo').innerText = info.d;

    document.getElementById('lbl-requisitos').innerText = "Notas Importantes:";
    document.getElementById('det-requisitos').innerText = info.req;

    // Ocultar caja de créditos
    document.getElementById('lbl-creditos').style.display = "none";
    document.getElementById('det-creditos').style.display = "none";

    abrirModal();
}

// Funciones Generales del Modal
function abrirModal() {
    document.getElementById('modal-overlay').classList.remove('oculto');
    document.getElementById('modal-detalle').classList.remove('oculto');
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.add('oculto');
    document.getElementById('modal-detalle').classList.add('oculto');
}

window.onload = function() {
    cerrarModal();
    const overlay = document.getElementById('modal-overlay');
    if(overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) cerrarModal();
        });
    }
};
