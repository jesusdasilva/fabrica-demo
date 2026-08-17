export function capitalize(texto: string): string {
  if (!texto) return texto;
  return texto
    .split(' ')
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}
