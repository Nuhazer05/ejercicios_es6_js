// 3.1 - Array con nombres usando .map()
const users1 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const userNames = users1.map(user => user.name);
console.log(userNames); 
// Resultado: ['Abel', 'Julia', 'Pedro', 'Amanda']


// 3.2 - Cambiar nombres que empiecen por 'A' a 'Anacleto'
const users2 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const modifiedNames = users2.map(user => {
  return user.name.startsWith('A') ? 'Anacleto' : user.name;
});
console.log(modifiedNames); 
// Resultado: ['Anacleto', 'Julia', 'Pedro', 'Anacleto']


// 3.3 - Añadir ' (Visitado)' si isVisited = true
const cities = [
  {isVisited: true, name: 'Tokyo'}, 
  {isVisited: false, name: 'Madagascar'},
  {isVisited: true, name: 'Amsterdam'}, 
  {isVisited: false, name: 'Seul'}
];

const visitedCities = cities.map(city => {
  return city.isVisited ? `${city.name} (Visitado)` : city.name;
});
console.log(visitedCities); 
// Resultado: ['Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul']
