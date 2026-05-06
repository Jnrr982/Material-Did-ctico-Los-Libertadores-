/**
 * Base de Datos del Reglamento Estudiantil - Sistema Interactivo por Tarjetas
 * Contiene la información desglosada por secciones clickeables.
 */
const REGLAMENTO_DB = {
    "capitulo1": {
        "titulo": "Capítulo I: Disposiciones Generales",
        "categoria": "Marco Institucional",
        "secciones": [
            {
                "titulo": "Alcance del Reglamento",
                "icono": "📖",
                "contenido": "<p>El Reglamento Estudiantil Libertador rige para todos los estudiantes desde el momento de su inscripción en cualquiera de las metodologías (presencial, distancia y virtual) y en todos los niveles de formación (técnico, tecnólogo, profesional y posgrados), así como para los egresados.</p>"
            },
            {
                "titulo": "Criterios Orientadores",
                "icono": "⚖️",
                "contenido": "<ul><li><strong>Integralidad y Participación:</strong> Fomentan el papel del estudiante como miembro activo de la comunidad.</li><li><strong>Garantía de derechos:</strong> Buscan un alto sentido de pertenencia y compromiso ciudadano, asegurando el cumplimiento de las normas.</li></ul>"
            }
        ]
    },
    "capitulo2": {
        "titulo": "Capítulo II: Definiciones",
        "categoria": "Conceptos Clave",
        "secciones": [
            {
                "titulo": "Admisión",
                "icono": "✅",
                "contenido": "<p>Proceso mediante el cual la Institución evalúa si el aspirante inscrito reúne las condiciones y competencias requeridas, autorizando su matrícula.</p>"
            },
            {
                "titulo": "Aplazamiento",
                "icono": "⏸️",
                "contenido": "<p>Suspensión temporal de los estudios que el estudiante solicita formalmente, debiendo realizarse dentro de los plazos establecidos por la Institución.</p>"
            },
            {
                "titulo": "Calendario Académico",
                "icono": "📅",
                "contenido": "<p>Documento oficial que establece las fechas, plazos y periodos para los distintos procesos académicos y administrativos del semestre o año lectivo.</p>"
            },
            {
                "titulo": "Cancelación",
                "icono": "❌",
                "contenido": "<p>Retiro voluntario y formal de uno o varios espacios académicos, o del periodo académico completo, sujeto a los tiempos y condiciones reglamentarias para efectos financieros y académicos.</p>"
            },
            {
                "titulo": "Crédito Académico",
                "icono": "🔢",
                "contenido": "<p>Unidad de medida del trabajo académico. Un crédito equivale a 48 horas totales de trabajo del estudiante (incluyendo trabajo presencial directo y trabajo independiente).</p>"
            },
            {
                "titulo": "Espacio Académico",
                "icono": "📚",
                "contenido": "<p>Unidad básica de aprendizaje (puede ser una asignatura, módulo, seminario, taller, etc.) que forma parte integral del plan de estudios.</p>"
            },
            {
                "titulo": "Evaluación del Aprendizaje",
                "icono": "📝",
                "contenido": "<p>Proceso continuo, formativo y sumativo diseñado para valorar el nivel de desarrollo de las competencias y conocimientos del estudiante.</p>"
            },
            {
                "titulo": "Homologación",
                "icono": "🔄",
                "contenido": "<p>Reconocimiento de espacios académicos que el estudiante ya aprobó en otra institución (nacional o extranjera) o en otros programas de la misma Institución.</p>"
            },
            {
                "titulo": "Plan de Estudios",
                "icono": "🗺️",
                "contenido": "<p>Conjunto estructurado de espacios académicos y requisitos formativos que definen la ruta y el perfil de egreso del estudiante.</p>"
            }
        ]
    },
    "capitulo3": {
        "titulo": "Capítulo III: Objetivos",
        "categoria": "Marco Institucional",
        "secciones": [
            {
                "titulo": "Objetivo General",
                "icono": "🎯",
                "contenido": "<p>Establecer las reglas para el relacionamiento armónico entre el estudiante y la comunidad libertadora, enfocado en la formación integral y el desarrollo humano y ético.</p>"
            },
            {
                "titulo": "Objetivos Específicos",
                "icono": "✅",
                "contenido": "<ul><li>Definir los procesos de ingreso, permanencia, evaluación y egreso.</li><li>Establecer el marco de derechos, deberes, estímulos e incentivos.</li><li>Fijar un régimen disciplinario y pautas de convivencia para un ambiente académico sano.</li></ul>"
            }
        ]
    },
    "capitulo4": {
        "titulo": "Capítulo IV: El Estudiante",
        "categoria": "Vida Estudiantil",
        "secciones": [
            {
                "titulo": "Estudiante Regular",
                "icono": "👤",
                "contenido": "<p>Es aquel que se encuentra matriculado activamente en uno o más programas formales de la Institución que conducen a la obtención de un título.</p>"
            },
            {
                "titulo": "Estudiante Visitante y de Convalidación",
                "icono": "🤝",
                "contenido": "<ul><li><strong>Visitante:</strong> Matriculado en otra IES que cursa espacios mediante un convenio interinstitucional.</li><li><strong>De convalidación:</strong> Realizó su pregrado en el exterior y cursa créditos específicos exigidos por el Estado para convalidar su título en Colombia.</li></ul>"
            },
            {
                "titulo": "Pérdida de Condición Estudiantil",
                "icono": "🚫",
                "contenido": "<p>Se pierde por: culminar el programa (grado), no renovar la matrícula, sanción disciplinaria de expulsión, bajo rendimiento académico (tercera vez), cancelación voluntaria o fallecimiento.</p>"
            }
        ]
    },
    "capitulo5": {
        "titulo": "Capítulo V: Ingreso y Matrícula",
        "categoria": "Procesos Académicos",
        "secciones": [
            {
                "titulo": "Inscripción",
                "icono": "📝",
                "contenido": "<p>Diligenciamiento del formulario oficial y pago de derechos. Tiene una vigencia de un año y no es reembolsable. Se requiere título de bachiller y Pruebas de Estado (para pregrado).</p>"
            },
            {
                "titulo": "Matrícula Inicial",
                "icono": "✍️",
                "contenido": "<p>Manifestación voluntaria del aspirante admitido que le otorga el derecho a cursar el programa. Exige el pago del valor pecuniario y la inscripción formal de los espacios académicos en el sistema.</p>"
            },
            {
                "titulo": "Renovación de Matrícula",
                "icono": "🔄",
                "contenido": "<p>Para estudiantes antiguos. Requiere no tener sanciones disciplinarias, estar a paz y salvo financieramente e inscribir los cursos. <strong>Nota financiera:</strong> Inscribir hasta la mitad más 1 de los créditos cuesta el 50%; si excede, se paga el 100%.</p>"
            }
        ]
    },
    "capitulo6": {
        "titulo": "Capítulo VI: Créditos y Espacios Académicos",
        "categoria": "Procesos Académicos",
        "secciones": [
            {
                "titulo": "Carga Académica y Adiciones",
                "icono": "🎒",
                "contenido": "<ul><li>Se deben inscribir prioritariamente los espacios académicos perdidos.</li><li>Se pueden adicionar hasta tres (3) créditos extra a la carga regular, asumiendo su costo.</li><li>Se permite cursar hasta un 19% de créditos en otra metodología (ej. virtual), previa aprobación.</li></ul>"
            },
            {
                "titulo": "Políticas de Reintegro por Cancelación",
                "icono": "💸",
                "contenido": "<ul><li><strong>100%:</strong> Si la Institución cancela la oferta del programa/curso.</li><li><strong>80%:</strong> Si el estudiante lo solicita antes de iniciar las clases oficiales.</li><li><strong>50%:</strong> Hasta 15 días calendario después del inicio de clases.</li><li><strong>0%:</strong> Vencidos los plazos anteriores.</li></ul>"
            }
        ]
    },
    "capitulo7": {
        "titulo": "Capítulo VII: Entidades de Financiación",
        "categoria": "Financiero",
        "secciones": [
            {
                "titulo": "Créditos Educativos e ICETEX",
                "icono": "🏦",
                "contenido": "<p>Si un estudiante adquiere financiación con entidades externas y ha pagado previamente su matrícula con recursos propios, la Institución realizará el reintegro de ese dinero <strong>únicamente</strong> cuando la entidad financiera haya realizado el desembolso efectivo a la universidad.</p>"
            }
        ]
    },
    "capitulo8": {
        "titulo": "Capítulo VIII: Evaluación y Rendimiento",
        "categoria": "Evaluación",
        "secciones": [
            {
                "titulo": "Asistencia y Fallas",
                "icono": "⚠️",
                "contenido": "<p>En la metodología presencial, acumular inasistencias superiores al <strong>20%</strong> de las clases programadas genera la Pérdida Por Fallas (PPF), lo que equivale a una calificación definitiva de <strong>0.0</strong> en ese espacio académico.</p>"
            },
            {
                "titulo": "Sistema de Calificaciones",
                "icono": "📊",
                "contenido": "<ul><li><strong>Escala:</strong> De 0.0 a 5.0.</li><li><strong>Aprobación:</strong> Nota mínima de <strong>3.0</strong>.</li><li><strong>Cortes:</strong> Primer parcial (30%), Segundo parcial (30%) y Examen final (40%).</li></ul>"
            },
            {
                "titulo": "Rendimiento y Repitencia",
                "icono": "📉",
                "contenido": "<ul><li><strong>Segunda vez:</strong> El curso perdido se puede repetir como carga académica normal.</li><li><strong>Tercera vez:</strong> Se pierde el cupo en el programa por rendimiento académico.</li></ul><p><em>Nota: Estudiantes con promedio inferior a 3.5 reciben acompañamiento del programa institucional PyGO.</em></p>"
            }
        ]
    },
    "capitulo9": {
        "titulo": "Capítulo IX: Derechos y Deberes",
        "categoria": "Vida Estudiantil",
        "secciones": [
            {
                "titulo": "Derechos de los Estudiantes",
                "icono": "🛡️",
                "contenido": "<ul><li>Recibir formación integral de calidad y trato respetuoso.</li><li>Conocer su plan de estudios y los criterios de evaluación desde el inicio.</li><li>Solicitar revisión de calificaciones e interponer recursos (reposición/apelación).</li><li>Participar en la evaluación docente y elegir representantes.</li></ul>"
            },
            {
                "titulo": "Deberes de los Estudiantes",
                "icono": "📋",
                "contenido": "<ul><li>Conocer y acatar los reglamentos de la Institución.</li><li>Portar el carné estudiantil físico o digital (documento intransferible).</li><li>Respetar los derechos de autor y abstenerse de cualquier tipo de fraude.</li><li>Dar buen uso a la infraestructura, bibliotecas y plataformas virtuales.</li></ul>"
            }
        ]
    },
    "capitulo10": {
        "titulo": "Capítulo X: Reintegro y Transferencia",
        "categoria": "Procesos Académicos",
        "secciones": [
            {
                "titulo": "Proceso de Reintegro",
                "icono": "🔙",
                "contenido": "<p>Un estudiante retirado puede solicitar retomar sus estudios si no han pasado más de 3 años, está a paz y salvo financiero/académico, y no posee sanciones disciplinarias vigentes que se lo impidan.</p>"
            },
            {
                "titulo": "Transferencia Externa",
                "icono": "📥",
                "contenido": "<p>Ingreso de un estudiante proveniente de otra Institución de Educación Superior. Se homologa máximo el <strong>60%</strong> de los créditos del plan de estudios (requiere nota mínima de 3.0 en cada uno). Este trámite genera un cobro pecuniario y tarda hasta 10 días hábiles en ser evaluado.</p>"
            },
            {
                "titulo": "Transferencia Interna",
                "icono": "🔀",
                "contenido": "<p>Cambio de programa dentro de Los Libertadores. Se homologa hasta el 60% de los créditos (con nota mínima de 3.0). Este proceso <strong>no</strong> tiene costo pecuniario y el Departamento lo resuelve en máximo 8 días hábiles.</p>"
            }
        ]
    }
};

/**
 * Función que se ejecuta al cargar la página para configurar la interfaz
 */
function inicializarCapitulo() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id && REGLAMENTO_DB[id]) {
        const info = REGLAMENTO_DB[id];

        // 1. Llenar los datos generales del capítulo
        const elTitulo = document.getElementById('cap-titulo');
        const elCategoria = document.getElementById('cap-categoria');

        if (elTitulo) elTitulo.innerText = info.titulo;
        if (elCategoria) elCategoria.innerText = info.categoria;

        // 2. Generar las tarjetas interactivas
        const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
        const contenedorDetalle = document.getElementById('contenedor-detalle');

        if (contenedorTarjetas && contenedorDetalle) {
            let tarjetasHTML = '';

            // Recorremos las secciones del capítulo para crear los botones/cuadros
            info.secciones.forEach((seccion, index) => {
                // Generamos un botón que al hacer clic llama a mostrarDetalle()
                tarjetasHTML += `
                    <button class="tarjeta" onclick="mostrarDetalle('${id}', ${index})">
                    <span class="icono-tarjeta">${seccion.icono}</span>
                    <span class="texto-tarjeta">${seccion.titulo}</span>
                    </button>
                `;
            });

            contenedorTarjetas.innerHTML = tarjetasHTML;

            // Mensaje inicial en el contenedor de detalle (antes de que el usuario haga clic)
            contenedorDetalle.innerHTML = `
                <div class="mensaje-bienvenida">
                    <h3>👈 Selecciona un apartado</h3>
                    <p>Haz clic en cualquiera de los cuadros para ver la información detallada.</p>
                </div>
                `;
        }
    } else {
        // Manejo de error si no hay un id válido en la URL
        const contenedorPrincipal = document.getElementById('contenedor-principal');
        if (contenedorPrincipal) {
            contenedorPrincipal.innerHTML = "<p><em>⚠️ Por favor, selecciona un capítulo válido para visualizar su contenido.</em></p>";
        }
    }
}

/**
 * Función que se activa al hacer clic en una tarjeta específica
 * @param {string} capituloId - El ID del capítulo actual (ej. 'capitulo2')
 * @param {number} seccionIndex - El índice numérico de la sección en el array
 */
function mostrarDetalle(capituloId, seccionIndex) {
    const seccion = REGLAMENTO_DB[capituloId].secciones[seccionIndex];
    const contenedorDetalle = document.getElementById('contenedor-detalle');

    if (contenedorDetalle) {
        // Inyectamos el contenido específico de esa tarjeta
        contenedorDetalle.innerHTML = `
            <div class="detalle-animado">
                <h3 class="titulo-detalle">${seccion.icono} ${seccion.titulo}</h3>
                <div class="contenido-detalle">
                    ${seccion.contenido}
                </div>
            </div>
        `;
    }
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarCapitulo);
