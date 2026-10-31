// Imágenes de cada módulo, tomadas de las presentaciones del maestro.
// src: archivo local (carpeta images/ o fotos/); cap: pie de foto.
// Al tocar una imagen se abre en grande con su pie de foto.

const IMG_V = 13;

const IMAGES = {
  1: [
    { src: "images/regeneracion.jpg", cap: "Regeneración, el periódico de los magonistas, dirigido a los más pobres y explotados." },
    { src: "images/hijo-ahuizote.jpg", cap: "Caricatura política de El Hijo del Ahuizote, periódico opositor al régimen de Díaz." },
    { src: "images/creelman.jpg", cap: "La entrevista Díaz–Creelman (1908), en la que Díaz dijo que no se postularía en 1910." },
    { src: "fotos/pascual-orozco.jpg", cap: "Pascual Orozco, uno de los líderes de los levantamientos iniciales." },
    { src: "fotos/francisco-villa.jpg", cap: "Francisco Villa, jefe de la División del Norte." },
    { src: "fotos/emiliano-zapata.jpg", cap: "Emiliano Zapata, líder del zapatismo y del Plan de Ayala." }
  ],
  2: [
    { src: "fotos/victoriano-huerta.jpg", cap: "Victoriano Huerta, dictador entre 1913 y 1914." },
    { src: "fotos/venustiano-carranza.jpg", cap: "Venustiano Carranza, Primer Jefe del movimiento constitucionalista." },
    { src: "fotos/alvaro-obregon.jpg", cap: "Álvaro Obregón, jefe del ejército del Noroeste." },
    { src: "images/mapa-constitucionalismo.jpg", cap: "Mapa de los ejércitos contra Huerta: División del Norte (Villa), Ejército del Noroeste (Obregón) y Ejército del Noreste (Pablo González)." },
    { src: "images/convencion-aguascalientes.jpg", cap: "Delegados de la Convención de Aguascalientes (octubre de 1914)." },
    { src: "images/desfile-1914.jpg", cap: "Tropas desfilando en la Ciudad de México en diciembre de 1914." },
    { src: "images/villistas-zapatistas.jpg", cap: "Villistas y zapatistas en Palacio Nacional (diciembre de 1914)." }
  ],
  3: [
    { src: "fotos/jose-vasconcelos.jpg", cap: "José Vasconcelos, primer secretario de Educación Pública." },
    { src: "images/mural-dia-de-muertos.jpg", cap: "«Día de muertos», de Diego Rivera. Fresco en la Secretaría de Educación Pública." },
    { src: "images/mural-quema-judas.jpg", cap: "«Quema de los Judas», de Diego Rivera. Fresco en la Secretaría de Educación Pública." },
    { src: "images/mural-sangre-martires.jpg", cap: "«La sangre de los mártires», de Diego Rivera. Capilla de Chapingo." },
    { src: "images/mural-tierra-dormida.jpg", cap: "«La tierra dormida», de Diego Rivera. Mural en la capilla de Chapingo." },
    { src: "images/mural-mexico-antiguo.jpg", cap: "«El México antiguo», de Diego Rivera. Escalera de Palacio Nacional." },
    { src: "images/mural-conquista-1930.jpg", cap: "«De la conquista a 1930», de Diego Rivera. Fragmento del mural de Palacio Nacional." },
    { src: "images/mural-siqueiros.jpg", cap: "«Retrato actual de México», de David Alfaro Siqueiros. Fresco en Santa Bárbara, California." },
    { src: "images/pnr.jpg", cap: "Emblema del Partido Nacional Revolucionario (PNR), fundado en 1929." }
  ],
  4: [
    { src: "fotos/lazaro-cardenas.jpg", cap: "Lázaro Cárdenas, presidente de 1934 a 1940." },
    { src: "images/ferronales-1937.jpg", cap: "Revista Ferronales: «La expropiación de los Ferrocarriles Nacionales de México» (1937)." },
    { src: "images/edificio-ferrocarriles.jpg", cap: "Edificio de los Ferrocarriles Nacionales, en la Ciudad de México." },
    { src: "images/petroleo-pertenece.jpg", cap: "«¡El petróleo pertenece a México!»: manifestación por la expropiación petrolera." },
    { src: "images/manifestacion-1938.jpg", cap: "Multitud apoyando la expropiación petrolera de 1938." },
    { src: "images/pemex-antiguo.jpg", cap: "Gasolinera de Pemex, la empresa creada tras la expropiación." },
    { src: "images/prm-1938.jpg", cap: "30 de marzo de 1938: se funda el Partido de la Revolución Mexicana (PRM)." },
    { src: "images/accion-nacional-1939.jpg", cap: "Fundación del Partido Acción Nacional (1939)." },
    { src: "images/ipn.jpg", cap: "Instituto Politécnico Nacional, creado durante el cardenismo." }
  ],
  5: [
    { src: "images/guerra-fria.jpg", cap: "Caricatura de la Guerra Fría: Estados Unidos y la URSS." },
    { src: "images/industria-no-duradera.jpg", cap: "Industria de bienes de consumo no duradero, base del crecimiento de los años cuarenta y cincuenta." },
    { src: "images/obras-urbanas.jpg", cap: "Obras de urbanización en la Ciudad de México durante el milagro mexicano." },
    { src: "images/tlatelolco-unidad.jpg", cap: "Unidad habitacional de Tlatelolco." },
    { src: "images/industria-automotriz.jpg", cap: "Línea de ensamble: el desarrollo estabilizador fomentó industrias de consumo duradero, como la automotriz." },
    { src: "images/imss.jpg", cap: "Instituto Mexicano del Seguro Social (IMSS), creado en 1943." },
    { src: "images/charrismo.jpg", cap: "Caricatura sobre el charrismo sindical." },
    { src: "images/voto-mujer.jpg", cap: "Mujeres votando: en 1953 se reconoció el voto de la mujer." },
    { src: "images/issste.jpg", cap: "Edificio del ISSSTE, creado en el gobierno de López Mateos." },
    { src: "fotos/adolfo-lopez-mateos.jpg", cap: "Adolfo López Mateos, presidente de 1958 a 1964." }
  ],
  6: [
    { src: "fotos/gustavo-diaz-ordaz.jpg", cap: "Gustavo Díaz Ordaz, presidente de 1964 a 1970." },
    { src: "images/mexico-68.jpg", cap: "Logotipo de los Juegos Olímpicos de México 68." },
    { src: "images/olimpiadas-inauguracion.jpg", cap: "Estadio durante los Juegos Olímpicos de 1968." },
    { src: "images/palacio-deportes.jpg", cap: "Palacio de los Deportes, construido para los Juegos Olímpicos." },
    { src: "images/auditorio-nacional.jpg", cap: "Auditorio Nacional." },
    { src: "images/mundial-70.jpg", cap: "Cartel del Campeonato Mundial de Futbol de México 1970." },
    { src: "fotos/luis-echeverria.jpg", cap: "Luis Echeverría, presidente de 1970 a 1976." },
    { src: "fotos/jose-lopez-portillo.jpg", cap: "José López Portillo, presidente de 1976 a 1982." }
  ],
  7: [
    { src: "images/muro-berlin.jpg", cap: "Caída del Muro de Berlín, 1989." },
    { src: "images/urss.jpg", cap: "El fin de la URSS: la Guerra Fría terminó en 1991." },
    { src: "fotos/miguel-de-la-madrid.jpg", cap: "Miguel de la Madrid, presidente de 1982 a 1988." },
    { src: "images/fundidora.jpg", cap: "Fundidora Monterrey, una de las empresas estatales liquidadas." },
    { src: "images/pib-sexenios.jpg", cap: "Crecimiento económico por sexenio: con De la Madrid casi no hubo crecimiento." },
    { src: "images/eleccion-1988.jpg", cap: "Elección presidencial de 1988: denuncias por anomalías en el recuento de votos." },
    { src: "images/prd.jpg", cap: "Emblema del Partido de la Revolución Democrática (PRD), surgido en 1989." },
    { src: "fotos/carlos-salinas-de-gortari.jpg", cap: "Carlos Salinas de Gortari, presidente de 1988 a 1994." },
    { src: "images/privatizaciones.jpg", cap: "Algunas de las empresas privatizadas durante el sexenio de Salinas." },
    { src: "images/solidaridad.jpg", cap: "Programa Nacional de Solidaridad (Pronasol)." },
    { src: "images/tlc.jpg", cap: "Firma del Tratado de Libre Comercio, que entró en vigor el 1 de enero de 1994." },
    { src: "images/vaticano.jpg", cap: "Con Salinas se reconoció a la Iglesia y se establecieron relaciones con el Vaticano." },
    { src: "images/slim.jpg", cap: "Carlos Slim, declarado el hombre más rico del mundo en 2007." },
    { src: "images/ezln.jpg", cap: "Levantamiento zapatista de 1994 (EZLN)." },
    { src: "images/ezln-ninos.jpg", cap: "Comunidad zapatista." }
  ],
  8: [
    { src: "fotos/ernesto-zedillo.jpg", cap: "Ernesto Zedillo, presidente de 1994 a 2000." },
    { src: "images/fobaproa-jornada.jpg", cap: "Portada de La Jornada sobre el Fobaproa (diciembre de 1998)." },
    { src: "images/fobaproa-caricatura.jpg", cap: "Caricatura sobre el rescate bancario del Fobaproa." },
    { src: "images/progresa.jpg", cap: "Progresa: Programa de Educación, Salud y Alimentación." },
    { src: "fotos/vicente-fox.jpg", cap: "Vicente Fox, presidente de 2000 a 2006." },
    { src: "images/remesas-informal.jpg", cap: "Economía informal: cientos de miles de mexicanos se incorporaron a ella durante el sexenio de Fox." },
    { src: "images/oportunidades.jpg", cap: "Programa Oportunidades, creado por Fox con base en Progresa." },
    { src: "images/voto-por-voto.jpg", cap: "«Voto por voto, casilla por casilla»: protesta tras la elección de 2006." },
    { src: "images/marcha-2006.jpg", cap: "Marcha de protesta por el resultado de la elección de 2006." },
    { src: "images/guerra-narco.jpg", cap: "Operativo durante la guerra contra el narco de Calderón." },
    { src: "images/guarderia-abc.jpg", cap: "Memorial de los 49 niños que murieron en la Guardería ABC, en Sonora." },
    { src: "images/estela-de-luz.jpg", cap: "La «Estela de Luz», monumento de 104 metros de altura." }
  ]
};

// Galería horizontal: se desliza con el dedo; al tocar una imagen se abre en grande.
function imageHTML(id) {
  const list = IMAGES[id];
  if (!list || !list.length) return "";
  return `<div class="gallery">
    ${list.map(im => `<figure class="fig">
      <img src="${im.src}?v=${IMG_V}" alt="" loading="lazy" onerror="this.closest('figure').remove()">
      <figcaption>${im.cap}</figcaption>
    </figure>`).join("")}
  </div>
  <p class="muted gallery-hint">Desliza para ver más imágenes de las presentaciones. Toca una para verla en grande.</p>`;
}
