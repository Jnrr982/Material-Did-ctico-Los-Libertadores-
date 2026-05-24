// ============================================================
// BUSCADOR GLOBAL v3 — Reemplaza buscador.js completo
// Cada sección/tarjeta de cada capítulo es buscable
// ============================================================

function construirIndice() {
    const indice = [];

    // -------------------------------------------------------
    // 1. SECCIONES INDIVIDUALES DE CADA CAPÍTULO
    // Cada entrada = una tarjeta clickeable del capítulo
    // -------------------------------------------------------
    const seccionesReglamento = [

        // CAPÍTULO 1
        { cap: "capitulo1", titulo: "Alcance del Reglamento", palabras: "alcance reglamento aplica estudiantes inscripción metodología presencial distancia virtual técnico tecnólogo profesional posgrado egresados ámbito aplicación artículo 2" },
        { cap: "capitulo1", titulo: "Criterios Orientadores", palabras: "criterios orientadores integralidad participación garantía derechos cumplimiento normas tejido social ciudadanos sentido pertenencia valores responsabilidad honradez respeto artículo 3" },

        // CAPÍTULO 2
        { cap: "capitulo2", titulo: "Inscripción y Admisión", palabras: "inscripción admisión aspirante correo electrónico notificación orden matrícula programa proceso ingreso artículo 4" },
        { cap: "capitulo2", titulo: "Matrícula y Estudiante", palabras: "matrícula estudiante manifestación voluntaria filosofía institucional reglamentos obligaciones condición académico administrativo artículo 4" },
        { cap: "capitulo2", titulo: "Crédito y Espacio Académico", palabras: "crédito académico espacio académico 48 horas trabajo estudiante presencial independiente unidad estudio curso seminario módulo asignatura artículo 4" },
        { cap: "capitulo2", titulo: "Plan de Estudios y Programa Académico", palabras: "plan estudios programa académico competencias perfil profesional laboral título ruta formativa flexibilidad autonomía aprendizaje facultades pregrado posgrado artículo 4" },
        { cap: "capitulo2", titulo: "Calendario y Período Académico", palabras: "calendario académico período académico semestral trimestral consejo superior programación actividades administrativas apoyo aspirantes profesores directivos padres artículo 4" },
        { cap: "capitulo2", titulo: "Carga Académica y Metodología", palabras: "carga académica metodología total espacios académicos parametrización créditos semestre presencial distancia tradicional virtual registro calificado ministerio artículo 4" },
        { cap: "capitulo2", titulo: "Aplazamiento y Cancelación", palabras: "aplazamiento cancelación matrícula suspender proceso formativo período lectivo retirar último día clase artículo 4" },
        { cap: "capitulo2", titulo: "Homologación", palabras: "homologación proceso académico reconocimiento facultades cursos espacios aprobados IES Colombia ministerio educación nacional extranjeras artículo 4" },
        { cap: "capitulo2", titulo: "Transferencias", palabras: "transferencia transferencia externa transferencia interna cambio programa homologación admisión aspirante IES nacional extranjera artículo 4" },
        { cap: "capitulo2", titulo: "Intercambio y Movilidad", palabras: "intercambio académico movilidad estudiantil convenio vigente IES exterior Colombia visibilidad programa actores educativos escenarios locales nacionales internacionales artículo 4" },
        { cap: "capitulo2", titulo: "Evaluación del Aprendizaje", palabras: "evaluación aprendizaje proceso permanente formación integral competencias objetivos calidad excelencia mejoramiento cognitiva actitudinal volitiva psicomotora calificación artículo 4" },
        { cap: "capitulo2", titulo: "Opción y Proyecto de Grado", palabras: "opción grado proyecto grado requisito académico última etapa competencias investigación creación innovación descriptivas argumentativas propositivas artículo 4" },
        { cap: "capitulo2", titulo: "Título Académico", palabras: "título académico reconocimiento pregrado posgrado cualquier metodología ejerce profesión ministerio educación nacional artículo 4" },
        { cap: "capitulo2", titulo: "PyGO", palabras: "pygo programa permanencia graduación oportuna bienestar universitario apoyo logro académico preventivas académicas psicosociales financieras deserción artículo 4" },

        // CAPÍTULO 3
        { cap: "capitulo3", titulo: "Objetivo General", palabras: "objetivo general relacionamiento comunidad libertadora formación integral desarrollo humano ético inscripción admisión matrícula derechos deberes distinciones disciplinario artículo 5" },
        { cap: "capitulo3", titulo: "Objetivos Específicos", palabras: "objetivos específicos ingreso permanencia evaluación egreso derechos deberes estímulos distinciones participación régimen académico disciplinario convivencia artículo 6" },

        // CAPÍTULO 4
        { cap: "capitulo4", titulo: "Definición y Clasificación de Estudiantes", palabras: "estudiante regular visitante convalidación clasificación tipos categorías matriculado programa educación formal título metodologías convenio exterior contaduría derecho educación ministerio artículo 7 artículo 8" },
        { cap: "capitulo4", titulo: "Permanencia y PyGO", palabras: "permanencia pygo bienestar universitario condiciones armónicas formación integral riesgos deserción académicos psicosociales convivenciales financieros culminación proyecto vida artículo 9" },
        { cap: "capitulo4", titulo: "Pérdida de la Condición de Estudiante", palabras: "pérdida condición estudiante causales retiro culminado programa título no renovar matrícula calendario académico disposición sanción disciplinaria cancelación voluntaria salud eps fallecimiento artículo 10" },

        // CAPÍTULO 5
        { cap: "capitulo5", titulo: "Proceso de Inscripción y Veracidad", palabras: "inscripción aspirante formulario pago válido año devolución gravedad juramento veracidad información documentos normatividad admisiones artículo 11 artículo 17" },
        { cap: "capitulo5", titulo: "Requisitos de Pregrado y Posgrado", palabras: "requisitos pregrado posgrado bachiller acta grado pruebas estado transferencia contenidos programáticos notas certificado artículo 12" },
        { cap: "capitulo5", titulo: "Estudiantes de Convalidación", palabras: "convalidación documentación apostilladas título extranjero visa estudiante admisiones artículo 14" },
        { cap: "capitulo5", titulo: "Títulos obtenidos en el Exterior", palabras: "títulos exterior extranjero visa equivalente período académico diez días calendario admisiones cancelación devolución artículo 13" },
        { cap: "capitulo5", titulo: "Ciclos Propedéuticos", palabras: "ciclos propedéuticos secuenciales complementarios título desempeño laboral continuar siguiente ciclo inscripción sin costo oficina admisiones artículo 15 artículo 16" },
        { cap: "capitulo5", titulo: "Proceso de Admisión", palabras: "admisión proceso condiciones autoriza matrícula notificación correo electrónico orden matrícula no reembolso no reembolsado artículo 18" },
        { cap: "capitulo5", titulo: "La Matrícula", palabras: "matrícula manifestación voluntaria filosofía institucional reglamentos proceso académico inscripción proceso administrativo pago derechos pecuniarios artículo 19" },
        { cap: "capitulo5", titulo: "Formalización Matrícula Nuevos y Transferentes", palabras: "formalización matrícula nuevos transferentes requisitos derechos pecuniarios acta homologación dirección programa primer semestre artículo 20" },
        { cap: "capitulo5", titulo: "Renovación de Matrícula", palabras: "renovación matrícula segundo período paz salvo sanción inscripción espacios cancelar valores no formalice no adquiere condición estudiante artículo 21" },
        { cap: "capitulo5", titulo: "Costos y Créditos — Pago 50% y 100%", palabras: "costos créditos pago 50% mitad más uno 100% últimos espacios pendientes culminar plan estudios mitad más tres valor créditos inscritos artículo 21" },

        // CAPÍTULO 6
        { cap: "capitulo6", titulo: "Inscripción y Priorización de Créditos", palabras: "inscripción priorización primer semestre carga completa segundo semestre perdidos obligatorio avanzado director departamento orientación artículo 22 artículo 24" },
        { cap: "capitulo6", titulo: "Adiciones y Flexibilidad entre Metodologías", palabras: "créditos adicionales tres créditos 19% metodologías presencial virtual distancia aprobación director departamento costos adicionales artículo 25 artículo 26" },
        { cap: "capitulo6", titulo: "Cancelación de Espacios Académicos", palabras: "cancelación espacios académicos segunda tercera vez consejo facultad no cursados no procede devolución artículo 27" },
        { cap: "capitulo6", titulo: "Cancelación Total y Reintegros de Dinero", palabras: "cancelación total carga académica reintegro dinero devolución 100% institución cancela oferta 80% antes inicio clases 50% quince días calendario fuerza mayor salud laboral vicerrectoría artículo 29 artículo 30" },

        // CAPÍTULO 7
        { cap: "capitulo7", titulo: "Desembolsos y Cruce de Cuentas ICETEX", palabras: "desembolso icetex banco fondo nacional ahorro reintegro dinero propio matrícula crédito educativo entidades financieras fecha solicitud porcentaje artículo 31" },

        // CAPÍTULO 8
        { cap: "capitulo8", titulo: "Disposiciones de Trayectoria Académica", palabras: "disposiciones trayectoria académica normas instrumentos gestión ordenan integran articulan permanencia institución regulares artículo 32 artículo 33" },
        { cap: "capitulo8", titulo: "Fallas e Inasistencia (PPF)", palabras: "fallas inasistencia ppf pérdida por fallas 20% clases actividades programadas presencial cero 0.0 promedio período virtual distancia plataforma compromisos registro profesor artículo 34" },
        { cap: "capitulo8", titulo: "Evaluación del Aprendizaje", palabras: "evaluación aprendizaje proceso permanente formación integral competencias objetivos calidad excelencia mejoramiento cognitiva actitudinal volitiva psicomotora calificación artículo 35" },
        { cap: "capitulo8", titulo: "Sistema de Calificación", palabras: "calificación valoración escala 0.0 5.0 mínima aprobatoria 3.0 pérdida espacio académico aproximadas entero decimal sistema información académica publicación artículo 36" },
        { cap: "capitulo8", titulo: "Criterios de Evaluación", palabras: "criterios evaluación pruebas orales escritas trabajos grupo individuales ensayos talleres parciales finales mínimo tres evaluaciones período syllabus artículo 37" },
        { cap: "capitulo8", titulo: "Cursos Intersemestrales", palabras: "cursos intersemestrales períodos intensidad horaria exigencias académicas efectos consejo facultad oportunidad pertinencia costos derechos pecuniarios artículo 38" },
        { cap: "capitulo8", titulo: "Registro Académico — Cortes 30/30/40", palabras: "registro académico calificación definitiva primer parcial 30% segundo parcial 30% examen final 40% suma ponderada sin previo aviso decanatura artículo 39" },
        { cap: "capitulo8", titulo: "Registro de Novedades Académicas", palabras: "registro novedades académicas dos días hábiles cierre parciales nota definitiva calendario académico períodos cerrados artículo 40" },
        { cap: "capitulo8", titulo: "Exámenes Parciales y Finales", palabras: "exámenes parciales primeros dos cortes finales tercer corte escrito oral jurado idóneo comité curricular inasistencia cero 0.0 artículo 41" },
        { cap: "capitulo8", titulo: "Exámenes Supletorios", palabras: "supletorios inasistencia justificada tres días hábiles solicitud ocho días hábiles realización costo adicional artículo 41" },
        { cap: "capitulo8", titulo: "Exámenes de Suficiencia", palabras: "suficiencia validar conocimientos sin cursar 20% plan estudios nota mínima 3.8 perdida primera vez escrito departamento artículo 41" },
        { cap: "capitulo8", titulo: "Exámenes Preparatorios y de Clasificación", palabras: "preparatorios clasificación área conocimiento aprobados todos espacios ubicación aprobación artículo 41" },
        { cap: "capitulo8", titulo: "Revisión de Calificaciones", palabras: "revisión calificaciones segundo calificador director programa dos días hábiles inconformidad no inferior inicial novedad académica admisiones registro artículo 42" },
        { cap: "capitulo8", titulo: "Repitencia de Espacios Académicos", palabras: "repitencia segunda vez tercera vez pérdida cupo programa retirado rendimiento académico pygo bienestar acompañamiento artículo 43 artículo 44 artículo 45" },
        { cap: "capitulo8", titulo: "Sistema de Promedios", palabras: "promedio período académico promedio acumulado entero dos decimales no aproximan referente permanencia titulación distinciones becas estímulos certificaciones descuentos 3.5 pygo artículo 46" },

        // CAPÍTULO 9
        { cap: "capitulo9", titulo: "Formación y Participación", palabras: "derecho formación integral principios constitucionales legales participación procesos académicos investigativos culturales actividades libre expresión ideas respetuosa artículo 48" },
        { cap: "capitulo9", titulo: "Trato Digno y Orientación", palabras: "trato digno respetuoso todos miembros comunidad educativa orientación oportuna escuchado asistido instancias académicas administrativas servicios comunicación información artículo 48" },
        { cap: "capitulo9", titulo: "Acceso a Normativa e Información", palabras: "acceso reglamentos políticas procedimientos peticiones sugerencias conducto regular reposición apelación calendario académico derechos pecuniarios artículo 48" },
        { cap: "capitulo9", titulo: "Programa Académico y Evaluación", palabras: "programa académico plan estudios contenidos criterios evaluación inicio período escrito revisar pruebas evaluar docentes desempeño semestral artículo 48" },
        { cap: "capitulo9", titulo: "Certificaciones y Acompañamiento PyGO", palabras: "certificación desempeño académico pygo programa permanencia graduación oportuna consejería tutorías formación integral artículo 48" },
        { cap: "capitulo9", titulo: "Defensa y Debido Proceso", palabras: "defensa debido proceso respuestas imparciales objetivas disciplinarias pruebas debatir recursos decisiones afecten artículo 48" },
        { cap: "capitulo9", titulo: "Participación y Datos Personales", palabras: "participación elegir elegido órganos colegiados iniciativas comunidad educativa datos personales confidencialidad actualizar rectificar infraestructura convenios artículo 48" },
        { cap: "capitulo9", titulo: "Deberes Éticos e Institucionales", palabras: "deberes filosofía institucional valores principios reglamentos normatividad desconocimiento no exime carné estudiantil intransferible identificación artículo 49" },
        { cap: "capitulo9", titulo: "Deberes de Convivencia y Respeto", palabras: "convivencia respeto participación asistencia colaboración actividades libre expresión responsable higiene seguridad calidad ambiente trato digno artículo 49" },
        { cap: "capitulo9", titulo: "Deberes en el Uso de Recursos", palabras: "recursos biblioteca audiovisuales cómputo laboratorios comunicación respetuosa idioma decisiones académicas disciplinarias autoridades artículo 49" },
        { cap: "capitulo9", titulo: "Deberes Cívicos y de Representación", palabras: "propiedad intelectual símbolos representar dignamente evaluaciones encuestas institucionales información responsablemente infraestructura convenios daños artículo 49" },

        // CAPÍTULO 10
        { cap: "capitulo10", titulo: "Requisitos para el Reintegro", palabras: "reintegro solicitud tres años retiro director departamento coordinador plazos calendario motivos sanción disciplinaria paz salvo artículo 50" },
        { cap: "capitulo10", titulo: "Aprobación del Reintegro", palabras: "aprobación reintegro consejo facultad modificaciones plan estudios nivelación homologación actualización derechos pecuniarios disciplinaria cumplido artículo 51" },
        { cap: "capitulo10", titulo: "Transferencia Externa — Definición", palabras: "transferencia externa homologa IES nacional extranjera ministerio educación nacional autoridad competente educación formal inscripción artículo 52" },
        { cap: "capitulo10", titulo: "Homologación — Transferencia Externa", palabras: "homologación transferencia externa 60% créditos nota mínima 3.0 equivalencias contenido intensidad horaria bienestar orientación profesional costos derechos pecuniarios artículo 53" },
        { cap: "capitulo10", titulo: "Transferencia Interna — Definición", palabras: "transferencia interna cambio programa pregrado posgrado mismo nivel formación libertadores artículo 54" },
        { cap: "capitulo10", titulo: "Homologación — Transferencia Interna", palabras: "homologación transferencia interna 60% créditos nota mínima 3.0 sin costo no causan derechos pecuniarios admisiones artículo 55 artículo 59" },
        { cap: "capitulo10", titulo: "Aprobación de la Transferencia", palabras: "aprobación transferencia ocho días hábiles interna diez días hábiles externa cupos disponibles escrito obligaciones nivelación acta homologación artículo 57" },
        { cap: "capitulo10", titulo: "Registro y Control de Transferencias", palabras: "registro control transferencia acta homologación admisiones registro espacio procedencia reconocido fecha nota firma artículo 58" }
    ];

    seccionesReglamento.forEach(sec => {
        indice.push({
            tipo: "Reglamento",
            icono: "📖",
            titulo: sec.titulo,
            descripcion: `Haz clic para ir a este apartado en el capítulo correspondiente.`,
            palabrasClave: sec.palabras.toLowerCase(),
            accion: () => window.location.href = `capitulo.html?id=${sec.cap}`
        });
    });

    // -------------------------------------------------------
    // 2. SECCIONES INDIVIDUALES — PRÁCTICAS
    // -------------------------------------------------------
    const seccionesPracticas = [
        { titulo: "Definición de Práctica Profesional", palabras: "práctica profesional espacio formativo observación intervención competencias calificación certificación horas proyectos hoja vida pregrado posgrado artículo 60" },
        { titulo: "Propósitos de las Prácticas", palabras: "propósito objetivo acercar experiencias formativas realidad social laboral confrontar resolver problemas adquirir experiencia aportar soluciones primer empleo retroalimentación academia sector externo artículo 61" },
        { titulo: "Obligatoriedad y Condiciones", palabras: "obligatoriedad plan estudios aval director departamento no genera relación laboral bonificación especie contrato aprendizaje normatividad arl riesgos laborales afiliación artículo 62" },
        { titulo: "Práctica Empresarial", palabras: "empresarial empresa organización pública privada nacional internacional observación formación intervención funciones actividades convenio partes artículo 63" },
        { titulo: "Práctica Social e Investigativa", palabras: "social investigativa proyectos impacto ong fundaciones sin ánimo lucro mejoramiento innovación desarrollo sostenibilidad semilleros investigación organizaciones aliadas artículo 63" },
        { titulo: "Práctica Intra-laboral y de Emprendimiento", palabras: "intra-laboral emprendimiento empresa propia familiar primer grado consanguinidad un año vinculación mejoramiento innovación desarrollo 18 meses catalogada constitida artículo 63" },
        { titulo: "Práctica Internacional e Interna", palabras: "internacional interna extranjero fuera territorio nacional organizaciones colombianas intercambio conocimientos culturales tecnológicos convenio promotora voluntaria costos instalaciones libertadores disciplinar artículo 63" },
        { titulo: "Reglamentación y Lineamientos de Práctica", palabras: "reglamento institucional lineamientos consejo facultad dirección prácticas convenio marco específico contrato aprendizaje tutor académico supervisor centro práctica arl afiliación clínicas docencia consultoría duración intensidad horaria artículo 64" },
        { titulo: "Movilidad Local, Nacional e Internacional", palabras: "movilidad local nacional internacional actividades proceso formación estudiante grupo profesor comunidad organización institución sedes ciudades artículo 65 artículo 66" },
        { titulo: "Responsabilidades en la Movilidad", palabras: "responsabilidad cambios itinerario hospedaje procedimiento académicas disciplinarias pérdida fallas rendimiento repetir cancelar derechos postularse intercambio dos períodos artículo 67 artículo 68" },
        { titulo: "Cursos de Verano", palabras: "verano cursos nacionales internacionales convenio homologados porcentajes transferencia créditos intensidad horaria consejo facultad evaluaciones criterios metodológicos artículo 69" },
        { titulo: "Gastos e Incentivo Económico — 70% descuento movilidad", palabras: "gastos costos viajes prácticas verano intercambio sufragados 70% descuento matrícula pregrado aceptados instituciones aliadas convenio promedio acumulado 4.0 ordinaria semestre presupuestal disponibilidad reciprocidad financiación artículo 70" }
    ];

    seccionesPracticas.forEach(sec => {
        indice.push({
            tipo: "Prácticas",
            icono: "💼",
            titulo: sec.titulo,
            descripcion: "Haz clic para ir a este apartado en el Capítulo XI.",
            palabrasClave: sec.palabras.toLowerCase(),
            accion: () => window.location.href = `practica.html`
        });
    });

    // -------------------------------------------------------
    // 3. PROGRAMAS ACADÉMICOS
    // -------------------------------------------------------
    const programasInfo = [
        { nombre: "Licenciatura en Educación Infantil (Bogotá)", clave: "Educación Infantil Bogotá", palabras: "educación infantil bogotá licenciatura primera infancia presencial niños niñas maternal preescolar jardín colegio sede bogotá" },
        { nombre: "Licenciatura en Educación Infantil (Cartagena)", clave: "Educación Infantil Cartagena", palabras: "educación infantil cartagena licenciatura primera infancia presencial niños niñas sede cartagena caribe costa" },
        { nombre: "Licenciatura en Educación Especial", clave: "Educación Especial Bogotá", palabras: "educación especial licenciatura discapacidad inclusión diversidad cognitiva intelectual sensorial motora dua ajustes razonables bogotá" },
        { nombre: "Licenciatura en Educación Infantil (Virtual)", clave: "Educación Infantil Virtual", palabras: "educación infantil virtual licenciatura primera infancia online distancia flexible plataforma e-learning" },
        { nombre: "Licenciatura en Etnoeducación (Virtual)", clave: "Etnoeducación Virtual", palabras: "etnoeducación virtual licenciatura comunidades étnicas afro indígena territorio interculturalidad lenguas nativas planes de vida" }
    ];

    programasInfo.forEach(prog => {
        indice.push({
            tipo: "Programa",
            icono: "🎓",
            titulo: prog.nombre,
            descripcion: "Haz clic para ver el mapa curricular completo de este programa.",
            palabrasClave: prog.palabras.toLowerCase(),
            accion: () => window.location.href = `index.html?carrera=${encodeURIComponent(prog.clave)}&modo=mapa-general`
        });
    });

    // -------------------------------------------------------
    // 4. MATERIAS POR PROGRAMA
    // -------------------------------------------------------
    if (typeof bdMaterias !== 'undefined') {
        Object.entries(bdMaterias).forEach(([programa, semestres]) => {
            semestres.forEach((materiasDelSemestre, indexSemestre) => {
                materiasDelSemestre.forEach((mat, indexMateria) => {
                    let categoriaNombre = "";
                    if(mat.t === "cat-basico")        categoriaNombre = "Básico / Pedagogía";
                    if(mat.t === "cat-practica")      categoriaNombre = "Práctica Pedagógica";
                    if(mat.t === "cat-disciplinar")   categoriaNombre = "Disciplinar / Didáctica";
                    if(mat.t === "cat-transversal")   categoriaNombre = "Transversal / Generales";
                    if(mat.t === "cat-investigacion") categoriaNombre = "Investigación";
                    if(mat.t === "cat-electivo")      categoriaNombre = "Electividad";

                    let raKeywords = "";
                    if (typeof bdResultadosAprendizaje !== 'undefined' &&
                        bdResultadosAprendizaje[programa] &&
                        bdResultadosAprendizaje[programa][mat.n]) {
                        raKeywords = bdResultadosAprendizaje[programa][mat.n].join(" ").toLowerCase();
                    }

                    indice.push({
                        tipo: "Asignatura",
                        icono: "📚",
                        titulo: mat.n,
                        descripcion: `${programa} — Semestre ${indexSemestre + 1} — ${categoriaNombre} — ${mat.c} créditos`,
                        palabrasClave: `${mat.n.toLowerCase()} ${programa.toLowerCase()} ${categoriaNombre.toLowerCase()} semestre ${indexSemestre + 1} créditos ${mat.c} ${raKeywords}`,
                        accion: () => {
                            if (typeof seleccionarCarrera === 'function') {
                                seleccionarCarrera(programa, 'mapa-general');
                                setTimeout(() => verDetalleMateria(indexSemestre, indexMateria), 350);
                            } else {
                                window.location.href = `index.html?carrera=${encodeURIComponent(programa)}&modo=mapa-general`;
                            }
                        }
                    });
                });
            });
        });
    }

    return indice;
}

let indiceGlobal = null;

function buscar(query) {
    if (!indiceGlobal) indiceGlobal = construirIndice();
    const terminos = query.toLowerCase().trim().split(/\s+/).filter(t => t.length > 1);
    if (terminos.length === 0) return [];

    const resultados = [];
    const vistos = new Set();

    indiceGlobal.forEach(item => {
        const textoCompleto = `${item.titulo} ${item.descripcion} ${item.palabrasClave}`.toLowerCase();
        const coincidencias = terminos.filter(t => textoCompleto.includes(t)).length;
        if (coincidencias > 0) {
            const clave = item.titulo + item.descripcion;
            if (!vistos.has(clave)) {
                vistos.add(clave);
                resultados.push({ ...item, score: coincidencias });
            }
        }
    });

    return resultados.sort((a, b) => b.score - a.score).slice(0, 14);
}

// ==========================================
// INTERFAZ
// ==========================================

function abrirBuscador() {
    document.getElementById('buscador-overlay').classList.remove('oculto');
    document.getElementById('buscador-input').value = '';
    document.getElementById('buscador-resultados').innerHTML = `
        <p style="text-align:center;color:#aaa;padding:30px;font-size:0.95rem;">
            Escribe para buscar en capítulos, asignaturas y prácticas...
        </p>`;
    setTimeout(() => document.getElementById('buscador-input').focus(), 100);
}

function cerrarBuscador() {
    document.getElementById('buscador-overlay').classList.add('oculto');
}

function onBuscadorInput() {
    const query = document.getElementById('buscador-input').value.trim();
    const contenedor = document.getElementById('buscador-resultados');

    if (query.length < 2) {
        contenedor.innerHTML = `<p style="text-align:center;color:#aaa;padding:30px;font-size:0.95rem;">Escribe al menos 2 caracteres para buscar...</p>`;
        return;
    }

    const resultados = buscar(query);

    if (resultados.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center;padding:40px;">
                <div style="font-size:2.5rem;margin-bottom:10px;">🔍</div>
                <p style="color:#888;">Sin resultados para <strong>"${query}"</strong></p>
                <p style="color:#aaa;font-size:0.85rem;">Intenta con otras palabras clave</p>
            </div>`;
        return;
    }

    const coloresTipo = {
        "Reglamento": { texto: "#006473", fondo: "#E1F5EE" },
        "Prácticas":  { texto: "#993C1D", fondo: "#FAECE7" },
        "Asignatura": { texto: "#533AB7", fondo: "#EEEDFE" },
        "Programa":   { texto: "#185FA5", fondo: "#E6F1FB" }
    };
    const iconosTipo = { "Reglamento": "📖", "Prácticas": "💼", "Asignatura": "📚", "Programa": "🎓" };

    contenedor.innerHTML = `
        <p style="font-size:12px;color:#999;margin:0 0 10px 2px;">
            ${resultados.length} resultado${resultados.length > 1 ? 's' : ''} para <strong style="color:#444;">"${query}"</strong>
        </p>
        ${resultados.map((r, i) => {
            const c = coloresTipo[r.tipo] || coloresTipo["Reglamento"];
            return `
            <div class="resultado-item" onclick="ejecutarResultado(${i})">
                <div class="resultado-icono" style="background:${c.fondo};width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem;">
                    ${iconosTipo[r.tipo] || '📄'}
                </div>
                <div style="flex:1;min-width:0;">
                    <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:3px;">
                        <span style="background:${c.fondo};color:${c.texto};font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">${r.tipo}</span>
                        <strong style="font-size:0.88rem;color:#222;">${r.titulo}</strong>
                    </div>
                    <p style="font-size:0.78rem;color:#666;margin:0;line-height:1.4;">${r.descripcion}</p>
                </div>
                <span style="color:#ccc;font-size:1rem;flex-shrink:0;margin-top:3px;">›</span>
            </div>`;
        }).join('')}`;

    window._resultadosBuscador = resultados;
}

function ejecutarResultado(index) {
    cerrarBuscador();
    setTimeout(() => window._resultadosBuscador[index].accion(), 200);
}

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarBuscador(); });
