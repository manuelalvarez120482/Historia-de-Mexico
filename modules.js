// Contenido de los módulos. Para agregar preguntas o eventos, edita este archivo.
// lesson: los textos que empiezan con "## " se muestran como subtítulo.
// quiz: "answer" es el índice (0 a 3) de la opción correcta.
// game.events: "year" define el orden correcto en el minijuego.

const MODULES = [
  {
    id: 1,
    title: "El Porfiriato",
    period: "1876 – 1911",
    lesson: [
      "## Del caudillismo a la paz porfiriana",
      "Tras la Guerra de Reforma y la intervención francesa, el país vivió décadas de inestabilidad. Porfirio Díaz, héroe de la batalla de Puebla (5 de mayo de 1862), se levantó contra Juárez con el Plan de la Noria (1871) y, tras derrotar a Lerdo de Tejada, tomó el poder con el Plan de Tuxtepec (1876).",
      "Entre 1880 y 1884 gobernó Manuel González, pero Díaz regresó al poder en 1884. Las reformas constitucionales de 1887 permitieron la reelección indefinida. Su método se resumía en la frase \"poca política y mucha administración\".",
      "## Los científicos y el orden",
      "Un grupo de asesores, conocidos como los científicos, aplicó ideas del positivismo para justificar un gobierno autoritario. Figuras como José Yves Limantour (secretario de Hacienda) y Justo Sierra defendían que el país debía ordenarse antes de avanzar hacia la democracia. El lema oficial del régimen fue \"orden y progreso\".",
      "## Ferrocarriles, inversión y economía",
      "Durante el Porfiriato se construyeron cerca de 20 mil kilómetros de vías férreas, conectando el centro del país con la frontera norte y los puertos. La inversión extranjera, sobre todo británica, estadounidense y francesa, financió buena parte de esas obras, además de telégrafos, minas (plata, cobre, oro) y la exportación de materias primas.",
      "El país creció económicamente, pero el progreso fue desigual: las ganancias se concentraron en pocas manos y el mercado interno y los salarios quedaron rezagados.",
      "## La tierra y el despojo",
      "La Ley de Colonización y Terrenos Baldíos (1883) facilitó que compañías deslindaran y compraran tierras. Muchas comunidades indígenas y campesinas perdieron sus tierras comunales frente a las grandes haciendas. Miles de peones quedaron endeudados con las tiendas de raya, donde se les vendía a precios altos y se les obligaba a pagar deudas heredadas.",
      "## Control político y represión",
      "El régimen controló elecciones, prensa y congreso. Los Rurales, fuerzas policiacas, mantuvieron el orden en caminos y pueblos con mano dura. Los opositores fueron encarcelados o exiliados. Los movimientos obreros fueron reprimidos con violencia: la huelga minera de Cananea, Sonora (1906) y la huelga textil de Río Blanco, Veracruz (1907).",
      "El Partido Liberal Mexicano, encabezado por Ricardo Flores Magón desde el exilio, publicó el periódico Regeneración y en 1906 difundió un programa con demandas laborales, agrarias y políticas.",
      "## La sucesión presidencial de 1910",
      "En 1908 Díaz declaró al periodista estadounidense James Creelman que México estaba listo para la democracia y que vería con buenos ojos una oposición. Sin embargo, en 1910 volvió a postularse. Francisco I. Madero publicó el libro La sucesión presidencial en 1910 y formó un partido antirreeleccionista. Fue encarcelado en San Luis Potosí, pero escapó a Texas en octubre de 1910.",
      "## Plan de San Luis y renuncia",
      "Desde Texas, Madero proclamó el Plan de San Luis, con fecha del 5 de octubre de 1910, que llamó al levantamiento armado el 20 de noviembre. Pronto hubo levantamientos en el norte, como el de Pascual Orozco y Francisco Villa en Chihuahua. Tras la toma de Ciudad Juárez, Díaz firmó la renuncia en mayo de 1911 y salió hacia Europa. Madero asumió la presidencia en noviembre de 1911.",
      "## Para el examen",
      "Ideas clave: la paz porfiriana se logró a costa de la libertad política y de la tierra campesina; el crecimiento económico dependió del capital extranjero; el detonante de 1910 fue político (la reelección), no económico. Fechas que debes memorizar: 1876 (llegada al poder), 1884 (regreso y reelección), 1906 y 1907 (huelgas reprimidas), 1910 (Plan de San Luis), 1911 (renuncia de Díaz)."
    ],
    game: {
      events: [
        { text: "Se promulga la Constitución liberal de 1857", year: 1857 },
        { text: "Porfirio Díaz llega al poder con el Plan de Tuxtepec", year: 1876 },
        { text: "Madero llama a la insurrección con el Plan de San Luis", year: 1910 },
        { text: "Díaz renuncia y sale al exilio", year: 1911 }
      ]
    },
    quiz: [
      {
        q: "¿Qué plan llevó a Porfirio Díaz al poder en 1876?",
        options: ["Plan de Ayala", "Plan de Tuxtepec", "Plan de Guadalupe", "Plan de San Luis"],
        answer: 1,
        explain: "Díaz tomó el poder en 1876 con el Plan de Tuxtepec, tras derrotar a Lerdo de Tejada."
      },
      {
        q: "¿Qué frase resumía el método de gobierno de Díaz?",
        options: ["Libertad, igualdad y fraternidad", "Poca política y mucha administración", "Tierra y libertad", "Sufragio efectivo, no reelección"],
        answer: 1,
        explain: "La frase \"poca política y mucha administración\" describe la idea de gobernar con control político y eficiencia administrativa."
      },
      {
        q: "¿Qué ley de 1883 facilitó que compañías adquirieran tierras y despojaran a comunidades?",
        options: ["Ley Lerdo", "Ley de Colonización y Terrenos Baldíos", "Ley Calles", "Ley de Reforma Agraria"],
        answer: 1,
        explain: "La Ley de Colonización y Terrenos Baldíos (1883) permitió deslindar y vender terrenos, y muchas tierras comunales terminaron en manos de haciendas y compañías."
      },
      {
        q: "¿Cómo se llamaba el grupo de asesores de Díaz que defendía el orden y el progreso con ideas positivistas?",
        options: ["Los científicos", "Los cristeros", "Los convencionistas", "Los rurales"],
        answer: 0,
        explain: "Los científicos, como Limantour y Justo Sierra, aplicaron el positivismo para justificar un gobierno autoritario."
      },
      {
        q: "¿En qué estado ocurrió la huelga minera de 1906 que fue reprimida con violencia?",
        options: ["Sonora", "Veracruz", "Coahuila", "Chihuahua"],
        answer: 0,
        explain: "La huelga de Cananea, Sonora (1906), fue reprimida. La de Río Blanco, Veracruz (1907), fue textil."
      },
      {
        q: "¿Qué periodista estadounidense entrevistó a Díaz en 1908, cuando Díaz declaró que México estaba listo para la democracia?",
        options: ["James Creelman", "Ricardo Flores Magón", "John Reed", "Francisco I. Madero"],
        answer: 0,
        explain: "James Creelman publicó la entrevista. Después Díaz se postuló de nuevo en 1910, lo que avivó la oposición de Madero."
      },
      {
        q: "¿Qué documento, con fecha de octubre de 1910, proclamó la insurrección maderista?",
        options: ["Plan de San Luis", "Plan de Tuxtepec", "Plan de Ayala", "Plan de Guadalupe"],
        answer: 0,
        explain: "El Plan de San Luis, firmado por Madero con fecha del 5 de octubre de 1910, convocó a levantarse en armas el 20 de noviembre."
      },
      {
        q: "¿En qué mes de 1911 renunció Porfirio Díaz a la presidencia?",
        options: ["Enero", "Mayo", "Agosto", "Noviembre"],
        answer: 1,
        explain: "Díaz renunció en mayo de 1911, tras la toma de Ciudad Juárez, y salió hacia Europa. Madero asumió la presidencia en noviembre de ese año."
      }
    ]
  },
  {
    id: 2,
    title: "Revolución Mexicana",
    period: "1910 – 1920",
    lesson: [
      "## Madero y la esperanza democrática",
      "Tras la renuncia de Díaz, Madero asumió la presidencia en noviembre de 1911. Su gobierno enfrentó la desconfianza de los porfiristas que quedaban en el poder y de los revolucionarios que esperaban cambios sociales más profundos, como la devolución de tierras. Madero impulsó la democracia electoral, pero no transformó la estructura económica ni la de la tierra.",
      "## Zapata y el Plan de Ayala",
      "Emiliano Zapata, líder campesino de Morelos, desconfió de Madero. En noviembre de 1911 proclamó el Plan de Ayala, que desconocía a Madero y exigía la restitución de tierras despojadas a los campesinos, con el lema \"Tierra y libertad\". El zapatismo se convirtió en uno de los movimientos agrarios más importantes de la Revolución.",
      "## Rebeliones contra Madero",
      "En 1912, Pascual Orozco se levantó en Chihuahua con el Plan de Chihuahua, y Félix Díaz, sobrino de Porfirio, se alzó en Veracruz. Madero enfrentó la presión de los antiguos porfiristas, de las haciendas y de la prensa, y su gobierno se debilitó progresivamente.",
      "## La Decena Trágica y el asesinato de Madero",
      "En febrero de 1913, durante la llamada Decena Trágica en la Ciudad de México, Félix Díaz y el general Victoriano Huerta se rebelaron contra el gobierno. Huerta pactó con los militares golpistas (el Pacto de la Embajada) y, tras traicionar a Madero, ordenó su aprehensión. Madero y el vicepresidente José María Pino Suárez fueron asesinados el 22 de febrero de 1913.",
      "## Huerta y el Plan de Guadalupe",
      "Huerta gobernó como dictador hasta julio de 1914. Venustiano Carranza, gobernador de Coahuila, lanzó en marzo de 1913 el Plan de Guadalupe, que desconocía a Huerta y convocó al Ejército Constitucionalista. Álvaro Obregón en Sonora y Francisco Villa en Chihuahua fueron jefes militares clave en la lucha contra Huerta.",
      "## La división del bando revolucionario",
      "Tras la caída de Huerta en 1914, los revolucionarios se dividieron. La Convención de Aguascalientes intentó unir a villistas y zapatistas contra Carranza, pero no llegó a un acuerdo y la guerra civil se impuso. Obregón derrotó a Villa en Celaya (1915) y Carranza quedó al frente del país. Villa siguió en armas hasta que, en 1916, atacó Columbus, Nuevo México; Estados Unidos envió una expedición punitiva para perseguirlo.",
      "## Intervención estadounidense",
      "En abril de 1914, tropas de Estados Unidos ocuparon Veracruz durante el conflicto contra Huerta. Esa ocupación generó rechazo nacionalista y fue parte del contexto de las tensiones entre ambos países durante la Revolución.",
      "## La Constitución de 1917",
      "El Congreso Constituyente se reunió en Querétaro y aprobó la Constitución de 1917, firmada el 5 de febrero. Mantuvo los principios liberales de 1857 y añadió derechos sociales. El artículo 3 estableció una educación laica y gratuita; el artículo 27 reconoció que la nación es propietaria originaria de tierras y aguas, y permitió la reforma agraria; el artículo 123 reconoció derechos laborales como la jornada de ocho horas y el salario mínimo.",
      "## El fin de la lucha armada",
      "Zapata fue asesinado en abril de 1919 en Chinameca, Morelos, en una emboscada preparada por Jesús Guajardo. En 1920 Carranza fue derrocado: Obregón y Adolfo de la Huerta proclamaron el Plan de Agua Prieta, y Carranza murió en mayo de 1920 en Tlaxcalantongo, Puebla. Villa fue asesinado en Parral, Chihuahua, en 1923.",
      "## Para el examen",
      "Ideas clave: la Revolución tuvo causas políticas (la no reelección), agrarias (la tierra) y sociales (los obreros); las facciones se enfrentaron entre sí; la Constitución de 1917 es el resultado jurídico del movimiento. Fechas: 1910 (inicio), 1911 (Plan de Ayala y gobierno de Madero), 1913 (Decena Trágica y Plan de Guadalupe), 1914 (caída de Huerta), 1917 (Constitución), 1919 (muerte de Zapata), 1920 (fin del gobierno de Carranza)."
    ],
    game: null,
    quiz: [
      {
        q: "¿Qué lema caracterizó el Plan de Ayala de Emiliano Zapata?",
        options: ["Orden y progreso", "Tierra y libertad", "Sufragio efectivo", "Pan y trabajo"],
        answer: 1,
        explain: "El Plan de Ayala (1911) exigía la restitución de tierras a los campesinos con el lema \"Tierra y libertad\"."
      },
      {
        q: "¿Qué hecho de febrero de 1913 terminó con el asesinato de Madero y Pino Suárez?",
        options: ["La Decena Trágica", "La Batalla de Celaya", "La Convención de Aguascalientes", "La huelga de Río Blanco"],
        answer: 0,
        explain: "Durante la Decena Trágica, Huerta traicionó a Madero, quien fue asesinado el 22 de febrero de 1913."
      },
      {
        q: "¿Qué plan proclamó Venustiano Carranza en marzo de 1913 para desconocer a Huerta?",
        options: ["Plan de Guadalupe", "Plan de Ayala", "Plan de San Luis", "Plan de Agua Prieta"],
        answer: 0,
        explain: "El Plan de Guadalupe desconoció a Huerta y dio origen al Ejército Constitucionalista."
      },
      {
        q: "¿En qué ciudad se firmó la Constitución de 1917?",
        options: ["Querétaro", "Aguascalientes", "Chihuahua", "Puebla"],
        answer: 0,
        explain: "El Congreso Constituyente se reunió en Querétaro y firmó la Constitución el 5 de febrero de 1917."
      },
      {
        q: "¿Qué artículo de la Constitución de 1917 reconoció que la nación es la propietaria originaria de tierras y aguas?",
        options: ["Artículo 3", "Artículo 27", "Artículo 123", "Artículo 130"],
        answer: 1,
        explain: "El artículo 27 fundamentó la reforma agraria y el control del subsuelo. El 3 se refiere a la educación y el 123 a los derechos laborales."
      },
      {
        q: "¿Qué artículo estableció la educación laica y gratuita?",
        options: ["Artículo 3", "Artículo 27", "Artículo 123", "Artículo 130"],
        answer: 0,
        explain: "El artículo 3 estableció una educación laica y gratuita; el 130 regula la relación entre Iglesia y Estado."
      },
      {
        q: "¿En qué año fue asesinado Emiliano Zapata?",
        options: ["1916", "1919", "1920", "1923"],
        answer: 1,
        explain: "Zapata fue asesinado en abril de 1919 en Chinameca, Morelos. Villa murió en 1923 en Parral."
      },
      {
        q: "¿Qué expedición estadounidense persiguió a Villa tras el ataque a Columbus en 1916?",
        options: ["La expedición punitiva de Pershing", "La ocupación de Veracruz", "El Plan de Guadalupe", "El Pacto de la Embajada"],
        answer: 0,
        explain: "Tras el ataque a Columbus, Estados Unidos envió la expedición punitiva del general Pershing para perseguir a Villa."
      }
    ]
  },
  {
    id: 3,
    title: "México posrevolucionario",
    period: "1920 – 1940",
    lesson: [
      "## Reconstrucción tras la lucha armada",
      "Tras el asesinato de Carranza, Álvaro Obregón gobernó de 1920 a 1924. Su objetivo fue pacificar al país, negociar con militares, campesinos y obreros, y reconstruir las instituciones. Obregón controló a los caudillos con concesiones y con el reparto de tierras limitado.",
      "## Educación: Vasconcelos y las misiones",
      "En 1921 se creó la Secretaría de Educación Pública (SEP), a cargo de José Vasconcelos. Su proyecto incluyó la campaña de alfabetización, la construcción de bibliotecas, las misiones culturales que llevaban maestros al campo y el impulso al arte público: los muralistas Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros pintaron murales en edificios públicos. Después, Moisés Sáenz impulsó la escuela rural mexicana.",
      "## Calles y el Maximato",
      "Plutarco Elías Calles gobernó de 1924 a 1928. Aunque no se reeligió de inmediato, siguió controlando la política desde atrás durante el llamado Maximato (1928–1934), en el que Calles era conocido como el \"Jefe Máximo\". En 1929 fundó el Partido Nacional Revolucionario (PNR), antecedente del PRI, para concentrar a las facciones revolucionarias en una sola organización.",
      "## La Guerra Cristera",
      "La aplicación de leyes anticlericales, como las reformas al Código Penal de 1926 conocidas como la Ley Calles, enfrentó al gobierno con la Iglesia católica y con campesinos católicos. Así estalló la Guerra Cristera (1926–1929), que dejó miles de víctimas. Terminó con los acuerdos de 1929, mediados por Estados Unidos mediante el embajador Dwight Morrow, que permitieron reabrir los templos.",
      "## Lázaro Cárdenas y la reforma agraria",
      "Lázaro Cárdenas gobernó de 1934 a 1940, con una política de izquierda y gran apoyo popular. Repartió cerca de 18 millones de hectáreas, con las que se crearon ejidos, más que todos los gobiernos anteriores juntos. También impulsó la educación socialista, reformando el artículo 3 en 1934.",
      "## Organización obrera y campesina",
      "En 1936 se fundó la Confederación de Trabajadores de México (CTM), dirigida por Vicente Lombardo Toledano, que agrupó a los sindicatos. En 1938 se creó la Confederación Nacional Campesina (CNC), que organizó a los ejidatarios. El gobierno buscó alianzas con los obreros y campesinos a cambio de apoyo al Estado.",
      "## Nacionalización de ferrocarriles y petróleo",
      "En 1937 el gobierno nacionalizó los ferrocarriles. Ese mismo año, los trabajadores petroleros de compañías extranjeras emplazaron a huelga. Tras el fallo de la Suprema Corte a favor de los trabajadores y el rechazo de las compañías a cumplirlo, el 18 de marzo de 1938 Cárdenas decretó la expropiación petrolera. En junio de 1938 se creó Petróleos Mexicanos (Pemex).",
      "## El PRM: un partido por sectores",
      "En 1938 Cárdenas transformó el PNR en el Partido de la Revolución Mexicana (PRM), organizado en cuatro sectores: obrero, campesino, popular y militar. Este diseño corporativo, que en 1946 se convertiría en el PRI, permitió controlar la política durante décadas.",
      "## Para el examen",
      "Ideas clave: el Estado posrevolucionario buscó institucionalizar la Revolución; la educación, la tierra y el petróleo fueron pilares de la reconstrucción; el poder se concentró en un partido corporativo. Fechas: 1921 (SEP), 1926–1929 (Guerra Cristera), 1929 (PNR), 1934 (educación socialista), 1936 (CTM), 1938 (expropiación petrolera y PRM)."
    ],
    game: null,
    quiz: [
      {
        q: "¿Quién fue el primer secretario de Educación Pública al crearse la SEP en 1921?",
        options: ["José Vasconcelos", "Plutarco Elías Calles", "Lázaro Cárdenas", "Álvaro Obregón"],
        answer: 0,
        explain: "José Vasconcelos encabezó la SEP, impulsó la alfabetización y las misiones culturales."
      },
      {
        q: "¿Cómo se llamó el periodo en que Calles controló la política desde atrás, entre 1928 y 1934?",
        options: ["Maximato", "Milagro mexicano", "Desarrollo estabilizador", "Apertura democrática"],
        answer: 0,
        explain: "El Maximato (1928–1934) recibió su nombre por el título de \"Jefe Máximo\" de Calles."
      },
      {
        q: "¿Qué partido fundó Calles en 1929?",
        options: ["PAN", "PNR", "PRM", "PRI"],
        answer: 1,
        explain: "El PNR se fundó en 1929 y en 1938 se convirtió en el PRM; en 1946 pasó a llamarse PRI."
      },
      {
        q: "¿Qué conflicto enfrentó al gobierno con grupos católicos entre 1926 y 1929?",
        options: ["La Guerra Cristera", "La Guerra de Castas", "La Guerra de Reforma", "La Guerra de Independencia"],
        answer: 0,
        explain: "La Guerra Cristera fue detonada por la aplicación de leyes anticlericales y terminó con los acuerdos de 1929."
      },
      {
        q: "¿Aproximadamente cuántas hectáreas repartió Cárdenas durante su gobierno?",
        options: ["2 millones", "5 millones", "18 millones", "50 millones"],
        answer: 2,
        explain: "Cárdenas repartió cerca de 18 millones de hectáreas, creando ejidos."
      },
      {
        q: "¿En qué año se expropió la industria petrolera?",
        options: ["1917", "1921", "1938", "1946"],
        answer: 2,
        explain: "El 18 de marzo de 1938 Cárdenas decretó la expropiación petrolera; en junio se creó Pemex."
      },
      {
        q: "¿Qué organización obrera fundó Vicente Lombardo Toledano en 1936?",
        options: ["CTM", "CNC", "CROM", "PNR"],
        answer: 0,
        explain: "La Confederación de Trabajadores de México (CTM) se fundó en 1936. La CNC agrupó a los campesinos desde 1938."
      },
      {
        q: "¿Cuáles eran los cuatro sectores del PRM?",
        options: [
          "Obrero, campesino, popular y militar",
          "Obrero, empresarial, religioso y urbano",
          "Campesino, minero, estudiantil y militar",
          "Obrero, estatal, popular y juvenil"
        ],
        answer: 0,
        explain: "El PRM se organizó en los sectores obrero, campesino, popular y militar, base del corporativismo del Estado."
      }
    ]
  },
  {
    id: 4,
    title: "Milagro mexicano",
    period: "1940 – 1970",
    lesson: [
      "## Un modelo de crecimiento",
      "Entre 1940 y 1970 México vivió un crecimiento económico sostenido, con inflación baja y una moneda estable. Este periodo se conoce como el \"milagro mexicano\" o desarrollo estabilizador. Se apoyó en la industrialización por sustitución de importaciones (ISI): producir en el país bienes que antes se compraban en el extranjero.",
      "## Gobiernos y prioridades",
      "Manuel Ávila Camacho (1940–1946) dio prioridad a la industria y buscó la conciliación con los empresarios. Miguel Alemán (1946–1952) impulsó la industrialización y las grandes obras de infraestructura, como presas, carreteras y la Ciudad Universitaria de la UNAM. Adolfo Ruiz Cortines (1952–1958) continuó el modelo, aunque tuvo que devaluar el peso en 1954.",
      "## La estabilidad del peso",
      "En 1954 el peso se devaluó de 8.65 a 12.50 pesos por dólar. A partir de entonces el tipo de cambio se mantuvo fijo durante más de dos décadas. Esa estabilidad atrajo inversión extranjera y permitió planear a largo plazo; por eso el periodo 1954–1970 se conoce como desarrollo estabilizador.",
      "## Seguridad social y educación",
      "En 1943 se creó el Instituto Mexicano del Seguro Social (IMSS), que dio atención médica y pensiones a los trabajadores formales. En 1959 el gobierno de Adolfo López Mateos entregó por primera vez los libros de texto gratuitos, una medida que llegó a millones de niños.",
      "## Electricidad y comunicaciones",
      "En 1960 López Mateos nacionalizó la industria eléctrica: las compañías privadas fueron adquiridas y la Comisión Federal de Electricidad (CFE) quedó como el principal proveedor del servicio. La infraestructura de energía, carreteras y telecomunicaciones fue clave para la industrialización.",
      "## El campo y el Programa Bracero",
      "La agricultura comercial creció en el norte del país, mientras muchos pequeños campesinos quedaron rezagados. Entre 1942 y 1964 miles de trabajadores mexicanos fueron contratados como braceros por acuerdos con Estados Unidos, para trabajar temporalmente en el campo y la industria de ese país.",
      "## Derechos políticos",
      "En 1953 se reformó la Constitución para que las mujeres pudieran votar en elecciones federales, con el gobierno de Ruiz Cortines. Sin embargo, el sistema político siguió dominado por el PRI, con elecciones poco competitivas.",
      "## Crecimiento con desigualdad",
      "El crecimiento acelerado trajo urbanización: millones de personas migraron del campo a las ciudades, sobre todo a la Ciudad de México. Crecieron la clase media y las universidades, pero la pobreza rural, la desigualdad y el cierre de espacios políticos generaron tensiones. Esas tensiones estallaron en 1968.",
      "## El fin del modelo",
      "Hacia 1970 el modelo mostró límites: la industria dependía de importaciones, el déficit público y la deuda crecieron, y el campo se rezagó. En la década de 1970 el país enfrentó devaluaciones y una crisis más profunda.",
      "## Para el examen",
      "Ideas clave: el crecimiento se basó en la ISI, el Estado intervino en la economía y en la seguridad social, y la estabilidad fue el sello del periodo. Fechas: 1942–1964 (Programa Bracero), 1943 (IMSS), 1953 (voto femenino), 1954 (devaluación), 1959 (libros de texto gratuitos), 1960 (nacionalización eléctrica)."
    ],
    game: null,
    quiz: [
      {
        q: "¿Cómo se llama el modelo que consistió en producir en el país los bienes que antes se importaban?",
        options: ["Industrialización por sustitución de importaciones", "Libre comercio", "Economía de subsistencia", "Socialismo agrario"],
        answer: 0,
        explain: "La ISI fue la base del crecimiento del milagro mexicano; el Estado protegía la industria nacional con aranceles y apoyo."
      },
      {
        q: "¿En qué año se creó el Instituto Mexicano del Seguro Social (IMSS)?",
        options: ["1917", "1943", "1959", "1960"],
        answer: 1,
        explain: "El IMSS se creó en 1943 para dar seguridad social a los trabajadores."
      },
      {
        q: "¿A cuántos pesos por dólar se devaluó la moneda en 1954?",
        options: ["8.65", "12.50", "20.00", "25.00"],
        answer: 1,
        explain: "En 1954 el peso pasó de 8.65 a 12.50 por dólar, y el tipo de cambio se mantuvo fijo hasta 1976."
      },
      {
        q: "¿Qué programa permitió que miles de trabajadores mexicanos trabajaran temporalmente en Estados Unidos?",
        options: ["Programa Bracero", "Plan Marshall", "Operación Cóndor", "Mercado Común"],
        answer: 0,
        explain: "El Programa Bracero (1942–1964) fue un acuerdo bilateral para contratar trabajadores temporales."
      },
      {
        q: "¿En qué año se nacionalizó la industria eléctrica?",
        options: ["1938", "1954", "1960", "1968"],
        answer: 2,
        explain: "En 1960 López Mateos nacionalizó la industria eléctrica y la CFE quedó como principal proveedor."
      },
      {
        q: "¿Qué presidente entregó los libros de texto gratuitos en 1959?",
        options: ["Miguel Alemán", "Adolfo López Mateos", "Gustavo Díaz Ordaz", "Adolfo Ruiz Cortines"],
        answer: 1,
        explain: "López Mateos impulsó los libros de texto gratuitos, que se entregaron por primera vez en 1959."
      },
      {
        q: "¿En qué año obtuvieron las mujeres el derecho a votar en elecciones federales?",
        options: ["1917", "1935", "1953", "1968"],
        answer: 2,
        explain: "La reforma de 1953 reconoció el voto femenino en elecciones federales."
      },
      {
        q: "¿Cómo se conoce el periodo de inflación baja y moneda estable entre 1954 y 1970?",
        options: ["Desarrollo estabilizador", "Apertura democrática", "Economía de guerra", "Shock neoliberal"],
        answer: 0,
        explain: "El desarrollo estabilizador se caracterizó por la estabilidad de precios y del tipo de cambio."
      }
    ]
  },
  {
    id: 5,
    title: "1968 y la guerra sucia",
    period: "1968 – 1982",
    lesson: [
      "## El detonante",
      "El 22 de julio de 1968 una riña entre estudiantes de escuelas preparatorias y vocacionales del Instituto Politécnico Nacional, y la policía, derivó en una protesta masiva. Los estudiantes exigían la destitución de jefes policiacos, la derogación del artículo 145 bis del Código Penal (llamado \"delito de disolución social\") y la liberación de presos políticos.",
      "## Un movimiento amplio",
      "Durante el verano el movimiento creció. Hubo marchas multitudinarias en la Ciudad de México, la participación de universidades y del Politécnico, y la solidaridad de sectores de maestros, obreros y ciudadanos. El Consejo Nacional de Huelga (CNH) organizó el pliego petitorio y las protestas, en el contexto de la cercanía de los Juegos Olímpicos de México 1968.",
      "## La ocupación militar",
      "A finales de julio el ejército ocupó el Zócalo y la Universidad Nacional Autónoma de México (UNAM). En septiembre las tropas entraron a la Ciudad Universitaria y a las instalaciones del Politécnico, lo que causó detenciones y la disolución de asambleas.",
      "## 2 de octubre de 1968: Tlatelolco",
      "El 2 de octubre, en la Plaza de las Tres Culturas de Tlatelolco, se realizaba un mitin estudiantil. Tropas del ejército y un grupo especial conocido como Batallón Olimpia dispararon contra la multitud. Hubo muchos muertos y heridos, y cientos de detenidos. El número de víctimas sigue siendo debatido: las cifras oficiales son mucho menores que las estimaciones de testigos, periodistas e investigaciones posteriores, que hablan de cientos de muertos.",
      "## Después de Tlatelolco",
      "Los Juegos Olímpicos se inauguraron el 12 de octubre, en medio de la represión. El movimiento estudiantil quedó desarticulado. El presidente Gustavo Díaz Ordaz terminó su mandato en 1970, y lo sucedió Luis Echeverría.",
      "## La guerra sucia",
      "Entre los años setenta y principios de los ochenta, el Estado combatió a grupos guerrilleros y a opositores con detenciones ilegales, torturas, ejecuciones y desapariciones forzadas. Participaron corporaciones de seguridad como la Dirección Federal de Seguridad (DFS), además de unidades militares. Esa etapa se conoce como guerra sucia.",
      "## Guerrillas y represión en Guerrero",
      "En Guerrero, Lucio Cabañas dirigió el Partido de los Pobres, una guerrilla rural que se enfrentó al Ejército. El 10 de junio de 1971, durante una marcha estudiantil en la Ciudad de México, grupos paramilitares conocidos como Halcones atacaron a los manifestantes; el episodio, llamado \"Halconazo\", dejó decenas de muertos.",
      "## Memoria y justicia",
      "En 2001 se creó la Fiscalía Especial para investigar los hechos del pasado, conocida como FEMOSPP, que documentó desapariciones forzadas y abusos. La mayoría de los casos no llegó a sentencia. Para el examen: la Comisión Nacional de Derechos Humanos (CNDH) es de 1990, distinta de la fiscalía de 2001.",
      "## Para el examen",
      "Ideas clave: el 68 fue un movimiento por libertades democráticas y contra el autoritarismo; Tlatelolco es el momento de mayor represión; la guerra sucia fue una política de Estado de detenciones y desapariciones. Fechas: 22 de julio de 1968 (inicio), 2 de octubre de 1968 (Tlatelolco), 12 de octubre (Juegos Olímpicos), 10 de junio de 1971 (Halconazo), 2001 (FEMOSPP)."
    ],
    game: null,
    quiz: [
      {
        q: "¿Qué día comenzó el movimiento estudiantil de 1968 tras la riña con la policía?",
        options: ["22 de julio", "2 de octubre", "12 de octubre", "18 de septiembre"],
        answer: 0,
        explain: "El movimiento empezó el 22 de julio de 1968, tras la riña entre estudiantes y la policía."
      },
      {
        q: "¿En qué plaza ocurrió la masacre del 2 de octubre de 1968?",
        options: ["Zócalo", "Tlatelolco", "Garibaldi", "Bellas Artes"],
        answer: 1,
        explain: "La represión ocurrió en la Plaza de las Tres Culturas, en Tlatelolco."
      },
      {
        q: "¿Qué gran evento internacional se realizó en México en octubre de 1968?",
        options: ["Mundial de fútbol", "Juegos Olímpicos", "Copa América", "Juegos Panamericanos"],
        answer: 1,
        explain: "Los Juegos Olímpicos se inauguraron el 12 de octubre de 1968, en medio de la represión."
      },
      {
        q: "¿Qué presidente gobernaba cuando ocurrieron los hechos de 1968?",
        options: ["Gustavo Díaz Ordaz", "Luis Echeverría", "Adolfo López Mateos", "Miguel Alemán"],
        answer: 0,
        explain: "Díaz Ordaz gobernó de 1964 a 1970. Echeverría lo sucedió en 1970."
      },
      {
        q: "¿Cómo se llamaba el grupo especial que actuó en Tlatelolco?",
        options: ["Batallón Olimpia", "Guardia Nacional", "Halcones", "Rurales"],
        answer: 0,
        explain: "El Batallón Olimpia fue un grupo especial que participó en la represión del 2 de octubre. Los Halcones actuaron en 1971."
      },
      {
        q: "¿Qué guerrillero guerrerense dirigió el Partido de los Pobres?",
        options: ["Lucio Cabañas", "Emiliano Zapata", "Genaro Vázquez", "Ricardo Flores Magón"],
        answer: 0,
        explain: "Lucio Cabañas dirigió el Partido de los Pobres en la sierra de Guerrero durante los años setenta."
      },
      {
        q: "¿Qué dependencia de seguridad estuvo vinculada a la represión y la guerra sucia?",
        options: ["Dirección Federal de Seguridad (DFS)", "Secretaría de Educación Pública", "Comisión Nacional de Derechos Humanos", "Instituto Federal Electoral"],
        answer: 0,
        explain: "La DFS fue el principal órgano de inteligencia y seguridad involucrado en la guerra sucia."
      },
      {
        q: "¿En qué año se creó la Fiscalía Especial (FEMOSPP) para investigar los crímenes del pasado?",
        options: ["1990", "2001", "1968", "2012"],
        answer: 1,
        explain: "La FEMOSPP se creó en 2001. La CNDH, en cambio, se creó en 1990."
      }
    ]
  },
  {
    id: 6,
    title: "Crisis y reformas",
    period: "1982 – 2000",
    lesson: [
      "## La crisis de 1982",
      "A principios de los ochenta cayeron los precios del petróleo, aumentó la deuda externa y subieron las tasas de interés. En agosto de 1982 México anunció que no podía pagar su deuda, lo que se conoce como moratoria. El 1 de septiembre de 1982 el presidente José López Portillo nacionalizó la banca. La crisis marcó el fin del modelo de desarrollo basado en el Estado y la deuda.",
      "## Austeridad y el gobierno de De la Madrid",
      "Miguel de la Madrid (1982–1988) aplicó programas de ajuste: recorte del gasto público, venta de empresas estatales y reducción de subsidios. México entró al GATT en 1986, iniciando la apertura comercial. El sismo del 19 de septiembre de 1985 en la Ciudad de México dejó miles de muertos y mostró el debilitamiento de las instituciones y la fuerza de la solidaridad ciudadana.",
      "## 1988: la elección cuestionada",
      "En la elección presidencial de 1988 Carlos Salinas de Gortari, del PRI, fue declarado ganador en medio de denuncias de fraude. Cuauhtémoc Cárdenas, candidato del Frente Democrático Nacional, obtuvo votos significativos. El conteo se interrumpió por una caída del sistema de cómputo, lo que alimentó las sospechas.",
      "## Salinas: privatización y libre comercio",
      "Salinas (1988–1994) privatizó empresas como Teléfonos de México (Telmex) en 1990. En 1992 reformó el artículo 27 constitucional para permitir la venta de tierras ejidales, lo que puso fin al reparto agrario. Firmó el Tratado de Libre Comercio de América del Norte (TLCAN), que entró en vigor el 1 de enero de 1994. Creó el programa Solidaridad para combatir la pobreza.",
      "## 1994: un año de crisis",
      "El 1 de enero de 1994 el Ejército Zapatista de Liberación Nacional (EZLN) se levantó en armas en Chiapas, el mismo día que entró en vigor el TLCAN. En marzo fue asesinado Luis Donaldo Colosio, candidato presidencial del PRI. En diciembre, bajo el gobierno de Ernesto Zedillo, el peso se devaluó, lo que se conoce como el \"error de diciembre\" y desató una crisis económica.",
      "## El rescate financiero",
      "En 1995 el gobierno recibió un apoyo financiero de Estados Unidos y del Fondo Monetario Internacional (FMI) para estabilizar la economía. La crisis provocó quiebras, aumento del desempleo y de la deuda de las familias.",
      "## Reforma electoral",
      "El Instituto Federal Electoral (IFE) se creó en 1990 para organizar las elecciones. En 1996 se reformó la ley para dar autonomía al IFE, lo que fortaleció la confianza en el proceso electoral.",
      "## 1997: el cambio",
      "En las elecciones intermedias de 1997 el PRI perdió por primera vez la mayoría en la Cámara de Diputados. Ese mismo año Cuauhtémoc Cárdenas ganó la jefatura de gobierno del Distrito Federal, el primer cargo de elección directa en la capital.",
      "## Para el examen",
      "Ideas clave: la crisis de 1982 llevó al cambio de modelo económico (de la intervención del Estado a la apertura y la privatización); el TLCAN y la reforma al artículo 27 marcaron la nueva etapa; las reformas electorales abrieron el camino a la alternancia. Fechas: 1982 (moratoria y nacionalización bancaria), 1985 (sismo), 1988 (elección cuestionada), 1992 (reforma al artículo 27), 1994 (TLCAN, EZLN, error de diciembre), 1996 (IFE autónomo), 1997 (el PRI pierde la mayoría)."
    ],
    game: null,
    quiz: [
      {
        q: "¿En qué año se nacionalizó la banca en México?",
        options: ["1968", "1982", "1988", "1994"],
        answer: 1,
        explain: "El 1 de septiembre de 1982 López Portillo nacionalizó la banca, en medio de la crisis de la deuda."
      },
      {
        q: "¿Qué presidente nacionalizó la banca en 1982?",
        options: ["Gustavo Díaz Ordaz", "José López Portillo", "Miguel de la Madrid", "Carlos Salinas de Gortari"],
        answer: 1,
        explain: "López Portillo nacionalizó la banca; De la Madrid aplicó después programas de ajuste."
      },
      {
        q: "¿Quién fue el candidato del Frente Democrático Nacional en la elección de 1988?",
        options: ["Cuauhtémoc Cárdenas", "Luis Donaldo Colosio", "Ernesto Zedillo", "Francisco I. Madero"],
        answer: 0,
        explain: "Cuauhtémoc Cárdenas fue el candidato del FDN; la elección de 1988 se cuestionó por fraude."
      },
      {
        q: "¿Qué reforma constitucional de 1992 permitió vender tierras ejidales?",
        options: ["Artículo 3", "Artículo 27", "Artículo 123", "Artículo 130"],
        answer: 1,
        explain: "La reforma al artículo 27 de 1992 permitió privatizar las tierras ejidales y puso fin al reparto agrario."
      },
      {
        q: "¿Cuándo entró en vigor el TLCAN?",
        options: ["1 de enero de 1992", "1 de enero de 1994", "1 de enero de 1997", "1 de enero de 2000"],
        answer: 1,
        explain: "El TLCAN entró en vigor el 1 de enero de 1994, el mismo día del levantamiento zapatista."
      },
      {
        q: "¿Qué grupo se levantó en armas en Chiapas el 1 de enero de 1994?",
        options: ["EZLN", "PRD", "PAN", "CNTE"],
        answer: 0,
        explain: "El Ejército Zapatista de Liberación Nacional (EZLN) se levantó en Chiapas en 1994."
      },
      {
        q: "¿Cómo se conoce la devaluación de diciembre de 1994?",
        options: ["Error de diciembre", "Milagro mexicano", "Crack del 29", "Apagón analógico"],
        answer: 0,
        explain: "El \"error de diciembre\" de 1994 fue una devaluación que desató una crisis financiera."
      },
      {
        q: "¿En qué año el PRI perdió por primera vez la mayoría en la Cámara de Diputados?",
        options: ["1988", "1994", "1997", "2000"],
        answer: 2,
        explain: "En 1997 el PRI perdió la mayoría en la Cámara de Diputados, en la elección intermedia."
      }
    ]
  },
  {
    id: 7,
    title: "Transición democrática",
    period: "2000 – 2012",
    lesson: [
      "## El fin de 71 años de PRI",
      "En las elecciones presidenciales del 2 de julio de 2000, Vicente Fox, candidato de la Alianza por el Cambio (PAN y Partido Verde), derrotó a Francisco Labastida del PRI. Era la primera vez en 71 años que el PRI perdía la presidencia. La alternancia fue pacífica y reconocida por el propio gobierno saliente. Este hecho se considera el inicio formal de la transición democrática.",
      "## Instituciones y transparencia",
      "Durante estos años se fortalecieron las instituciones electorales, como el Instituto Federal Electoral (IFE) y el Tribunal Electoral del Poder Judicial de la Federación. En 2002 se publicó la Ley Federal de Transparencia y Acceso a la Información Pública Gubernamental, que dio a los ciudadanos derecho a consultar información del gobierno y creó un órgano para garantizarlo.",
      "## Fox: avances y límites",
      "Fox promovió la transparencia y la estabilidad económica, pero no logró impulsar una reforma fiscal ni una reforma energética, porque el Congreso estaba dividido y el PRI conservaba fuerza. Su gobierno mostró que la alternancia no basta por sí sola: hace falta acuerdo político para reformar.",
      "## La elección de 2006",
      "En la elección presidencial de 2006 Felipe Calderón, del PAN, ganó por una diferencia mínima frente a Andrés Manuel López Obrador, de la coalición encabezada por el PRD. El resultado fue impugnado: López Obrador denunció irregularidades y se mantuvo un plantón en la Avenida Reforma durante meses. El IFE validó el resultado, y el Tribunal Electoral confirmó la elección.",
      "## La guerra contra el narcotráfico",
      "Al inicio de su gobierno, Calderón desplegó al Ejército y a la Marina contra los cárteles de la droga. La estrategia aumentó la violencia en varias regiones del país, con decenas de miles de muertes durante el sexenio y numerosas denuncias de violaciones a derechos humanos.",
      "## Reforma electoral de 2007-2008",
      "En 2007 y 2008 se reformó el sistema electoral. Se redujeron los tiempos de campaña, se limitó el gasto de los partidos y se prohibió que terceros compraran propaganda en radio y televisión. El objetivo fue reducir la influencia del dinero y de los medios en las elecciones.",
      "## Alternancias locales",
      "Durante estos años hubo alternancias en gubernaturas y ayuntamientos. Partidos distintos al PRI ganaron estados que antes eran de ese partido, lo que mostró que la competencia se extendió a todo el país. Sin embargo, el PRI recuperó la presidencia en 2012 con Enrique Peña Nieto.",
      "## Para el examen",
      "Ideas clave: la transición se dio por alternancia en las urnas, por instituciones electorales más fuertes y por la transparencia; la falta de reformas de fondo y la violencia del narcotráfico marcaron el periodo. Fechas: 2 de julio de 2000 (triunfo de Fox), 2002 (ley de transparencia), 2006 (elección disputada y guerra contra el narcotráfico), 2007-2008 (reforma electoral), 2012 (regreso del PRI)."
    ],
    game: null,
    quiz: [
      {
        q: "¿En qué año ganó Vicente Fox la presidencia?",
        options: ["1994", "2000", "2006", "2012"],
        answer: 1,
        explain: "Fox ganó el 2 de julio de 2000, la primera alternancia presidencial en 71 años."
      },
      {
        q: "¿Qué partido gobernó México durante 71 años antes de la elección de 2000?",
        options: ["PAN", "PRD", "PRI", "Partido Verde"],
        answer: 2,
        explain: "El PRI gobernó el país desde 1929 hasta 2000, cuando perdió la presidencia frente a Fox."
      },
      {
        q: "¿Qué presidente declaró la guerra contra el narcotráfico al inicio de su gobierno?",
        options: ["Felipe Calderón", "Vicente Fox", "Enrique Peña Nieto", "Ernesto Zedillo"],
        answer: 0,
        explain: "Calderón desplegó al Ejército contra los cárteles desde 2006, lo que marcó la estrategia de seguridad del sexenio."
      },
      {
        q: "¿Quién fue el candidato de la izquierda que quedó en segundo lugar en 2006?",
        options: ["Francisco I. Madero", "Andrés Manuel López Obrador", "Cuauhtémoc Cárdenas", "Luis Donaldo Colosio"],
        answer: 1,
        explain: "López Obrador fue el candidato de la coalición encabezada por el PRD y denunció la elección de 2006."
      },
      {
        q: "¿Qué ley de 2002 buscó garantizar el acceso a la información pública?",
        options: ["Ley Federal de Transparencia y Acceso a la Información Pública", "Ley Electoral de 1990", "Ley de Amparo", "Ley Lerdo"],
        answer: 0,
        explain: "La ley de transparencia de 2002 reconoció el derecho de los ciudadanos a consultar información del gobierno."
      },
      {
        q: "¿Qué institución organizó las elecciones de 2006?",
        options: ["IFE", "INE", "CNDH", "IFAI"],
        answer: 0,
        explain: "El IFE organizó las elecciones de 2006. El INE lo sustituyó en 2014."
      },
      {
        q: "¿En qué fecha se celebró la elección presidencial que ganó Fox?",
        options: ["2 de julio de 2000", "1 de julio de 2000", "5 de julio de 2000", "18 de julio de 2000"],
        answer: 0,
        explain: "La elección presidencial de 2000 se celebró el 2 de julio."
      },
      {
        q: "¿Qué medida de la reforma electoral de 2007-2008 prohibió a terceros comprar propaganda en radio y televisión?",
        options: [
          "Prohibir la compra de propaganda por terceros en radio y televisión",
          "Legalizar la reelección presidencial",
          "Eliminar el voto secreto",
          "Privatizar Pemex"
        ],
        answer: 0,
        explain: "La reforma de 2007-2008 buscó reducir la influencia del dinero en las campañas."
      }
    ]
  },
  {
    id: 8,
    title: "Reformas estructurales",
    period: "2012 – 2018",
    lesson: [
      "## El regreso del PRI",
      "En 2012 Enrique Peña Nieto, del PRI, ganó la presidencia para el sexenio 2012–2018. Su gobierno firmó el Pacto por México en diciembre de 2012, un acuerdo con los principales partidos (PAN y PRD) para impulsar reformas de fondo.",
      "## Reformas estructurales",
      "Se aprobaron reformas en varios ámbitos. En educación (2013) se creó el Servicio Profesional Docente y un sistema de evaluación magisterial. En telecomunicaciones (2013) se creó el Instituto Federal de Telecomunicaciones (IFT) para regular el sector. En materia fiscal (2013) se modificaron impuestos. En energía (2013-2014) se abrieron el petróleo y la electricidad a la inversión privada, con la posibilidad de contratos con empresas extranjeras.",
      "## Reforma política de 2014",
      "En 2014 el Instituto Federal Electoral (IFE) fue sustituido por el Instituto Nacional Electoral (INE), con nuevas facultades para organizar elecciones federales y locales. También se permitieron las candidaturas independientes, es decir, candidatos sin partido.",
      "## Ayotzinapa",
      "La noche del 26 de septiembre de 2014, en Iguala, Guerrero, 43 estudiantes de la Escuela Normal Rural de Ayotzinapa desaparecieron tras ataques de policías municipales y la participación de grupos criminales. El caso se volvió símbolo de la impunidad y de la desaparición forzada, y se investigó en años posteriores sin una versión definitiva aceptada por las familias.",
      "## Corrupción y escándalos",
      "En 2014 se hizo público el caso de la \"Casa Blanca\", una propiedad de la esposa del presidente que generó dudas sobre posibles conflictos de interés. El escándalo dañó la credibilidad del gobierno, aunque no hubo sanción definitiva para los involucrados.",
      "## Seguridad y el Chapo",
      "En 2015 Joaquín \"El Chapo\" Guzmán escapó del penal del Altiplano, en el Estado de México, por segunda ocasión; la primera fue en 2001 desde el penal de Puente Grande. Fue recapturado en 2016 y extraditado a Estados Unidos en 2017.",
      "## Economía y el TLCAN",
      "El crecimiento económico fue bajo durante el sexenio. En 2016 el peso se depreció fuertemente tras la elección presidencial de Estados Unidos. En 2017 y 2018 se renegoció el TLCAN, que dio lugar al T-MEC, firmado en 2018.",
      "## La elección de 2018",
      "En la elección presidencial del 1 de julio de 2018, Andrés Manuel López Obrador, candidato de la coalición encabezada por Morena, ganó con más del 50 % de los votos. Fue el primer triunfo de Morena, un partido fundado en 2014, y la segunda vez que el PRI perdía la presidencia tras la alternancia de 2000.",
      "## Para el examen",
      "Ideas clave: el sexenio se caracterizó por reformas estructurales acordadas en el Pacto por México, pero también por escándalos de corrupción, violencia y la crisis de Ayotzinapa; la elección de 2018 cerró el periodo de estudio. Fechas: 2012 (Pacto por México), 2013 (reformas educativa, telecom y fiscal), 2014 (INE y Ayotzinapa), 2015 (fuga de El Chapo), 2018 (triunfo de AMLO)."
    ],
    game: null,
    quiz: [
      {
        q: "¿Qué acuerdo firmaron los principales partidos en diciembre de 2012?",
        options: ["Pacto por México", "Pacto de Solidaridad", "Pacto de Chapultepec", "Pacto de Ocampo"],
        answer: 0,
        explain: "El Pacto por México reunió al PRI, al PAN y al PRD para impulsar reformas de fondo."
      },
      {
        q: "¿Qué reforma de 2013 creó el Instituto Federal de Telecomunicaciones (IFT)?",
        options: ["Educativa", "Telecomunicaciones", "Fiscal", "Política"],
        answer: 1,
        explain: "La reforma en telecomunicaciones de 2013 creó el IFT como regulador del sector."
      },
      {
        q: "¿Qué organismo sustituyó al IFE en 2014?",
        options: ["INE", "IFAI", "CNDH", "TEPJF"],
        answer: 0,
        explain: "En 2014 el Instituto Nacional Electoral (INE) sustituyó al IFE."
      },
      {
        q: "¿Cuántos estudiantes de Ayotzinapa desaparecieron en 2014?",
        options: ["26", "33", "43", "70"],
        answer: 2,
        explain: "Desaparecieron 43 estudiantes de la Normal Rural de Ayotzinapa en Iguala, Guerrero."
      },
      {
        q: "¿En qué ciudad de Guerrero ocurrió la desaparición de los estudiantes de Ayotzinapa?",
        options: ["Acapulco", "Iguala", "Chilpancingo", "Taxco"],
        answer: 1,
        explain: "Los hechos ocurrieron en Iguala, Guerrero, en septiembre de 2014."
      },
      {
        q: "¿De qué penal escapó Joaquín \"El Chapo\" Guzmán en 2015?",
        options: ["Penal del Altiplano", "Penal de Puente Grande", "Penal de las Islas Marías", "Penal de Tepic"],
        answer: 0,
        explain: "El Chapo escapó del Altiplano en 2015. En 2001 había escapado del penal de Puente Grande."
      },
      {
        q: "¿Quién ganó la elección presidencial de 2018?",
        options: ["Ricardo Anaya", "Andrés Manuel López Obrador", "José Antonio Meade", "Margarita Zavala"],
        answer: 1,
        explain: "López Obrador ganó la elección del 1 de julio de 2018 con más del 50 % de los votos."
      },
      {
        q: "¿Qué partido fundó Andrés Manuel López Obrador?",
        options: ["Morena", "PRD", "PT", "Movimiento Ciudadano"],
        answer: 0,
        explain: "López Obrador fundó Morena, partido que lo postuló en 2018."
      }
    ]
  }
];
