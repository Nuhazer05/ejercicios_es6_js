// 2.1 - Copia de un array
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy); // [32, 54, 21, 64, 75, 43]


// 2.2 - Copia de un objeto
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toyCopy); // {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}


// 2.3 - Combinar arrays
const pointsLis2 = [54, 87, 99, 65, 32];
const combinedPoints = [...pointsList, ...pointsLis2];
console.log(combinedPoints); // [32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]


// 2.4 - Fusionar objetos
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = {...toy, ...toyUpdate};
console.log(mergedToy); 
// {
//   name: 'Bus laiyiar',
//   date: '20-30-1995',
//   color: 'multicolor',
//   lights: 'rgb',
//   power: ['Volar like a dragon', 'MoonWalk']
// }


// 2.5 - Copiar array eliminando posición 2
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopyWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopyWithoutIndex2); // ['rojo', 'azul', 'verde', 'naranja']
console.log(colors); // El array original sigue igual: ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
