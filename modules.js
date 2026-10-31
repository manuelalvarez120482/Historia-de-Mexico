// Contenido de los módulos, basado en las presentaciones del maestro.
// lesson: los textos que empiezan con "## " se muestran como subtítulo.
// quiz: "answer" es el índice (0 a 3) de la opción correcta.
// Los minijuegos de cada módulo están en games.js y gamesdata.js.

const MODULES = [
  {
    id: 1,
    title: "La Revolución I: del Porfiriato a la Decena Trágica",
    period: "1900 – 1913",
    lesson: [
      "## Por qué estalló la Revolución",
      "Las presentaciones señalan tres causas generales. Primera: la inversión extranjera desarrolló las ciudades, pero provocó inflación y eso afectó el salario de los obreros y de las clases medias. Segunda: la vinculación con el mercado de Estados Unidos hizo al país dependiente de la economía de ese país. Tercera: la modernización destruyó la economía campesina y lanzó a los campesinos al mercado internacional sin ninguna protección.",
      "Además, los dueños de los medios de producción eran extranjeros, así que la burguesía mexicana no tenía oportunidad de crecer.",
      "## La oposición al régimen: Regeneración y las huelgas",
      "El periódico Regeneración, de Ricardo Flores Magón, se dirigía a los iletrados, a los más pobres y a los más explotados. Los magonistas fueron una de las corrientes que se oponían al régimen de Porfirio Díaz.",
      "En 1906 los trabajadores de Cananea, Sonora, se fueron a la huelga y el régimen porfirista los reprimió brutalmente. En 1907 los obreros de la industria textil de Río Blanco, Veracruz, se negaron a trabajar entre vivas a Juárez y gritos contra los franceses y los españoles que controlaban las fábricas.",
      "## La sucesión presidencial de 1910",
      "En 1908, en una entrevista con el periodista estadounidense James Creelman, Díaz declaró que no se postularía a las elecciones de 1910. Con eso abrió la contienda sucesoria.",
      "Se movilizaron varios grupos: los seguidores de Bernardo Reyes; el Partido Democrático, fundado por Benito Juárez Meza, hijo de Juárez; los antirreeleccionistas, encabezados por Francisco I. Madero; y los magonistas.",
      "Bernardo Reyes cedió a las presiones de Díaz y aceptó una comisión oficial en Europa, con lo cual abandonó su carrera por la presidencia. Contra lo que había dicho en la entrevista, Díaz se postuló otra vez, con el apoyo del científico Ramón Corral, quien podría sucederlo. Además mandó encarcelar a Madero, que había recorrido el país en campaña.",
      "## El Plan de San Luis (1910)",
      "Madero escapó de la prisión y huyó a Texas. Allí proclamó el Plan de San Luis, con fecha del 5 de octubre de 1910, y convocó a tomar las armas el 20 de noviembre de 1910 a las seis de la tarde. Así, lo que había comenzado como una contienda electoral se convirtió en el movimiento armado que llamamos Revolución.",
      "Los líderes de los levantamientos iniciales fueron Pascual Orozco, Francisco Villa y Emiliano Zapata.",
      "## La caída de Díaz (1911)",
      "En mayo de 1911, a menos de un año de iniciada, la lucha armada terminó con la toma de la plaza fronteriza de Ciudad Juárez. Se firmaron los Tratados de Ciudad Juárez, que pactaron la suspensión de las hostilidades y la renuncia de Díaz y de Corral. El 25 de mayo Porfirio Díaz se embarcó en Veracruz y dijo la frase: «Han soltado un tigre».",
      "Quedó al frente del gobierno Francisco León de la Barra, cuyo papel fue organizar nuevas elecciones presidenciales. Madero transformó el Partido Nacional Antirreeleccionista en el Partido Constitucional Progresista. Su compañero de fórmula fue José María Pino Suárez, en lugar de Francisco Vázquez Gómez, y por eso perdió el apoyo de los reyistas.",
      "## El gobierno de Madero (1911–1913): una gestión fallida",
      "Los cambios agrarios y laborales de Madero tuvieron dos efectos. Los hacendados y empresarios los vieron como un peligro. Los campesinos y obreros quedaron insatisfechos, porque consideraron insuficiente el pago por haber participado en el movimiento contra Díaz.",
      "En el verano de 1911 los zapatistas (de Morelos, Guerrero, México y Puebla) desconocieron el acuerdo de Ciudad Juárez y no dejaron las armas. Exigían que primero se devolvieran las tierras que los hacendados locales habían usurpado durante el porfiriato. Ese mismo año, siendo presidente León de la Barra, se inició una campaña contra los zapatistas a cargo de Victoriano Huerta. A finales de noviembre de 1911 los zapatistas firmaron el Plan de Ayala.",
      "En marzo de 1912 Pascual Orozco se levantó en armas con el Plan de la Empacadora. Madero puso al frente de la campaña a Victoriano Huerta, y los orozquistas fueron vencidos en tres meses. Con eso el ejército federal cobró fuerza y Huerta se convirtió en una figura importante.",
      "## La Decena Trágica (9 a 19 de febrero de 1913)",
      "Bernardo Reyes, Félix Díaz y Manuel Mondragón encabezaron un levantamiento contra el régimen maderista. Reyes murió cuando intentaba tomar Palacio Nacional. Los sublevados se atrincheraron en La Ciudadela y Victoriano Huerta los combatía, pero más tarde se alió con Félix Díaz.",
      "Madero y Pino Suárez fueron apresados y los asesinaron al llegar a la penitenciaría. Huerta fue nombrado secretario de Gobierno y luego ocupó la presidencia.",
      "## Zapatismo, villismo y orozquismo",
      "Zapatismo: fue la expresión más clara del campesinado en la Revolución. No buscaba una revolución política, sino un cambio profundo en la estructura social. Pretendía recuperar las tierras que tenían capitalistas y terratenientes, y buscaba la propiedad comunal en vez de la privada.",
      "Villismo: también fue un ejército campesino. En su momento fue el brazo armado más leal a Madero y el ejército más poderoso de entre todos los revolucionarios. Tuvo un papel muy importante para derrotar a Huerta.",
      "Orozquismo: apoyó al principio a Madero, pero después lo desconoció. Planteaba la nacionalización de los ferrocarriles y mejores condiciones de trabajo para los obreros. Más adelante Orozco apoyó a Huerta y enfrentó a su antiguo aliado, Villa.",
      "## Para el examen",
      "Ideas clave: las causas son económicas (inversión extranjera, dependencia de Estados Unidos, destrucción de la economía campesina); la chispa fue la sucesión de 1910 y la entrevista Creelman; el Plan de San Luis (5 de octubre de 1910) convocó a las armas el 20 de noviembre; los Tratados de Ciudad Juárez terminaron con Díaz en mayo de 1911; Madero fracasó porque no satisfizo ni a los hacendados ni a los campesinos; Zapata respondió con el Plan de Ayala; la Decena Trágica terminó con el asesinato de Madero y Pino Suárez."
    ],
    quiz: [
      {
        q: "¿Cuál de estas es una causa general de la Revolución según las presentaciones?",
        options: ["La modernización destruyó la economía campesina", "México perdió territorio frente a Francia", "Se eliminó el comercio con Estados Unidos", "Los obreros recibieron salarios muy altos"],
        answer: 0,
        explain: "La modernización destruyó la economía campesina y lanzó a los campesinos al mercado internacional."
      },
      {
        q: "¿Qué huelgas de 1906 y 1907 fueron reprimidas por el régimen porfirista?",
        options: ["Las de Puebla y Oaxaca", "Las de Cananea (Sonora) y Río Blanco (Veracruz)", "Las de Monterrey y Torreón", "Las de Tampico y Mérida"],
        answer: 1,
        explain: "Cananea fue una huelga minera en 1906 y Río Blanco una huelga textil en 1907."
      },
      {
        q: "¿Qué declaró Díaz en 1908 al periodista Creelman?",
        options: ["Que renunciaría de inmediato", "Que reformaría la Constitución de 1857", "Que no se postularía a las elecciones de 1910", "Que apoyaría a Madero"],
        answer: 2,
        explain: "Con esa declaración abrió la contienda sucesoria, aunque después se volvió a postular."
      },
      {
        q: "¿Quién fundó el Partido Democrático?",
        options: ["Bernardo Reyes", "Benito Juárez Meza, hijo de Juárez", "Ricardo Flores Magón", "Ramón Corral"],
        answer: 1,
        explain: "Benito Juárez Meza fundó el Partido Democrático para participar en la sucesión de 1910."
      },
      {
        q: "El Plan de San Luis convocó a levantarse en armas el…",
        options: ["5 de octubre de 1910 a las seis de la mañana", "16 de septiembre de 1910", "20 de noviembre de 1910 a las seis de la tarde", "1 de enero de 1911"],
        answer: 2,
        explain: "El plan está fechado el 5 de octubre de 1910 y convocó a las armas el 20 de noviembre a las seis de la tarde."
      },
      {
        q: "¿Qué pactaron los Tratados de Ciudad Juárez?",
        options: ["La suspensión de las hostilidades y la renuncia de Díaz y Corral", "El reparto de tierras a los zapatistas", "El regreso de Díaz al poder", "La elección de Huerta como presidente"],
        answer: 0,
        explain: "Díaz se embarcó en Veracruz el 25 de mayo de 1911 y dijo: «Han soltado un tigre»."
      },
      {
        q: "¿Por qué los zapatistas no dejaron las armas en 1911?",
        options: ["Porque querían que Díaz volviera", "Porque exigían que primero se devolvieran las tierras usurpadas por los hacendados", "Porque apoyaban a Bernardo Reyes", "Porque querían nacionalizar los ferrocarriles"],
        answer: 1,
        explain: "Los zapatistas firmaron a fines de noviembre de 1911 el Plan de Ayala."
      },
      {
        q: "¿Qué ocurrió durante la Decena Trágica?",
        options: ["Madero derrotó a los sublevados en La Ciudadela", "Se firmó la Constitución de 1917", "Villa y Zapata entraron a la capital", "Madero y Pino Suárez fueron apresados y asesinados, y Huerta ocupó la presidencia"],
        answer: 3,
        explain: "Entre el 9 y el 19 de febrero de 1913 Huerta se alió con Félix Díaz y se quedó con el poder."
      }
    ]
  },

  {
    id: 2,
    title: "La Revolución II: Huerta, constitucionalismo y Constitución de 1917",
    period: "1913 – 1920",
    lesson: [
      "## El gobierno de Huerta",
      "El golpe contrarrevolucionario encabezado por Huerta encendió todavía más la lucha campesina, que se extendió por todo el país. Huerta buscó pacificar el país, planteó volver al pasado porfirista y sumó a sus filas a Orozco. Lo apoyaban los banqueros y los hacendados, es decir, el sector conservador que quería regresar al orden del porfiriato.",
      "Huerta disolvió las cámaras y empezó a gobernar como dictador. Estados Unidos, que al principio lo había apoyado, no reconoció su gobierno, porque el presidente William Taft terminó su mandato y su lugar lo ocupó Woodrow Wilson.",
      "Estados Unidos empezó a apoyar a los revolucionarios carrancistas, que se proveyeron de armas en la frontera, y bloqueó el puerto de Veracruz, por donde llegaban armas europeas para Huerta. Las facciones revolucionarias estuvieron unidas solamente mientras Huerta permaneció en el poder.",
      "## El constitucionalismo",
      "En Coahuila, el gobernador Venustiano Carranza se levantó en armas para promover la continuidad del maderismo, e inició el movimiento constitucionalista. Se llama así porque quería retomar los principios de la Constitución de 1857.",
      "En la lucha contra Huerta fue importante la División del Norte, de Francisco Villa, y también el ejército del Noroeste, dirigido por Álvaro Obregón desde Sonora. Carranza no incorporó al ejército zapatista porque desconfiaba de las direcciones campesinas.",
      "Mientras Villa avanzaba tomando ciudades, Carranza veía con recelo el liderazgo del «centauro del norte». El ejército zapatista avanzaba hacia la capital, pero fue el ejército de Obregón el que llegó primero a la Ciudad de México. Huerta renunció a la presidencia el 15 de julio de 1914 y Carranza asumió de manera provisional la presidencia.",
      "Álvaro Obregón representaba a la pequeña burguesía nacionalista, en dos tendencias: una inclinada al desarrollo capitalista y otra atraída por las reivindicaciones campesinas y obreras, que lo acercaba al villismo. Era el ejército más fuerte del carrancismo, pero mantuvo su propia política y sirvió como mediador entre las facciones.",
      "## La Convención de Aguascalientes (1914)",
      "Tras la derrota de Huerta, los cuatro ejércitos triunfadores (carrancistas, obregonistas, villistas y zapatistas) estaban divididos y tenían posiciones políticas distintas. Por eso se organizó una convención de jefes militares en Aguascalientes, a partir del 10 de octubre de 1914. Los zapatistas pudieron asistir con voz, pero sin voto.",
      "La Convención eligió como presidente interino al general Eulalio Gutiérrez. Terminó sin acuerdos sobre un programa de gobierno y con la ruptura entre los grupos revolucionarios, que se dividieron en dos bandos: villistas y zapatistas (ejércitos campesinos) por un lado, y constitucionalistas (obregonistas y carrancistas) por el otro. También surgieron dos gobiernos: el de Eulalio Gutiérrez y el de Venustiano Carranza.",
      "El 4 de diciembre de 1914 Villa y Zapata se encontraron en Xochimilco. El 6 de diciembre vieron desde los balcones de Palacio Nacional el desfile de las tropas de la División del Norte y del Ejército Libertador del Sur. Después se fotografiaron juntos y se sentaron por turnos en la silla presidencial.",
      "## La derrota del villismo",
      "Pronto el gobierno de la Convención se mostró incapaz de hacer una política revolucionaria, mientras el constitucionalismo de Obregón y Carranza ganaba adeptos. Eulalio Gutiérrez y sus allegados se pasaron al bando de Obregón.",
      "Carranza expidió una ley agraria y un programa social, aunque después se negó a aplicarlo totalmente, para atraer a las masas campesinas y debilitar a Villa y a Zapata. Obregón tomó Puebla y la Ciudad de México y fue a combatir a Villa al norte, a quien derrotó en cuatro batallas decisivas. Así Carranza volvió a establecer su gobierno en la capital.",
      "## El Congreso Constituyente y la Constitución de 1917",
      "Carranza volvió a convocar un congreso en Querétaro, pero esta vez solo estuvieron los representantes de la facción triunfadora: obregonistas y carrancistas. De ahí salió una nueva Constitución con la que Carranza no estuvo de acuerdo, porque él quería solamente reformar la de 1857 y no incluir las demandas sociales prometidas durante la Revolución. En el Congreso hubo dos corrientes: una propuesta conservadora, que apoyaba el proyecto de Carranza, y una propuesta radical, que quería introducir reformas profundas.",
      "La Constitución de 1917 incluyó demandas sociales, legisló sobre derechos de obreros y campesinos y fue nacionalista y antiimperialista, porque defendía el interés nacional por encima del extranjero. Tiene tres partes: la parte orgánica (establece la república federal y la organización política), las garantías individuales (derechos de los ciudadanos) y las garantías sociales (artículos 3, 27 y 123: derecho a la educación, a la propiedad de la tierra, al trabajo y a la organización sindical).",
      "## Los artículos más importantes",
      "Artículo 3: la educación que imparta el Estado será laica, libre y gratuita, y desarrollará armónicamente todas las facultades del ser humano.",
      "Artículo 5: libertad de profesión, industria, comercio y trabajo. Nadie puede ser obligado a prestar trabajos personales sin justa retribución y sin su consentimiento.",
      "Artículo 27: la propiedad de las tierras y aguas corresponde a la nación, que puede transmitir el dominio a los particulares y así constituir la propiedad privada.",
      "Artículo 28: quedan prohibidos los monopolios privados y la exención de impuestos.",
      "Artículo 123: toda persona tiene derecho al trabajo digno y socialmente útil. Jornada de 8 horas, salario mínimo, prohibición del trabajo de menores de 14 años, entre otros derechos.",
      "Artículo 130: separación entre las funciones de la Iglesia y del Estado. Los ministros de culto no deben hacer proselitismo político ni participar como institución en actividades políticas.",
      "Los artículos 27, 28 y 123 afectaban los intereses de Estados Unidos y también los de la Iglesia. Muchas de estas reformas no se harían realidad sino hasta tiempo después.",
      "## El fin de la etapa armada (1917–1920)",
      "Carranza fue electo presidente en 1917. Obregón se retiró a Sonora porque no estaba de acuerdo con la forma de hacer política de Carranza, que no quería aplicar las reformas sociales ni respetar la nueva Constitución.",
      "En 1919 Zapata fue asesinado a traición por el general carrancista René Guajardo. Fue el primero de los cuatro caudillos más importantes en morir asesinado. Carranza frenó el reparto agrario y devolvió tierras a latifundistas del porfiriato.",
      "A mediados de 1919 Obregón lanzó su candidatura a la presidencia para el periodo 1920–1924, con el argumento de que no se habían cumplido las promesas de la Revolución, y aseguró el apoyo de los zapatistas. Carranza abandonó la capital y, camino a Veracruz, fue asesinado mientras dormía el 21 de mayo de 1920. Adolfo de la Huerta, después de rebelarse, fue elegido interino, y con ello el Grupo Sonora llegó al poder.",
      "Obregón triunfó en las elecciones y logró la rendición de Villa, que pidió una hacienda y una escolta. Villa fue asesinado en una emboscada en 1923, cuando se sospechaba que pretendía levantarse otra vez en armas.",
      "## Para el examen",
      "Ideas clave: Huerta fue un dictador apoyado por conservadores, y Estados Unidos (con Wilson) no lo reconoció; los constitucionalistas querían volver a la Constitución de 1857; Huerta renunció el 15 de julio de 1914; la Convención de Aguascalientes (octubre de 1914) dividió a los revolucionarios en villistas-zapatistas y constitucionalistas; Obregón derrotó a Villa en cuatro batallas; la Constitución de 1917 incluyó demandas sociales (artículos 3, 27 y 123); Zapata murió en 1919, Carranza en 1920 y Villa en 1923."
    ],
    quiz: [
      {
        q: "¿Por qué se llamó «constitucionalista» el movimiento de Carranza?",
        options: ["Porque quería redactar una Constitución socialista", "Porque quería retomar los principios de la Constitución de 1857", "Porque apoyaba a Huerta", "Porque defendía el reparto de tierras"],
        answer: 1,
        explain: "Carranza, gobernador de Coahuila, promovía la continuidad del maderismo y de la Constitución de 1857."
      },
      {
        q: "¿Por qué Estados Unidos dejó de apoyar a Huerta?",
        options: ["Porque Huerta nacionalizó el petróleo", "Porque Huerta aceptó a los zapatistas", "Porque Taft concluyó su mandato y lo sustituyó Woodrow Wilson, que no lo reconoció", "Porque Huerta firmó la Constitución de 1917"],
        answer: 2,
        explain: "Además, Estados Unidos dio armas a los carrancistas y bloqueó Veracruz, por donde llegaban armas europeas para Huerta."
      },
      {
        q: "¿Cuándo renunció Huerta a la presidencia?",
        options: ["El 15 de julio de 1914", "El 22 de febrero de 1913", "El 20 de noviembre de 1910", "El 5 de febrero de 1917"],
        answer: 0,
        explain: "Tras su renuncia, Carranza asumió de manera provisional la presidencia."
      },
      {
        q: "¿Qué ejército dirigido por Obregón actuó en la lucha contra Huerta?",
        options: ["La División del Norte", "El Ejército Libertador del Sur", "El ejército del Noroeste, desde Sonora", "El ejército federal"],
        answer: 2,
        explain: "La División del Norte era de Villa y el Ejército Libertador del Sur, de Zapata."
      },
      {
        q: "¿Qué pasó con los zapatistas en la Convención de Aguascalientes?",
        options: ["Eligieron al presidente interino", "Asistieron con voz, pero sin voto", "No fueron invitados", "Votaron por Carranza"],
        answer: 1,
        explain: "La Convención comenzó el 10 de octubre de 1914 y eligió como presidente interino a Eulalio Gutiérrez."
      },
      {
        q: "¿En qué dos bandos se dividieron los revolucionarios después de la Convención?",
        options: ["Maderistas y huertistas", "Villistas-zapatistas y constitucionalistas (obregonistas y carrancistas)", "Orozquistas y reyistas", "Liberales y conservadores"],
        answer: 1,
        explain: "Surgieron también dos gobiernos: el de Eulalio Gutiérrez y el de Venustiano Carranza."
      },
      {
        q: "¿Qué artículo de la Constitución de 1917 establece la jornada de 8 horas y el salario mínimo?",
        options: ["El artículo 3", "El artículo 27", "El artículo 130", "El artículo 123"],
        answer: 3,
        explain: "El artículo 123 trata del trabajo digno, la jornada de 8 horas, el salario mínimo y la prohibición del trabajo de menores de 14 años."
      },
      {
        q: "¿Qué dispone el artículo 27 de la Constitución de 1917?",
        options: ["La propiedad de tierras y aguas corresponde a la nación, que puede transmitirla a particulares", "La educación será laica, libre y gratuita", "Separación entre la Iglesia y el Estado", "Se prohíben los monopolios privados"],
        answer: 0,
        explain: "El artículo 3 es el de educación, el 130 es el de la separación Iglesia–Estado y el 28 prohíbe los monopolios."
      }
    ]
  },

  {
    id: 3,
    title: "Los gobiernos posrevolucionarios y el Maximato",
    period: "1920 – 1934",
    lesson: [
      "## De los caudillos a las instituciones",
      "A partir de 1920 comenzaron a surgir en México gobiernos caudillistas, basados en un poder personalizado, no institucional. Tras el asesinato de Carranza, llegó al poder el Grupo Sonora, integrado por Álvaro Obregón, Plutarco Elías Calles y Adolfo de la Huerta. La tarea de estos gobiernos fue la institucionalización del país y la reestructuración de la economía.",
      "Gobernantes del periodo: Venustiano Carranza (1917–1920); Adolfo de la Huerta, interino durante algunos meses de 1920; Álvaro Obregón (1920–1924); Plutarco Elías Calles (1924–1928); el Maximato (1928–1934); y Lázaro Cárdenas (1934–1940).",
      "## Álvaro Obregón (1920–1924)",
      "Obregón tuvo una base de apoyo campesina y su bandera fue el reparto agrario. Repartió más de 1 170 000 hectáreas, que beneficiaron a 400 000 personas. Creó la Secretaría de Educación Pública (SEP), cuyo primer titular fue José Vasconcelos.",
      "## José Vasconcelos y el proyecto cultural",
      "Vasconcelos (1882–1959) encabezó el proyecto cultural y educativo posrevolucionario. Se instauró un modelo de escuelas rurales. La educación se concebía como una «misión evangelizadora». Los maestros centraban la enseñanza en actividades manuales, como el cultivo de la tierra y las pequeñas industrias, y se incorporó a las minorías indígenas al sistema escolar nacional.",
      "Fue el secretario de educación más innovador en la promoción del libro. Editó manuales escolares, revistas, libros clásicos y lecturas para niños. Fundó bibliotecas en centros urbanos, escuelas, fábricas y comunidades indígenas. La colección de clásicos tuvo tirajes de 25 000 ejemplares de autores como Esquilo, Sófocles, Platón, Dante, Shakespeare, Cervantes, Goethe y Tolstoi. Cuando dejó la secretaría había 1 916 bibliotecas y se habían repartido 297 103 libros.",
      "Daniel Cosío Villegas, fundador del Fondo de Cultura Económica, de El Colegio de México y de El Colegio Nacional, explicó la idea así: el indio y el pobre, tradicionalmente postergados, debían ser un soporte principal y visible de la nueva sociedad, pero también era necesario lanzarlos a la corriente cultural universal, dándoles a leer las grandes obras de la humanidad.",
      "## El muralismo mexicano",
      "Vasconcelos reunió a pintores como Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros para pintar los edificios públicos, como un renacimiento cultural del país. Su lema fue «la redención social a través del arte». Entre las obras que se estudian: de Diego Rivera, «Día de muertos» y «Quema de los Judas» (frescos en la SEP), «La sangre de los mártires» y «La tierra dormida» (capilla de Chapingo), «El México antiguo» (escalera de Palacio Nacional) y «De la conquista a 1930» (Palacio Nacional); de Siqueiros, «Retrato actual de México» (Santa Bárbara, California).",
      "El poeta Octavio Paz resumió la relación entre arte y Revolución: sin la Revolución estos artistas no se habrían expresado, y sin la obra de los muralistas la Revolución no habría sido lo que fue.",
      "## Plutarco Elías Calles (1924–1928)",
      "Calles concretó su base de apoyo en los obreros. Buscó que el reparto agrario no se quedara en eso, sino que garantizara la producción. Realizó una reforma hacendaria para que el Estado obtuviera más ingresos. En 1925 creó el Banco de México, con 51 % de capital público y 49 % de capital privado. Se construyeron carreteras, escuelas y edificios públicos que ampliaron la infraestructura económica. En síntesis, Calles buscó desmilitarizar la política.",
      "## La Guerra Cristera (1926–1929)",
      "En 1926 comenzó una pugna violenta entre la Iglesia católica y el Estado, conocida como Guerra Cristera. El conflicto se desató cuando el gobierno dictó leyes con el argumento de que a la Iglesia solo le correspondía el poder espiritual y no el civil, y se aplicaron los artículos 3, 27 y 130 de la Constitución. Se limitó el número de sacerdotes y se clausuraron iglesias y conventos.",
      "La guerra tuvo un carácter fundamentalmente rural. Hasta 1929 el ejército cristero se disolvió y la Iglesia reanudó los servicios religiosos.",
      "## La crisis de 1928: el asesinato de Obregón",
      "La sucesión de 1928 provocó otra crisis política, pues Obregón y Calles se habían distanciado. Por presión de Obregón, Calles modificó la Constitución para permitir la reelección siempre que no fuera inmediata, y el periodo presidencial pasó de 4 a 6 años. Las elecciones fueron el 1 de julio de 1928 y Obregón ganó, pero fue asesinado por José de León Toral, un fanático religioso.",
      "Emilio Portes Gil ocupó provisionalmente la presidencia para conciliar a obregonistas y callistas. A partir de entonces Calles fue considerado el «Jefe Máximo» de la Revolución. En su último informe de gobierno, el 1 de septiembre de 1928, Calles afirmó que terminaba la era de los caudillos y empezaba el México de las instituciones, y anunció la creación de un partido político.",
      "## El Partido Nacional Revolucionario (PNR)",
      "Calles se convirtió en el primer presidente del partido, que según se dijo agruparía a todas las corrientes políticas que participaron en la Revolución.",
      "## El Maximato (1928–1934)",
      "Se llama Maximato al periodo de 1928 a 1934, porque Plutarco Elías Calles, el «Jefe Máximo», tenía el poder real sin ocupar la silla presidencial. En esos seis años gobernaron tres presidentes: Emilio Portes Gil, Pascual Ortiz Rubio y Abelardo Rodríguez. Calles controlaba el PNR y, por tanto, a los candidatos a ocupar los cargos en las cámaras. Este periodo marca el tránsito del caudillismo (poder personalizado) a la institucionalidad (poder organizado con base en leyes e instituciones).",
      "Emilio Portes Gil (1928–1930): continuó el reparto agrario, terminó la Guerra Cristera, se creó el PNR y se prepararon las elecciones de 1929. Ante un conflicto estudiantil por la rectoría, concedió la autonomía a la Universidad. El primer candidato del PNR a la presidencia fue Pascual Ortiz Rubio. Vasconcelos se opuso a Calles y se lanzó como candidato en 1929 con apoyo universitario, pero obtuvo unos 100 000 votos frente a los 2 millones de Ortiz Rubio.",
      "Pascual Ortiz Rubio (1930–1932): intentó quitarse la tutela de Calles, pero no lo logró, porque Calles impuso a varios funcionarios. Frenaron el reparto agrario porque consideraban más rentable la propiedad privada que la ejidal, y en 1930 el gobierno dijo que ya no había tierras por repartir. Renunció el 2 de septiembre de 1932.",
      "Abelardo Rodríguez (1932–1934): general muy cercano a Calles. Preparó las elecciones de 1934, en las que había dos candidatos: Adalberto Tejeda y Lázaro Cárdenas. Cárdenas tenía gran popularidad entre los campesinos beneficiados por el reparto agrario cuando fue gobernador de Michoacán.",
      "## La economía durante el Maximato",
      "Los años del Maximato coincidieron con la crisis mundial de 1929. Afectó a México, pero no de forma devastadora, porque la economía mexicana no estaba totalmente capitalizada. El 70 % de la población se dedicaba a la agricultura, el 14 % a la industria y el 16 % a los servicios. Los gobiernos del Maximato dejaron que el capital estadounidense invirtiera más en las finanzas de México.",
      "## Para el examen",
      "Ideas clave: el periodo va del caudillismo (poder personal) a las instituciones; Obregón repartió tierra y creó la SEP; Vasconcelos impulsó escuelas rurales, bibliotecas, ediciones de clásicos y el muralismo; Calles creó el Banco de México (1925) y enfrentó la Guerra Cristera (1926–1929); Obregón, reelecto, fue asesinado en 1928; en el Maximato (1928–1934) gobernaron Portes Gil, Ortiz Rubio y Rodríguez, pero mandaba Calles; el PNR (1929) fue el partido del régimen."
    ],
    quiz: [
      {
        q: "¿Quiénes formaban el Grupo Sonora que llegó al poder en 1920?",
        options: ["Madero, Pino Suárez y Huerta", "Obregón, Calles y Adolfo de la Huerta", "Carranza, Villa y Zapata", "Portes Gil, Ortiz Rubio y Rodríguez"],
        answer: 1,
        explain: "El Grupo Sonora llegó al poder tras el asesinato de Carranza."
      },
      {
        q: "¿Quién fue el primer titular de la Secretaría de Educación Pública?",
        options: ["Justo Sierra", "Daniel Cosío Villegas", "José Vasconcelos", "Plutarco Elías Calles"],
        answer: 2,
        explain: "La SEP se creó durante el gobierno de Obregón."
      },
      {
        q: "¿Qué lema se asocia al muralismo impulsado por Vasconcelos?",
        options: ["«Sufragio efectivo, no reelección»", "«La redención social a través del arte»", "«Tierra y libertad»", "«Primero crear la riqueza»"],
        answer: 1,
        explain: "Vasconcelos reunió a Rivera, Orozco y Siqueiros para pintar edificios públicos."
      },
      {
        q: "¿Qué institución creó Calles en 1925, con 51 % de capital público y 49 % privado?",
        options: ["El Banco de México", "El IMSS", "Petróleos Mexicanos", "La Universidad Nacional"],
        answer: 0,
        explain: "También se construyeron carreteras, escuelas y edificios públicos."
      },
      {
        q: "¿Qué fue la Guerra Cristera?",
        options: ["Una guerra entre México y Estados Unidos", "Un conflicto entre la Iglesia católica y el Estado, principalmente rural, de 1926 a 1929", "Una huelga de ferrocarrileros", "Una rebelión de Pascual Orozco"],
        answer: 1,
        explain: "El gobierno aplicó los artículos 3, 27 y 130, limitó el número de sacerdotes y cerró iglesias."
      },
      {
        q: "¿Quién asesinó a Álvaro Obregón en 1928, cuando ya había ganado la reelección?",
        options: ["René Guajardo", "Victoriano Huerta", "José de León Toral, un fanático religioso", "Emilio Portes Gil"],
        answer: 2,
        explain: "Tras el asesinato, Portes Gil ocupó provisionalmente la presidencia."
      },
      {
        q: "¿Por qué se llama Maximato al periodo 1928–1934?",
        options: ["Porque Calles, el «Jefe Máximo», mandaba sin ser el presidente", "Porque Obregón volvió a gobernar", "Porque hubo seis presidentes", "Porque se creó el IMSS"],
        answer: 0,
        explain: "Calles controlaba el PNR y ejercía un gran dominio sobre los presidentes."
      },
      {
        q: "¿Qué resultado tuvo Vasconcelos como candidato en las elecciones de 1929?",
        options: ["Ganó con apoyo campesino", "Obtuvo unos 100 000 votos frente a 2 millones de Ortiz Rubio", "Se retiró antes de la elección", "Empató con Ortiz Rubio"],
        answer: 1,
        explain: "Vasconcelos tenía apoyo universitario y se opuso a la política de Calles."
      }
    ]
  },

  {
    id: 4,
    title: "Lázaro Cárdenas y la expropiación petrolera",
    period: "1934 – 1940",
    lesson: [
      "## Cómo llegó Cárdenas a la presidencia",
      "Los tres candidatos presidenciales para el sexenio 1934–1940 fueron Manuel Pérez Treviño, Lázaro Cárdenas y Adalberto Tejeda. Calles favoreció la candidatura del entonces presidente del PNR, Manuel Pérez Treviño, pero la presión de las filas intermedias del partido logró que Calles aceptara la nominación de Cárdenas.",
      "## Las tres etapas del gobierno",
      "Primera etapa (1934–1936): conviven los intereses cardenistas con los callistas. Termina cuando Calles es expulsado del juego político.",
      "Segunda etapa (1936–1938): Cárdenas consolida su política de reformas. Culmina con la transformación del PNR en PRM y con la nacionalización de la industria petrolera.",
      "Tercera etapa (1938–1940): repliegue y freno a las reformas, por la presión de grupos conservadores y por la sucesión presidencial.",
      "## El Plan Sexenal",
      "El Plan Sexenal fue el primer programa de gobierno que debía cumplir un presidente de la República. Fue un intento de poner en práctica los principios de la Constitución de 1917 que los gobiernos anteriores no habían cumplido. En su elaboración participaron callistas y pro-reformistas, encabezados por Cárdenas.",
      "Sus aspectos principales: considerar al Estado como rector de la economía; elevar el nivel cultural y económico de los trabajadores de la ciudad y del campo; luchar contra los privilegios y la gran propiedad agraria; crear sindicatos que defendieran los derechos de los trabajadores; capacitar a los campesinos e industrializar el campo; impulsar la educación socialista (laica, científica y obligatoria); mejorar la atención médica, sobre todo en zonas rurales; nacionalizar los bienes del suelo y del subsuelo, como el petróleo y la minería; y apoyar a las empresas nacionales y regular la actividad de las extranjeras.",
      "## Nacionalismo económico y capitalismo de Estado",
      "Cárdenas antepuso los intereses nacionales a los extranjeros, lo que se conoce como nacionalismo económico, como lo expresa el artículo 27 constitucional. El propósito final del capitalismo de Estado era convertir la economía mexicana en una economía autosuficiente. En agosto de 1935 entró en vigor la Ley de Nacionalización, y en noviembre de 1936, la Ley de Expropiación, que puso en vigor el artículo 27.",
      "Según la Ley de Expropiación, el gobierno podía expropiar para la defensa, conservación, desarrollo o uso productivo de los elementos naturales; para la igual distribución de la riqueza; y para crear y conservar empresas en beneficio de la población.",
      "El 27 de junio de 1937 los ferrocarriles fueron completamente nacionalizados, y los accionistas fueron indemnizados de acuerdo con el valor de sus acciones.",
      "## La expropiación petrolera (18 de marzo de 1938)",
      "Las empresas petroleras (sobre todo holandesas, inglesas y estadounidenses) pagaban bajos impuestos y violaban las leyes mexicanas. Petromex, la compañía del Estado, solo extraía el 1.5 % del petróleo. En 1936, 21 sindicatos petroleros independientes se fusionaron en uno solo y exigieron aumento salarial, mejores prestaciones y semana laboral de 40 horas. Las compañías rechazaron por completo las demandas.",
      "El gobierno actuó con base en el artículo 123 y ordenó a las compañías cumplir las peticiones de los obreros, pero no hicieron caso. Entonces, el 18 de marzo de 1938, el presidente Lázaro Cárdenas decretó la expropiación-nacionalización de la industria petrolera a favor de la nación.",
      "Las consecuencias llegaron pronto: las compañías reclamaron su indemnización con una tasa de interés muy alta y a México se le negó el crédito que solicitó.",
      "## Instituciones, partido y economía",
      "Cárdenas creó varias instituciones para promover la infraestructura industrial: Ferrocarriles Nacionales, Petróleos Mexicanos, la Comisión Federal de Electricidad y la Comisión de Fomento Minero.",
      "El PNR se convirtió en el Partido de la Revolución Mexicana (PRM), integrado por cuatro sectores: el obrero, el campesino, el popular y el militar, aunque este último duró poco. La afiliación al partido era colectiva y no individual. Cárdenas reestructuró así el partido para dar cabida a quienes apoyaban su política, dejando fuera a los empresarios.",
      "El peso se devaluó en 1938 y eso generó una crisis económica que los anticardenistas aprovecharon para atacar al presidente. En sus últimos años Cárdenas tuvo que ser más moderado, por presiones internas y externas de grupos formados por excombatientes cristeros y por la Iglesia católica.",
      "En 1939 se creó el Partido Acción Nacional (PAN), formado por grupos urbanos de clase media, pequeños comerciantes conservadores y críticos de la Revolución, que se oponían a la intervención del Estado en la economía y promovían el libre mercado.",
      "## Educación y política internacional",
      "Se buscó una educación laica, científica, libre, gratuita y obligatoria, con enfoque social, cercana a las masas populares. Se creó el Instituto Politécnico Nacional (IPN) para formar los profesionistas que el país necesitaba en su proceso de industrialización. Se creó La Casa de España en México, institución especializada en ciencias sociales, historia y filosofía, que dio albergue a los republicanos españoles que huían de la dictadura de Franco.",
      "También se dio asilo político a León Trotsky. En política internacional, Cárdenas se manifestó contra el nazismo y contra el avance imperialista.",
      "## Para el examen",
      "Ideas clave: Cárdenas llegó con apoyo de las filas intermedias del PNR; su gobierno tuvo tres etapas; el Plan Sexenal fue el primer programa de gobierno; hubo nacionalismo económico y capitalismo de Estado; los ferrocarriles se nacionalizaron en 1937 y el petróleo el 18 de marzo de 1938; el PNR pasó a ser PRM con cuatro sectores; en 1939 nació el PAN; se fundó el IPN y se dio asilo a republicanos españoles y a Trotsky.",
      "Nota para el estudiante: en la presentación sobre los gobiernos posrevolucionarios aparece que Calles prefería a Tejeda, y en la de Cárdenas, que prefería a Pérez Treviño. Si el maestro pregunta, usa la versión de la presentación de Cárdenas: Pérez Treviño."
    ],
    quiz: [
      {
        q: "¿Cuáles fueron los tres candidatos para el sexenio 1934–1940?",
        options: ["Calles, Obregón y Cárdenas", "Pérez Treviño, Cárdenas y Tejeda", "Ortiz Rubio, Portes Gil y Vasconcelos", "Cárdenas, Alemán y Ávila Camacho"],
        answer: 1,
        explain: "Calles prefería a Pérez Treviño, pero la presión de las filas intermedias del partido logró que aceptara a Cárdenas."
      },
      {
        q: "¿Qué fue el Plan Sexenal?",
        options: ["Un tratado con Estados Unidos", "El primer programa de gobierno que debía cumplir un presidente", "Una ley electoral", "Un plan para repartir el petróleo a empresas extranjeras"],
        answer: 1,
        explain: "Intentó poner en práctica los principios de la Constitución de 1917."
      },
      {
        q: "¿Cómo se llama la política que antepone los intereses nacionales a los extranjeros, según el artículo 27?",
        options: ["Libre mercado", "Nacionalismo económico", "Mexicanización", "Desarrollo estabilizador"],
        answer: 1,
        explain: "Su idea final, el capitalismo de Estado, era lograr una economía autosuficiente."
      },
      {
        q: "¿Cuándo se nacionalizaron completamente los ferrocarriles?",
        options: ["El 18 de marzo de 1938", "El 27 de junio de 1937", "En agosto de 1935", "En 1939"],
        answer: 1,
        explain: "Los accionistas fueron indemnizados de acuerdo con el valor de sus acciones."
      },
      {
        q: "¿Qué pasó en 1936 en el sector petrolero?",
        options: ["Se fundó Pemex", "21 sindicatos independientes se fusionaron en uno y exigieron mejores salarios y 40 horas semanales", "Las empresas aceptaron las demandas", "Los obreros aceptaron bajar sus salarios"],
        answer: 1,
        explain: "Las compañías rechazaron las demandas y el gobierno actuó con base en el artículo 123."
      },
      {
        q: "¿Qué decretó Cárdenas el 18 de marzo de 1938?",
        options: ["La Ley de Expropiación", "La creación del IPN", "La expropiación-nacionalización de la industria petrolera", "La creación del PAN"],
        answer: 2,
        explain: "Las compañías reclamaron una indemnización con interés muy alto y se negó crédito a México."
      },
      {
        q: "¿Cuáles eran los cuatro sectores del PRM?",
        options: ["Obrero, campesino, popular y militar", "Obrero, empresarial, popular y religioso", "Campesino, estudiantil, empresarial y militar", "Obrero, campesino, bancario y popular"],
        answer: 0,
        explain: "El sector militar duró poco y la afiliación era colectiva."
      },
      {
        q: "¿Qué institución educativa se creó para formar los profesionistas que necesitaba la industrialización?",
        options: ["La UNAM", "El Colegio de México", "El Instituto Politécnico Nacional (IPN)", "La Escuela Nacional de Economía"],
        answer: 2,
        explain: "Además, La Casa de España dio albergue a republicanos españoles."
      }
    ]
  },

  {
    id: 5,
    title: "El milagro mexicano: de Ávila Camacho a López Mateos",
    period: "1940 – 1964",
    lesson: [
      "## Contexto internacional",
      "Tres hechos influyeron en esta etapa: la Segunda Guerra Mundial (1939–1945), la Guerra Fría (1945–1991) y la Revolución cubana (1953–1959).",
      "Por la Segunda Guerra Mundial, México empezó a fabricar productos que antes compraba al exterior. Entre 1939 y 1945 las exportaciones se duplicaron. La guerra dio al país la oportunidad de producir más y de industrializarse, y se registró el crecimiento económico más importante que jamás había tenido. México y Estados Unidos integraron una comisión para planear la producción de lo que Estados Unidos no podía fabricar por estar en guerra. Se desarrolló la política del buen vecino, una mejor relación entre los países de América mientras durara la guerra.",
      "En los años cuarenta México era todavía un país predominantemente agrícola, porque el proceso de industrialización fue en bienes de consumo no duradero.",
      "## Presidencialismo y civilismo",
      "El sistema político posrevolucionario se caracteriza por ser presidencialista: las decisiones políticas giran en torno al presidente. Desde 1940 hay estabilidad política y social. Las luchas por el poder ya no implican levantamientos armados, sino rupturas dentro del partido gobernante.",
      "## El milagro mexicano",
      "Se llama «milagro mexicano» a la etapa de 1940 a 1970 en la que la economía creció de manera importante. Se divide en dos periodos: 1940–1958 y 1958–1970. Sus características fueron el crecimiento y la consolidación del mercado interno, la inserción de México en la economía mundial, empresas poco competitivas, altos índices de inflación y la política de sustitución de importaciones.",
      "Periodo 1940–1958: la economía creció a más de 6.5 % anual del PIB. Las fábricas de bienes de consumo no duradero (calzado, textiles, alimentos procesados) pasaron de 13 000 en 1940 a 73 000 en 1950. Hubo dos devaluaciones: en 1948, por el ajuste mundial de las monedas tras la guerra, y en 1954, por la recesión de Estados Unidos y la baja de las materias primas que México exportaba. El crecimiento industrial trajo migración del campo a la ciudad, crecimiento de las ciudades (sobre todo la capital), obras de urbanización, unidades habitacionales, vialidades y zonas industriales, y el fortalecimiento de la clase media.",
      "Periodo 1958–1970: se aplicó el «desarrollo estabilizador», una política de estabilidad de precios y del tipo de cambio, con intervención directa del Estado y subordinación de la agricultura a la industria. Se invirtió en la industria y se descuidó el campo, y desde entonces México dejó de ser autosuficiente en alimentos (hubo que importar maíz). Se instalaron empresas de consumo duradero (línea blanca, automotriz, electrónica) e industria pesada, con exención de impuestos, proteccionismo y subsidios. Se fomentó la entrada de capital extranjero y el capitalismo de Estado, y los gobiernos recurrieron al endeudamiento externo.",
      "La consecuencia fue una distribución desigual de la riqueza: aumentaron los ingresos de los grupos ricos y bajaron los de los grupos más débiles.",
      "## Manuel Ávila Camacho (1940–1946)",
      "Con su gobierno comenzó el México contemporáneo, se consolidó el presidencialismo y se sentaron las bases para que los presidentes ya no fueran militares sino civiles: empezó la «era de los licenciados».",
      "Política de Unidad Nacional: ante la Segunda Guerra Mundial se pidió dejar de lado los intereses particulares y defender a la nación. Se firmó un pacto obrero-industrial: los trabajadores se comprometían a no pedir aumentos salariales ni hacer huelgas mientras durara la guerra, y los empresarios a no subir precios y dar aumentos cuando fuera posible (al final no cumplieron). El Estado asumió un papel central en la promoción del desarrollo industrial.",
      "Leyes de apoyo a la industrialización: la Ley de Industrias Nuevas y Necesarias (Regla XIV), que exentaba de impuestos por 5, 10 o 15 años a las empresas nuevas, y la Ley de Mexicanización de la Economía, que exigía al menos 51 % de capital nacional y máximo 49 % de capital extranjero.",
      "Otros hechos: suprimió el sector militar del PRM; en 1943 se creó el IMSS, junto con el Hospital de Cardiología y el Hospital Infantil; México participó en la guerra con el Escuadrón 201; se modificó el artículo 3 para eliminar la educación socialista; en 1946 se elaboró una Ley Electoral con los requisitos para registrar partidos nacionales. El 18 de enero de 1946 se disolvió el PRM y se creó el Partido Revolucionario Institucional (PRI), pues sus dirigentes consideraron que la Revolución ya estaba institucionalizada. Su primer candidato fue Miguel Alemán Valdés.",
      "## Miguel Alemán Valdés (1946–1952)",
      "Fue el primer presidente constitucional civil, abogado egresado de la UNAM. Con él llegó una nueva élite gobernante, formada por políticos y no por los militares de la Revolución. Se caracterizó por apoyar a la iniciativa privada, por su lucha anticomunista, por limitar a los sindicatos de izquierda y por fomentar la inversión extranjera, sobre todo la estadounidense.",
      "Se frenaron ideales de la Revolución: el reparto de tierras, la participación del Estado en la economía y el respeto a los derechos de los trabajadores. Fueron comunes la corrupción y el enriquecimiento ilícito, porque el grupo gobernante mezcló la política con los negocios. El país comenzó a imitar el modo de vida de Estados Unidos. Se impulsaron las obras públicas y el turismo (Acapulco y la Ciudad Universitaria), y mediante Nacional Financiera se dieron créditos y asistencia técnica a pequeñas y medianas empresas.",
      "El «charrismo sindical» es una forma de control en la que la dirigencia sindical la impone la empresa o el gobierno, y no la eligen los trabajadores. Viene de la afición a la charrería del dirigente que se impuso a los ferrocarrileros en 1948, Jesús Díaz de León. Fidel Velázquez fue líder de la CTM por unos 60 años. En 1948 Vicente Lombardo Toledano creó el Partido Popular, que en 1960 se convertiría en Partido Popular Socialista (PPS), un partido crítico que consideraba que el PRI había traicionado la Revolución.",
      "El modelo de Alemán fue el estatista: impulsar la economía con incentivos a la iniciativa privada, pero bajo el control del Estado. La distribución del ingreso se caracterizó por grandes ganancias empresariales y reducción del salario real. Su idea: «Primero crear la riqueza, para después repartirla».",
      "## Adolfo Ruiz Cortines (1952–1958)",
      "Continuó la política de Alemán, pero con una política de «moralidad» para devolver la credibilidad a la administración pública, y con austeridad. Se otorgaron facilidades a los capitales extranjeros. Comenzó el «desarrollo estabilizador», con crecimiento de 6 % anual y estabilidad de precios y de tipo de cambio.",
      "Enfrentó inflación, recesión, desempleo y salarios muy bajos. Para ello aumentó el gasto público, controló la inflación, dio créditos y subsidios y devaluó el peso (1954). Las exportaciones subieron, pero el dinero valía menos y la inflación llegó a 30 %, lo que provocó protestas. El Estado protegió el mercado interno para continuar la sustitución de importaciones y reguló las importaciones con licencias.",
      "En el campo se alcanzó al inicio la autosuficiencia alimentaria y hubo distritos de riego en el norte y noroeste para exportación; pero los campesinos dependían del Estado, que decidía cultivos, precios y créditos. La industria recibió la mano de obra sobrante del campo, pero no incorporó tecnología y quedó rezagada y poco competitiva, con bienes de consumo caros.",
      "Hechos políticos: en 1953 se otorgó el voto a la mujer; se creó la CROC; la Ley Electoral de 1954 pidió a un partido al menos 75 mil afiliados repartidos en dos tercios de los estados. Además del PRI destacaban el PAN (principal oposición real), el PPS (que solo criticaba a la Revolución y al imperialismo estadounidense), el PARM (formado por viejos militantes del PRI) y el PCM (siempre en crisis y con poca influencia).",
      "## Adolfo López Mateos (1958–1964)",
      "Se consolidó el presidencialismo: el Ejecutivo tuvo un control incuestionable sobre el PRI y una enorme influencia política, económica, social y laboral, y los sindicatos no eran independientes. El PRI repartía candidaturas entre sectores mediante «cuotas de poder».",
      "Ley Electoral de 1963: estableció los «diputados de partido»: si un partido de oposición obtenía 2.5 % de la votación, tendría 5 diputados, y uno más por cada 0.5 % extra, hasta un máximo de 20. Se buscaba favorecer a los partidos de oposición sin poner en peligro la hegemonía del PRI. Se nacionalizó y expropió la industria eléctrica, y se impulsó la CFE, luego de que las compañías estadounidenses con la concesión se negaron a ampliar el servicio.",
      "En 1958 comenzaron movimientos laborales: el magisterial, encabezado por Othón Salazar, y el ferrocarrilero, dirigido por Demetrio Vallejo. Pedían aumento salarial, desconocer a las direcciones sindicales oficialistas y un sindicalismo democrático e independiente del Estado. A principios de los años sesenta hubo un movimiento campesino que exigía tierra en Morelos y que terminó con el asesinato de su dirigente, Rubén Jaramillo, excombatiente zapatista (1962). Surgieron movimientos guerrilleros en Guerrero y Oaxaca, encabezados por Lucio Cabañas y Genaro Vázquez Rojas.",
      "Otros hechos: se creó el ISSSTE, la Comisión Nacional de Libros de Texto Gratuitos y el Museo Nacional de Antropología e Historia. Rompió el aislamiento diplomático de México. Mantuvo el control de las organizaciones campesinas y obreras, y reprimió movimientos sociales.",
      "## Para el examen",
      "Ideas clave: el milagro mexicano (1940–1970) tuvo dos etapas, con sustitución de importaciones y desarrollo estabilizador; sus costos fueron el abandono del campo, la deuda y la desigualdad; Ávila Camacho creó el IMSS, firmó el pacto obrero-industrial y el PRM pasó a PRI en 1946; Alemán fue el primer presidente civil y se asocia con corrupción y charrismo sindical; Ruiz Cortines dio el voto a la mujer (1953); López Mateos nacionalizó la industria eléctrica, creó el ISSSTE y los libros de texto gratuitos, y enfrentó a ferrocarrileros y maestros."
    ],
    quiz: [
      {
        q: "¿Cuál fue uno de los efectos de la Segunda Guerra Mundial en México?",
        options: ["Las exportaciones se redujeron a la mitad", "México empezó a producir lo que antes compraba al exterior y las exportaciones se duplicaron", "Se suspendió la industrialización", "México perdió su mercado interno"],
        answer: 1,
        explain: "La guerra dio la oportunidad de aumentar la producción y de industrializarse."
      },
      {
        q: "¿Qué políticas económicas caracterizaron el «milagro mexicano»?",
        options: ["Libre mercado total y venta de empresas estatales", "Sustitución de importaciones y desarrollo estabilizador", "Reparto agrario masivo", "Nacionalización de la banca"],
        answer: 1,
        explain: "El milagro se divide en 1940–1958 y 1958–1970."
      },
      {
        q: "¿Qué consecuencia tuvo el desarrollo estabilizador para el campo y la alimentación?",
        options: ["México se volvió exportador de alimentos", "Se descuidó el campo y México dejó de ser autosuficiente en alimentos", "Se repartió más tierra", "Se eliminaron los ejidos"],
        answer: 1,
        explain: "Se invirtió en la industria y hubo que comprar maíz al exterior. Además creció la desigualdad."
      },
      {
        q: "¿Qué se comprometían a hacer los trabajadores en el pacto obrero-industrial de Ávila Camacho?",
        options: ["No pedir aumentos salariales ni hacer huelgas durante la guerra", "Aceptar el 51 % de capital extranjero", "Dejar sus sindicatos", "Pagar más impuestos"],
        answer: 0,
        explain: "Los empresarios prometieron no subir precios, pero al final no cumplieron."
      },
      {
        q: "¿Qué ocurrió en 1946?",
        options: ["Se creó el IMSS", "Se disolvió el PRM y se creó el PRI", "Se dio el voto a la mujer", "Se nacionalizó la industria eléctrica"],
        answer: 1,
        explain: "El primer candidato del PRI fue Miguel Alemán Valdés, el primer presidente civil."
      },
      {
        q: "¿Qué es el «charrismo sindical»?",
        options: ["Una huelga de charros", "Un sindicato independiente", "Un control en el que la dirigencia sindical es impuesta por la empresa o el gobierno", "Un partido de oposición"],
        answer: 2,
        explain: "El término viene de la afición a la charrería de Jesús Díaz de León, impuesto a los ferrocarrileros en 1948."
      },
      {
        q: "¿Qué ocurrió en 1953 durante el gobierno de Ruiz Cortines?",
        options: ["Se creó el ISSSTE", "Se reconoció el voto de la mujer", "Se nacionalizó la industria eléctrica", "Se fundó el PAN"],
        answer: 1,
        explain: "También se creó la CROC y la Ley Electoral de 1954 endureció los requisitos para registrar partidos."
      },
      {
        q: "¿Qué estableció la Ley Electoral de 1963, de López Mateos?",
        options: ["El voto a los 18 años", "Los diputados de partido: con 2.5 % de la votación, un partido de oposición tenía 5 diputados", "La desaparición del PRI", "La reelección presidencial"],
        answer: 1,
        explain: "Por cada 0.5 % extra se sumaba un diputado, hasta un máximo de 20, sin poner en riesgo la hegemonía del PRI."
      }
    ]
  },

  {
    id: 6,
    title: "Díaz Ordaz, el 68 y la crisis del modelo",
    period: "1964 – 1982",
    lesson: [
      "## El gobierno de Gustavo Díaz Ordaz (1964–1970)",
      "Su gobierno fue autoritario y represivo y marcó el fin de la etapa de crecimiento. Continuaron el presidencialismo, el dominio del PRI y el pluripartidismo aparente, que disimulaba un sistema de partido oficial. El modelo del desarrollo estabilizador llegaba a su límite y generó descontento. Destacan el movimiento de los médicos (1964–1965) y el movimiento estudiantil de 1968. Los movimientos sociales eran enfrentados con represión.",
      "Obras y hechos del sexenio: se inauguró la primera línea del Metro (Sistema de Transporte Colectivo); se construyeron el Estadio Azteca y el Palacio de los Deportes; el país fue sede del Mundial de Futbol de 1970; se creó el pago de la tenencia vehicular para subsidiar los Juegos Olímpicos; se impulsaron la petroquímica y la industria automotriz con inversión extranjera; continuó la política proteccionista, con subsidios, exención de impuestos y aranceles. Se firmó el Tratado de Tlatelolco, por el que los países de América Latina se comprometían a no fabricar, poseer ni usar armas nucleares.",
      "## Los Juegos Olímpicos de 1968",
      "La Ciudad de México fue sede de los XIX Juegos Olímpicos, llamados «de la paz». El gobierno pensaba mostrar los logros del Estado mexicano. Pero los Juegos se realizaron entre el repudio popular, porque el movimiento estudiantil fue minimizado y reprimido brutalmente por el gobierno.",
      "## El movimiento estudiantil de 1968",
      "El movimiento coincidió con el agotamiento del desarrollo estabilizador y con el estancamiento de la economía, y respondió también a la política autoritaria de Díaz Ordaz. Participaron sobre todo universitarios y politécnicos, profesores e intelectuales. Fue un movimiento político: exigía mayor participación y democratización de la vida política.",
      "Los estudiantes se organizaron en el Consejo Nacional de Huelga (CNH). Su pliego petitorio tenía seis puntos: libertad a todos los presos políticos; derogación de los artículos 145 y 145 bis del Código Penal Federal; desaparición del Cuerpo de Granaderos; destitución de los jefes de policía; indemnización a los familiares de los heridos y muertos desde el inicio del conflicto; y deslinde de responsabilidades de los funcionarios culpables de los hechos sangrientos.",
      "Causas hipotéticas que se mencionan: conflictos internos del gobierno por la cercanía de la sucesión presidencial; el movimiento daba motivos para encarcelar a los disidentes y asegurar unos Juegos Olímpicos en paz; y el gobierno quería frenar una supuesta «conspiración comunista» para boicotear las Olimpiadas, detectada por el FBI y la CIA.",
      "La represión alcanzó su momento más grave el 2 de octubre de 1968 en la Plaza de las Tres Culturas, en Tlatelolco (dato complementario: la presentación del maestro no da la fecha). Después de las protestas se puso en entredicho el modelo económico adoptado al terminar la Segunda Guerra Mundial, que había acentuado la desigualdad, no había creado los empleos necesarios para el crecimiento de la población y había reafirmado los lazos de dependencia extranjera.",
      "## La crisis del desarrollo estabilizador",
      "El modelo comenzó a decaer a principios de los años setenta. Requería cada vez más recursos, pero no podían recaudarse porque los empresarios vivían en una especie de «paraíso fiscal». Los primeros costos se vieron en la crisis de 1976, pero el descubrimiento de yacimientos petroleros la suavizó; ante eso, el gobierno no hizo las reformas que el país necesitaba.",
      "## Luis Echeverría (1970–1976)",
      "Como producto de una crisis internacional, las economías de Estados Unidos, Inglaterra, Japón y Alemania dejaron de invertir en los sectores automotriz, de construcción, textil y de electrodomésticos, lo que generó mucho desempleo en México. Echeverría aplicó el modelo de «desarrollo compartido», que buscaba corregir los errores del desarrollo estabilizador: desarrollar el capitalismo agrario con créditos para los campesinos y modernizar los métodos de cultivo.",
      "Aunque su objetivo era un desarrollo más equitativo, tuvo críticas y problemas: persistió la inflación, aumentó la deuda externa y la aplicación de las políticas públicas fue poco eficaz.",
      "## José López Portillo (1976–1982)",
      "Cuando asumió la presidencia el país vivía una grave crisis económica, con una gran fuga de capitales. La deuda pública pasó de 20 000 a 80 000 millones de dólares. Se encontraron nuevos yacimientos petroleros en el sureste, y el petróleo ayudó a suavizar la crisis, pues sirvió como aval para préstamos internacionales. Se invirtió en infraestructura (carreteras, presas, plantas de energía y electrificación rural) y se mantuvo una política exterior activa.",
      "Pero en 1981 se encontraron otros yacimientos en el mundo, los países árabes volvieron a ser los principales vendedores y el precio del barril bajó. La banca extranjera suspendió sus préstamos a México y se acabó la reserva de dólares. López Portillo decidió expropiar los bancos privados como medida de emergencia (1 de septiembre de 1982), y eso causó más fuga de capitales. Fue el inicio de la llamada «década perdida» de los años ochenta, con aumento de la deuda externa, la inflación y el desempleo.",
      "## Para el examen",
      "Ideas clave: Díaz Ordaz fue autoritario; en su sexenio hubo Metro, Estadio Azteca, Juegos Olímpicos (1968) y Mundial (1970); el movimiento estudiantil del 68 exigía democratización, lo organizó el CNH y tenía un pliego de seis puntos; la represión puso en duda el modelo económico; Echeverría aplicó el «desarrollo compartido»; López Portillo usó el petróleo como garantía de préstamos, vio caer el precio y expropió la banca; la deuda pasó de 20 000 a 80 000 millones de dólares."
    ],
    quiz: [
      {
        q: "¿Qué caracterizó al gobierno de Díaz Ordaz?",
        options: ["Fue autoritario y represivo, y marcó el fin de la etapa de crecimiento", "Fue el más democrático del siglo", "Nacionalizó la banca", "Aplicó el modelo neoliberal"],
        answer: 0,
        explain: "El desarrollo estabilizador llegaba a su límite y generó descontento."
      },
      {
        q: "¿Cuál de estas obras corresponde al sexenio de Díaz Ordaz?",
        options: ["La creación del IMSS", "El Palacio de los Deportes y la primera línea del Metro", "El ISSSTE", "La Ciudad Universitaria"],
        answer: 1,
        explain: "También se construyó el Estadio Azteca y se creó el pago de la tenencia para subsidiar las Olimpiadas."
      },
      {
        q: "¿Qué organismo encabezó al movimiento estudiantil de 1968?",
        options: ["El PRI", "El Consejo Nacional de Huelga (CNH)", "El Partido Popular", "La CTM"],
        answer: 1,
        explain: "Participaron sobre todo universitarios y politécnicos, profesores e intelectuales."
      },
      {
        q: "¿Cuál NO era una demanda del pliego petitorio de 1968?",
        options: ["Libertad a los presos políticos", "Desaparición del Cuerpo de Granaderos", "Destitución de los jefes de policía", "Nacionalización del petróleo"],
        answer: 3,
        explain: "El pliego tenía seis puntos, incluida la derogación de los artículos 145 y 145 bis del Código Penal."
      },
      {
        q: "¿Qué tratado firmó México en el sexenio de Díaz Ordaz para prohibir armas nucleares en América Latina?",
        options: ["TLCAN", "Tratado de Tlatelolco", "Tratado de Guadalupe Hidalgo", "Tratado de Ciudad Juárez"],
        answer: 1,
        explain: "Los países de América Latina se comprometían a no fabricar, poseer ni utilizar armas nucleares."
      },
      {
        q: "¿Cuál fue el modelo económico de Luis Echeverría?",
        options: ["Desarrollo compartido", "Libre mercado", "Mexicanización de la economía", "Neoliberalismo"],
        answer: 0,
        explain: "Buscó corregir los errores del desarrollo estabilizador, pero persistieron la inflación y la deuda."
      },
      {
        q: "¿Cómo ayudó el petróleo a López Portillo?",
        options: ["Eliminó la deuda externa", "Sirvió de aval para préstamos internacionales y suavizó la crisis", "Hizo que México dejara de importar alimentos", "Permitió bajar los impuestos"],
        answer: 1,
        explain: "Se hallaron nuevos yacimientos en el sureste, pero en 1981 el precio del barril bajó."
      },
      {
        q: "¿Qué medida de emergencia tomó López Portillo en 1982?",
        options: ["Privatizó Pemex", "Firmó el TLC", "Expropió los bancos privados", "Creó el IMSS"],
        answer: 2,
        explain: "La banca extranjera había suspendido sus préstamos y se había acabado la reserva de dólares. La expropiación provocó más fuga de capitales."
      }
    ]
  },

  {
    id: 7,
    title: "Los gobiernos neoliberales I: De la Madrid y Salinas",
    period: "1982 – 1994",
    lesson: [
      "## Origen del neoliberalismo y contexto internacional",
      "En los años setenta hubo una crisis en los países capitalistas. Para combatirla, Margaret Thatcher (Inglaterra) y Ronald Reagan (Estados Unidos) aplicaron una política económica conocida como modelo neoliberal, desarrollada por el economista Milton Friedman.",
      "En el plano internacional, el Muro de Berlín cayó en 1989 y la Guerra Fría entre Estados Unidos y la URSS terminó en 1991. El bloque socialista perdió su peso económico. La mayoría de los gobiernos del mundo adoptó el modelo neoliberal, respaldado por organismos como el Fondo Monetario Internacional y el Banco Mundial.",
      "## Características del neoliberalismo",
      "Frenar la intervención del Estado en la economía, de modo que el Estado se deshaga de las empresas que controla y las venda a la iniciativa privada. Dejar que el mercado se regule solo, por la ley de la oferta y la demanda. Romper las barreras proteccionistas de las economías nacionales. Abrir el país a la inversión y a los productos extranjeros.",
      "En México el modelo neoliberal inició con Miguel de la Madrid, se consolidó con Salinas de Gortari y lo retomaron los gobiernos panistas de Fox y Calderón. México empezó a vender sus empresas estatales y fue eliminando el proteccionismo para abrirse al comercio internacional.",
      "## La ideología neoliberal",
      "La ideología neoliberal transforma al ser humano en «capital humano». Valores como la competitividad, la producción y el éxito se vuelven preponderantes. El emprendurismo, el coaching y la división entre ganadores y perdedores forman parte de esta ideología. La educación se transforma: se busca vincularla con las empresas y fomentar una cultura del trabajo. El filósofo Byung-Chul Han lo resume así: «Ahora uno se explota a sí mismo y cree que está realizándose».",
      "## Miguel de la Madrid (1982–1988)",
      "Elaboró una nueva Ley de Inversiones Extranjeras para facilitar la inversión y recortó el gasto del gobierno en bienestar social. Buscó «modernizar» la educación para vincularla con las necesidades del sector productivo. Ascendió un nuevo grupo de poder: los tecnócratas, jóvenes economistas formados en universidades estadounidenses e inglesas, convencidos de que el crecimiento se logra vinculando la economía con el mercado mundial.",
      "El gobierno se concentró en privatizar empresas del Estado y en reducir el número de burócratas: se liquidaron o vendieron cerca de 500 empresas estatales, entre ellas Fundidora Monterrey y Uranios Mexicanos. Se contrataron préstamos con altas tasas de interés y nueva deuda para pagar deudas a punto de vencer.",
      "De la Madrid modificó los términos de la nacionalización de la banca de López Portillo: las empresas recuperaron 34 % de la banca. Para enfrentar la crisis subieron los precios de la luz, el agua, la gasolina y otros servicios del Estado. Bajaron el nivel de vida y el salario de amplios sectores, los precios subieron y la economía se estancó («crecimiento cero»).",
      "## Las elecciones de 1988 y el fraude electoral",
      "Un grupo de priistas, encabezado por Cuauhtémoc Cárdenas y Porfirio Muñoz Ledo, quiso defender el proyecto de nacionalismo revolucionario y oponerse a las medidas neoliberales. Al no lograrlo, rompieron con el partido y participaron en las elecciones: Cárdenas fue candidato del Frente Democrático Nacional (FDN). Manuel Clouthier fue candidato del PAN y Carlos Salinas de Gortari, del PRI.",
      "Salinas ganó por una diferencia estrecha sobre Cárdenas luego de la «caída del sistema» de cómputo de los resultados. En 1989 surgió el Partido de la Revolución Democrática (PRD), integrado por antiguos militantes del PRI.",
      "## Carlos Salinas de Gortari (1988–1994)",
      "En 1990 se privatizó el 100 % de la banca. Se privatizaron cerca de 300 empresas de gran valor y de importancia estratégica: Teléfonos de México, Fertilizantes Mexicanos, Altos Hornos de México, Aeroméxico, Mexicana de Aviación, empresas mineras, los canales 7 y 13, entre muchas otras. El gobierno obtuvo mucho dinero, pero no se aplicó en beneficio de todos los mexicanos. Pemex siguió siendo propiedad del Estado, pero se abrió el área de exploración al capital privado.",
      "Salinas ofreció destinar recursos al Programa Nacional de Solidaridad (Pronasol), creado en 1988 para elevar el nivel de vida de los grupos más pobres. Pretendía aliviar los efectos de la pobreza, pero no atacaba sus causas, y se volvió un programa electorero, porque los beneficiados se comprometían a votar por el PRI.",
      "El Tratado de Libre Comercio (TLC) entre México, Estados Unidos y Canadá entró en vigor el 1 de enero de 1994. Significó entrar de lleno a la globalización. Con el TLC entran mercancías e inversiones conforme a los intereses de los inversionistas extranjeros; México ofrecía mano de obra barata y riqueza de recursos naturales.",
      "El proceso privatizador favoreció la aparición de una poderosa oligarquía financiera: la riqueza se concentró en pocas manos y la clase empresarial adquirió tanto poder que influyó en las decisiones políticas. El PAN empezó a colaborar con las políticas de Salinas. Carlos Slim fue declarado el hombre más rico del mundo en 2007.",
      "## Cambios en la Constitución",
      "Las reformas del Estado comenzaron con Salinas. Artículo 27: la propiedad ejidal se convierte en propiedad privada, y ahora los ejidos se pueden vender. Artículo 28: las actividades económicas ya no son exclusivas del Estado. Se reconoció a la Iglesia el derecho de poseer bienes y se establecieron relaciones con el Vaticano.",
      "## El final del sexenio: 1994",
      "Debido a la inflación acumulada durante varios años se decidió «quitarle los ceros al peso». Al terminar el gobierno de Salinas, en 1994, la situación era muy grave: había un clima de violencia. Surgió el Ejército Zapatista de Liberación Nacional (EZLN) con su levantamiento de 1994, hubo desempleo, muchas empresas cerraron y muchísimos trabajadores fueron despedidos.",
      "## Para el examen",
      "Ideas clave: el neoliberalismo viene de Thatcher, Reagan y Friedman; sus rasgos son menos Estado, mercado libre, fin del proteccionismo y apertura; en México empezó con De la Madrid (privatizó unas 500 empresas), se consolidó con Salinas (banca, Telmex, TLC) y los panistas lo continuaron; en 1988 Cárdenas fue candidato del FDN y se habló de fraude por la «caída del sistema»; de ahí nació el PRD (1989); Salinas reformó los artículos 27 y 28; el TLC entró en vigor el 1 de enero de 1994, y ese año surgió el EZLN."
    ],
    quiz: [
      {
        q: "¿Quiénes aplicaron primero el modelo neoliberal, desarrollado por Milton Friedman?",
        options: ["Gorbachov y Brézhnev", "Margaret Thatcher y Ronald Reagan", "Lázaro Cárdenas y Roosevelt", "Mao y Castro"],
        answer: 1,
        explain: "Lo aplicaron para combatir la crisis de los años setenta en los países capitalistas."
      },
      {
        q: "¿Cuál NO es una característica del neoliberalismo?",
        options: ["Vender empresas estatales a particulares", "Dejar que el mercado se regule por oferta y demanda", "Aumentar el proteccionismo y la participación del Estado", "Abrir el país a la inversión extranjera"],
        answer: 2,
        explain: "El neoliberalismo busca romper las barreras proteccionistas y frenar la intervención del Estado."
      },
      {
        q: "¿Quiénes son los «tecnócratas» que ascendieron con De la Madrid?",
        options: ["Líderes sindicales", "Jóvenes economistas formados en universidades estadounidenses e inglesas", "Militares retirados", "Maestros rurales"],
        answer: 1,
        explain: "Están convencidos de que el crecimiento se logra vinculando la economía con el mercado mundial."
      },
      {
        q: "¿Cuántas empresas estatales se vendieron o liquidaron en el gobierno de De la Madrid?",
        options: ["Cerca de 50", "Cerca de 500", "Cerca de 3 000", "Ninguna"],
        answer: 1,
        explain: "Entre ellas, Fundidora Monterrey y Uranios Mexicanos."
      },
      {
        q: "¿Quién fue candidato del Frente Democrático Nacional (FDN) en 1988?",
        options: ["Manuel Clouthier", "Carlos Salinas de Gortari", "Cuauhtémoc Cárdenas", "Francisco Labastida"],
        answer: 2,
        explain: "Cárdenas rompió con el PRI junto con Porfirio Muñoz Ledo. La elección estuvo marcada por la «caída del sistema»."
      },
      {
        q: "¿Qué partido surgió en 1989 con antiguos militantes del PRI?",
        options: ["PAN", "PPS", "PRD", "PARM"],
        answer: 2,
        explain: "El Partido de la Revolución Democrática nació tras la elección de 1988."
      },
      {
        q: "¿Qué cambios hizo Salinas a los artículos 27 y 28 de la Constitución?",
        options: ["Prohibió a la Iglesia tener propiedades", "Permitió vender los ejidos y dejó de reservar actividades económicas exclusivamente al Estado", "Nacionalizó los bancos", "Eliminó la reelección"],
        answer: 1,
        explain: "También reconoció a la Iglesia el derecho de poseer bienes y se establecieron relaciones con el Vaticano."
      },
      {
        q: "¿Qué ocurrió el 1 de enero de 1994?",
        options: ["Entró en vigor el TLC entre México, Estados Unidos y Canadá", "Se nacionalizó la banca", "Se firmó el Fobaproa", "Cayó el Muro de Berlín"],
        answer: 0,
        explain: "Ese año también surgió el EZLN, y terminó el sexenio en un clima de violencia y crisis."
      }
    ]
  },

  {
    id: 8,
    title: "Los gobiernos neoliberales II: Zedillo, Fox y Calderón",
    period: "1994 – 2012",
    lesson: [
      "## Ernesto Zedillo (1994–2000): el «error de diciembre»",
      "En los primeros días de su gobierno ocurrió el «error de diciembre»: el secretario de Hacienda discutió con los banqueros la posibilidad de devaluar el peso. Cuando el peso se reestableció, los banqueros y los grandes inversionistas ya habían cambiado sus fortunas a dólares, lo que los benefició a ellos y perjudicó al país. Estados Unidos hizo un préstamo de emergencia a México de 50 000 millones de dólares, con altos intereses y para pagar a corto plazo.",
      "La crisis de 1994 afectó a todas las personas que tenían créditos bancarios para comprar casas o carros, o tarjetas de crédito. Los bancos fueron inflexibles con los deudores y embargaron propiedades. Zedillo decidió subsidiar a los bancos comprando las deudas no pagadas mediante el Fondo Bancario de Protección al Ahorro (Fobaproa): el rescate de los bancos se hizo con el dinero de todos los mexicanos.",
      "Durante el sexenio aumentó la pobreza, el peso llegó a 9.90 por dólar y la deuda externa pasó de 130 000 a 167 000 millones de dólares. La respuesta del gobierno fue el Programa para la Educación, la Salud y la Alimentación (Progresa), que daba apoyos económicos directos a familias vulnerables.",
      "## Vicente Fox (2000–2006)",
      "Continuó la política económica neoliberal y siguió apoyando al gran capital y a los inversionistas extranjeros. Ofreció mejorar el modelo económico, pero ninguna de sus medidas se cumplió. Hubo estabilidad económica, pero sin crecimiento, y como no hubo crecimiento la pobreza aumentó por el crecimiento de la población.",
      "Cientos de miles de mexicanos se incorporaron a la economía informal (contrabando, piratería). Millones se fueron a Estados Unidos a buscar trabajo y enviaron remesas: esas remesas superaron los ingresos por turismo y solo quedaron por debajo de los ingresos por la venta de petróleo.",
      "Con base en Progresa, Fox creó el programa Oportunidades: daba a las familias apoyos en dinero, becas, útiles escolares, despensas y materiales de construcción. Se beneficiaron más de un millón de familias en pobreza extrema, pero gran parte de la población quedó fuera, y solo se aplicó en 476 de los casi 2 500 municipios del país.",
      "En las elecciones intermedias el PAN perdió 55 diputados, y por eso las reformas de Fox no pudieron realizarse del todo.",
      "## La elección de 2006",
      "Para la elección de 2006 se presentó una «guerra sucia» de Fox, el PAN, las organizaciones empresariales y la Iglesia católica contra el candidato del PRD, Andrés Manuel López Obrador. La elección fue cerrada: un primer conteo daba una ventaja de 0.58 % a Felipe Calderón. Los seguidores de López Obrador exigían «voto por voto, casilla por casilla».",
      "El Tribunal Electoral del Poder Judicial de la Federación decidió abrir solo el 11 % de las casillas, y no todas, como exigían. El resultado mostró anomalías e irregularidades, y la distancia se acortó aún más: Calderón 35.71 % y López Obrador 35.15 %. El «voto por voto» no se cumplió y Felipe Calderón fue declarado presidente electo, aunque los magistrados reconocieron la intromisión de Fox en el proceso.",
      "López Obrador se declaró simbólicamente «Presidente Legítimo de México» y empezó a recorrer el país para crear una organización política y social que lo postulara en 2012.",
      "## Felipe Calderón (2006–2012): la guerra contra el narco",
      "Calderón inició una lucha frontal contra el crimen organizado, principalmente el narcotráfico, mediante la acción del ejército. Muchos inocentes murieron en los enfrentamientos entre el gobierno y los cárteles. Las cifras que da la presentación: 29 000 desaparecidos y 170 000 muertes relacionadas con el crimen organizado.",
      "Otros hechos del sexenio: murieron 49 niños en la Guardería ABC, en Sonora; se construyó la «Estela de Luz», un monumento de 104 metros de altura; los feminicidios aumentaron 68 % durante el sexenio, y el 95 % de los casos quedó impune; aumentaron las ejecuciones de funcionarios.",
      "## Sobre lo que no cubre este módulo",
      "Las presentaciones del maestro llegan hasta el sexenio de Calderón (2012). No tratan el sexenio de Enrique Peña Nieto ni la elección de 2018. Si tu maestro los incluye en el examen, díselo a tu papá para que se agregue ese módulo.",
      "## Para el examen",
      "Ideas clave: el «error de diciembre» de 1994 provocó una crisis; el rescate bancario fue el Fobaproa y se pagó con dinero público; Progresa (Zedillo) y Oportunidades (Fox) fueron programas de apoyo directo a familias pobres; con Fox hubo estabilidad sin crecimiento y las remesas fueron la segunda fuente de ingresos; en 2006 la diferencia fue mínima (Calderón 35.71 % y López Obrador 35.15 %) y se pidió «voto por voto, casilla por casilla»; Calderón inició la guerra contra el narco con el ejército."
    ],
    quiz: [
      {
        q: "¿En qué consistió el «error de diciembre»?",
        options: ["Se discutió con los banqueros una posible devaluación y los grandes inversionistas cambiaron sus fortunas a dólares antes de la devaluación", "Se nacionalizó la banca", "Se canceló el TLC", "Se firmó el Fobaproa con el pueblo"],
        answer: 0,
        explain: "Esto benefició a banqueros e inversionistas y perjudicó al país. Estados Unidos hizo un préstamo de emergencia de 50 000 millones de dólares."
      },
      {
        q: "¿Qué fue el Fobaproa?",
        options: ["Un programa de becas", "Un fondo que compró las deudas no pagadas de los bancos con dinero de todos los mexicanos", "Una empresa estatal", "Un tratado comercial"],
        answer: 1,
        explain: "Zedillo optó por subsidiar a los bancos mientras había deudores que perdían sus propiedades."
      },
      {
        q: "¿Cuál fue el programa de apoyos directos creado en el gobierno de Zedillo?",
        options: ["Pronasol", "Progresa", "Oportunidades", "Prospera"],
        answer: 1,
        explain: "Pronasol fue de Salinas y Oportunidades se creó en el gobierno de Fox, con base en Progresa."
      },
      {
        q: "¿Cuál fue una característica económica del gobierno de Fox?",
        options: ["Gran crecimiento económico", "Estabilidad económica sin crecimiento", "Nacionalización de empresas", "Fin de las remesas"],
        answer: 1,
        explain: "Continuó la política neoliberal. Sin crecimiento, la pobreza aumentó con el crecimiento de la población."
      },
      {
        q: "¿Qué lugar ocuparon las remesas de los migrantes en los ingresos del país durante el sexenio de Fox?",
        options: ["Superaron al petróleo", "Superaron al turismo y solo estuvieron por debajo del petróleo", "Eran insignificantes", "Superaron a las exportaciones"],
        answer: 1,
        explain: "Millones de mexicanos emigraron a Estados Unidos y enviaron dinero a sus familias."
      },
      {
        q: "¿Qué exigían los seguidores de López Obrador en 2006?",
        options: ["Que se anulara la elección de 1988", "«Voto por voto, casilla por casilla»", "Que Fox renunciara", "Que el Tribunal abriera solo el 11 % de las casillas"],
        answer: 1,
        explain: "El Tribunal abrió solo el 11 % de las casillas. Calderón quedó con 35.71 % y López Obrador con 35.15 %."
      },
      {
        q: "¿Cómo se declaró simbólicamente López Obrador tras la elección de 2006?",
        options: ["Presidente electo", "Presidente Legítimo de México", "Jefe Máximo", "Candidato ciudadano"],
        answer: 1,
        explain: "Empezó a recorrer el país para crear una organización que lo postulara en 2012."
      },
      {
        q: "¿En qué consistió la estrategia principal del gobierno de Calderón contra el crimen organizado?",
        options: ["Legalizar las drogas", "Una lucha frontal mediante la acción del ejército", "Dialogar con los cárteles", "Cerrar la frontera con Estados Unidos"],
        answer: 1,
        explain: "La presentación menciona 29 000 desaparecidos y 170 000 muertes relacionadas con el crimen organizado."
      }
    ]
  }
];
