export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}



export function getClassMap(classes: string | undefined) {
  const map = {};
  if (classes) {
    classes
      .split(' ')
      .filter(c => c.trim() !== '')
      .forEach(c => map[c] = true);
  }
  return map;
}