// Minijuegos de los módulos 2 a 8.
// type "timeline": el alumno toca los eventos del más antiguo al más reciente.
//   "year" define el orden; "label" (opcional) es lo que se muestra.
// type "match": el alumno une cada elemento de la izquierda con su par de la derecha.

const GAMES = {
  2: {
    type: "match",
    pairs: [
      { a: "Emiliano Zapata", b: "Plan de Ayala (1911)" },
      { a: "Venustiano Carranza", b: "Plan de Guadalupe (1913)" },
      { a: "Pascual Orozco", b: "Rebelión en Chihuahua (1912)" },
      { a: "Victoriano Huerta", b: "Decena Trágica (1913)" },
      { a: "Álvaro Obregón", b: "Batalla de Celaya contra Villa (1915)" },
      { a: "Francisco Villa", b: "Ataque a Columbus, Nuevo México (1916)" }
    ]
  },

  3: {
    type: "timeline",
    events: [
      { text: "Se crea la Secretaría de Educación Pública con José Vasconcelos", year: 1921, label: "1921" },
      { text: "Inicia la Guerra Cristera tras la aplicación de leyes anticlericales", year: 1926, label: "1926" },
      { text: "Calles funda el Partido Nacional Revolucionario", year: 1929, label: "1929" },
      { text: "Se funda la Confederación de Trabajadores de México (CTM)", year: 1936, label: "1936" },
      { text: "Cárdenas decreta la expropiación petrolera", year: 1938, label: "1938" }
    ]
  },

  4: {
    type: "match",
    pairs: [
      { a: "Manuel Ávila Camacho", b: "Creación del IMSS (1943)" },
      { a: "Programa Bracero", b: "Trabajadores temporales en Estados Unidos (1942–1964)" },
      { a: "Miguel Alemán", b: "Grandes obras de infraestructura, como presas" },
      { a: "Adolfo Ruiz Cortines", b: "Devaluación del peso a 12.50 por dólar (1954)" },
      { a: "Adolfo López Mateos", b: "Libros de texto gratuitos (1959)" }
    ]
  },

  5: {
    type: "timeline",
    events: [
      { text: "Inicia el movimiento tras la riña entre estudiantes y policías", year: 1968.07, label: "22 jul 1968" },
      { text: "El ejército ocupa la Ciudad Universitaria", year: 1968.09, label: "sep 1968" },
      { text: "Masacre en la Plaza de las Tres Culturas", year: 1968.10, label: "2 oct 1968" },
      { text: "Los Halcones atacan la marcha del Jueves de Corpus", year: 1971.06, label: "10 jun 1971" },
      { text: "Se crea la Fiscalía Especial (FEMOSPP) para investigar el pasado", year: 2001, label: "2001" }
    ]
  },

  6: {
    type: "match",
    pairs: [
      { a: "José López Portillo", b: "Nacionalización de la banca (1982)" },
      { a: "Miguel de la Madrid", b: "Ingreso de México al GATT (1986)" },
      { a: "Carlos Salinas de Gortari", b: "Reforma al artículo 27 que permite vender tierras ejidales (1992)" },
      { a: "Ernesto Zedillo", b: "Devaluación del \"error de diciembre\" (1994)" },
      { a: "Luis Donaldo Colosio", b: "Candidato del PRI asesinado en 1994" }
    ]
  },

  7: {
    type: "timeline",
    events: [
      { text: "Vicente Fox gana la presidencia y el PRI pierde después de 71 años", year: 2000, label: "2000" },
      { text: "Se publica la Ley Federal de Transparencia y Acceso a la Información", year: 2002, label: "2002" },
      { text: "Elección presidencial disputada entre Calderón y López Obrador", year: 2006, label: "2006" },
      { text: "Reforma electoral que limita la compra de propaganda por terceros", year: 2007, label: "2007–2008" },
      { text: "Enrique Peña Nieto regresa el PRI a la presidencia", year: 2012, label: "2012" }
    ]
  },

  8: {
    type: "match",
    pairs: [
      { a: "Pacto por México", b: "Acuerdo entre PAN, PRI y PRD (2012)" },
      { a: "Ayotzinapa", b: "Desaparición de 43 estudiantes en Iguala (2014)" },
      { a: "INE", b: "Sustituye al IFE (2014)" },
      { a: "Joaquín \"El Chapo\" Guzmán", b: "Fuga del penal del Altiplano (2015)" },
      { a: "Morena", b: "Partido que llevó a López Obrador a la presidencia (2018)" }
    ]
  }
};
