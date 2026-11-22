// Grupos de cada categoría, en el orden en que se muestran.
const GRUPOS = {
  "League of Legends": ["Subiendo a Master", "Subiendo a Challenger", "Videos sueltos"]
};

// AQUÍ AGREGAS TUS VIDEOS. Copia una línea, pégala debajo y cambia los datos.
// portada: ruta de la imagen (carpeta/archivo). Déjalo "" para usar la imagen por defecto.
const VIDEOS = [
  // --- League of Legends · Subiendo a Master ---
  { titulo: "Día 1", categoria: "League of Legends", serie: "Subiendo a Master", portada: "SubiendoaMaster/dia 1 master.jpg", link: "https://www.tiktok.com/@jumpiteodia/video/7687706539209084168" },
  { titulo: "Día 2", categoria: "League of Legends", serie: "Subiendo a Master", portada: "SubiendoaMaster/DIA_2.png", link: "https://www.tiktok.com/@jumpiteodia/video/7699721884463680786" },
  { titulo: "Día 3", categoria: "League of Legends", serie: "Subiendo a Master", portada: "SubiendoaMaster/DIA_3.png", link: "https://www.tiktok.com/@jumpiteodia/video/7699720904338640134" },

  // --- League of Legends · Subiendo a Challenger ---
  { titulo: "Día 1", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/DIA1.png", link: "https://www.tiktok.com/@jumpiteodia/video/7613143309447384340" },
  { titulo: "Día 2", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/dia2.png", link: "https://www.tiktok.com/@jumpiteodia/video/7613505839625735444" },
  { titulo: "Día 3", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/dia3.png", link: "https://www.tiktok.com/@jumpiteodia/video/7613903672510106901" },
  { titulo: "Día 4", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/dia4.png", link: "https://www.tiktok.com/@jumpiteodia/video/7614294300200815892" },
  { titulo: "Día 5", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/dia5.png", link: "https://www.tiktok.com/@jumpiteodia/video/7618337524355960084" },
  { titulo: "Día 6", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/DIA6.png", link: "https://www.tiktok.com/@jumpiteodia/video/7619431050292251924" },
  { titulo: "Día 7", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/DIA7.png", link: "https://www.tiktok.com/@jumpiteodia/video/7623456159302880520" },
  { titulo: "Día 8", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/dia8.png", link: "https://www.tiktok.com/@jumpiteodia/video/7628683894451129607" },
  { titulo: "Día 9", categoria: "League of Legends", serie: "Subiendo a Challenger", portada: "SubiendoaChallenger/DIA9.png", link: "https://www.tiktok.com/@jumpiteodia/video/7639102120808942866" },

  // --- League of Legends · videos sueltos ---
  { titulo: "Los tips que me llevaron a Maestro", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7609090241072237842" },
  { titulo: "Jugar con amigos y jugar solo", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7643123854549896469" },
  { titulo: "Master vs Challenger", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7621047455299144968" },
  { titulo: "LoL 1 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7603106764317297941" },
  { titulo: "LoL 2 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7604289222358437141" },
  { titulo: "LoL 3 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7605424635135528193" },
  { titulo: "LoL 4 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7606144435042274577" },
  { titulo: "LoL 5 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7606782785746914576" },
  { titulo: "LoL 6 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7607728131448769810" },
  { titulo: "LoL 7 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7610300961239633173" },
  { titulo: "LoL 8 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7610673096411974932" },
  { titulo: "LoL 9 (cambia el título)", categoria: "League of Legends", portada: "", link: "https://www.tiktok.com/@jumpiteodia/video/7628467083323444498" }
];