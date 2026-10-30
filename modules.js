// Contenido de los módulos. Para agregar preguntas o eventos, edita este archivo.
// quiz: "answer" es el índice (0 a 3) de la opción correcta.
// game.events: "year" define el orden correcto en el minijuego.

const placeholder = (id, title, period) => ({
  id,
  title,
  period,
  lesson: ["Contenido en preparación."],
  game: null,
  quiz: []
});

const MODULES = [
  {
    id: 1,
    title: "El Porfiriato",
    period: "1876 – 1911",
    lesson: [
      "Porfirio Díaz gobernó México durante más de tres décadas, con una breve interrupción. Llegó al poder con el Plan de Tuxtepec en 1876 y se reeligió una y otra vez.",
      "Su gobierno impulsó la construcción de ferrocarriles y atrajo inversión extranjera, mientras la desigualdad social y la falta de libertades políticas crecían.",
      "En 1910, Francisco I. Madero llamó a la insurrección con el Plan de San Luis. Díaz renunció en mayo de 1911 y partió al exilio."
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
        q: "¿En qué año llegó Porfirio Díaz al poder con el Plan de Tuxtepec?",
        options: ["1857", "1876", "1910", "1917"],
        answer: 1,
        explain: "Díaz tomó el poder en 1876 con el Plan de Tuxtepec, aunque hubo una breve pausa entre 1880 y 1884."
      },
      {
        q: "¿Qué plan convocó a la insurrección contra Díaz en 1910?",
        options: ["Plan de Ayala", "Plan de San Luis", "Plan de Guadalupe", "Plan de Agua Prieta"],
        answer: 1,
        explain: "Francisco I. Madero lo proclamó en 1910 y desconoció la reelección de Díaz."
      },
      {
        q: "¿Qué tipo de inversión impulsó sobre todo la construcción de ferrocarriles durante el Porfiriato?",
        options: ["Inversión extranjera", "Donaciones religiosas", "Impuestos locales", "Ayuda de otros países latinoamericanos"],
        answer: 0,
        explain: "El capital extranjero financió buena parte de las vías férreas, pero el beneficio no llegó igual a toda la población."
      },
      {
        q: "¿En qué año renunció Porfirio Díaz y salió al exilio?",
        options: ["1910", "1911", "1917", "1920"],
        answer: 1,
        explain: "Díaz renunció en mayo de 1911, tras las derrotas militares de la insurrección maderista."
      },
      {
        q: "¿Qué documento liberal de 1857 fue base de los conflictos políticos del siglo XIX?",
        options: ["Constitución de 1857", "Constitución de 1917", "Plan de Ayala", "Tratado de Guadalupe Hidalgo"],
        answer: 0,
        explain: "La Constitución de 1857 estableció principios liberales que chocaron con los intereses conservadores y terminaron en la Guerra de Reforma."
      }
    ]
  },
  placeholder(2, "Revolución Mexicana", "1910 – 1920"),
  placeholder(3, "México posrevolucionario", "1920 – 1940"),
  placeholder(4, "Milagro mexicano", "1940 – 1970"),
  placeholder(5, "1968 y la guerra sucia", "1968 – 1982"),
  placeholder(6, "Crisis y reformas", "1982 – 2000"),
  placeholder(7, "Transición democrática", "2000 – 2012"),
  placeholder(8, "Reformas estructurales", "2012 – 2018")
];
