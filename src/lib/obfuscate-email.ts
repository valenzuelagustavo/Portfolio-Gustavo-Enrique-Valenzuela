/*
  Ofuscación del email contra scraping automático.

  La inmensa mayoría de los bots/extensiones que "cosechan" emails de una
  página no ejecutan JavaScript de verdad: leen el HTML (o el JS) servido y
  buscan un patrón tipo usuario@dominio, ya sea en texto visible o en un
  href="mailto:...". Si ese patrón nunca aparece tal cual en lo que el
  servidor entrega, ese scraper no encuentra nada.

  Por eso acá NO guardamos el email en texto plano en ningún componente:
  encode() lo transforma (XOR + hex) en build time, y ese string ofuscado es
  lo único que termina en el HTML estático. El email real solo existe una vez
  que decode() corre en el navegador de una persona real (ver el <script> de
  BaseLayout.astro, que arma el href="mailto:" y el texto visible recién ahí).

  Importante — esto NO es cifrado ni seguridad real: la clave viaja en el
  mismo JS que se manda al navegador, así que cualquiera que lea el código
  fuente puede decodificarlo a mano en dos líneas. Lo que sí consigue es que
  ya no haya ningún string con forma de email en el HTML/JS servido, que es
  exactamente lo que buscan los scrapers automáticos (la gran mayoría de las
  extensiones "email grabber" funcionan así: regex sobre el DOM/HTML, sin
  ejecutar ni entender el JS de la página).
*/
const KEY = 'k7q3';

export function encodeEmail(text: string): string {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i) ^ KEY.charCodeAt(i % KEY.length);
    out += code.toString(16).padStart(2, '0');
  }
  return out;
}

export function decodeEmail(hex: string): string {
  let out = '';
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    out += String.fromCharCode(byte ^ KEY.charCodeAt(i / 2 % KEY.length));
  }
  return out;
}
