/**
 * Base de Datos del Reglamento Estudiantil - Sistema Interactivo por Tarjetas
 * Contiene la información de todos los capítulos del reglamento, con secciones exhaustivas y normativas ampliadas.
 */
const REGLAMENTO_DB = {
    "capitulo1": {
        "titulo": "Capítulo I: Disposiciones Generales",
        "categoria": "Marco Institucional",
        "descripcion": "Establece el alcance legal y filosófico del reglamento de la Fundación Universitaria Los Libertadores, definiendo a quiénes aplica y bajo qué principios se rige la convivencia dentro de la Institución.",
        "secciones": [
            {
                "titulo": "Alcance del Reglamento",
                "icono": "📖",
                "contenido": "<h4>Ámbito de Aplicación Institucional (Art. 2)</h4><p>El Reglamento Estudiantil rige obligatoriamente para todos los estudiantes desde su inscripción en cualquier metodología (presencial, distancia y virtual) y nivel de formación (técnico, tecnólogo, profesional y posgrados). Así mismo, extiende lineamientos normativos a los egresados en su relacionamiento continuo con la Institución.</p>"
            },
            {
                "titulo": "Criterios Orientadores",
                "icono": "⚖️",
                "contenido": "<h4>Principios Fundamentales (Art. 3)</h4><ul><li><strong>Integralidad y Participación:</strong> Fomentan el papel del estudiante como miembro dinámico de la comunidad.</li><li><strong>Garantía de derechos y deberes:</strong> Promueve un alto sentido de pertenencia y compromiso ciudadano.</li><li><strong>Cumplimiento de normas:</strong> Fortalece el tejido social y el desarrollo ético bajo los valores de responsabilidad y respeto.</li></ul>"
            }
        ]
    },
    "capitulo2": {
        "titulo": "Capítulo II: Definiciones Académicas",
        "categoria": "Conceptos Clave",
        "descripcion": "Glosario fundamental (Art. 4) para comprender la terminología académica y administrativa, estandarizando los conceptos técnicos que garantizan la transparencia en los procesos durante toda la vida universitaria.",
        "secciones": [
            {
                "titulo": "Inscripción y Admisión",
                "icono": "📋",
                "contenido": "<h4>Ingreso a la Institución</h4><ul><li><strong>Inscripción:</strong> Proceso mediante el cual una persona identificada como aspirante solicita su ingreso a uno o varios programas académicos, previo cumplimiento de los pasos y requisitos señalados en el Procedimiento de Admisiones y el reglamento estudiantil.</li><li><strong>Admisión:</strong> Proceso mediante el cual la Institución evalúa si un inscrito reúne las condiciones para ser admitido y, en consecuencia, autoriza su matrícula. Una vez admitido, el aspirante recibirá una notificación en su correo electrónico indicándole el proceso a seguir para generar la orden de matrícula.</li></ul>"
            },
            {
                "titulo": "Matrícula y Estudiante",
                "icono": "📝",
                "contenido": "<h4>Formalización del Vínculo Académico</h4><ul><li><strong>Matrícula:</strong> Manifestación voluntaria de una persona mediante la cual adquiere el derecho a cursar uno o varios programas; acepta la filosofía institucional, las condiciones de matrícula, se compromete a cumplir las normas vigentes y los Reglamentos de la Institución, y adquiere las obligaciones de cumplimiento de los procesos académicos y administrativos que le dan la condición de estudiante.</li><li><strong>Estudiante:</strong> Persona que, una vez cumplidos los requisitos de ingreso y admisión, se encuentre matriculada en cualquiera de los programas académicos de pregrado o posgrado en las metodologías presencial, virtual o distancia.</li></ul>"
            },
            {
                "titulo": "Crédito y Espacio Académico",
                "icono": "🔢",
                "contenido": "<h4>Unidades de Medida del Aprendizaje</h4><ul><li><strong>Crédito Académico:</strong> Equivale a 48 horas totales de trabajo del estudiante, que incluyen tanto las horas de acompañamiento docente como las horas de trabajo independiente.</li><li><strong>Espacio Académico:</strong> Corresponde a la unidad de estudio, curso, seminario, módulo o asignatura que hace parte del Plan de Estudios y se expresa en créditos académicos.</li></ul>"
            },
            {
                "titulo": "Plan de Estudios y Programa Académico",
                "icono": "📚",
                "contenido": "<h4>Estructura Curricular</h4><ul><li><strong>Plan de Estudios:</strong> Conjunto de espacios académicos, unidades de estudio y requisitos académicos definidos por el programa, en coherencia con los lineamientos curriculares institucionales, para que el estudiante adquiera competencias generales y específicas, y los perfiles profesional y laboral para optar por el título. Propone una ruta formativa con flexibilidad y autonomía de aprendizaje.</li><li><strong>Programa Académico:</strong> Unidad académica de estudio de un campo determinado del conocimiento, ofrecido desde las diferentes Facultades de la Institución en modalidades de pregrado y posgrado, en metodologías presencial, distancia tradicional o virtual. Cuenta con un proyecto formativo medido en créditos y espacios académicos.</li></ul>"
            },
            {
                "titulo": "Calendario y Período Académico",
                "icono": "📅",
                "contenido": "<h4>Organización del Tiempo Formativo</h4><ul><li><strong>Calendario Académico:</strong> Organización y programación de las actividades académicas, administrativas y de apoyo, definidas y aprobadas por el Consejo Superior, orientada a toda la comunidad educativa: aspirantes, estudiantes nacionales y extranjeros, profesores, administrativos, directivos y padres de familia.</li><li><strong>Período Académico:</strong> Período de tiempo establecido por la Institución para el desarrollo del proceso formativo de sus estudiantes. Puede ser semestral o trimestral, de acuerdo con el diseño y aprobación del programa, y su programación se refleja en el Calendario Académico Institucional.<br><a href='https://calendarioacademico.libertadores.edu.co' target='_blank' style='display: inline-block; margin-top: 8px; padding: 5px 10px; background-color: var(--color-institucional); color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;'><i class='fas fa-calendar-alt'></i> Ver Calendario Oficial</a></li><li><strong>Carga Académica:</strong> Total de créditos o espacios que el estudiante tiene derecho a inscribir en un período según su Plan de Estudios.</li></ul>"
            },   
            {
                "titulo": "Carga Académica y Metodología",
                "icono": "⚙️",
                "contenido": "<h4>Parámetros de Estudio</h4><ul><li><strong>Carga Académica:</strong> Total de espacios académicos que tiene derecho a inscribir un estudiante en un período académico, de acuerdo con la parametrización de su Plan de Estudios, en la cual se establece el número total de créditos por semestre.</li><li><strong>Metodología:</strong> Forma en que se desarrollan las actividades académicas en el respectivo programa, previamente aprobada en el Registro Calificado por el Ministerio de Educación Nacional. Se definen tres metodologías: <em>presencial</em>, <em>distancia tradicional</em> y <em>virtual</em>.</li></ul>"
            },
            {
                "titulo": "Aplazamiento y Cancelación",
                "icono": "🔄",
                "contenido": "<h4>Novedades durante el Período</h4><ul><li><strong>Aplazamiento de Matrícula:</strong> Acto mediante el cual el estudiante solicita autorización para suspender su proceso formativo en el período lectivo en el cual se matriculó.</li><li><strong>Cancelación de Matrícula:</strong> Acto mediante el cual el estudiante o instancias institucionales autorizadas proceden a retirar o cancelar todos los espacios académicos matriculados en un período académico. Las cancelaciones proceden o se autorizan durante el período académico vigente y hasta el último día de clase, de acuerdo con el calendario académico.</li></ul>"
            },
            {
                "titulo": "Homologación",
                "icono": "🔁",
                "contenido": "<h4>Reconocimiento de Estudios Previos</h4><ul><li><strong>Homologación:</strong> Proceso académico que implica el estudio, análisis y reconocimiento que realizan las facultades sobre los cursos o espacios académicos aprobados por un estudiante procedente de programas adelantados en Instituciones de Educación Superior en Colombia reconocidas por el Ministerio de Educación Nacional, de IES extranjeras debidamente reconocidas por las autoridades competentes de su país, o bien cursados en programas académicos de la propia Institución.</li></ul>"
            },
            {
                "titulo": "Transferencias",
                "icono": "🔀",
                "contenido": "<h4>Continuación de Estudios</h4><ul><li><strong>Transferencia:</strong> Proceso mediante el cual se aprueba la admisión de un aspirante y se le reconocen espacios académicos por homologación, para continuar estudios cursados y aprobados en otra IES nacional o extranjera, o de otro programa de Los Libertadores, previo cumplimiento de requisitos académicos y administrativos.</li><li><strong>Transferencia Externa:</strong> Acto por el cual la Institución homologa a un solicitante espacios académicos cursados y aprobados en un programa de educación formal de otra IES nacional o extranjera, debidamente aprobada por el MEN o la autoridad competente en el país de origen.</li><li><strong>Transferencia Interna:</strong> Cambio que solicita el estudiante de un programa académico de pregrado o posgrado a otro del mismo nivel de formación, dentro de la Fundación Universitaria Los Libertadores.</li></ul>"
            },
            {
                "titulo": "Intercambio y Movilidad",
                "icono": "✈️",
                "contenido": "<h4>Visibilidad e Internacionalización</h4><ul><li><strong>Intercambio Académico:</strong> Actividad en la cual un estudiante cursa, en un período determinado, uno o más espacios académicos propios de su Plan de Estudios en una IES diferente a Los Libertadores —en Colombia o en el exterior— con la que existe convenio vigente, habiendo cumplido previamente los requisitos y trámites académicos y administrativos establecidos por la Institución.</li><li><strong>Movilidad Estudiantil:</strong> Estrategia académica para lograr la visibilidad del programa a través de los actores educativos, que permite la participación de estudiantes en diferentes actividades académicas en escenarios locales, nacionales o internacionales.</li></ul>"
            },
            {
                "titulo": "Evaluación del Aprendizaje",
                "icono": "📊",
                "contenido": "<h4>Valoración del Proceso Formativo</h4><ul><li><strong>Evaluación del Aprendizaje:</strong> Proceso permanente que busca estimular la formación integral del estudiante, mediante la apreciación y valoración del desarrollo de competencias y del alcance de los objetivos y fines propuestos en el espacio académico, en función de la calidad, la excelencia y el mejoramiento continuo. En la evaluación se tendrán en cuenta las diferentes dimensiones formativas: <em>cognitiva</em>, <em>actitudinal</em>, <em>volitiva</em> y <em>psicomotora</em>, reflejadas en una calificación.</li></ul>"
            },
            {
                "titulo": "Opción y Proyecto de Grado",
                "icono": "🔬",
                "contenido": "<h4>Trabajo Final de Carrera</h4><ul><li><strong>Opción de Grado:</strong> Requisito de carácter académico establecido por la Institución para que el estudiante, en la última etapa de sus estudios, aplique y fortalezca las competencias adquiridas durante su formación en la solución de problemas del campo de formación.</li><li><strong>Proyecto de Grado:</strong> Trabajo mediante el cual el estudiante sistematiza y documenta la actividad de investigación, creación o innovación como resultado de la aplicación de las competencias adquiridas en el programa académico, dando cuenta de sus capacidades descriptivas, argumentativas y propositivas sobre una experiencia de investigación, proyección social, empresarial o proyecto pedagógico.<br><a href='https://darkseagreen-emu-495688.hostingersite.com/grados/' target='_blank' style='display: inline-block; margin-top: 8px; padding: 5px 10px; background-color: var(--color-institucional); color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;'><i class='fas fa-calendar-alt'></i> Ver Fechas Grado</a></li></ul>"
            },
            {
                "titulo": "Título Académico",
                "icono": "🎓",
                "contenido": "<h4>Reconocimiento Final</h4><ul><li><strong>Título Académico:</strong> Reconocimiento académico que la Institución otorga a quienes cursan y aprueban todos los requisitos de un programa académico en los niveles de pregrado y posgrado, en cualquier metodología, habilitándolos para el ejercicio de la profesión al cumplir con los requisitos exigidos por la Institución y el Ministerio de Educación Nacional.</li></ul>"
            },
            {
                "titulo": "PyGO",
                "icono": "🤝",
                "contenido": "<h4>Programa de Apoyo Estudiantil</h4><ul><li><strong>PyGO – Programa de Permanencia y Graduación Oportuna:</strong> Estrategia liderada por la Dirección de Bienestar Universitario como apoyo permanente para que el estudiante alcance su logro académico. Coordina acciones preventivas de tipo académico, psicosocial y financiero, orientadas a mitigar riesgos de deserción y acompañar al estudiante durante toda su trayectoria formativa hasta su graduación oportuna.</li></ul>"
            }
        ]
    },
    "capitulo3": {
        "titulo": "Capítulo III: Objetivos del Reglamento",
        "categoria": "Marco Institucional",
        "descripcion": "Detalla cómo el reglamento busca facilitar un ecosistema de respeto, calidad y crecimiento personal, estableciendo las reglas claras para la convivencia y la excelencia.",
        "secciones": [
            {
                "titulo": "Objetivo General",
                "icono": "🎯",
                "contenido": "<h4>Propósito Central (Art. 5)</h4><p>Establecer las reglas para el relacionamiento armónico entre el estudiante y la comunidad libertadora. Se enfoca en la formación integral, el desarrollo humano y ético, definiendo requisitos de ingreso, derechos, deberes, incentivos y normativas disciplinarias.</p>"
            },
            {
                "titulo": "Objetivos Específicos",
                "icono": "📌",
                "contenido": "<h4>Metas Reglamentarias (Art. 6)</h4><ul><li>Definir los procesos de ingreso, permanencia, evaluación y egreso.</li><li>Establecer los derechos, deberes y espacios de participación.</li><li>Determinar estímulos, distinciones y reconocimientos.</li><li>Fijar un régimen disciplinario que facilite la sana convivencia académica y administrativa.</li></ul>"
            }
        ]
    },
    "capitulo4": {
        "titulo": "Capítulo IV: El Estudiante",
        "categoria": "Vida Estudiantil",
        "descripcion": "Define las categorías de estudiantes, el compromiso institucional con su permanencia mediante el programa PyGO, y las causales exactas de pérdida de esta condición.",
        "secciones": [
            {
                "titulo": "Definición y Clasificación",
                "icono": "👤",
                "contenido": "<h4>Tipos de Estudiantes (Arts. 7 y 8)</h4><ul><li><strong>Regular:</strong> Matriculado en programas formales conducentes a título en cualquier metodología.</li><li><strong>Visitante:</strong> Matriculado en otra Institución que cursa espacios académicos amparado por un convenio.</li><li><strong>De Convalidación:</strong> Profesional con pregrado en el exterior (ej. Contaduría, Derecho, Educación) que cursa espacios exigidos por el Ministerio de Educación Nacional para convalidar su título.</li></ul>"
            },
            {
                "titulo": "Permanencia y PyGO",
                "icono": "🤝",
                "contenido": "<h4>Acompañamiento Institucional (Art. 9)</h4><p>La Institución brinda condiciones armónicas para la formación. La Dirección de Bienestar Universitario, a través del <strong>Programa de Permanencia y Graduación Oportuna (PyGO)</strong>, coordina acciones preventivas (académicas, psicosociales y financieras) para mitigar riesgos de deserción y asegurar la culminación exitosa de los estudios.</p>"
            },
            {
                "titulo": "Pérdida de la Condición",
                "icono": "🚫",
                "contenido": "<h4>Causales de Retiro (Art. 10)</h4><p>Se pierde la condición de estudiante por:</p><ul><li>Culminación del programa (obtención del grado).</li><li>No renovar la matrícula en los plazos fijados por el calendario.</li><li>Disposición académica (rendimiento) o sanción disciplinaria.</li><li>Cancelación voluntaria de la matrícula.</li><li>Motivos graves de salud certificados por una EPS.</li><li>Fallecimiento.</li></ul>"
            }
        ]
    },
    "capitulo5": {
        "titulo": "Capítulo V: Inscripción, Admisión y Matrícula",
        "categoria": "Trámites y Requisitos",
        "descripcion": "Procedimientos detallados (Art. 11 al 21) para el ingreso, vinculación y permanencia de los estudiantes, definiendo requisitos técnicos, legales y financieros.",
        "secciones": [
            {
                "titulo": "Proceso de Inscripción y Veracidad",
                "icono": "📋",
                "contenido": "<h4>Solicitud de Ingreso (Art. 11 y 17)</h4><ul><li><strong>Inscripción:</strong> Proceso donde el aspirante solicita ingreso cumpliendo el Procedimiento de Admisiones. Requiere diligenciar el formulario y pagar el valor correspondiente (válido por un año, sin devoluciones).</li><li><strong>Veracidad de la Información (Art. 17):</strong> Toda la información y documentos radicados deben ser veraces y se entienden entregados <b>bajo gravedad de juramento</b>, siendo responsabilidad exclusiva del aspirante.</li><li><strong>Aceptación de Normas:</strong> Al cancelar el recibo de inscripción y radicar documentos, el aspirante manifiesta que conoce y acepta las condiciones y normatividad de inscripción, admisión y matrícula.</li></ul>"
            },
            {
                "titulo": "Requisitos de Pregrado y Posgrado",
                "icono": "🎓",
                "contenido": "<h4>Documentación Base (Art. 12)</h4><ul><li><strong>Pregrado:</strong> Título de bachiller o acta de grado, resultados de las Pruebas de Estado y requisitos de Admisiones.</li><li><strong>Posgrado:</strong> Título de pregrado o acta de grado y requisitos adicionales vigentes.</li><li><strong>Transferencia:</strong> Requiere documento original de contenidos programáticos del programa de origen y certificado de notas.</li></ul>"
            },
            {
                "titulo": "Estudiantes de Convalidación",
                "icono": "🌎",
                "contenido": "<h4>Requisitos de Convalidación (Art. 14)</h4><ul><li><strong>Documentación Exigida:</strong> Documento de identidad, fotocopia de las <b>notas apostilladas</b>, copia del título obtenido en el país extranjero, la VISA de estudiante y los demás requisitos del Procedimiento de Admisiones vigente.</li></ul>"
            },
            {
                "titulo": "Títulos obtenidos en el Exterior",
                "icono": "✈️",
                "contenido": "<h4>Legalización y Visas (Art. 13)</h4><ul><li><strong>Normatividad:</strong> Quienes tengan títulos de educación media, pregrado o posgrado del exterior deben acogerse a normas nacionales e internacionales.</li><li><strong>Visa de Estudiante:</strong> Una vez admitido, debe presentar la visa o equivalente vigente para el período a cursar. Se debe radicar en Admisiones máximo a los <b>diez días calendario</b> siguientes al pago de matrícula (de lo contrario, se cancelará la matrícula).</li></ul>"
            },
            {
                "titulo": "Ciclos Propedéuticos",
                "icono": "🔄",
                "contenido": "<h4>Formación Secuencial (Art. 15 y 16)</h4><ul><li><strong>Definición:</strong> Actividad organizada en ciclos secuenciales y complementarios. Cada ciclo conduce a un título que habilita para el desempeño laboral y para continuar al siguiente ciclo.</li><li><strong>Requisitos de Inscripción:</strong> Los estudiantes deben cumplir los mismos requisitos del Art. 12.</li><li><strong>Continuidad de Estudios:</strong> Quienes culminen el primer ciclo y deseen continuar al siguiente deben cumplir la normatividad vigente y de Admisiones. En este caso, <b>la inscripción no tiene ningún costo</b> y es tramitada por la Oficina de Admisiones.</li></ul>"
            },
            {
                "titulo": "Proceso de Admisión",
                "icono": "✅",
                "contenido": "<h4>Evaluación Institucional (Art. 18)</h4><ul><li><strong>Evaluación:</strong> La Institución verifica si el inscrito reúne las condiciones para autorizar la matrícula.</li><li><strong>Notificación:</strong> El admitido recibirá aviso en su <b>correo electrónico</b> con los pasos para generar la orden de matrícula.</li><li><strong>No Reembolso:</strong> Si el aspirante no es admitido o no formaliza su proceso, no le será reembolsado el valor pagado por la inscripción.</li></ul>"
            },
            {
                "titulo": "La Matrícula",
                "icono": "📝",
                "contenido": "<h4>Vínculo Estudiantil (Art. 19)</h4><ul><li><strong>Definición:</strong> Manifestación voluntaria para cursar programas, aceptando la filosofía y reglamentos institucionales.</li><li><strong>Proceso Académico:</strong> Inscripción de los espacios académicos a que tiene derecho en el período.</li><li><strong>Proceso Administrativo:</strong> Pago de los derechos pecuniarios correspondientes.</li></ul>"
            },
            {
                "titulo": "Formalización (Nuevos y Transferentes)",
                "icono": "🆕",
                "contenido": "<h4>Ingreso Inicial (Art. 20)</h4><ul><li><strong>Condiciones:</strong> Cumplir requisitos, pagar derechos pecuniarios e inscribir espacios en los plazos del Calendario Académico.</li><li><strong>Transferencias:</strong> Requiere firma del <b>acta de homologación</b> aprobada por la Dirección de programa antes del pago.</li><li><strong>Liquidación:</strong> Se liquida según los valores establecidos para el primer semestre del período correspondiente.</li></ul>"
            },
            {
                "titulo": "Renovación de Matrícula",
                "icono": "🔁",
                "contenido": "<h4>Estudiantes Antiguos (Art. 21)</h4><ul><li><strong>Condiciones:</strong> No tener sanción vigente, estar a paz y salvo, inscribir espacios según el Reglamento y cancelar valores de matrícula.</li><li><strong>Importante:</strong> Quien no formalice en los plazos fijados <b>no adquiere la condición de estudiante</b> durante el período académico respectivo.</li></ul>"
            },
            {
                "titulo": "Costos y Créditos",
                "icono": "💰",
                "contenido": "<h4>Reglas de Pago según Carga (Art. 21)</h4><ul><li><strong>Pago del 50%:</strong> Cuando los créditos inscritos no excedan la mitad más uno (50% + 1) de los permitidos.</li><li><strong>Pago del 100%:</strong> Cuando se exceda el límite del 50% + 1 de los créditos permitidos.</li><li><strong>Últimos Créditos (Grado):</strong> Si inscribe los últimos espacios pendientes para terminar el plan y no excede la mitad más tres (50% + 3) de los permitidos, cancela solo el valor de los créditos inscritos.</li></ul>"
            }
        ]
    },
    "capitulo6": {
        "titulo": "Capítulo VI: Carga y Cancelación de Créditos",
        "categoria": "Procesos Académicos",
        "descripcion": "Regula la inscripción de materias, priorización de asignaturas reprobadas, límites de créditos adicionales, flexibilidad entre metodologías y políticas estrictas de reembolso.",
        "secciones": [
            {
                "titulo": "Inscripción y Priorización",
                "icono": "🎒",
                "contenido": "<h4>Reglas de Horario (Arts. 22-24)</h4><p>El estudiante de primer semestre inscribe la carga completa. A partir del segundo semestre, <strong>es obligatorio inscribir en primera instancia los espacios académicos perdidos</strong>. Si se inscriben cursos de varios semestres, la matrícula se liquida sobre el semestre más avanzado donde haya mayor número de espacios.</p>"
            },
            {
                "titulo": "Adiciones y Flexibilidad",
                "icono": "➕",
                "contenido": "<h4>Adelantar y Mezclar Modalidades (Arts. 25-26)</h4><ul><li><strong>Créditos Adicionales:</strong> Se pueden adicionar hasta <strong>tres (3) créditos</strong> extra asumiendo su costo (calculado dividiendo el valor del semestre entre sus créditos regulares).</li><li><strong>Entre Metodologías:</strong> Se permite cursar hasta un <strong>19%</strong> de los créditos en otra metodología (ej. alumno presencial viendo materias virtuales), previa aprobación de la dirección del programa.</li></ul>"
            },
            {
                "titulo": "Cancelación y Reintegros",
                "icono": "💸",
                "contenido": "<h4>Políticas de Devolución (Arts. 27-30)</h4><p>Cancelar un curso (registra como no cursado) de 2da o 3ra vez requiere aval de Facultad. Si se cancela <strong>toda la carga</strong>, el reintegro de dinero funciona así:</p><ul><li><strong>100%:</strong> Si la Institución cancela la oferta del programa.</li><li><strong>80%:</strong> Si se solicita antes de la fecha de inicio de clases.</li><li><strong>50%:</strong> Si se solicita hasta 15 días calendario después de iniciar clases.</li><li><strong>0%:</strong> Vencidos los 15 días. (Excepciones por fuerza mayor/salud deben ir a Vicerrectoría antes del 2do parcial).</li></ul>"
            }
        ]
    },
    "capitulo7": {
        "titulo": "Capítulo VII: Entidades de Financiación",
        "categoria": "Financiero",
        "descripcion": "Establece las directrices para estudiantes que pagan su matrícula a través de entidades financieras externas o el ICETEX.",
        "secciones": [
            {
                "titulo": "Desembolsos y Cruce de Cuentas",
                "icono": "🏦",
                "contenido": "<h4>Reintegros por ICETEX o Bancos (Art. 31)</h4><p>Si un estudiante paga su matrícula con recursos propios para asegurar su cupo y posteriormente se aprueba un crédito educativo, la Institución realizará el reintegro de los fondos propios <strong>únicamente y de manera estricta</strong> cuando la entidad financiera (ICETEX, Fondo Nacional del Ahorro, Bancos) haya realizado el desembolso efectivo a las cuentas de Los Libertadores.</p>"
            }
        ]
    },
    "capitulo8": {
        "titulo": "Capítulo VIII: Disposiciones Académicas",
        "categoria": "Evaluación",
        "descripcion": "Conjunto de normas e instrumentos de gestión (Art. 32) que ordenan, integran y articulan la trayectoria académica del estudiante durante su permanencia en la Institución, aplicables a todos los estudiantes regulares en cualquier nivel y metodología.",
        "secciones": [
            {
                "titulo": "Disposiciones de Trayectoria Académica",
                "icono": "🗺️",
                "contenido": "<h4>Marco General (Art. 32 y 33)</h4><ul><li><strong>Disposiciones de Trayectoria Académica:</strong> Conjunto de normas e instrumentos de gestión que ordenan, integran y articulan la trayectoria académica del estudiante durante su permanencia en la Institución. Aplican a todos los estudiantes regulares de Los Libertadores para todos los efectos académicos relacionados con sus programas, en cualquier nivel y metodología.</li><li><strong>Período Académico:</strong> Período de tiempo establecido por la Institución para el desarrollo del proceso formativo. Las actividades académicas se desarrollan en un período definido en el Calendario Académico Institucional y en el específico de cada programa, en el nivel y la metodología correspondiente.</li></ul>"
            },
            {
                "titulo": "Fallas e Inasistencia (PPF)",
                "icono": "⚠️",
                "contenido": "<h4>Pérdida Por Fallas (Art. 34)</h4><ul><li><strong>Metodología Presencial:</strong> Cuando el estudiante falta al <strong>20%</strong> de las clases y actividades programadas, se considera <strong>Perdido Por Fallas (PPF)</strong>, cualquiera que sea la causa. Esto genera una calificación inapelable de <strong>0.0</strong> y se tiene en cuenta para el cálculo del promedio académico del período.</li><li><strong>Metodología Virtual o Distancia:</strong> No aplica el porcentaje de inasistencia. El estudiante debe cumplir con los compromisos académicos dispuestos en la plataforma virtual y de apoyo tutorial, dentro de las fechas establecidas en el Calendario Académico.</li><li><strong>Responsabilidad del Registro:</strong> Corresponde al profesor del espacio académico el control y registro de la asistencia, con base en los recursos de seguimiento reportados por el sistema institucional.</li></ul>"
            },
            {
                "titulo": "Evaluación del Aprendizaje",
                "icono": "📐",
                "contenido": "<h4>Proceso Evaluativo Integral (Art. 35)</h4><ul><li><strong>Definición:</strong> Proceso permanente que busca estimular la formación integral del estudiante mediante la apreciación y valoración del desarrollo de competencias y del alcance de los objetivos y fines propuestos en el espacio académico, en función de la calidad, la excelencia y el mejoramiento continuo.</li><li><strong>Dimensiones Evaluadas:</strong> En la evaluación se tendrán en cuenta las diferentes dimensiones formativas del estudiante: <em>cognitiva</em>, <em>actitudinal</em>, <em>volitiva</em> y <em>psicomotora</em>, las cuales se reflejarán en una calificación.</li></ul>"
            },
            {
                "titulo": "Sistema de Calificación",
                "icono": "📊",
                "contenido": "<h4>Escala y Aprobación (Art. 36)</h4><ul><li><strong>Definición:</strong> La calificación es la valoración del proceso de aprendizaje en la formación integral del estudiante y es responsabilidad del profesor.</li><li><strong>Escala:</strong> De <strong>0.0 a 5.0</strong>, aproximada a un entero y un decimal.</li><li><strong>Nota Mínima Aprobatoria:</strong> <strong>3.0</strong>. Una calificación inferior implica la pérdida del espacio académico.</li><li><strong>Publicación:</strong> Las calificaciones se publican en el módulo del Sistema de Información Académica de forma inmediata, dentro de los plazos establecidos en el Calendario Académico Institucional.</li></ul>"
            },
            {
                "titulo": "Criterios de Evaluación",
                "icono": "📋",
                "contenido": "<h4>Modalidades y Mínimos Evaluativos (Art. 37)</h4><ul><li><strong>Tipos de Actividades:</strong> Los criterios de evaluación pueden incluir pruebas orales, escritas, trabajos en grupo, trabajos individuales, ensayos, talleres, exámenes parciales y/o finales.</li><li><strong>Mínimo de Evaluaciones:</strong> En cada espacio académico se programarán como mínimo <strong>tres (3) evaluaciones</strong> durante el período académico.</li><li><strong>Comunicación al Estudiante:</strong> Esta información hace parte de los datos que el docente debe entregar a los estudiantes al inicio del espacio académico.</li></ul>"
            },
            {
                "titulo": "Cursos Intersemestrales",
                "icono": "📆",
                "contenido": "<h4>Oferta Académica Adicional (Art. 38)</h4><ul><li><strong>Definición:</strong> Cursos formales debidamente programados por la Institución para realizarse en períodos intersemestrales, con la misma intensidad horaria y exigencias académicas que los períodos regulares.</li><li><strong>Efectos Académicos:</strong> Surten los mismos efectos académicos y administrativos que los espacios cursados en períodos regulares.</li><li><strong>Autorización:</strong> Solo se autorizan por decisión del respectivo Consejo de Facultad, atendiendo criterios de oportunidad, pertinencia y costos.</li><li><strong>Reprobación:</strong> Los estudiantes que reprueben cursos intersemestrales deberán tramitar en la Facultad el reajuste de la matrícula conforme al reglamento.</li><li><strong>Liquidación:</strong> Se liquidan según lo establecido en el Acuerdo de Derechos Pecuniarios vigente.</li></ul>"
            },
            {
                "titulo": "Registro Académico de la Evaluación",
                "icono": "📝",
                "contenido": "<h4>Distribución por Cortes (Art. 39)</h4><ul><li><strong>Estructura de la Nota Definitiva:</strong> Se construye con tres calificaciones: <strong>Primer Parcial (30%)</strong>, <strong>Segundo Parcial (30%)</strong> y <strong>Examen Final (40%)</strong>. La nota definitiva es la suma ponderada de estas tres calificaciones.</li><li><strong>Evaluaciones sin Previo Aviso:</strong> Si un estudiante no está presente, el profesor podrá realizarla con posterioridad. El valor de cada evaluación sin aviso no podrá superar el <strong>10%</strong> por momento evaluativo.</li><li><strong>Criterios Especiales:</strong> En casos particulares según el área de conocimiento, la Decanatura indicará criterios particulares de evaluación.</li><li><strong>Revisión de Notas:</strong> Los profesores darán a conocer los resultados para aclaraciones; los estudiantes cuentan con <strong>dos (2) días hábiles</strong> para solicitar novedades antes del cierre del período.</li></ul>"
            },
            {
                "titulo": "Registro de Novedades Académicas",
                "icono": "🔔",
                "contenido": "<h4>Plazos y Restricciones (Art. 40)</h4><ul><li><strong>Plazo Máximo:</strong> El reporte de novedades deberá realizarse hasta máximo <strong>2 días hábiles</strong> después del cierre de parciales o nota definitiva, según el Calendario Académico.</li><li><strong>Restricción Absoluta:</strong> En ningún caso podrán generarse novedades de períodos académicos ya cerrados.</li></ul>"
            },
            {
                "titulo": "Exámenes Parciales y Finales",
                "icono": "✏️",
                "contenido": "<h4>Tipos de Examen — Evaluación Regular (Art. 41)</h4><ul><li><strong>Exámenes Parciales:</strong> Evaluaciones correspondientes a los primeros dos cortes del período académico. Pueden ser escritos u orales.</li><li><strong>Exámenes Finales:</strong> Evaluaciones del tercer y último corte del período académico. Pueden ser escritos u orales.</li><li><strong>Exámenes Orales:</strong> Deben contar con al menos un jurado idóneo designado por el Comité Curricular. El estudiante puede expresar su desacuerdo en el mismo momento de conocer la calificación.</li><li><strong>Inasistencia:</strong> Si el estudiante no presenta algún examen establecido en el Calendario o autorizado por las unidades académicas, la calificación será <strong>0.0</strong>.</li></ul>"
            },
            {
                "titulo": "Exámenes Supletorios",
                "icono": "🔁",
                "contenido": "<h4>Evaluaciones por Inasistencia Justificada (Art. 41c)</h4><ul><li><strong>Definición:</strong> Evaluaciones autorizadas por el departamento o responsable académico a un estudiante que no pudo presentar el examen parcial o final en la fecha programada.</li><li><strong>Plazo de Solicitud:</strong> Máximo <strong>3 días hábiles</strong> después de la fecha del examen no presentado, siempre y cuando haya cesado la causa del incumplimiento.</li><li><strong>Plazo de Realización:</strong> La Institución tiene máximo <strong>8 días hábiles</strong> posteriores a la solicitud para realizar el examen.</li><li><strong>Costo:</strong> Tienen un costo adicional establecido por la Institución, que el estudiante debe cancelar antes de su presentación.</li></ul>"
            },
            {
                "titulo": "Exámenes de Suficiencia",
                "icono": "🏅",
                "contenido": "<h4>Validación de Conocimientos sin Cursar (Art. 41d)</h4><ul><li><strong>Definición:</strong> Pruebas que presenta un estudiante cuando, sin haber cursado uno o varios espacios académicos, considera tener las competencias para que se le reconozcan como aprobados.</li><li><strong>Límite:</strong> Solo se permite <strong>una vez por espacio académico</strong> y máximo hasta el <strong>20%</strong> del total de créditos del Plan de Estudios.</li><li><strong>Nota Mínima Aprobatoria:</strong> <strong>3.8</strong>. Una calificación inferior implica pérdida del espacio por primera vez.</li><li><strong>Solicitud:</strong> Debe ser escrita y dirigida al Departamento correspondiente. Los criterios los determina cada programa según su Plan de Estudios.</li><li><strong>Períodos:</strong> Pueden realizarse en períodos regulares o intersemestrales.</li></ul>"
            },
            {
                "titulo": "Exámenes Preparatorios y de Clasificación",
                "icono": "🎯",
                "contenido": "<h4>Evaluaciones Especiales (Art. 41e y 41f)</h4><ul><li><strong>Exámenes Preparatorios:</strong> Evaluaciones que presenta un estudiante sobre un área de conocimiento de su programa, una vez haya aprobado <strong>todos</strong> los espacios académicos que la conforman.</li><li><strong>Exámenes de Clasificación:</strong> Evaluaciones que determinan y validan el grado de conocimiento sobre un área o áreas del conocimiento, permitiendo la ubicación del estudiante en un espacio académico determinado y la aprobación del mismo.</li></ul>"
            },
            {
                "titulo": "Revisión de Calificaciones",
                "icono": "🔍",
                "contenido": "<h4>Derecho a Segunda Opinión (Art. 42)</h4><ul><li><strong>Primera Instancia:</strong> En el mismo momento de conocer la calificación, el estudiante puede solicitar revisión expresando las razones de su desacuerdo al profesor evaluador. La solicitud se resuelve de manera inmediata.</li><li><strong>Segunda Instancia:</strong> Si persiste la inconformidad, el estudiante puede formalizar por escrito la solicitud de un <strong>segundo calificador</strong> ante el director del programa, dentro de los <strong>2 días hábiles</strong> siguientes a la entrega de calificaciones. Vencido ese término, se pierde este derecho.</li><li><strong>Resolución:</strong> El segundo calificador tiene <strong>2 días hábiles</strong> para reportar la nota, la cual se registra como definitiva.</li><li><strong>Garantía:</strong> La nota obtenida tras la revisión <strong>no podrá ser inferior</strong> a la obtenida inicialmente.</li><li><strong>Cambios Posteriores:</strong> Vencida la fecha para cambios por reclamaciones, solo podrán realizarse mediante novedad académica ante la Dirección de Admisiones y Registro.</li></ul>"
            },
            {
                "titulo": "Repitencia de Espacios Académicos",
                "icono": "📉",
                "contenido": "<h4>Segunda y Tercera Vez (Arts. 43, 44 y 45)</h4><ul><li><strong>Prioridad de Inscripción:</strong> El estudiante deberá inscribir en primera instancia los espacios académicos perdidos (Art. 43).</li><li><strong>Segunda Vez:</strong> El estudiante podrá cursarlo nuevamente como carga única, cancelando el valor correspondiente a la liquidación por créditos inscritos.</li><li><strong>Tercera Vez:</strong> Perder el mismo espacio académico por tercera vez genera la <strong>pérdida del cupo en el programa</strong>. El estudiante queda reportado en el sistema como <em>retirado por rendimiento académico</em>.</li><li><strong>Acompañamiento Obligatorio:</strong> En cualquier caso de pérdida de espacios académicos, el estudiante debe asistir al plan de acompañamiento del <strong>Programa PyGO</strong> de la Dirección de Bienestar Universitario.</li></ul>"
            },
            {
                "titulo": "Sistema de Promedios",
                "icono": "📈",
                "contenido": "<h4>Tipos y Usos del Promedio (Art. 46)</h4><ul><li><strong>Promedio del Período Académico:</strong> Resultado del rendimiento en un período. Se calcula con la sumatoria del producto de cada nota por el número de créditos del espacio, dividido entre el total de créditos cursados en ese período.</li><li><strong>Promedio Acumulado:</strong> Se obtiene con la sumatoria del producto de cada nota por sus créditos en todos los períodos cursados, dividido entre el total de créditos cursados. Registra únicamente la <strong>última nota</strong> del espacio académico cursado.</li><li><strong>Expresión:</strong> Ambos promedios se expresan con <strong>un entero y dos decimales</strong> y <strong>no se aproximan</strong>.</li><li><strong>Usos:</strong> Son el referente para permanencia, titulación, distinciones, becas, estímulos, certificaciones, renovación de descuentos por convenio y demás decisiones institucionales.</li><li><strong>Acompañamiento PyGO:</strong> Los estudiantes con promedio semestral inferior a <strong>3.5</strong> deben asistir al Programa PyGO para recibir apoyo académico, psicosocial y financiero.</li></ul>"
            }
        ]
    },
    "capitulo9": {
        "titulo": "Capítulo IX: Derechos y Deberes",
        "categoria": "Vida Estudiantil",
        "descripcion": "Pilar de la convivencia universitaria (Art. 47). El estudiante de Los Libertadores debe actuar en la búsqueda de su formación integral, con libertad, responsabilidad y respeto por la dignidad humana, orientado por los principios fundacionales de libertad, orden y justicia.",
        "secciones": [
            {
                "titulo": "Formación y Participación",
                "icono": "🎓",
                "contenido": "<h4>Derechos Formativos (Art. 48 a-b-c)</h4><ul><li><strong>Formación Integral:</strong> Recibir formación integral y coherente con los principios constitucionales, legales y reglamentarios, de acuerdo con la normatividad interna de la Institución.</li><li><strong>Participación Activa:</strong> Participar y contribuir en los procesos académicos, investigativos, culturales y demás actividades formativas programadas por la Institución.</li><li><strong>Libre Expresión:</strong> Ejercer la libre expresión de sus ideas de manera respetuosa y responsable ante la comunidad educativa.</li></ul>"
            },
            {
                "titulo": "Trato Digno y Orientación",
                "icono": "🤝",
                "contenido": "<h4>Derechos de Atención y Respeto (Art. 48 d-e-f)</h4><ul><li><strong>Trato Digno:</strong> Recibir trato respetuoso y digno de todos los miembros de la comunidad educativa, sin excepción.</li><li><strong>Orientación Oportuna:</strong> Ser escuchado, orientado y asistido de manera oportuna y pertinente por todas las instancias académicas o administrativas de la Institución.</li><li><strong>Acceso a Servicios:</strong> Acceder a los servicios y sistemas de comunicación e información que la Institución ofrece a sus estudiantes.</li></ul>"
            },
            {
                "titulo": "Acceso a Normativa e Información",
                "icono": "📖",
                "contenido": "<h4>Derechos de Transparencia (Art. 48 g-h-i-j)</h4><ul><li><strong>Acceso a Reglamentos:</strong> Tener acceso a los reglamentos, políticas y procedimientos de la Institución para ejercer plenamente sus derechos.</li><li><strong>Derecho de Petición:</strong> Presentar verbalmente o por escrito peticiones y sugerencias respetuosas a los directivos y demás miembros de la Institución, acatando el conducto regular.</li><li><strong>Recursos de Impugnación:</strong> Interponer los recursos de reposición y de apelación según los términos establecidos y recibir respuesta oportuna.</li><li><strong>Calendario y Derechos Pecuniarios:</strong> Tener acceso a la información del Calendario Académico Institucional de cada período y al acto administrativo anual que determina los valores de los derechos pecuniarios.</li></ul>"
            },
            {
                "titulo": "Programa Académico y Evaluación",
                "icono": "📋",
                "contenido": "<h4>Derechos Curriculares y Evaluativos (Art. 48 k-l-m-n)</h4><ul><li><strong>Acceso al Programa:</strong> Cursar el o los programas académicos en los que se haya matriculado y conocer el Plan de Estudios y los contenidos generales de los espacios académicos que lo constituyen.</li><li><strong>Información Previa:</strong> Conocer, al inicio de cada período académico y por escrito, los contenidos de los cursos y los criterios de evaluación.</li><li><strong>Revisión de Evaluaciones:</strong> Ser informado oportunamente del resultado de las evaluaciones y ser atendido pertinentemente cuando considere necesaria la revisión de dichas pruebas, conforme a este Reglamento.</li><li><strong>Evaluación Docente:</strong> Evaluar semestralmente el desempeño de sus docentes.</li></ul>"
            },
            {
                "titulo": "Certificaciones y Acompañamiento",
                "icono": "🛡️",
                "contenido": "<h4>Derechos de Apoyo Institucional (Art. 48 o-p-q)</h4><ul><li><strong>Certificación Académica:</strong> Obtener información y certificación oportuna sobre su desempeño académico.</li><li><strong>Programa PyGO:</strong> Recibir los servicios de acompañamiento del Programa de Permanencia y Graduación Oportuna (PyGO), orientados a garantizar su permanencia y graduación exitosa.</li><li><strong>Consejería y Tutorías:</strong> Recibir servicios de consejería y tutorías pertinentes al desarrollo de la actividad académica y a su formación integral.</li></ul>"
            },
            {
                "titulo": "Defensa y Debido Proceso",
                "icono": "⚖️",
                "contenido": "<h4>Derechos en Situaciones Académicas y Disciplinarias (Art. 48 r-s)</h4><ul><li><strong>Respuestas Imparciales:</strong> Recibir de manera clara, imparcial y objetiva las respuestas a las situaciones académicas o disciplinarias en las que se encuentre involucrado.</li><li><strong>Derecho a la Defensa:</strong> Tener un espacio y procedimiento para su defensa, solicitar la práctica de pruebas, debatir las que se presenten en su contra e interponer los recursos a que haya lugar en contra de las decisiones que lo afecten.</li></ul>"
            },
            {
                "titulo": "Participación y Datos Personales",
                "icono": "🗳️",
                "contenido": "<h4>Derechos Democráticos y de Privacidad (Art. 48 t-u-v-w)</h4><ul><li><strong>Representación Colegiada:</strong> Elegir y ser elegido para participar en los órganos colegiados de conformidad con los reglamentos que para tal efecto establezca la Institución.</li><li><strong>Iniciativas Comunitarias:</strong> Proponer y apoyar iniciativas que beneficien a la comunidad educativa.</li><li><strong>Protección de Datos:</strong> Ser protegido en la confidencialidad de sus datos personales, conocer, actualizar y rectificar la información recogida en bases de datos o archivos susceptibles de tratamiento, de conformidad con la ley y el Reglamento.</li><li><strong>Infraestructura y Convenios:</strong> Tener acceso a los servicios, recursos, estructura y planta física dispuestos por la Institución para su formación integral, así como los gestionados mediante convenios con otras organizaciones públicas o privadas.</li></ul>"
            },
            {
                "titulo": "Deberes Éticos e Institucionales",
                "icono": "📌",
                "contenido": "<h4>Compromiso con la Institución (Art. 49 a-b-c-d)</h4><ul><li><strong>Filosofía Institucional:</strong> Conocer y respetar los valores y principios que inspiran la filosofía institucional de Los Libertadores.</li><li><strong>Cumplimiento Normativo:</strong> Conocer y cumplir íntegramente los reglamentos, políticas, procedimientos y normatividad interna. El desconocimiento no exime de su cumplimiento.</li><li><strong>Formación Integral:</strong> Asumir el compromiso de formarse como persona integral con el más alto desempeño y competitividad académica, aprovechando las oportunidades que ofrece la Institución.</li><li><strong>Carné Estudiantil:</strong> Portar el carné estudiantil —intransferible e identificador de la comunidad libertadora— haciendo uso digno y responsable del mismo, presentándolo cuando sea requerido.</li></ul>"
            },
            {
                "titulo": "Deberes de Convivencia y Respeto",
                "icono": "🌿",
                "contenido": "<h4>Relaciones con la Comunidad Educativa (Art. 49 e-f-g-h-i)</h4><ul><li><strong>Participación Activa:</strong> Contribuir activamente en su formación integral a través de la participación, asistencia y colaboración en todas las actividades programadas por la Institución.</li><li><strong>Respeto a la Expresión Ajena:</strong> Permitir la libre expresión de las ideas de los demás miembros de la comunidad educativa, dentro de las normas de respeto mutuo.</li><li><strong>Libertades Responsables:</strong> Hacer uso responsable de las libertades de expresión y asociación.</li><li><strong>Trato Digno:</strong> Respetar a compañeros, docentes, personal administrativo y operativo, e informar situaciones que vayan en contra del trato digno de los miembros de la comunidad.</li><li><strong>Normas de Higiene y Seguridad:</strong> Acatar y respetar las normas de higiene, seguridad, calidad y ambiente establecidas por la Institución.</li></ul>"
            },
            {
                "titulo": "Deberes en el Uso de Recursos",
                "icono": "🖥️",
                "contenido": "<h4>Responsabilidad con la Infraestructura (Art. 49 j-k-l)</h4><ul><li><strong>Espacios Académicos Especializados:</strong> Acatar y respetar las normas del servicio de biblioteca, área de audiovisuales, centros de cómputo y laboratorios, para contribuir al respeto en convivencia y al mejor uso de los servicios.</li><li><strong>Comunicación Adecuada:</strong> Mantener una comunicación respetuosa y emplear adecuadamente el idioma de tal forma que cualifique su formación.</li><li><strong>Decisiones Institucionales:</strong> Acatar y respetar las decisiones académicas y disciplinarias que impongan las autoridades de la Institución.</li></ul>"
            },
            {
                "titulo": "Deberes Cívicos y de Representación",
                "icono": "🏛️",
                "contenido": "<h4>Compromiso con la Comunidad (Art. 49 m-n-o-p-q-r)</h4><ul><li><strong>Propiedad Intelectual:</strong> Conocer y respetar la normatividad relacionada con derechos de propiedad intelectual, absteniéndose de plagios, fraudes o cualquier forma de deshonestidad académica.</li><li><strong>Símbolos Institucionales:</strong> Conocer y respetar los símbolos de la Institución.</li><li><strong>Representación Digna:</strong> Representar dignamente a la Institución dentro y fuera de ella.</li><li><strong>Evaluaciones Institucionales:</strong> Participar activa, crítica, constructiva y responsablemente en las evaluaciones y encuestas institucionales que buscan información confiable para la toma de decisiones y la mejora continua.</li><li><strong>Uso de Información:</strong> Utilizar responsablemente la información de la Institución, de acuerdo con la ley, las políticas y reglamentos internos.</li><li><strong>Infraestructura y Convenios:</strong> Utilizar de forma adecuada los servicios, recursos e infraestructura institucional —incluidos los de convenios con otras organizaciones— y responder por los daños que ocasione.</li></ul>"
            }
        ]
    },
    "capitulo10": {
        "titulo": "Capítulo X: Reintegro y Transferencia",
        "categoria": "Procesos Académicos",
        "descripcion": "Establece los requisitos y procedimientos para que un estudiante retome sus estudios tras un retiro (reintegro), o para gestionar el ingreso mediante homologación desde otras instituciones o programas internos (transferencia externa e interna).",
        "secciones": [
            {
                "titulo": "Requisitos para el Reintegro",
                "icono": "🔙",
                "contenido": "<h4>Condiciones de Solicitud (Art. 50)</h4><ul><li><strong>Plazo Máximo:</strong> No haber pasado más de <strong>tres (3) años</strong> desde el retiro de la Institución.</li><li><strong>Solicitud Formal:</strong> Presentar ante el director de Departamento o coordinador, en los plazos del Calendario Académico, la solicitud formal de reintegro indicando los motivos que dieron origen al retiro.</li><li><strong>Sin Sanciones:</strong> No tener sanción disciplinaria vigente en la Institución al momento de la solicitud.</li><li><strong>Paz y Salvo:</strong> Estar a paz y salvo por todo concepto financiero y administrativo con la Institución.</li></ul>"
            },
            {
                "titulo": "Aprobación del Reintegro",
                "icono": "✅",
                "contenido": "<h4>Proceso de Autorización (Art. 51)</h4><ul><li><strong>Evaluación del Consejo de Facultad:</strong> Cuando el retiro no supere los tres años y el Plan de Estudios haya tenido modificaciones, el Consejo de Facultad establecerá las condiciones académicas bajo las cuales autoriza el reintegro.</li><li><strong>Obligaciones del Estudiante:</strong> Una vez aprobada la solicitud, el estudiante deberá aceptar la decisión del Consejo de Facultad sobre el proceso de nivelación, homologación o actualización, y adoptar el Plan de Estudios vigente.</li><li><strong>Pago de Derechos:</strong> Cancelar los derechos pecuniarios correspondientes al período en que se reintegra.</li><li><strong>Reintegro por Razones Disciplinarias:</strong> Si el retiro fue por sanción disciplinaria que no conllevó cancelación de matrícula, el reintegro procede una vez el estudiante haya cumplido con la sanción impuesta, además de los demás requisitos.</li></ul>"
            },
            {
                "titulo": "Transferencia Externa — Definición",
                "icono": "📥",
                "contenido": "<h4>Ingreso desde otra IES (Art. 52)</h4><ul><li><strong>Definición:</strong> Acto por el cual la Institución homologa a un solicitante los espacios académicos cursados y aprobados en un programa de educación formal en otra Institución de Educación Superior nacional o extranjera, debidamente aprobada por el Ministerio de Educación Nacional o la autoridad competente en el país de origen.</li><li><strong>Momento de Aceptación:</strong> La transferencia externa será aceptada <strong>únicamente en el momento de la inscripción</strong>. No se acepta en períodos posteriores al ingreso.</li></ul>"
            },
            {
                "titulo": "Homologación — Transferencia Externa",
                "icono": "🔄",
                "contenido": "<h4>Condiciones y Límites (Art. 53)</h4><ul><li><strong>Límite de Homologación:</strong> Se homologará máximo el <strong>60%</strong> de los créditos académicos del Plan de Estudios de Los Libertadores.</li><li><strong>Nota Mínima:</strong> Los espacios a homologar deben haber sido aprobados con calificación mínima de <strong>3.0 sobre 5.0</strong> o su equivalente en la escala de origen.</li><li><strong>Equivalencias:</strong> Se tendrán en cuenta las equivalencias en contenido, intensidad horaria y número de créditos académicos respecto al programa destino.</li><li><strong>Orientación Profesional:</strong> La Dirección de Bienestar Universitario podrá evaluar la pertinencia de aplicar pruebas de orientación profesional en cada solicitud.</li><li><strong>Costo:</strong> Las homologaciones por transferencia externa <strong>generan cobro de derechos pecuniarios</strong>, cuyas condiciones determina la Institución.</li></ul>"
            },
            {
                "titulo": "Transferencia Interna — Definición",
                "icono": "🔀",
                "contenido": "<h4>Cambio de Programa Interno (Art. 54)</h4><ul><li><strong>Definición:</strong> Cambio que solicita el estudiante de un programa académico de pregrado o posgrado a otro del <strong>mismo nivel de formación</strong> dentro de la Fundación Universitaria Los Libertadores.</li><li><strong>Alcance:</strong> Aplica tanto para programas de pregrado como de posgrado, siempre que el cambio sea entre programas del mismo nivel.</li></ul>"
            },
            {
                "titulo": "Homologación — Transferencia Interna",
                "icono": "📑",
                "contenido": "<h4>Condiciones y Costos (Arts. 55 y 59)</h4><ul><li><strong>Límite de Homologación:</strong> Se homologará hasta un máximo del <strong>60%</strong> de los créditos académicos del Plan de Estudios del programa destino.</li><li><strong>Nota Mínima:</strong> Los créditos a homologar deben haber sido aprobados con calificación mínima de <strong>3.0 sobre 5.0</strong>.</li><li><strong>Requisitos y Condiciones:</strong> Se establecerán en el Procedimiento de Admisiones de la Institución.</li><li><strong>Sin Costo:</strong> Las homologaciones por transferencia interna <strong>no causan derechos pecuniarios</strong>, a diferencia de la transferencia externa.</li></ul>"
            },
            {
                "titulo": "Aprobación de la Transferencia",
                "icono": "⏱️",
                "contenido": "<h4>Tiempos y Obligaciones (Art. 57)</h4><ul><li><strong>Plazo — Transferencia Interna:</strong> La Dirección de Departamento o Programa Académico deberá evaluar la solicitud en máximo <strong>8 días hábiles</strong>.</li><li><strong>Plazo — Transferencia Externa:</strong> El plazo de evaluación es de máximo <strong>10 días hábiles</strong>, teniendo en cuenta la disponibilidad de cupos en el programa.</li><li><strong>Comunicación:</strong> Cumplidos los términos, la decisión debe informarse <strong>por escrito</strong> al solicitante.</li><li><strong>Obligaciones si es Aprobada:</strong> El estudiante deberá aceptar la decisión sobre el proceso de homologación o nivelación, pagar los derechos pecuniarios correspondientes y firmar el acta de homologación del programa.</li><li><strong>Vencimiento de Trámites:</strong> Si el solicitante aprobado no realiza los trámites de ingreso en las fechas del Calendario Académico, deberá iniciar el proceso nuevamente para el siguiente período.</li></ul>"
            },
            {
                "titulo": "Registro y Control de Transferencias",
                "icono": "🗂️",
                "contenido": "<h4>Documentación Oficial (Art. 58)</h4><ul><li><strong>Remisión del Acta:</strong> El director de departamento o programa remitirá a la Dirección de Admisiones y Registro cada acta de homologación aprobada.</li><li><strong>Contenido del Acta:</strong> Debe incluir el espacio académico cursado en la institución de procedencia, el espacio académico reconocido en Los Libertadores, la fecha de aprobación de la homologación y la nota obtenida.</li><li><strong>Firmas Requeridas:</strong> El acta debe llevar la firma del estudiante transferido y del director de departamento o programa académico, o quien haga sus veces.</li></ul>"
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

        const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
        const contenedorDetalle = document.getElementById('contenedor-detalle');

        if (contenedorTarjetas && contenedorDetalle) {
            // Generar la caja de la descripción GENERAL del capítulo
            let htmlDescripcion = '';
            if (info.descripcion) {
                htmlDescripcion = `
                    <div class="cap-descripcion-box">
                        <strong>Sobre este capítulo:</strong> ${info.descripcion}
                    </div>
                `;
            }

            let tarjetasHTML = '';

            // 2. Generar las tarjetas interactivas
            info.secciones.forEach((seccion, index) => {
                tarjetasHTML += `
                    <button class="tarjeta" onclick="mostrarDetalle('${id}', ${index})">
                        <span class="icono-tarjeta">${seccion.icono}</span>
                        <span class="texto-tarjeta">${seccion.titulo}</span>
                    </button>
                `;
            });

            // Inyectamos la descripción y luego las tarjetas en el contenedor
            contenedorTarjetas.innerHTML = htmlDescripcion + `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    ${tarjetasHTML}
                </div>
            `;

            // Mensaje inicial en el contenedor de detalle
            contenedorDetalle.innerHTML = `
                <div class="mensaje-bienvenida" style="text-align: center; padding: 40px; color: #666;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #F28C28;">👈 Selecciona un subtema</h3>
                    <p style="font-size: 1.1rem;">Haz clic en cualquiera de los cuadros naranjas para explorar la normativa detallada de este capítulo.</p>
                </div>
            `;
        }
    } else {
        const contenedorPrincipal = document.getElementById('contenedor-principal');
        if (contenedorPrincipal) {
            contenedorPrincipal.innerHTML = "<p style='text-align:center; padding: 50px; font-size: 1.2rem; color: #cc0000;'><em>⚠️ Por favor, selecciona un capítulo válido en el menú para visualizar su contenido.</em></p>";
        }
    }
}

/**
 * Función que se activa al hacer clic en una tarjeta específica
 */
function mostrarDetalle(capituloId, seccionIndex) {
    const seccion = REGLAMENTO_DB[capituloId].secciones[seccionIndex];
    const contenedorDetalle = document.getElementById('contenedor-detalle');

    if (contenedorDetalle) {
        contenedorDetalle.innerHTML = `
            <div class="detalle-animado" style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); border-top: 5px solid #006D83;">
                <h3 class="titulo-detalle" style="color: #006D83; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; font-size: 1.6rem;">
                    ${seccion.icono} ${seccion.titulo}
                </h3>
                <div class="contenido-detalle" style="line-height: 1.7; font-size: 1.1rem; color: #333;">
                    ${seccion.contenido}
                </div>
            </div>
        `;
    }
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarCapitulo);
