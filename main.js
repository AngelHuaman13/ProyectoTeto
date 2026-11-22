const CARPETA_PORTADAS = 'SubiendoaMaster/';      // carpeta de tus portadas
const PORTADA_POR_DEFECTO = 'Logo/Video.webp';    // imagen para videos sin portada

const lista = document.getElementById('lista');
const contCategorias = document.getElementById('categorias');
const buscador = document.getElementById('buscador');
const vacio = document.getElementById('vacio');
let categoriaActual = 'Todos';

// Si un video usa una categoría o serie que no está en GRUPOS, se agrega sola
VIDEOS.forEach(v => {
  const g = v.serie || 'Videos sueltos';
  if (!GRUPOS[v.categoria]) GRUPOS[v.categoria] = [];
  if (!GRUPOS[v.categoria].includes(g)) GRUPOS[v.categoria].push(g);
});

function crearCard(v) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = v.link; a.target = '_blank'; a.rel = 'noopener';
  const img = document.createElement('img');
  img.src = v.portada ? encodeURI(v.portada) : PORTADA_POR_DEFECTO;
  img.alt = 'Portada de ' + v.titulo; img.loading = 'lazy';
  img.onerror = () => a.classList.add('sin-portada');
  const info = document.createElement('div'); info.className = 'info';
  const h = document.createElement('h3'); h.textContent = v.titulo;
  info.append(h); a.append(img, info);
  return a;
}

function mostrar() {
  const q = buscador.value.trim().toLowerCase();
  const categorias = categoriaActual === 'Todos' ? Object.keys(GRUPOS) : [categoriaActual];
  const bloques = [];

  categorias.forEach(cat => {
    GRUPOS[cat].forEach(grupo => {
      const videos = VIDEOS.filter(v =>
        v.categoria === cat &&
        (v.serie || 'Videos sueltos') === grupo &&
        [v.titulo, cat, grupo].join(' ').toLowerCase().includes(q));

      // Con búsqueda activa, los grupos sin resultados no se muestran
      if (q && videos.length === 0) return;

      const sec = document.createElement('div'); sec.className = 'grupo';
      const t = document.createElement('h3'); t.className = 'grupo-titulo';
      t.textContent = categoriaActual === 'Todos' ? cat + ' · ' + grupo : grupo;
      sec.append(t);

      if (videos.length === 0) {
        const p = document.createElement('p'); p.className = 'proximamente';
        p.textContent = 'Próximamente';
        sec.append(p);
      } else {
        const grid = document.createElement('div'); grid.className = 'lista';
        grid.append(...videos.map(crearCard));
        sec.append(grid);
      }
      bloques.push(sec);
    });
  });

  lista.replaceChildren(...bloques);
  vacio.hidden = bloques.length > 0;
}

function dibujarCategorias() {
  const nombres = ['Todos', ...Object.keys(GRUPOS)];
  contCategorias.replaceChildren(...nombres.map(nombre => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn' + (nombre === categoriaActual ? ' activo' : '');
    b.textContent = nombre;
    b.onclick = () => { categoriaActual = nombre; dibujarCategorias(); mostrar(); };
    return b;
  }));
}

buscador.addEventListener('input', mostrar);
dibujarCategorias();
mostrar();