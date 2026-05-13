window.programaSeleccionado = window.programaSeleccionado || "";

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

const bdResultadosAprendizaje = {
    "Educación Infantil Cartagena": {
        "Historia de la Educación": [
            "Identificar los diferentes hitos históricos en los que se fundamenta la educación y la pedagogía, con el propósito de situar el acto educativo a partir de las transformaciones que se han suscitado en el contexto educativo.",
            "Construir durante su proceso formativo su identidad como educador infantil en el marco de la ética y la responsabilidad con el desarrollo integral de las infancias.",
            "Diseñar propuestas de aplicación de conocimientos pedagógicos, teniendo en cuenta las características particularidades de las infancias y la diversidad de contextos."
        ],
        "Maestro y Escenarios": [
            "Conocer las características y funciones del rol docente, a través de la conceptualización producto de articulación de teorías y la reflexión e identificación de acciones que resaltan su práctica desde un enfoque pedagógico.",
            "Comprender las características y dinámicas de los contextos, escenarios y ambientes de aprendizaje, susceptibles de ser transformados en espacios pedagógicos.",
            "Diseñar propuestas de intervención pedagógica a partir del análisis de las características y dinámicas de los contextos."
        ],
        "Neuropedagogía": [
            "Conocer estudios sobre neurociencia cognitiva en el fortalecimiento de los procesos de aprendizaje.",
            "Identificar las estructuras anatómicas básicas implicadas en el aprendizaje y la memoria.",
            "Explicar el papel del aprendizaje, la emoción y la motivación y sus implicaciones para el comportamiento humano."
        ],
        "TIC e Interculturidad": [
            "Explicar diversas problemáticas y fenómenos de la educación, la ciudadanía y la convivencia mediante el uso de herramientas digitales.",
            "Analizar las necesidades educativas relacionadas con lo sociocultural y articularlas con la práctica pedagógica mediante ambientes virtuales de aprendizaje.",
            "Presentar alternativas pedagógicas y tecnológicas enmarcadas en políticas educativas y sociales."
        ],
        "Lengua y Comunicación": [
            "Identificar situaciones comunicativas y responder a ellas de acuerdo con las condiciones culturales.",
            "Reconocer los elementos fundamentales del proceso de redacción: adecuación, coherencia y cohesión del mensaje.",
            "Interpretar las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en que se generó."
        ],
        "Cátedra Libertadora": [
            "Identificar los conflictos históricos en Colombia, comprendiendo causas, actores involucrados y consecuencias, promoviendo el diálogo y la construcción de paz.",
            "Comprender los derechos y deberes ciudadanos en la historia de Colombia y cómo han evolucionado e influido en la construcción de una sociedad justa y democrática.",
            "Analizar críticamente los procesos históricos, políticos, sociales y culturales que han configurado la Colombia contemporánea."
        ],
        "Medios y Mediaciones": [
            "Identificar y diferenciar la información y las fuentes de información científica.",
            "Conocer recursos y herramientas digitales que respondan a la gestión y difusión del conocimiento pedagógico.",
            "Estructurar información válida desde un lenguaje y discurso propios de su saber, para una expresión clara y objetiva."
        ],
        "Modelos y Perspectivas": [
            "Reconocer los fundamentos constitutivos de los modelos y tendencias que orientan la acción educativa en el campo de la Pedagogía.",
            "Reflexionar epistemológica y axiológicamente en torno a los modelos y perspectivas pedagógicas y su pertinencia en diversos escenarios.",
            "Apropiar el estudio de diferentes corrientes, paradigmas, teorías y modelos en educación que han marcado los procesos de enseñanza y aprendizaje."
        ],
        "Infancias: Primeros Años": [
            "Identificar en algunos postulados teóricos las características, principios y fines de los mismos, comprendiendo su sentido en la formación profesional.",
            "Contrastar características, estrategias y alternativas pedagógicas para una mayor comprensión de las diversas realidades de las infancias.",
            "Diseñar una propuesta de intervención pedagógica frente a diversas problemáticas donde se evidencien elementos teóricos y metodológicos."
        ],
        "Desarrollo Cognitivo": [
            "Reconocer las diferentes teorías de la psicología que abordan el campo del desarrollo humano.",
            "Aplicar procesos sistemáticos y metodológicos orientados para abordar problemas de carácter disciplinar e interdisciplinar.",
            "Valorar los resultados de evaluación de diversos procesos de formación a fin de lograr la integración ética y profesional."
        ],
        "Inglés I": [
            "Expresarse con frases sencillas y palabras aisladas relativas a sí mismo, personas, lugares y actividades.",
            "Escribir frases sencillas y párrafos cortos sobre sí mismo, personas, lugares y actividades.",
            "Comprender discursos muy lentos, articulados con cuidado, con pronunciación estándar y clara."
        ],
        "Ética y Responsabilidad": [
            "Explicar los desafíos que plantea el siglo XXI a la formación ciudadana.",
            "Asumir una postura crítica con relación a la praxis y el sentido social de la educación.",
            "Exponer ideas de manera coherente, oral y escrita, luego de analizar diferentes contextos sociales, económicos y políticos."
        ],
        "Electiva Integral I": [
            "Identificar los diferentes enfoques de derechos humanos y diversidad para ponerlos al servicio de la infancia.",
            "Relacionar los diversos lenguajes artísticos como estrategias pedagógicas y didácticas en la formación de las infancias.",
            "Diseñar programas con diversos lenguajes artísticos para población en contextos multivariados."
        ],
        "Experiencias Significativas": [
            "Comprender el concepto de socialización escolar y multiculturalidad, reconociéndolos en investigaciones educativas.",
            "Establecer relaciones entre la socialización escolar, la diversidad y el saber pedagógico en la transformación de prácticas en el aula.",
            "Conocer el contexto de la investigación en pedagogía, aplicando técnicas e instrumentos orientados a la sistematización de la práctica."
        ],
        "Pensamiento Lingüístico": [
            "Reconocer las diferentes teorías en la psicología que abordan el campo del desarrollo humano.",
            "Aplicar procesos sistemáticos orientados para abordar problemas de carácter disciplinar e interdisciplinar.",
            "Confrontar los resultados de actividades de evaluación a fin de lograr la integración ética y profesional."
        ],
        "Inglés II": [
            "Expresarse con frases y oraciones sencillas relativas a personas, lugares, actividades y situaciones.",
            "Escribir frases y oraciones sencillas en situaciones del presente, pasado y planes futuros.",
            "Comprender discursos lentos articulados con cuidado, con pausas para asimilar el significado."
        ],
        "Fundamentos de Matemáticas": [
            "Reconocer los conceptos básicos del lenguaje de la matemática, interiorizando conceptos y sus propiedades.",
            "Desarrollar estrategias matemáticas para la solución de problemas básicos que requieran pensamiento lógico-matemático.",
            "Reconocer la importancia de la inclusión de variables, su tipo de representación para la solución de problemas."
        ],
        "Electividad Disciplinar I": [
            "Identificar postulados teóricos en torno al desarrollo del pensamiento lógico matemático.",
            "Contrastar las características del DUA y ABP con otros ambientes de aprendizaje y el uso del material didáctico.",
            "Diseñar una propuesta desde el DUA y/o ABP donde se evidencien conocimientos propios del desarrollo lógico matemático para población diversa."
        ],
        "Currículo y Gestión": [
            "Identificar el proceso de la administración y gestión educativa en aspectos relacionados con dirección, liderazgo, planeación y organización.",
            "Interpretar los postulados de la teoría curricular que fundamenta los diseños curriculares, teniendo en cuenta la diversidad de las infancias.",
            "Adaptar un Proyecto Educativo Institucional (PEI) aplicando políticas y teorías vigentes que responda a las exigencias actuales de las comunidades."
        ],
        "Escuela y Diversidad": [
            "Seleccionar postulados teóricos sobre familia, escuela y diversidad con el propósito de apropiarloas y contrastarlos con la realidad actual.",
            "Valorar diversas estrategias pedagógicas y didácticas que respondan a las necesidades e intereses de los sujetos en contextos multivariados.",
            "Diseñar una propuesta de intervención pedagógica que responda a las problemáticas, necesidades e intereses de la comunidad educativa."
        ],
        "Desarrollo Biopsicológico": [
            "Integrar conocimientos de neurociencia, genética del comportamiento y teorías psicológicas para comprender el desarrollo cognitivo, emocional y social del niño.",
            "Evaluar el impacto de factores culturales y socioeconómicos en el desarrollo del niño mediante metodologías de investigación cualitativa y cuantitativa.",
            "Analizar críticamente los desafíos contemporáneos que afectan el desarrollo infantil, incluido el impacto de la tecnología y los cambios sociales."
        ],
        "Didáctica General": [
            "Argumentar los principios y fundamentos conceptuales de la didáctica como campo de saber en el escenario educativo.",
            "Describir el recorrido histórico de la Didáctica a la luz de las concepciones de la educación infantil y educación especial.",
            "Presentar alternativas didácticas en diferentes contextos educativos."
        ],
        "Inglés III": [
            "Expresarse con una lista de frases y oraciones sencillas relativas a personas, lugares, actividades y situaciones.",
            "Escribir párrafos con oraciones de relativa sencillez respecto de personas, lugares y actividades en diferentes épocas.",
            "Participar en conversaciones con razonable comodidad en situaciones estructuradas y en conversaciones breves."
        ],
        "Electividad Disciplinar II": [
            "Identificar los aspectos relevantes de la Educación Rural en Colombia, su trayectoria histórica y situación actual.",
            "Analizar conceptos, estrategias y programas globales específicos dirigidos a la población rural.",
            "Gestionar proyectos y propuestas alrededor de problemas pedagógicos en torno a la educación rural."
        ],
        "Evaluación": [
            "Reconocer fundamentos teóricos y conceptuales y las funciones de la evaluación educativa a partir de los diferentes enfoques pedagógicos.",
            "Interpretar la evaluación alternativa en relación con las estrategias, técnicas e instrumentos de evaluación.",
            "Presentar alternativas de evaluación y retroalimentación permanente como parte de la cualificación de los procesos de enseñanza y aprendizaje."
        ],
        "Educación Inclusiva": [
            "Conocer y comprender los diferentes procesos que se movilizan en la educación inclusiva dentro del sistema educativo colombiano.",
            "Desarrollar e implementar estrategias pedagógicas didácticas partiendo de las necesidades específicas y estilos de aprendizaje.",
            "Comprender las características comunicativas y de aprendizaje de los escolares en procesos de inclusión de primaria."
        ],
        "Inglés IV": [
            "Hacer preguntas e intercambiar ideas e información sobre temas familiares en situaciones predecibles.",
            "Expresar su forma de pensar en un sentido abstracto sobre aspectos culturales como libros, cine y música.",
            "Describir actividades del pasado y experiencias personales con mayor fluidez comunicativa."
        ],
        "Cultura del Emprendimiento": [
            "Definir un modelo de negocio con componentes creativos e innovadores.",
            "Prototipar y validar un proyecto emprendedor aplicando la metodología del design thinking.",
            "Validar el prototipo de modelo de negocio desde el punto de vista político, económico, social, ambiental y de mercado."
        ],
        "Electividad Disciplinar III": [
            "Identificar las características de aprendizaje y formular propuestas educativas a la luz del DUA para implementar ajustes razonables.",
            "Analizar las estrategias de formación pedagógica para facilitar la igualdad de oportunidades en el marco de la educación inclusiva.",
            "Promover desde su acción pedagógica el respeto por la diversidad y la apertura hacia la inclusión, desde el enfoque de derechos."
        ],
        "Pedagogía para DDHH": [
            "Analizar posturas teóricas desde la pedagogía y la educación que contribuyan a educar desde las diferencias y el reconocimiento de las infancias como sujetos de derechos.",
            "Argumentar de manera crítica diversas problemáticas relacionadas con la vulneración de derechos en las infancias.",
            "Presentar alternativas de atención en educación a la primera infancia en desarrollo de las políticas públicas."
        ],
        "Praxis Integral": [
            "Analizar el sentido de la formación del educador infantil en torno a la pedagogía, la didáctica y la planeación de su práctica educativa.",
            "Organizar ambientes de aprendizaje desde los pilares de la educación en el marco de los derechos y el enfoque diferencial.",
            "Asumir una postura crítica para el diseño de propuesta de intervención pedagógica que contribuya al desarrollo integral de las infancias."
        ],
        "Saber Didáctico: Lúdica": [
            "Identificar las características particulares de los postulados teóricos tanto del juego como del desarrollo y aprendizaje de las diversas infancias.",
            "Asumir la lúdica como una estrategia didáctica para potenciar el desarrollo humano de los niños y niñas.",
            "Diseñar diversos ambientes de aprendizaje mediados por el juego como estrategia para garantizar el desarrollo de niños y niñas."
        ],
        "Seminario Investigación I": [
            "Describir su interés investigativo, seleccionando el tema y un contexto en el cual existen problemas que requieren solución.",
            "Comprender cómo se describe y formula el problema de un contexto determinado, planteando objetivos científicos.",
            "Plantear el anteproyecto de investigación con bases metodológicas claras."
        ],
        "Seminario de Infancia": [
            "Reconocer las diversas posturas pedagógicas y sociales en las que se ha fundamentado el desarrollo integral de las infancias.",
            "Describir el recorrido histórico de las infancias en el contexto global.",
            "Presentar estrategias de intervención que favorecen el desarrollo integral de las infancias de cara a las exigencias del siglo XXI."
        ],
        "Praxis Pedagógica Aúlica": [
            "Identificar los principales fundamentos teóricos y aportes de autores sobre la educación infantil y su relación con la familia, el Estado y la sociedad.",
            "Reconocer las problemáticas sociales, pedagógicas y culturales de las infancias para responder a la diversidad de contextos.",
            "Presentar alternativas pedagógicas enmarcadas en políticas nacionales frente a las problemáticas de los entornos educativos."
        ],
        "Saber Didáctico: Corporal": [
            "Argumentar fundamentos teóricos de la pedagogía y la didáctica como aporte al fomento de expresiones artísticas.",
            "Reconocer aspectos relacionados con la sensibilidad hacia las diferentes formas de expresión corporal y la creatividad.",
            "Apropiar elementos prácticos de las diversas expresiones artísticas que contribuyan al desarrollo de habilidades y capacidades."
        ],
        "Diseños Metodológicos": [
            "Comprender la estructura de la metodología cualitativa de la investigación y relacionarla con problemáticas educativas.",
            "Diferenciar las problemáticas sociales, educativas y culturales con enfoque cualitativo de otros enfoques de investigación.",
            "Aplicar el enfoque cualitativo en la comprensión de problemáticas de la educación infantil."
        ],
        "Teaching English": [
            "Diseñar lecciones efectivas basadas en principios de TESOL, utilizando enfoques contemporáneos y metodologías innovadoras.",
            "Identificar y analizar las necesidades educativas de los estudiantes para adaptar estrategias de enseñanza inclusivas.",
            "Crear materiales educativos atractivos y contextualizados, alineados con los estándares del MCER y los Lineamientos Curriculares nacionales."
        ],
        "Praxis Escenarios Familiares": [
            "Analizar diferentes problemas, necesidades o intereses en el entorno educativo a fin de proponer alternativas de solución.",
            "Sintetizar y ordenar las ideas por orden de importancia, registrando de manera organizada en la planeación y el diario de campo.",
            "Demostrar capacidad para diseñar propuestas educativas que promuevan mecanismos de participación en torno a la ruralidad y comunidad."
        ],
        "Salud y Nutrición": [
            "Evaluar la realidad de las infancias y la normatividad internacional y nacional que rige la salud y la nutrición infantil.",
            "Analizar las acciones y estrategias que tiene Colombia en política pública de atención integral y salud preventiva a las infancias.",
            "Diseñar estrategias de atención integral y crear entornos de aprendizaje para las infancias a partir de fundamentos políticos y técnicos."
        ],
        "Saber Didáctico: Pensamiento": [
            "Argumentar el saber didáctico dirigido al desarrollo de procesos de pensamiento y lenguaje de las infancias.",
            "Explicar el desarrollo de los procesos de pensamiento y lenguaje de los niños y niñas de acuerdo con las estrategias pedagógicas.",
            "Elaborar material didáctico para fortalecer los procesos de pensamiento y lenguaje en contextos convencionales y no convencionales."
        ],
        "Seminario Investigación II": [
            "Argumentar, de acuerdo con los enfoques de investigación, alternativas de solución a problemáticas pedagógicas.",
            "Procesar datos cualitativos y cuantitativos recogidos en el trabajo de campo utilizando programas de análisis.",
            "Explicar los análisis y resultados de los datos obtenidos utilizando los marcos de referencia."
        ],
        "Políticas y Tendencias": [
            "Reconocer la diversidad de políticas públicas y sus fundamentos que argumentan el quehacer pedagógico del educador infantil en contextos multiculturales.",
            "Detectar necesidades relacionadas con las políticas educativas nacionales e internacionales en una comunidad real.",
            "Aplicar los postulados de la política educativa en los diferentes contextos educativos como garantía del desarrollo integral de las infancias."
        ],
        "Praxis Hospitalaria": [
            "Identificar las nociones, características y sentido de las aulas que garantizan los procesos educativos de las infancias en escenarios hospitalarios.",
            "Cuestionar los procesos educativos en contextos hospitalarios frente al desarrollo físico y emocional de los niños, niñas y adolescentes.",
            "Diseñar propuestas de intervención educativa para familias y niños mediante estrategias de prevención en diversos contextos."
        ],
        "Proyecto Flexible": [
            "Reflexionar críticamente sobre las tensiones sociales que afectan el desarrollo de la educación en las infancias.",
            "Valorar aportes teóricos y elementos que constituyen los proyectos pedagógicos flexibles y sus implicaciones.",
            "Propiciar espacios de reflexión en torno a la implementación de proyectos pedagógicos flexibles y su incidencia en los escenarios educativos."
        ],
        "Seminario Investigación III": [
            "Transcribir, procesar y organizar datos cualitativos y cuantitativos a partir de los datos recogidos en el trabajo de campo.",
            "Redactar el capítulo de resultados y análisis de datos de la investigación.",
            "Redactar el capítulo de conclusiones y socializar los resultados a la comunidad académica."
        ]
    },
    "Educación Infantil Bogotá": {
        "Cátedra Libertadora": [
            "Identificar los conflictos históricos en Colombia, comprendiendo causas, actores involucrados y consecuencias, promoviendo el diálogo, la reconciliación y la construcción de paz.",
            "Comprender los derechos y deberes ciudadanos en la historia de Colombia y reflexionar sobre su importancia en la construcción de una sociedad justa y democrática.",
            "Utilizar las herramientas de la cartografía social como estrategia de reconocimiento territorial, reflejando problemáticas geográficas y tensiones ético-políticas en el contexto de la comunidad."
        ],
        "Gestión de la Información": [
            "Identificar fuentes de información institucional para la gestión de la información.",
            "Clasificar herramientas y recursos digitales que respondan a la gestión y difusión del conocimiento en educación.",
            "Usar herramientas y recursos digitales que respondan a procesos de innovación en las prácticas educativas."
        ],
        "Maestro y Escenarios Educ.": [
            "Conocer las características y funciones del rol docente, a través de la conceptualización producto de articulación de teorías y la reflexión, para el fortalecimiento de su formación e identidad disciplinar.",
            "Comprender las características y dinámicas de los contextos, escenarios y ambientes de aprendizaje susceptibles de ser transformados en espacios pedagógicos.",
            "Diseñar propuestas de intervención pedagógica a partir del análisis de las características y dinámicas de los contextos para el fortalecimiento del proceso de aprendizaje."
        ],
        "Neuropedagogía": [
            "Conocer estudios sobre neurociencia cognitiva en el fortalecimiento de los procesos de aprendizaje.",
            "Identificar las estructuras anatómicas básicas implicadas en el aprendizaje y la memoria.",
            "Explicar el papel del aprendizaje, la emoción y la motivación y sus implicaciones para el comportamiento humano."
        ],
        "TIC e Interculturalidad": [
            "Explicar diversas problemáticas y fenómenos de la educación, la ciudadanía y la convivencia mediante el uso de herramientas digitales.",
            "Analizar las necesidades educativas relacionadas con lo sociocultural y articularlas con la práctica pedagógica a través de ambientes mediados por TIC.",
            "Presentar alternativas pedagógicas y tecnológicas enmarcadas en políticas educativas y sociales."
        ],
        "Historia de la Educación": [
            "Identificar los diferentes hitos históricos en los que se fundamenta la educación y la pedagogía, con el propósito de situar el acto educativo.",
            "Explicar desde una postura crítica teorías pedagógicas y aportes de representantes de la pedagogía y la educación.",
            "Diseñar propuestas de aplicación de conocimientos pedagógicos, teniendo en cuenta las características particulares de las infancias y la diversidad de contextos."
        ],
        "Lengua y Comunicación": [
            "Identificar situaciones comunicativas y responder a ellas de acuerdo con las condiciones culturales.",
            "Interpretar las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en que se generó.",
            "Producir textos en lengua materna utilizando ortografía, puntuación y estructuración que haga el texto entendible, expresando ideas con adecuación, coherencia y cohesión."
        ],
        "Ética y Responsabilidad": [
            "Generar estrategias y acciones que den respuestas efectivas a las problemáticas de la niñez en contextos diversos."
        ],
        "Infancias: Primeros Años": [
            "Identificar en algunos postulados teóricos las características, principios y fines, comprendiendo su sentido en la formación profesional de los educadores infantiles.",
            "Contrastar características, estrategias y alternativas pedagógicas para una mayor comprensión de las diversas realidades de las infancias.",
            "Diseñar una propuesta de intervención pedagógica frente a diversas problemáticas donde se evidencien elementos teóricos y metodológicos."
        ],
        "Desarrollo Cognitivo": [
            "Argumentar críticamente posicionamientos teóricos sobre el desarrollo cognitivo.",
            "Interpretar críticamente las diversas teorías sobre inteligencia, memoria y aprendizaje.",
            "Proponer dispositivos pedagógicos que permitan articular las teorías del desarrollo cognitivo."
        ],
        "Modelos Pedagógicos": [
            "Identificar y articular los principales conceptos y teorías que fundamentan los modelos pedagógicos.",
            "Comparar y contrastar diversas corrientes, paradigmas y modelos pedagógicos reflexionando sobre su evolución.",
            "Analizar críticamente los modelos pedagógicos desde perspectivas teóricas y prácticas, incluyendo su implementación en contextos educativos específicos."
        ],
        "Electiva Integral I": [
            "Comprender la pertinencia del rol del educador en acciones pedagógicas para la atención educativa de poblaciones con discapacidad auditiva.",
            "Reconocer a la comunidad sorda con características comunicativas propias.",
            "Establecer relaciones conceptuales desde el modelo social de discapacidad para comprender las particularidades de las poblaciones con discapacidad auditiva desde el enfoque de derechos."
        ],
        "Inglés I": [
            "Expresarse con frases sencillas y palabras aisladas relativas a sí mismo, personas, lugares y actividades.",
            "Escribir frases sencillas y párrafos cortos sobre sí mismo, personas, lugares y actividades.",
            "Comprender discursos muy lentos, articulados con cuidado, con pronunciación estándar y clara."
        ],
        "Experiencias Significativas": [
            "Comprender el concepto de socialización escolar y el de multiculturalidad, reconociéndolos en investigaciones educativas de pedagogía infantil.",
            "Establecer relaciones entre la socialización escolar, la diversidad y el saber pedagógico frente a la transformación de prácticas en el aula.",
            "Generar estrategias lúdicas y didácticas que posibiliten la socialización en contextos educativos diversos."
        ],
        "Desarrollo Pensamiento Lingüístico": [
            "Analizar y sintetizar teorías contemporáneas del desarrollo del lenguaje para entender cómo los avances en neurociencia influyen en la adquisición del lenguaje.",
            "Diseñar y aplicar estrategias pedagógicas basadas en la evidencia para fomentar el desarrollo del lenguaje en niños con y sin necesidades educativas especiales.",
            "Implementar métodos de evaluación para medir el progreso en el desarrollo del lenguaje y mejorar continuamente las prácticas de enseñanza."
        ],
        "Electiva Disciplinar I": [
            "Reconocer los elementos que caracterizan la naturaleza de las matemáticas como disciplina y abordar los principios desde referentes epistemológicos y curriculares.",
            "Comprender la estructura de la transposición didáctica de Chevallard y relacionarla con estrategias metodológicas como DUA y COPISI.",
            "Diseñar actividades mediadas por material didáctico para la promoción de la estructura aditiva o multiplicativa en niños y niñas."
        ],
        "Fundamentos de Matemáticas": [
            "Reconocer los conceptos básicos del lenguaje de la matemática, interiorizando conceptos y sus propiedades.",
            "Reconocer la importancia de la inclusión de variables y su tipo de representación para la solución de problemas.",
            "Desarrollar estrategias matemáticas para la solución de problemas básicos que requieran pensamiento lógico-matemático."
        ],
        "Desarrollo Biopsicológico": [
            "Integrar conocimientos de neurociencia, genética del comportamiento y teorías psicológicas para comprender el desarrollo cognitivo, emocional y social del niño.",
            "Evaluar el impacto de factores culturales y socioeconómicos en el desarrollo del niño mediante metodologías de investigación cualitativa y cuantitativa.",
            "Analizar críticamente los desafíos contemporáneos que afectan el desarrollo infantil y proponer intervenciones basadas en la ética y la evidencia."
        ],
        "Electividad Disciplinar II": [
            "Reconocer aspectos relevantes de la Educación Rural en Colombia, su trayectoria histórica y situación actual.",
            "Comprender conceptos, estrategias y modelos educativos flexibles específicos dirigidos a la población rural.",
            "Demostrar capacidades de gestión que promuevan la puesta en marcha de proyectos y propuestas investigativas en torno a la educación rural."
        ],
        "Didáctica General": [
            "Argumentar los principios y fundamentos conceptuales de la didáctica como campo de saber en el escenario educativo.",
            "Describir el recorrido histórico de la Didáctica a la luz de las concepciones de la educación infantil.",
            "Presentar alternativas didácticas en diferentes contextos educativos."
        ],
        "Escuela y Diversidad": [
            "Identificar la contextualización teórica entre familia, escuela y diversidad con el propósito de apropiarlos y contrastarlos con la realidad actual.",
            "Diseñar una propuesta DUA que responda a las problemáticas, necesidades e intereses del contexto de la comunidad educativa.",
            "Implementar estrategias pedagógicas para la atención a la diversidad a través de recursos digitales y análogos."
        ],
        "Currículo y Gestión Educativa": [
            "Diseñar un modelo de gestión directivo y académico para el óptimo funcionamiento de una institución de atención de primera infancia.",
            "Diseñar un modelo de gestión de convivencia y comunidad para la atención de primera infancia.",
            "Diseñar un modelo de autoevaluación institucional que permita fortalecer procesos académico-administrativos."
        ],
        "Inglés III": [
            "Expresarse con una lista de frases y oraciones sencillas relativas a personas, lugares, actividades y situaciones.",
            "Escribir párrafos con oraciones de relativa sencillez respecto de personas, lugares y actividades en diferentes épocas.",
            "Participar en conversaciones con razonable comodidad en situaciones estructuradas."
        ],
        "Electividad Disciplinar III": [
            "Identificar las características de aprendizaje y formular ajustes razonables que permitan al estudiante mejorar la comprensión comunicativa.",
            "Diseñar estrategias de atención pedagógica para facilitar la igualdad de oportunidades en el marco de la educación inclusiva.",
            "Promover desde la acción pedagógica el respeto por la diversidad y la apertura hacia la inclusión desde el enfoque de derechos."
        ],
        "Evaluación": [
            "Reconocer fundamentos teóricos y conceptuales, así como los enfoques pedagógicos y funciones en la evaluación educativa.",
            "Describir las intencionalidades legales de la evaluación como elemento integral de la política pública en educación.",
            "Aplicar instrumentos para la evaluación, teniendo en cuenta los procesos y estilos de aprendizaje de los estudiantes."
        ],
        "Educación Inclusiva": [
            "Conocer los diferentes procesos que se movilizan en la educación inclusiva dentro del sistema educativo colombiano.",
            "Comprender características comunicativas y de aprendizaje de los escolares en procesos de inclusión.",
            "Implementar estrategias pedagógico-didácticas partiendo de las necesidades específicas y estilos de aprendizaje de cada escolar."
        ],
        "Inglés IV": [
            "Hacer preguntas e intercambiar ideas e información sobre temas familiares en situaciones predecibles.",
            "Expresar su forma de pensar en un sentido abstracto sobre aspectos culturales como libros, cine y música.",
            "Describir actividades del pasado y experiencias personales con mayor fluidez comunicativa."
        ],
        "Emprender, Innovar": [
            "Diseñar un plan de negocios creativo, innovador y sostenible con propuestas de valor diferenciadas bajo metodología CANVAS.",
            "Validar el modelo de negocio en aspectos de mercados, organización, finanzas, plan operativo y legal.",
            "Presentar el Plan de Negocios a través de la técnica del Elevator Pitch ante empresarios expertos."
        ],
        "Seminario Investigación I": [
            "Describir su interés investigativo, seleccionando el tema y un contexto en el cual existen problemas que requieren solución.",
            "Comprender cómo se describe y formula el problema de un contexto determinado, planteando objetivos de carácter científico.",
            "Plantear un anteproyecto de investigación."
        ],
        "Estadística y Probabilidad": [
            "Resumir información con gráficos estadísticos, con medidas de tendencia central y de dispersión bajo la mediación de tecnologías digitales.",
            "Calcular probabilidades mediante el uso de técnicas de conteo, definiciones, propiedades básicas y teoremas como el de Bayes.",
            "Modelar experimentos aleatorios a partir de distribuciones de probabilidad para predecir o pronosticar valores con apoyo de software."
        ],
        "Pedagogía para DDHH": [
            "Analizar posicionamientos teóricos sobre pedagogía y educación que contribuyen a educar desde la diversidad.",
            "Interpretar de manera crítica las realidades situadas de las niñeces en el marco del conflicto armado en Colombia.",
            "Proponer alternativas de atención en educación a la primera infancia en desarrollo de las políticas públicas."
        ],
        "Praxis Integral Primera Infancia": [
            "Aplicar los conocimientos relacionados con la normatividad vigente y materializarlos en la práctica pedagógica reflexionando sobre sus alcances y limitaciones.",
            "Plantear ambientes de aprendizaje desde los pilares de la educación en el marco de los derechos y el enfoque diferencial.",
            "Diseñar una propuesta lúdico-pedagógica que contribuya al desarrollo de las dimensiones de las infancias."
        ],
        "Saber Didáctico: Expresión Lúdica": [
            "Identificar las características particulares de los postulados teóricos tanto del juego como del desarrollo y aprendizaje de las infancias.",
            "Fomentar una postura crítica y reflexiva frente a las dinámicas familiares y escolares del contexto colombiano.",
            "Diseñar diversos ambientes de aprendizaje mediados por el juego para garantizar el desarrollo y aprendizaje de niños y niñas."
        ],
        "Diseños Metodológicos": [
            "Diferenciar el enfoque de investigación cualitativo, del cuantitativo y de los estudios mixtos.",
            "Dar cuenta de las características de los métodos de investigación propios de los enfoques cualitativo y cuantitativo.",
            "Plantear el diseño metodológico que le permita dar solución a una problemática en el campo disciplinar del programa."
        ],
        "Praxis Pedagógica Aúlica": [
            "Fundamentar teórica y conceptualmente el diseño e implementación de un Proyecto Pedagógico de Aula que contemple diversos grados escolares.",
            "Brindar espacios de reflexión que contribuyan a la formación profesional a través de la ejecución de una práctica que fomente competencias investigativas.",
            "Desarrollar la capacidad de diseño y gestión de un Proyecto de Aula que tenga en cuenta los intereses de los niños de segundo ciclo."
        ],
        "Saber Didáctico: Expresión Corporal": [
            "Conceptualizar y apropiar aspectos relacionados con la corporeidad, la corporalidad, la sensibilidad y la creatividad como esenciales en la educación artística.",
            "Desarrollar habilidades artísticas en los estudiantes que permitan realizar actividades de investigación formativa y de sensibilización.",
            "Formular un proyecto que despierte el interés por la enseñanza a través del arte como aporte al desarrollo integral de los estudiantes."
        ],
        "Seminario de Infancia": [
            "Reconocer las diversas posturas pedagógicas y sociales en las que se ha fundamentado el desarrollo integral de las infancias.",
            "Describir el recorrido histórico de las infancias en el contexto global.",
            "Presentar estrategias de intervención que favorecen el desarrollo integral de las infancias de cara a las exigencias del siglo XXI."
        ],
        "Pensamiento Complejo": [
            "Integrar elementos cualitativos y cuantitativos en el proceso de análisis de problemáticas humanas, evitando imágenes fraccionadas de lo real.",
            "Desarrollar habilidades de análisis que permitan transformar la información capturada en conocimiento significativo.",
            "Diseñar planes de solución que eviten el carácter beligerante de los análisis confrontacionales."
        ],
        "Seminario Investigación II": [
            "Diseñar, validar y aplicar instrumentos de investigación para recoger datos acordes con los planteamientos de una investigación.",
            "Diseñar e implementar la propuesta pedagógica en el marco de un contexto educativo específico.",
            "Organizar y describir los resultados cualitativos o cuantitativos a partir de los datos recogidos en el trabajo de campo."
        ],
        "Salud y Nutrición": [
            "Evaluar la realidad de las infancias y la normatividad internacional y nacional que rige la salud y la nutrición infantil.",
            "Analizar las acciones y estrategias que tiene Colombia en política pública de atención integral y salud preventiva a las infancias.",
            "Diseñar estrategias de atención integral y crear entornos de aprendizaje para las infancias a partir de fundamentos políticos y técnicos."
        ],
        "Saber Didáctico: Pensamiento y Lenguaje": [
            "Identificar las características particulares de los grandes relatos teóricos tanto de didáctica como del desarrollo del lenguaje de las infancias.",
            "Apropiar saberes en lectura, escritura y oralidad que permitan el desarrollo del lenguaje y acciones de enseñanza-aprendizaje.",
            "Analizar, organizar y clasificar estrategias de aplicación para la enseñanza de la lectura y la escritura."
        ],
        "Praxis Escenarios Familiares": [
            "Analizar diferentes problemas, necesidades o intereses en el entorno y escenario educativo a fin de proponer alternativas de solución.",
            "Sintetizar y ordenar las ideas por orden de importancia y registrar de manera organizada en la planeación y el diario de campo.",
            "Demostrar capacidad para diseñar propuestas educativas que promuevan mecanismos de participación en torno a la ruralidad y comunidad."
        ],
        "Electiva Formación Integral II": [
            "Expresar discursos coherentes en lengua de señas colombiana, partiendo de vocabulario básico.",
            "Apropiar conocimiento teórico y práctico de la estructura de la Lengua de Señas Colombiana.",
            "Desarrollar competencias comunicativas en LSC que permitan transmitir e interpretar mensajes partiendo del vocabulario básico."
        ],
        "Seminario Investigación III": [
            "Transcribir, procesar y organizar datos cualitativos y cuantitativos a partir de los datos recogidos en el trabajo de campo.",
            "Redactar el capítulo de resultados y análisis de datos de la investigación.",
            "Redactar el capítulo de conclusiones y socializar los resultados a la comunidad académica."
        ],
        "Teaching English": [
            "Diseñar lecciones efectivas basadas en principios de TESOL, utilizando enfoques contemporáneos y metodologías innovadoras.",
            "Identificar y analizar las necesidades educativas de los estudiantes para adaptar estrategias de enseñanza inclusivas.",
            "Evaluar aprendizajes utilizando herramientas formativas y sumativas que fomenten la autonomía y creatividad del estudiante."
        ],
        "Proyecto Pedagógico Flexible": [
            "Apropiar los referentes teóricos que fortalezcan las capacidades discursivas en torno a los proyectos pedagógicos flexibles.",
            "Analizar la evolución y las tensiones a nivel político de los diferentes modelos de comprensión de la educación inclusiva.",
            "Reflexionar críticamente sobre la implementación de proyectos pedagógicos flexibles y su incidencia en la transformación de escenarios educativos."
        ],
        "Políticas y Tendencias": [
            "Reconocer la diversidad de políticas públicas y sus fundamentos que argumentan el quehacer pedagógico del educador infantil en contextos multiculturales.",
            "Detectar necesidades relacionadas con las políticas educativas nacionales e internacionales en una comunidad real.",
            "Aplicar los postulados de la política educativa en los diferentes contextos educativos como garantía del desarrollo integral de las infancias."
        ],
        "Praxis Hospitalaria": [
            "Identificar las nociones, características y sentido de las aulas que garantizan los procesos educativos de las infancias en escenarios hospitalarios.",
            "Cuestionar los procesos educativos en contextos hospitalarios frente al desarrollo físico y emocional de los niños, niñas y adolescentes.",
            "Diseñar propuestas de intervención educativa para familias y niños mediante estrategias de prevención en diversos contextos."
        ],
        "Inglés II": [
            "Expresarse con frases y oraciones sencillas relativas a personas, lugares, actividades y situaciones.",
            "Escribir frases y oraciones sencillas en situaciones del presente, pasado y planes futuros.",
            "Comprender discursos lentos articulados con cuidado, con pausas para asimilar el significado."
        ]
    },
    "Educación Especial Bogotá": {
        "Historia Educación": [
            "Identificar los diferentes hitos históricos en los que se fundamenta la educación y la pedagogía, con el propósito de situar el acto educativo a partir de las transformaciones que se han suscitado en el contexto educativo.",
            "Explicar desde una postura crítica teorías pedagógicas y aportes a la educación de representantes de la pedagogía y la educación.",
            "Diseñar propuestas de aplicación de conocimientos pedagógicos, teniendo en cuenta las características particulares de las infancias y la diversidad de contextos."
        ],
        "Maestro y Escenarios": [
            "Conocer las características y funciones del rol docente, a través de la conceptualización producto de articulación de teorías, la reflexión e identificación de acciones que resaltan su práctica desde un enfoque pedagógico.",
            "Comprender las características y dinámicas de los contextos, escenarios y ambientes de aprendizaje susceptibles de ser transformados en espacios pedagógicos.",
            "Diseñar propuestas de intervención pedagógica o educativas a partir del análisis de las características y dinámicas de los contextos para el fortalecimiento del proceso de aprendizaje."
        ],
        "Neuropedagogía": [
            "Conocer estudios sobre neurociencia cognitiva en el fortalecimiento de los procesos de aprendizaje.",
            "Identificar las estructuras anatómicas básicas implicadas en el aprendizaje y la memoria.",
            "Explicar el papel del aprendizaje, la emoción y la motivación y sus implicaciones para el comportamiento humano."
        ],
        "TIC e Interculturidad": [
            "Explicar diversas problemáticas y fenómenos de la educación, la ciudadanía y la convivencia mediante el uso de herramientas digitales.",
            "Analizar las necesidades educativas relacionadas con lo sociocultural y articularlas con la práctica pedagógica a través de ambientes de aprendizaje mediados por TIC.",
            "Presentar alternativas pedagógicas y tecnológicas enmarcadas en políticas educativas y sociales."
        ],
        "Lengua y Comunicación": [
            "Identificar situaciones comunicativas y responder a ellas de acuerdo con las condiciones culturales.",
            "Interpretar las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en que se generó.",
            "Expresar sus ideas teniendo en cuenta la adecuación, la coherencia y la cohesión del mensaje de acuerdo con las necesidades comunicativas del contexto."
        ],
        "Cátedra Libertadora": [
            "Identificar los conflictos históricos en Colombia, comprendiendo causas, actores involucrados y consecuencias, promoviendo el diálogo, la reconciliación y la construcción de paz.",
            "Comprender los derechos y deberes ciudadanos en la historia de Colombia y reflexionar sobre su importancia en la construcción de una sociedad justa y democrática.",
            "Analizar críticamente los procesos históricos, políticos, sociales y culturales que han configurado la Colombia contemporánea."
        ],
        "Gestión Información": [
            "Identificar fuentes de información institucional para la gestión de la información.",
            "Clasificar herramientas y recursos digitales que responden a la gestión y difusión del conocimiento en Educación.",
            "Usar herramientas y recursos digitales que respondan a procesos de innovación en las prácticas educativas."
        ],
        "Modelos y Perspectivas": [
            "Reconocer los fundamentos constitutivos de los modelos y tendencias que orientan la acción educativa en el campo de la Pedagogía.",
            "Reflexionar epistemológica y axiológicamente en torno a los modelos y perspectivas pedagógicas y su pertinencia en diversos escenarios.",
            "Apropiar el estudio de diferentes corrientes, paradigmas, teorías y modelos en educación que han marcado los procesos de enseñanza y aprendizaje."
        ],
        "Infancias: Primeros Años": [
            "Identificar en algunos postulados teóricos las características, principios y fines, comprendiendo su sentido en la formación profesional de los educadores.",
            "Contrastar características, estrategias y alternativas pedagógicas para una mayor comprensión de las diversas realidades de las infancias.",
            "Diseñar una propuesta de intervención pedagógica frente a diversas problemáticas donde se evidencien elementos teóricos y metodológicos que potencien el desarrollo integral en poblaciones diversas."
        ],
        "Desarrollo Cognitivo": [
            "Reconocer los fundamentos constitutivos de los modelos y tendencias que orientan la acción educativa en el campo de la Pedagogía.",
            "Reflexionar epistemológica y axiológicamente en torno a los modelos y perspectivas pedagógicas y su pertinencia en diversos escenarios.",
            "Apropiar el estudio de diferentes corrientes, paradigmas, teorías y modelos en educación que han marcado los procesos de enseñanza y aprendizaje."
        ],
        "Com Básica Lengua Extranjera": [
            "Expresarse con frases sencillas y palabras aisladas relativas a sí mismo, personas, lugares y actividades.",
            "Escribir frases sencillas y párrafos cortos sobre sí mismo, personas, lugares y actividades.",
            "Comprender discursos muy lentos, articulados con cuidado, con pronunciación estándar y clara."
        ],
        "Ética y Responsabilidad": [
            "Generar estrategias y acciones que den respuestas efectivas a las problemáticas de la niñez en contextos diversos."
        ],
        "Electiva Integral I": [
            "Comprender la pertinencia del rol del educador especial en acciones pedagógicas para la atención educativa de las poblaciones con discapacidad auditiva.",
            "Reconocer la comunidad sorda con características comunicativas propias.",
            "Establecer relaciones conceptuales desde el modelo social de discapacidad para comprender las particularidades de las poblaciones con discapacidad auditiva desde el enfoque de derechos."
        ],
        "Experiencias Significativas": [
            "Comprender el concepto de socialización escolar y multiculturalidad, reconociéndolos en investigaciones educativas de pedagogía infantil y educación especial.",
            "Establecer relaciones entre la socialización escolar, la diversidad y el saber pedagógico frente a la transformación de prácticas en el aula.",
            "Generar estrategias lúdicas y didácticas que posibiliten la socialización en contextos educativos diversos."
        ],
        "Pensamiento Lingüístico": [
            "Analizar y sintetizar teorías contemporáneas del desarrollo del lenguaje, incluyendo investigaciones recientes sobre la morfología cerebral y el procesamiento lingüístico.",
            "Diseñar y aplicar estrategias pedagógicas basadas en la evidencia para fomentar el desarrollo del lenguaje en niños con y sin necesidades educativas especiales.",
            "Implementar métodos de evaluación para medir el progreso en el desarrollo del lenguaje y mejorar continuamente las prácticas de enseñanza."
        ],
        "Expresión Lengua Extranjera": [
            "Expresarse con frases y oraciones sencillas relativas a personas, lugares, actividades y situaciones.",
            "Escribir frases y oraciones sencillas en situaciones del presente, pasado y planes futuros.",
            "Comprender discursos lentos articulados con cuidado, con pausas para asimilar el significado."
        ],
        "Fundamentos Matemáticas": [
            "Reconocer los conceptos básicos del lenguaje de la matemática, interiorizando conceptos y sus propiedades.",
            "Reconocer la importancia de la inclusión de variables y su tipo de representación para la solución de problemas.",
            "Desarrollar estrategias matemáticas para la solución de problemas básicos que requieran pensamiento lógico-matemático."
        ],
        "Electividad Disciplinar I": [
            "Identificar postulados teóricos, características y principios en torno al desarrollo del pensamiento lógico matemático para educadores infantiles y especiales.",
            "Contrastar las características del DUA y ABP con otros ambientes de aprendizaje y el uso del material didáctico para población diversa.",
            "Diseñar una propuesta desde el DUA y/o ABP donde se evidencien conocimientos propios del desarrollo lógico matemático para población diversa."
        ],
        "Currículo y Gestión Educativa": [
            "Argumentar posicionamientos teóricos sobre el currículo y la profesión docente.",
            "Interpretar críticamente la legislación colombiana en torno al currículo en primera infancia y la función docente."
        ],
        "Escuela y Diversidad": [
            "Identificar la contextualización teórica entre familia, escuela y diversidad con el propósito de apropiarlos y contrastarlos con la realidad actual.",
            "Diseñar una propuesta DUA digital y análoga que responda a las problemáticas, necesidades e intereses del contexto de la comunidad educativa.",
            "Articular la propuesta teórica con las estrategias pedagógicas propuestas para la atención a la diversidad en la práctica pedagógica."
        ],
        "Desarrollo Pens. Científico": [
            "Identificar en los postulados teóricos las características, principios y propósitos del pensamiento científico en la formación profesional.",
            "Valorar la importancia del desarrollo del pensamiento científico en las infancias asumiendo su rol como futuro educador.",
            "Diseñar una micro propuesta desde ECBI y el ABP donde se evidencien conocimientos, técnicas y didácticas propias del desarrollo del pensamiento científico para población diversa."
        ],
        "Didáctica General": [
            "Argumentar los principios y fundamentos conceptuales de la didáctica como campo de saber en el escenario educativo.",
            "Describir el recorrido histórico de la Didáctica a la luz de las concepciones de la educación infantil y educación especial.",
            "Presentar alternativas didácticas en diferentes contextos educativos."
        ],
        "Com Intermedia Lengua Ext.": [
            "Expresarse con una lista de frases y oraciones sencillas relativas a personas, lugares, actividades y situaciones.",
            "Escribir párrafos con oraciones de relativa sencillez respecto de personas, lugares y actividades en diferentes épocas.",
            "Participar en conversaciones con razonable comodidad en situaciones estructuradas y en conversaciones breves."
        ],
        "Electividad Disciplinar II": [
            "Reconocer aspectos relevantes de la Educación Rural en Colombia, su trayectoria histórica y situación actual.",
            "Comprender conceptos, estrategias y modelos educativos flexibles específicos dirigidos a la población rural.",
            "Demostrar capacidades de gestión que promuevan la puesta en marcha de proyectos y propuestas investigativas en torno a la educación rural."
        ],
        "Evaluación": [
            "Reconocer fundamentos teóricos, conceptuales y enfoques pedagógicos en la evaluación educativa.",
            "Describir las intencionalidades legales de la evaluación como elemento integral de la política pública en educación.",
            "Aplicar instrumentos para la evaluación teniendo en cuenta los procesos y estilos de aprendizaje de los estudiantes."
        ],
        "Educación Inclusiva": [
            "Caracterizar la población con la cual se realizará la práctica pedagógica desde el enfoque de inclusión.",
            "Implementar estrategias pedagógico-didácticas partiendo de las necesidades específicas y estilos de aprendizaje de cada grupo.",
            "Elaborar e implementar Planes individuales y de ajustes razonables basados en el DUA."
        ],
        "Com Avanzada Lengua Ext.": [
            "Hacer preguntas e intercambiar ideas e información sobre temas familiares en situaciones predecibles.",
            "Expresar su forma de pensar sobre aspectos culturales como libros, cine y música.",
            "Describir actividades del pasado y experiencias personales con mayor fluidez comunicativa."
        ],
        "Emprender, Innovar": [
            "Definir un modelo de negocio con componentes creativos e innovadores.",
            "Prototipar y validar un proyecto emprendedor aplicando la metodología del design thinking.",
            "Validar el prototipo de modelo de negocio desde el punto de vista político, económico, social, ambiental y de mercado."
        ],
        "Electividad Disciplinar III": [
            "Identificar las características de aprendizaje y formular los ajustes razonables para mejorar la comprensión comunicativa.",
            "Promover desde su acción pedagógica el respeto por la diversidad y la apertura hacia la inclusión desde el enfoque de derechos."
        ],
        "Epistemología Diferencia": [
            "Apropiarse de conceptos como diversidad, otredad e identidad que posibilitan el debate en torno a la diferencia.",
            "Reflexionar el campo de la diversidad a partir de las diferentes concepciones en las ciencias sociales.",
            "Identificar el campo de la educación como espacio donde se asume la noción de diversidad en la interacción pedagógica."
        ],
        "Praxis Enfoque Diferencial": [
            "Reflexionar sobre el concepto de enfoque diferencial e identificar desde la normatividad nacional los lineamientos para la atención a los grupos poblacionales.",
            "Reconocer mediante el modelo de enfoque de derechos las diferentes situaciones sociales y sus características y necesidades específicas.",
            "Plantear interacciones pedagógicas coherentes con las necesidades y particularidades que se presentan en el aula educativa."
        ],
        "Didácticas Ed. Especial": [
            "Explicar los principios y fundamentos conceptuales de la didáctica en el escenario educativo, vista como ciencia, disciplina y arte.",
            "Comparar las diferentes estrategias didácticas utilizadas en contextos educativos incluyentes.",
            "Elaborar una propuesta didáctica acorde a las necesidades de los estudiantes desde un enfoque inclusivo."
        ],
        "Seminario Investigación I": [
            "Describir su interés investigativo, seleccionando el tema y un contexto en el cual existen problemas que requieren solución.",
            "Comprender cómo se describe y formula el problema de un contexto determinado, planteando objetivos de carácter científico.",
            "Plantear un anteproyecto de investigación con bases metodológicas claras."
        ],
        "Estadística y Probabilidad": [
            "Presentar resultados de análisis de datos mediante tablas y gráficos estadísticos.",
            "Identificar y aplicar de forma adecuada los conceptos y técnicas estadísticas propias de la Estadística Inferencial.",
            "Utilizar herramientas informáticas para el manejo de bases de datos y el cálculo de resultados."
        ],
        "Currículo Diversidad": [
            "Apropiarse de conceptos como diversidad, otredad e identidad que posibilitan la comprensión de lo que hace referencia a la diferencia.",
            "Definir y comprender desde el campo de la educación cómo se asume la diferencia en una línea de tiempo hasta la actualidad.",
            "Comprender las implicaciones de la noción de diversidad como campo de estudio de las ciencias sociales."
        ],
        "Praxis Discapacidad Intelectual": [
            "Comprender las implicaciones del concepto de praxis en relación con la atención educativa a personas con discapacidad intelectual.",
            "Analizar la complejidad de la atención educativa dirigida a personas con discapacidad intelectual en el marco de los Derechos.",
            "Aplicar el saber pedagógico y didáctico planteando soluciones que promuevan transformaciones en el contexto educativo y social."
        ],
        "Enseñanza Discap. Intelectual": [
            "Reflexionar críticamente sobre estrategias pedagógicas y didácticas dirigidas a personas con discapacidad intelectual.",
            "Analizar los referentes teóricos y conceptuales sobre la enseñanza y el aprendizaje en la atención educativa de estudiantes con discapacidad intelectual.",
            "Diseñar ambientes de aprendizaje flexibles que promuevan el desarrollo de capacidades y potencialidades del sujeto con discapacidad intelectual."
        ],
        "Diseños Metodológicos": [
            "Diseñar e implementar la propuesta pedagógica en el marco de un contexto educativo específico.",
            "Procesar datos cualitativos y cuantitativos a partir de los datos recogidos en el trabajo de campo.",
            "Codificar y organizar datos cualitativos y cuantitativos en tablas y gráficos."
        ],
        "Electiva Formación Integral II": [
            "Expresar discursos coherentes en lengua de señas colombiana partiendo del vocabulario básico.",
            "Apropiarse de conocimiento teórico y práctico de la estructura de la Lengua de Señas Colombiana.",
            "Desarrollar competencias comunicativas en LSC que permitan transmitir e interpretar mensajes partiendo del vocabulario básico."
        ],
        "Transcurrir Vida y Contextos": [
            "Diseñar, validar y aplicar instrumentos de investigación para recoger datos acordes con los planteamientos de una investigación.",
            "Diseñar e implementar la propuesta pedagógica en el marco de un contexto educativo específico.",
            "Organizar y describir los resultados cualitativos o cuantitativos a partir de los datos recogidos en el trabajo de campo."
        ],
        "Praxis Discapacidad Sensorial": [
            "Reconocer y apropiar conceptos y características de las personas con discapacidad sensorial, teniendo en cuenta las transformaciones e implicaciones de la atención educativa.",
            "Comprender la pertinencia del rol del educador especial en acciones pedagógicas para la atención de poblaciones con discapacidad sensorial.",
            "Diseñar estrategias pedagógicas didácticas para minimizar barreras de aprendizaje y participación de estudiantes con discapacidad sensorial."
        ],
        "Enseñanza Discap. Sensorial": [
            "Reconocer y apropiar conceptos y características de las personas con discapacidad sensorial.",
            "Diseñar estrategias pedagógicas didácticas para minimizar barreras de aprendizaje y participación.",
            "Establecer relaciones conceptuales desde el modelo social de discapacidad para comprender las particularidades de las poblaciones con discapacidad sensorial."
        ],
        "Seminario Investigación II": [
            "Diseñar, validar y aplicar instrumentos de investigación para recoger datos acordes con los planteamientos de una investigación.",
            "Diseñar e implementar la propuesta pedagógica en el marco de un contexto educativo específico.",
            "Organizar y describir los resultados cualitativos o cuantitativos a partir de los datos recogidos en el trabajo de campo."
        ],
        "Pensamiento Complejo": [
            "Integrar elementos cualitativos y cuantitativos en el análisis de problemáticas humanas, evitando imágenes fraccionadas de lo real.",
            "Desarrollar habilidades de análisis que transformen la información capturada en conocimiento significativo.",
            "Reflexionar sobre las experiencias exitosas identificando los procesos de pensamiento no lineales que las hicieron posibles."
        ],
        "Políticas Educativas Derecho": [
            "Reflexionar acerca del concepto de enfoque diferencial e identificar desde la normatividad nacional los lineamientos para la atención a los grupos poblacionales.",
            "Reconocer mediante el modelo de enfoque de derechos las diferentes situaciones reales sociales y sus características y necesidades específicas."
        ],
        "Praxis Discapacidad Motora": [
            "Comprender las implicaciones del concepto de praxis en relación con la atención a la población con discapacidad motora y asociada.",
            "Apropiarse de conceptos como calidad de vida, sistemas de apoyos y ajustes razonables en la atención a la población con discapacidad física y múltiple.",
            "Diseñar propuestas pedagógicas acordes a las particularidades de la población con discapacidad física y múltiple y los contextos donde interactúan."
        ],
        "Ambientes y DUA": [
            "Explicar la fundamentación teórica y conceptual que subyace a los diseños de ambientes de aprendizaje.",
            "Diseñar interacciones pedagógicas mediadas por el Diseño Universal de Aprendizaje (DUA).",
            "Diseñar ambientes de aprendizaje que posibiliten la flexibilización de las interacciones pedagógicas mediadas por estrategias del DUA."
        ],
        "Seminario Investigación III": [
            "Transcribir, procesar y organizar datos cualitativos y cuantitativos a partir de los datos recogidos en el trabajo de campo.",
            "Redactar el capítulo de resultados y análisis de datos de la investigación.",
            "Redactar el capítulo de conclusiones y socializar los resultados a la comunidad académica."
        ],
        "Teaching English": [
            "Diseñar lecciones efectivas basadas en principios de TESOL, utilizando enfoques contemporáneos y metodologías innovadoras.",
            "Identificar y analizar las necesidades educativas de los estudiantes para adaptar estrategias de enseñanza inclusivas.",
            "Crear materiales educativos atractivos y contextualizados, alineados con los estándares del MCER y los Lineamientos Curriculares nacionales."
        ]
    },
    "Educación Infantil Virtual": {
        "Historia de la Educación": [
            "Identificar los diferentes hitos históricos en los que se fundamenta la educación y la pedagogía, con el propósito de situar el acto educativo a partir de las transformaciones que se han suscitado en el contexto educativo.",
            "Construir durante su proceso formativo su identidad como educador infantil en el marco de la ética y la responsabilidad con el desarrollo integral de las infancias.",
            "Diseñar propuestas de aplicación de conocimientos pedagógicos, teniendo en cuenta las características particulares de las infancias y la diversidad de contextos."
        ],
        "Modelos y Perspectivas": [
            "Reconocer los fundamentos constitutivos de los modelos y tendencias que orientan la acción educativa en el campo de la Pedagogía.",
            "Reflexionar epistemológica y axiológicamente en torno a los modelos y perspectivas pedagógicas y su pertinencia en diversos escenarios.",
            "Apropiar el estudio de diferentes corrientes, paradigmas, teorías y modelos en educación que han marcado los procesos de enseñanza y aprendizaje."
        ],
        "Proc. Psicológicos: Sensación": [
            "Definir los procesos psicológicos de sensación y percepción.",
            "Recopilar información a través de la observación y la medición de procesos perceptuales.",
            "Diferenciar los tipos de emociones y reconocer los tipos de percepción y su relación con las modalidades sensoriales."
        ],
        "TIC e Interculturalidad": [
            "Explicar diversas problemáticas y fenómenos de la educación, la ciudadanía y la convivencia mediante el uso de herramientas digitales.",
            "Analizar las necesidades educativas relacionadas con lo sociocultural y articularlas con la práctica pedagógica mediante ambientes virtuales de aprendizaje.",
            "Presentar alternativas pedagógicas y tecnológicas enmarcadas en políticas educativas y sociales."
        ],
        "Filosofía y Educación": [
            "Reconocer conceptualmente aspectos y características de la filosofía de la educación, teniendo en cuenta las transformaciones del pensamiento filosófico en diferentes momentos históricos.",
            "Asumir una postura crítica con relación a la praxis, el sentido social de la educación y sus posibilidades como proceso de dinamización social.",
            "Exponer ideas de manera coherente de forma oral y escrita, luego de analizar diferentes contextos sociales, económicos y políticos en los que se lleva a cabo la acción educativa."
        ],
        "Electiva Disciplinar I": [
            "Identificar postulados teóricos, características y principios en torno al desarrollo del pensamiento lógico matemático para educadores infantiles y especiales.",
            "Contrastar las características del DUA y ABP con otros ambientes de aprendizaje y el uso del material didáctico para población diversa.",
            "Diseñar una propuesta desde el DUA y/o ABP donde se evidencien conocimientos propios del desarrollo lógico matemático para población diversa."
        ],
        "Lectura y Escritura": [
            "Identificar situaciones comunicativas y responder a ellas de acuerdo con las condiciones culturales.",
            "Reconocer los elementos fundamentales del proceso de redacción: adecuación, coherencia y cohesión del mensaje.",
            "Interpretar las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en que se generó."
        ],
        "Currículo y Gestión Educativa": [
            "Identificar el proceso de la administración y gestión educativa en aspectos relacionados con la dirección, el liderazgo, la planeación y la organización de los servicios educativos.",
            "Interpretar los postulados de la teoría curricular que fundamenta las necesidades contextuales en los diseños curriculares, teniendo en cuenta la diversidad de las infancias.",
            "Adaptar un Proyecto Educativo Institucional (PEI) aplicando políticas y teorías vigentes que responda a las exigencias actuales de las comunidades."
        ],
        "Psicología del desarrollo": [
            "Reconocer las diferentes teorías de la psicología que abordan el campo del desarrollo humano, desde los cuales se analizan e identifican diversos problemas.",
            "Aplicar procesos sistemáticos y metodológicos orientados para abordar problemas de carácter disciplinar e interdisciplinar frente a la evaluación del desarrollo.",
            "Valorar los resultados de evaluación de diversos procesos de formación a fin de lograr la integración ética y profesional."
        ],
        "Proc. Psicológicos: Aprendizaje": [
            "Identificar los procesos psicológicos de pensamiento y lenguaje.",
            "Comprender las diferentes perspectivas teóricas que explican los procesos de pensamiento y lenguaje.",
            "Establecer referentes necesarios para la adecuada estimulación de los procesos comunicacionales."
        ],
        "Didáctica General": [
            "Argumentar los principios y fundamentos conceptuales de la didáctica como campo de saber en el escenario educativo.",
            "Describir el recorrido histórico de la Didáctica a la luz de las concepciones de la educación infantil y educación especial.",
            "Presentar alternativas didácticas en diferentes contextos educativos."
        ],
        "Epistemología Investigación": [
            "Analizar diferentes problemáticas y fenómenos pedagógicos a partir de las corrientes de pensamiento epistemológico.",
            "Relacionar los procesos pedagógicos, didácticos e investigativos en la práctica pedagógica.",
            "Aplicar alternativas de investigación a través de la epistemología en el contexto educativo."
        ],
        "Electiva Disciplinar II": [
            "Identificar los aspectos relevantes de la Educación Rural en Colombia, su trayectoria histórica y situación actual.",
            "Analizar conceptos, estrategias y programas globales específicos dirigidos a la población rural.",
            "Gestionar proyectos y propuestas alrededor de problemas pedagógicos en torno a la educación rural."
        ],
        "Inglés I": [
            "Contrastar hechos y eventos repetidos en el presente y compararlos con acciones momentáneas relacionadas con el medio ambiente, salud y turismo.",
            "Comparar y discutir temas de naturaleza cultural y social que den cuenta de estereotipos de belleza y factores generadores de desigualdad.",
            "Identificar y discutir acerca de procesos tecnológicos y de industrialización y sus efectos en la salud."
        ],
        "Evaluación": [
            "Reconocer fundamentos teóricos y conceptuales de la evaluación educativa a partir de los diferentes enfoques pedagógicos.",
            "Interpretar la evaluación alternativa en relación con las estrategias, técnicas e instrumentos de evaluación.",
            "Presentar alternativas de evaluación y retroalimentación permanente como parte de la cualificación de los procesos de enseñanza y aprendizaje."
        ],
        "Infancias: Primeros Años": [
            "Identificar en algunos postulados teóricos las características, principios y fines, comprendiendo su sentido en la formación profesional de los educadores.",
            "Contrastar características, estrategias y alternativas pedagógicas para una mayor comprensión de las diversas realidades de las infancias.",
            "Diseñar una propuesta de intervención pedagógica frente a diversas problemáticas donde se evidencien elementos teóricos y metodológicos."
        ],
        "Proc. Psicológicos: Lenguaje": [
            "Reconocer las diferentes teorías en la psicología que abordan el campo del desarrollo humano.",
            "Aplicar procesos sistemáticos y metodológicamente orientados para abordar problemas de carácter disciplinar e interdisciplinar.",
            "Confrontar los resultados de actividades de evaluación a fin de lograr la integración ética y profesional."
        ],
        "Saber Didáctico: Lúdica": [
            "Identificar las características particulares de los postulados teóricos tanto del juego como del desarrollo y aprendizaje de las diversas infancias.",
            "Asumir la lúdica como una estrategia didáctica para potenciar el desarrollo humano de los niños y niñas en procesos de enseñanza y aprendizaje retadores.",
            "Diseñar diversos ambientes de aprendizaje mediados por el juego para garantizar el desarrollo y aprendizaje de niños y niñas."
        ],
        "Electiva Disciplinar III": [
            "Identificar las características de aprendizaje y formular propuestas educativas a la luz del DUA para implementar ajustes razonables.",
            "Analizar las estrategias de formación pedagógica para facilitar la igualdad de oportunidades en el marco de la educación inclusiva.",
            "Promover desde su acción pedagógica el respeto por la diversidad y la apertura hacia la inclusión desde el enfoque de derechos."
        ],
        "Inglés II": [
            "Reconocer y discutir sobre los objetivos de desarrollo sostenible y su efecto en el desarrollo de hábitos saludables.",
            "Identificar y discutir sobre eventos históricos que han impactado positiva y negativamente los derechos individuales y colectivos.",
            "Planear acciones futuras encaminadas a la vida personal y ocupacional, prediciendo posibles retos dentro de la era tecnológica."
        ],
        "Electiva Formación Integral": [
            "Identificar los diferentes enfoques de derechos humanos y diversidad para ponerlos al servicio de la infancia y los contextos educativos.",
            "Relacionar los diversos lenguajes artísticos como estrategias pedagógicas y didácticas en la formación de las infancias.",
            "Diseñar programas con diversos lenguajes artísticos para población en contextos multivariados."
        ],
        "Inglés III": [
            "Describir hechos históricos que han impactado la naturaleza con el fin de desarrollar estrategias de estilos de vida austeros.",
            "Reconocer y opinar sobre situaciones relacionadas con el maltrato pasivo, activo y psicológico en personas y/o animales.",
            "Considerar y reportar los resultados de procesos específicos en cuanto a la tecnología, sus usos y desafíos."
        ],
        "Cátedra Libertadora": [
            "Identificar los principios constitucionales que señalan la importancia de la diversidad étnica y cultural del país.",
            "Debatir respecto a los factores sociales, económicos y políticos que han incidido en el desarrollo de los movimientos sociales en Colombia.",
            "Explicar los avances y retrocesos de los procesos de paz llevados a cabo en Colombia."
        ],
        "Seminario de Infancias": [
            "Reconocer las diversas posturas pedagógicas y sociales en las que se ha fundamentado el desarrollo integral de las infancias.",
            "Describir el recorrido histórico de las infancias en el contexto global.",
            "Presentar estrategias de intervención que favorecen el desarrollo integral de las infancias de cara a las exigencias del siglo XXI."
        ],
        "Praxis Integral Primera Infancia": [
            "Analizar el sentido de la formación del educador infantil en torno a la pedagogía, la didáctica y la planeación de su práctica educativa.",
            "Organizar ambientes de aprendizaje desde los pilares de la educación en el marco de los derechos y el enfoque diferencial.",
            "Asumir una postura crítica para el diseño de propuesta de intervención pedagógica que contribuya al desarrollo integral de las infancias."
        ],
        "Saber Didáctico: Pensamiento": [
            "Argumentar el saber didáctico dirigido al desarrollo de procesos de pensamiento y lenguaje de las infancias a partir de la práctica pedagógica.",
            "Explicar el desarrollo de los procesos de pensamiento y lenguaje de los niños y niñas de acuerdo con las estrategias pedagógicas utilizadas.",
            "Elaborar material didáctico para fortalecer los procesos de pensamiento y lenguaje en contextos convencionales y no convencionales."
        ],
        "Metodología Cuantitativa": [
            "Comprender la estructura de la metodología cuantitativa de la investigación y relacionarla con problemáticas educativas.",
            "Diferenciar las problemáticas sociales y educativas con enfoque cuantitativo de otros enfoques de investigación.",
            "Aplicar el enfoque cuantitativo en la comprensión de problemáticas de la educación infantil."
        ],
        "Emprendimiento": [
            "Definir un modelo de negocio con componentes creativos e innovadores.",
            "Prototipar y validar un proyecto emprendedor aplicando la metodología del design thinking.",
            "Validar el prototipo de modelo de negocio desde el punto de vista político, económico, social, ambiental y de mercado."
        ],
        "Políticas en Ed. Infantil": [
            "Reconocer la diversidad de políticas públicas y sus fundamentos que argumentan el quehacer pedagógico del educador infantil en contextos multiculturales.",
            "Detectar necesidades relacionadas con las políticas educativas nacionales e internacionales en una comunidad real.",
            "Aplicar los postulados de la política educativa en los diferentes contextos educativos como garantía del desarrollo integral de las infancias."
        ],
        "Pedagogía DDHH": [
            "Analizar posturas teóricas desde la pedagogía y la educación que contribuyan a educar desde las diferencias y el reconocimiento de las infancias como sujetos de derechos.",
            "Asumir una postura crítica frente a las diversas problemáticas relacionadas con la vulneración de derechos en las infancias.",
            "Presentar alternativas pedagógicas para la formación de las infancias en el marco de la pedagogía de los derechos humanos."
        ],
        "Praxis Pedagógica Aúlica": [
            "Reconocer las problemáticas sociales, pedagógicas y culturales de las infancias a fin de responder a las necesidades de la diversidad de contextos.",
            "Describir alternativas pedagógicas enmarcadas en políticas nacionales frente a las problemáticas, necesidades e intereses presentados.",
            "Aplicar en el contexto educativo propuestas pedagógicas coherentes a problemáticas identificadas con la infancia."
        ],
        "Metodología Cualitativa": [
            "Comprender la estructura de la metodología cualitativa de la investigación y relacionarla con problemáticas educativas.",
            "Diferenciar las problemáticas sociales y educativas con enfoque cualitativo de otros enfoques de investigación.",
            "Aplicar el enfoque cualitativo en la comprensión de problemáticas de la educación infantil."
        ],
        "Estadística y Probabilidad": [
            "Presentar resultados de análisis de datos mediante tablas y gráficos estadísticos.",
            "Identificar y aplicar de forma adecuada los conceptos y técnicas estadísticas propias de la Estadística Inferencial.",
            "Utilizar herramientas informáticas para el manejo de bases de datos y el cálculo de resultados."
        ],
        "Infancias y Subjetividades": [
            "Elaborar una línea del tiempo sobre la historia de las infancias en América Latina teniendo en cuenta diferentes posturas epistemológicas.",
            "Diferenciar ambientes de aprendizaje posibilitadores del desarrollo de las capacidades de las infancias en el marco de la diversidad e inclusión educativa.",
            "Aplicar estrategias pedagógicas, metodológicas y didácticas para la formación de las infancias en contextos convencionales y no convencionales."
        ],
        "Políticas y Lineamientos": [
            "Interpretar el contenido de las políticas nacionales y locales a fin de aplicarlas en su rol como docente en formación garantizando el derecho de los niños.",
            "Valorar las situaciones problémicas en torno al alcance y limitaciones de las políticas públicas desde una postura crítica.",
            "Diseñar una propuesta curricular desde una tendencia actual para el campo de la educación infantil."
        ],
        "Praxis Escenarios Rurales": [
            "Analizar las problemáticas, necesidades o intereses del entorno y escenario educativo a fin de proponer alternativas de solución.",
            "Participar a través de la práctica pedagógica en la organización de las comunidades identificando soluciones didácticas.",
            "Demostrar capacidad para diseñar propuestas educativas que promuevan mecanismos de participación en torno a la ruralidad y comunidad."
        ],
        "Saber Didáctico: Artística": [
            "Aplicar el conocimiento sobre las diferentes expresiones artísticas como estrategias lúdicas para el fomento del arte en los niños y las niñas.",
            "Conjugar las técnicas artísticas y lúdicas, estableciendo comunicación con los niños mediante símbolos y procedimientos técnicos artísticos y musicales.",
            "Formular un proyecto para despertar el interés por la enseñanza a través de la música como aporte al desarrollo integral de las infancias."
        ],
        "Seminario Investigación I": [
            "Identificar problemáticas en la educación infantil a partir de diversos paradigmas para formular proyectos de investigación.",
            "Explicar con argumento los diferentes enfoques de investigación y las características propias de los problemas a investigar.",
            "Formular con fundamentos epistemológicos proyectos de investigación propios de la educación infantil."
        ],
        "Pedagogía Crítica y Social": [
            "Reconocer los principales postulados teóricos y el devenir histórico en la pedagogía social y las pedagogías críticas.",
            "Justificar diferentes realidades socioeducativas teniendo en cuenta la diversidad de pedagogías alternativas.",
            "Diseñar una propuesta pedagógica basada en los postulados de la educación popular y comunitaria."
        ],
        "Praxis Hospitalaria": [
            "Identificar las nociones, características y sentido de las aulas que garantizan los procesos educativos de las infancias en escenarios hospitalarios.",
            "Cuestionar los procesos educativos en contextos hospitalarios frente al desarrollo físico y emocional de los niños, niñas y adolescentes.",
            "Diseñar propuestas de intervención educativa para familias y niños mediante estrategias de prevención en diversos contextos."
        ],
        "Salud y Nutrición": [
            "Comparar las acciones y estrategias que tiene Colombia en política pública de desarrollo integral a las infancias.",
            "Debatir frente al marco conceptual y metodológico del enfoque de salud integral y cultural preventiva.",
            "Diseñar entornos y ambientes de aprendizaje que favorecen la prevención y promoción de la Salud Infantil."
        ],
        "Teaching English": [
            "Identificar los aspectos clave en el desarrollo de la competencia comunicativa definiendo las habilidades de comprensión y expresión oral y escrita.",
            "Planificar actividades de clase con estrategias adecuadas para la enseñanza del inglés en niños y niñas, utilizando metodologías innovadoras.",
            "Generar procesos de aprendizaje desde la enseñanza del inglés para el diseño y desarrollo de proyectos pedagógicos con habilidades comunicativas."
        ],
        "Seminario Investigación II": [
            "Argumentar de acuerdo con los enfoques de investigación alternativas de solución a problemáticas pedagógicas.",
            "Procesar datos cualitativos y cuantitativos recogidos en el trabajo de campo utilizando diversos programas de análisis.",
            "Explicar los análisis y resultados de los datos obtenidos utilizando los marcos de referencia."
        ],
        "Proyecto Pedagógico Flexible": [
            "Reconocer las implicaciones que tiene el diseño de proyectos pedagógicos flexibles con el fin de transformar las representaciones socioculturales de las infancias.",
            "Reflexionar críticamente sobre la implementación de los proyectos pedagógicos flexibles y su incidencia en la transformación de escenarios educativos.",
            "Promover el interés por la investigación como fuente de conocimiento a partir de las lecturas de realidad de los contextos interculturales."
        ],
        "Praxis Familia y Escuela": [
            "Seleccionar postulados teóricos sobre familia, escuela y diversidad con el propósito de apropiarlos y contrastarlos con la realidad actual.",
            "Valorar diversas estrategias pedagógicas y didácticas que respondan a las necesidades e intereses de los sujetos en contextos multivariados.",
            "Diseñar una propuesta de intervención pedagógica que responda a las problemáticas, necesidades e intereses de la comunidad educativa."
        ]
    }
};

// Base de Datos de Reglamento
    const bdReglamento = {
        "alcance": {
            t: "Alcance",
            d: "El Reglamento Estudiantil aplica a todos los estudiantes de la Institución desde el momento de su inscripción. Rige para todas las metodologías (presencial, distancia y virtual), todos los niveles académicos (técnico hasta posgrado) y también para los egresados.",
            req: "Aplica a: Aspirantes, Estudiantes Activos y Egresados."
        },
        "criterios": {
            t: "Criterios Orientadores",
            d: "Se fundamenta en la integralidad, participación, garantía de derechos y cumplimiento de normas. Busca fortalecer el sentido de pertenencia y que el estudiante asuma un compromiso activo como ciudadano para fortalecer el tejido social.",
            req: "Base: Valores institucionales, responsabilidad y honradez."
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

    // 1. Diccionario de enlaces de calendarios por programa
    const linksCalendarios = {
        'Educación Infantil Bogotá': 'https://darkseagreen-emu-495688.hostingersite.com/posgrado-semestral-presencial/',
        'Educación Infantil Cartagena': 'https://darkseagreen-emu-495688.hostingersite.com/posgrado-semestral-presencial/',
        'Educación Especial Bogotá': 'https://darkseagreen-emu-495688.hostingersite.com/posgrado-semestral-presencial/',
        'Educación Infantil Virtual': 'https://darkseagreen-emu-495688.hostingersite.com/pregrado-cuatrimestral/',
        'Etnoeducación Virtual': 'https://darkseagreen-emu-495688.hostingersite.com/pregrado-cuatrimestral/'
    };

    // 2. Actualizar los botones de calendario en el HTML
    const urlCalendario = linksCalendarios[programa] || '#';
    const botonesCal = document.querySelectorAll('.btn-cal-link');

    botonesCal.forEach(boton => {
        boton.href = urlCalendario;
    });

    // 3. Actualización de etiquetas (Tu código original)
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

        // 1. Textos Básicos
        document.getElementById('det-nombre').innerText = mat.n;
        document.getElementById('det-creditos').innerText = mat.c;
        document.getElementById('modal-tag-semestre').innerText = `${getEtiquetaTiempo(indexSemestre)} - ${programaSeleccionado}`;

        // 2. Categorías
        let nombreCategoria = "General";
        if(mat.t === "cat-basico") nombreCategoria = "Básico / Pedagogía";
        if(mat.t === "cat-practica") nombreCategoria = "Práctica Pedagógica";
        if(mat.t === "cat-disciplinar") nombreCategoria = "Disciplinar / Didáctica";
        if(mat.t === "cat-transversal") nombreCategoria = "Transversal / Generales";
        if(mat.t === "cat-investigacion") nombreCategoria = "Investigación";
        if(mat.t === "cat-electivo") nombreCategoria = "Electividad";

        document.getElementById('det-categoria').innerText = nombreCategoria;
        document.getElementById('det-objetivo').innerText = objetivosPorCategoria[mat.t] || "Desarrollar competencias integrales según el plan de estudios.";

        // 3. Requisitos (Lógica simplificada para evitar duplicados)
        // --- LÓGICA DE REQUISITOS ---
        let requisitoTexto = "Ninguno";
        if (indexSemestre > 0) requisitoTexto = "Aprobación de créditos del periodo anterior.";
        if (mat.n.includes("Inglés") || mat.n.includes("Español") || mat.n.includes("Investigación") || mat.n.includes("Práctica")) {
            const num = mat.n.split(" ").pop();
            if(["II", "III", "IV"].includes(num)) requisitoTexto = "Aprobación del nivel anterior.";
        }

        // --- INYECCIÓN DE DATOS (SIN DUPLICADOS) ---
        // Usamos los nuevos IDs para asegurar que solo se cambie el contenido del <p>
        document.getElementById('det-requisitos').innerText = requisitoTexto;
        document.getElementById('det-creditos').innerText = mat.c;

        // IMPORTANTE: Elimina o comenta cualquier línea que diga:
        // document.getElementById('lbl-requisitos').innerText = ...
        // document.getElementById('lbl-creditos').style.display = ...

        // 4. Resultados de Aprendizaje (Diseño Horizontal en 2 columnas)
        const programaRA = bdResultadosAprendizaje[programaSeleccionado];
        const raBloque = document.getElementById('bloque-resultados-aprendizaje');
        const raLista = document.getElementById('det-resultados-aprendizaje');

        if (programaRA && programaRA[mat.n] && raBloque && raLista) {
            const resultados = programaRA[mat.n];

            // Forzamos el diseño de cuadrícula aquí
            raLista.style.display = "grid";
            raLista.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
            raLista.style.gap = "15px";

            raLista.innerHTML = resultados.map((r, i) =>
                `<div style="display:flex; gap:10px; align-items:flex-start; background:#f9f9f9; padding:10px; border-radius:8px; border:1px solid #eee;">
                    <span style="
                        background:var(--color-institucional);
                        color:white;
                        border-radius:50%;
                        min-width:22px;
                        height:22px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:0.75rem;
                        font-weight:bold;
                        flex-shrink:0;
                    ">${i + 1}</span>
                    <span style="font-size:0.85rem; line-height:1.4; color:#444;">${r}</span>
                </div>`
            ).join('');

            raBloque.style.display = 'block';
        } else {
            raBloque.style.display = 'none';
        }

        abrirModal();
    }

// Detalle para Reglamento
async function mostrarDetalleReglamento(idCapitulo) {
    try {
        // 1. Cargamos el archivo JSON
        const respuesta = await fetch('reglamento.json');
        const datos = await respuesta.json();
        const info = datos[idCapitulo];

        if (info) {
            // 2. Llenamos los elementos del modal que ya tienes en el HTML
            document.getElementById('det-nombre').innerText = info.titulo;
            document.getElementById('det-categoria').innerText = info.categoria;
            document.getElementById('det-objetivo').innerText = info.contenido;

            // Reutilizamos el campo de requisitos para mostrar los artículos
            document.getElementById('info-requisitos').innerText = requisitoTexto;
            document.getElementById('info-creditos').innerText = mat.c || "0";

            // Ocultamos la columna de créditos ya que no aplica al reglamento
            document.getElementById('columna-creditos').style.display = 'none';

            // 3. Mostramos el modal
            document.getElementById('modal-overlay').classList.remove('oculto');
            document.getElementById('modal-detalle').classList.remove('oculto');
        }
    } catch (error) {
        console.error("Error cargando el reglamento:", error);
        alert("No se pudo cargar la información del capítulo.");
    }
}

// Detalle para Prácticas
function mostrarDetallePractica(clave) {
    const info = bdPracticas[clave];
    if(!info) return;

    document.getElementById('det-nombre').innerText = info.t;
    document.getElementById('modal-tag-semestre').innerText = "Práctica Pedagógica";
    document.getElementById('det-categoria').style.display = "none";

    document.getElementById('det-objetivo').innerText = info.d;

    document.getElementById('det-requisitos').innerText = info.req;

    // Ocultar caja de créditos
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
