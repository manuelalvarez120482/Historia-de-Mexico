// Minijuegos base de cada módulo.
// type "timeline": el alumno toca los eventos del más antiguo al más reciente.
//   "year" define el orden (puede llevar decimales); "label" es lo que se muestra.
// type "match": el alumno une cada elemento de la izquierda con su par de la derecha.

const GAMES = {
  1: {
    type: "timeline",
    events: [
      { text: "Huelga de los trabajadores de Cananea, Sonora", year: 1906, label: "1906" },
      { text: "Huelga textil de Río Blanco, Veracruz", year: 1907, label: "1907" },
      { text: "Entrevista de Díaz con el periodista Creelman", year: 1908, label: "1908" },
      { text: "Madero proclama el Plan de San Luis", year: 1910, label: "5 de octubre de 1910" },
      { text: "Tratados de Ciudad Juárez y renuncia de Díaz", year: 1911.4, label: "Mayo de 1911" },
      { text: "Los zapatistas firman el Plan de Ayala", year: 1911.9, label: "Noviembre de 1911" },
      { text: "Orozco se levanta con el Plan de la Empacadora", year: 1912, label: "1912" },
      { text: "Decena Trágica y asesinato de Madero", year: 1913, label: "Febrero de 1913" }
    ]
  },

  2: {
    type: "match",
    pairs: [
      { a: "Eulalio Gutiérrez", b: "Presidente interino elegido por la Convención" },
      { a: "René Guajardo", b: "General carrancista que asesinó a Zapata" },
      { a: "Woodrow Wilson", b: "Presidente de Estados Unidos que no reconoció a Huerta" },
      { a: "Artículo 3", b: "Educación laica, libre y gratuita" },
      { a: "Artículo 27", b: "Tierras y aguas son propiedad de la nación" },
      { a: "Artículo 123", b: "Jornada de 8 horas y salario mínimo" },
      { a: "Artículo 130", b: "Separación entre la Iglesia y el Estado" }
    ]
  },

  3: {
    type: "timeline",
    events: [
      { text: "Se crea la Secretaría de Educación Pública con José Vasconcelos", year: 1921, label: "Gobierno de Obregón" },
      { text: "Calles crea el Banco de México", year: 1925, label: "1925" },
      { text: "Comienza la Guerra Cristera", year: 1926, label: "1926" },
      { text: "Obregón es asesinado después de ganar la reelección", year: 1928, label: "1928" },
      { text: "Se funda el Partido Nacional Revolucionario (PNR)", year: 1929, label: "1929" },
      { text: "Gobierno de Pascual Ortiz Rubio", year: 1930, label: "1930" },
      { text: "Ortiz Rubio renuncia y llega Abelardo Rodríguez", year: 1932, label: "1932" }
    ]
  },

  4: {
    type: "timeline",
    events: [
      { text: "Cárdenas llega a la presidencia y se aplica el Plan Sexenal", year: 1934, label: "1934" },
      { text: "Entra en vigor la Ley de Nacionalización", year: 1935, label: "Agosto de 1935" },
      { text: "Entra en vigor la Ley de Expropiación", year: 1936, label: "Noviembre de 1936" },
      { text: "Los ferrocarriles quedan completamente nacionalizados", year: 1937, label: "27 de junio de 1937" },
      { text: "Cárdenas decreta la expropiación petrolera", year: 1938.1, label: "18 de marzo de 1938" },
      { text: "El PNR se transforma en PRM", year: 1938.2, label: "30 de marzo de 1938" },
      { text: "Se crea el Partido Acción Nacional", year: 1939, label: "1939" }
    ]
  },

  5: {
    type: "match",
    pairs: [
      { a: "Manuel Ávila Camacho", b: "Creó el IMSS (1943) y firmó el pacto obrero-industrial" },
      { a: "Miguel Alemán Valdés", b: "Primer presidente civil; corrupción y charrismo sindical" },
      { a: "Adolfo Ruiz Cortines", b: "Voto a la mujer en 1953" },
      { a: "Adolfo López Mateos", b: "Creó el ISSSTE y nacionalizó la industria eléctrica" },
      { a: "Vicente Lombardo Toledano", b: "Creó el Partido Popular en 1948" },
      { a: "Demetrio Vallejo", b: "Dirigió el movimiento de los ferrocarrileros" },
      { a: "Rubén Jaramillo", b: "Líder campesino de Morelos asesinado en 1962" }
    ]
  },

  6: {
    type: "timeline",
    events: [
      { text: "Gustavo Díaz Ordaz asume la presidencia", year: 1964, label: "1964" },
      { text: "Represión del movimiento estudiantil en Tlatelolco", year: 1968.7, label: "2 de octubre de 1968" },
      { text: "Se inauguran los Juegos Olímpicos en la Ciudad de México", year: 1968.8, label: "Octubre de 1968" },
      { text: "México es sede del Campeonato Mundial de Futbol", year: 1970, label: "1970" },
      { text: "Crisis de 1976 y llegada de López Portillo", year: 1976, label: "1976" },
      { text: "Cae el precio del petróleo y la banca extranjera suspende préstamos", year: 1981, label: "1981" },
      { text: "López Portillo expropia los bancos privados", year: 1982, label: "1982" }
    ]
  },

  7: {
    type: "match",
    pairs: [
      { a: "Miguel de la Madrid", b: "Vendió o liquidó cerca de 500 empresas del Estado" },
      { a: "Carlos Salinas de Gortari", b: "Privatizó la banca y firmó el TLC" },
      { a: "Cuauhtémoc Cárdenas", b: "Candidato del Frente Democrático Nacional en 1988" },
      { a: "Manuel Clouthier", b: "Candidato del PAN en 1988" },
      { a: "Pronasol", b: "Programa de Solidaridad para los grupos más pobres" },
      { a: "Artículo 27 reformado", b: "Los ejidos se pueden vender" },
      { a: "EZLN", b: "Levantamiento armado de 1994" }
    ]
  },

  8: {
    type: "timeline",
    events: [
      { text: "Error de diciembre y crisis económica", year: 1994.9, label: "Diciembre de 1994" },
      { text: "El Fobaproa rescata a los bancos", year: 1995, label: "Gobierno de Zedillo" },
      { text: "Vicente Fox gana la presidencia", year: 2000, label: "2000" },
      { text: "Fox crea el programa Oportunidades", year: 2002, label: "Gobierno de Fox" },
      { text: "Elección cerrada de 2006: «voto por voto, casilla por casilla»", year: 2006.5, label: "Julio de 2006" },
      { text: "Calderón inicia la guerra contra el narco con el ejército", year: 2006.9, label: "Fin de 2006" },
      { text: "Mueren 49 niños en la Guardería ABC", year: 2009, label: "2009" }
    ]
  }
};
