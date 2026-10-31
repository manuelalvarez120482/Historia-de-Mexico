// Datos de la sopa de letras y del crucigrama de cada módulo.
// Las palabras van en MAYÚSCULAS, sin acentos, sin espacios y sin Ñ.

// ---------- Sopa de letras ----------
const SOPA = {
  1: [
    { w: "MADERO", clue: "Proclamó el Plan de San Luis" },
    { w: "ZAPATA", clue: "Líder agrarista del Plan de Ayala" },
    { w: "OROZCO", clue: "Pascual ____, autor del Plan de la Empacadora" },
    { w: "REYES", clue: "Bernardo ____, murió en la Decena Trágica" },
    { w: "CREELMAN", clue: "Periodista que entrevistó a Díaz en 1908" },
    { w: "CANANEA", clue: "Huelga de 1906 en Sonora" },
    { w: "REGENERACION", clue: "Periódico de los magonistas" },
    { w: "CORRAL", clue: "Ramón ____, científico que acompañó a Díaz" }
  ],
  2: [
    { w: "HUERTA", clue: "Dictador que disolvió las cámaras" },
    { w: "CARRANZA", clue: "Primer Jefe del movimiento constitucionalista" },
    { w: "OBREGON", clue: "Derrotó a Villa en cuatro batallas" },
    { w: "GUTIERREZ", clue: "Eulalio ____, presidente interino de la Convención" },
    { w: "WILSON", clue: "Presidente de Estados Unidos que no reconoció a Huerta" },
    { w: "CONVENCION", clue: "Reunión de jefes militares en Aguascalientes" },
    { w: "QUERETARO", clue: "Ciudad donde se redactó la Constitución de 1917" },
    { w: "GUAJARDO", clue: "René ____, general que asesinó a Zapata" }
  ],
  3: [
    { w: "VASCONCELOS", clue: "Primer secretario de Educación Pública" },
    { w: "CALLES", clue: "Plutarco Elías ____, el Jefe Máximo" },
    { w: "OBREGON", clue: "Presidente de 1920 a 1924" },
    { w: "RIVERA", clue: "Diego ____, muralista de la SEP" },
    { w: "SIQUEIROS", clue: "David Alfaro ____, muralista" },
    { w: "CRISTERA", clue: "Guerra entre la Iglesia y el Estado (1926–1929)" },
    { w: "MAXIMATO", clue: "Periodo de 1928 a 1934" },
    { w: "BANXICO", clue: "Banco de México (abreviatura común)" }
  ],
  4: [
    { w: "CARDENAS", clue: "Presidente que expropió el petróleo" },
    { w: "TEJEDA", clue: "Adalberto ____, candidato presidencial en 1934" },
    { w: "TROTSKY", clue: "León ____, recibió asilo político" },
    { w: "PETROLEO", clue: "Industria expropiada en 1938" },
    { w: "PEMEX", clue: "Empresa creada tras la expropiación" },
    { w: "FERROCARRILES", clue: "Se nacionalizaron en 1937" },
    { w: "POLITECNICO", clue: "Instituto ____ Nacional, creado por Cárdenas" },
    { w: "SEXENAL", clue: "Plan ____, primer programa de gobierno" }
  ],
  5: [
    { w: "ALEMAN", clue: "Primer presidente civil, de 1946 a 1952" },
    { w: "CAMACHO", clue: "Manuel Ávila ____, creó el IMSS" },
    { w: "CORTINES", clue: "Adolfo Ruiz ____, dio el voto a la mujer" },
    { w: "MATEOS", clue: "Adolfo López ____, creó el ISSSTE" },
    { w: "JARAMILLO", clue: "Rubén ____, líder campesino asesinado en 1962" },
    { w: "VALLEJO", clue: "Demetrio ____, líder de los ferrocarrileros" },
    { w: "SALAZAR", clue: "Othón ____, líder del movimiento magisterial" },
    { w: "CHARRISMO", clue: "Control sindical impuesto por el gobierno o la empresa" }
  ],
  6: [
    { w: "ORDAZ", clue: "Gustavo Díaz ____, presidente en 1968" },
    { w: "ECHEVERRIA", clue: "Luis ____, presidente de 1970 a 1976" },
    { w: "PORTILLO", clue: "José López ____, expropió la banca" },
    { w: "GRANADEROS", clue: "Cuerpo policiaco cuya desaparición pedían los estudiantes" },
    { w: "TLATELOLCO", clue: "Plaza del 2 de octubre de 1968" },
    { w: "OLIMPIADAS", clue: "Juegos celebrados en México en 1968" },
    { w: "PETROLEO", clue: "Recurso que sirvió de aval para préstamos" },
    { w: "DEUDA", clue: "Pasó de 20 000 a 80 000 millones de dólares" }
  ],
  7: [
    { w: "MADRID", clue: "Miguel de la ____, presidente de 1982 a 1988" },
    { w: "SALINAS", clue: "Carlos ____ de Gortari, firmó el TLC" },
    { w: "CARDENAS", clue: "Cuauhtémoc ____, candidato del FDN en 1988" },
    { w: "CLOUTHIER", clue: "Manuel ____, candidato del PAN en 1988" },
    { w: "TECNOCRATAS", clue: "Jóvenes economistas que ascendieron con De la Madrid" },
    { w: "PRONASOL", clue: "Programa Nacional de Solidaridad" },
    { w: "TELMEX", clue: "Empresa telefónica privatizada por Salinas" },
    { w: "THATCHER", clue: "Margaret ____, primera ministra británica neoliberal" }
  ],
  8: [
    { w: "ZEDILLO", clue: "Presidente durante el error de diciembre" },
    { w: "FOX", clue: "Presidente de 2000 a 2006" },
    { w: "CALDERON", clue: "Presidente que inició la guerra contra el narco" },
    { w: "FOBAPROA", clue: "Fondo que rescató a los bancos" },
    { w: "PROGRESA", clue: "Programa de apoyos creado por Zedillo" },
    { w: "OPORTUNIDADES", clue: "Programa de Fox basado en Progresa" },
    { w: "REMESAS", clue: "Dinero que los migrantes envían a sus familias" },
    { w: "OBRADOR", clue: "Andrés Manuel López ____, candidato del PRD en 2006" }
  ]
};

// ---------- Crucigrama ----------
const CRUCI = {
  1: [
    { w: "REGENERACION", clue: "Periódico dirigido a los más pobres y explotados" },
    { w: "CANANEA", clue: "Huelga minera de 1906 en Sonora" },
    { w: "RIOBLANCO", clue: "Huelga textil de 1907 en Veracruz" },
    { w: "CREELMAN", clue: "Periodista de la entrevista de 1908" },
    { w: "ANTIRREELECCION", clue: "Principio que defendía el movimiento de Madero" },
    { w: "SANLUIS", clue: "Plan de Madero de 1910 (nombre de la ciudad)" },
    { w: "AYALA", clue: "Plan de los zapatistas" },
    { w: "CIUDADELA", clue: "Edificio donde se atrincheraron los sublevados en 1913" },
    { w: "EMPACADORA", clue: "Plan de Orozco en 1912" },
    { w: "TIGRE", clue: "Díaz dijo: «Han soltado un ____»" }
  ],
  2: [
    { w: "CONSTITUCION", clue: "La de 1917 incluyó demandas sociales" },
    { w: "AGUASCALIENTES", clue: "Ciudad de la Convención de 1914" },
    { w: "CARRANZA", clue: "Presidente electo en 1917" },
    { w: "XOCHIMILCO", clue: "Lugar donde se encontraron Villa y Zapata" },
    { w: "HUERTA", clue: "Dictador que renunció el 15 de julio de 1914" },
    { w: "OBREGON", clue: "Derrotó a Villa" },
    { w: "SONORA", clue: "Estado desde el que actuó el ejército del Noroeste" },
    { w: "QUERETARO", clue: "Sede del Congreso Constituyente" },
    { w: "GUAJARDO", clue: "General que asesinó a Zapata" },
    { w: "LAICA", clue: "Tipo de educación según el artículo 3" }
  ],
  3: [
    { w: "CAUDILLISMO", clue: "Poder personalizado, no institucional" },
    { w: "VASCONCELOS", clue: "Primer secretario de Educación Pública" },
    { w: "MURALISMO", clue: "Pintura en edificios públicos" },
    { w: "BIBLIOTECAS", clue: "Vasconcelos fundó 1 916" },
    { w: "CRISTERA", clue: "Guerra de 1926 a 1929" },
    { w: "TORAL", clue: "José de León ____, asesino de Obregón" },
    { w: "MAXIMATO", clue: "Periodo de 1928 a 1934" },
    { w: "PNR", clue: "Partido fundado en 1929 (siglas)" },
    { w: "ORTIZRUBIO", clue: "Presidente que renunció en 1932 (apellidos juntos)" },
    { w: "SIQUEIROS", clue: "Muralista de «Retrato actual de México»" }
  ],
  4: [
    { w: "EXPROPIACION", clue: "Decreto del 18 de marzo de 1938" },
    { w: "PLANSEXENAL", clue: "Primer programa de gobierno (palabras juntas)" },
    { w: "FERROCARRILES", clue: "Nacionalizados el 27 de junio de 1937" },
    { w: "PRM", clue: "Partido que sustituyó al PNR (siglas)" },
    { w: "TROTSKY", clue: "Recibió asilo político" },
    { w: "POLITECNICO", clue: "Instituto creado para la industrialización" },
    { w: "PETROMEX", clue: "Compañía del Estado que extraía solo 1.5 %" },
    { w: "NACIONALISMO", clue: "Corriente que antepone los intereses nacionales" },
    { w: "PAN", clue: "Partido creado en 1939 (siglas)" },
    { w: "CASADEESPANA", clue: "Institución que dio albergue a republicanos españoles (palabras juntas)" }
  ],
  5: [
    { w: "ESTABILIZADOR", clue: "Desarrollo ____, modelo económico de 1958 a 1970" },
    { w: "CHARRISMO", clue: "Control sindical impuesto" },
    { w: "IMSS", clue: "Instituto creado en 1943 (siglas)" },
    { w: "ISSSTE", clue: "Instituto de los trabajadores del Estado (siglas)" },
    { w: "ALEMAN", clue: "Primer presidente civil" },
    { w: "MILAGRO", clue: "El «____ mexicano»" },
    { w: "SUFRAGIO", clue: "El voto, derecho que se dio a la mujer en 1953" },
    { w: "JARAMILLO", clue: "Líder campesino asesinado en 1962" },
    { w: "PPS", clue: "Partido Popular Socialista (siglas)" },
    { w: "ESCUADRON", clue: "El ____ 201 participó en la Segunda Guerra Mundial" },
    { w: "ELECTRICA", clue: "Industria nacionalizada por López Mateos" }
  ],
  6: [
    { w: "TLATELOLCO", clue: "Plaza del 2 de octubre" },
    { w: "OLIMPIADAS", clue: "Juegos de 1968" },
    { w: "ESTUDIANTIL", clue: "Movimiento de 1968" },
    { w: "GRANADEROS", clue: "Cuerpo policiaco cuya desaparición se exigía" },
    { w: "CNH", clue: "Consejo Nacional de Huelga (siglas)" },
    { w: "ECHEVERRIA", clue: "Presidente del «desarrollo compartido»" },
    { w: "PORTILLO", clue: "Presidente que expropió la banca" },
    { w: "METRO", clue: "Su primera línea se inauguró con Díaz Ordaz" },
    { w: "DEUDA", clue: "Pasó de 20 000 a 80 000 millones de dólares" },
    { w: "PETROLEO", clue: "Aval de los préstamos en 1976–1981" }
  ],
  7: [
    { w: "NEOLIBERALISMO", clue: "Modelo económico que inició con De la Madrid" },
    { w: "TECNOCRATAS", clue: "Jóvenes economistas con estudios en el extranjero" },
    { w: "PRIVATIZACION", clue: "Venta de empresas estatales" },
    { w: "FRIEDMAN", clue: "Milton ____, economista del modelo neoliberal" },
    { w: "PRD", clue: "Partido surgido en 1989 (siglas)" },
    { w: "PRONASOL", clue: "Programa de Solidaridad de Salinas" },
    { w: "TLC", clue: "Tratado de Libre Comercio (siglas)" },
    { w: "EZLN", clue: "Ejército Zapatista de Liberación Nacional (siglas)" },
    { w: "EJIDOS", clue: "Tierras que se pudieron vender tras reformar el artículo 27" },
    { w: "TELMEX", clue: "Teléfonos de México, empresa privatizada" }
  ],
  8: [
    { w: "FOBAPROA", clue: "Fondo de rescate bancario" },
    { w: "PROGRESA", clue: "Programa de apoyos de Zedillo" },
    { w: "OPORTUNIDADES", clue: "Programa de apoyos de Fox" },
    { w: "REMESAS", clue: "Dinero enviado por migrantes" },
    { w: "NARCOTRAFICO", clue: "Problema que Calderón combatió con el ejército" },
    { w: "DESAPARECIDOS", clue: "29 000 durante el sexenio de Calderón" },
    { w: "ESTELA", clue: "____ de Luz, monumento de 104 metros" },
    { w: "ABC", clue: "Guardería donde murieron 49 niños (siglas)" },
    { w: "TRIBUNAL", clue: "Órgano que abrió solo el 11 % de las casillas en 2006" },
    { w: "INFORMAL", clue: "Economía a la que se incorporaron cientos de miles" }
  ]
};
