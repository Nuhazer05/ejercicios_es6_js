// 4.1 - Valores mayores que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages1.filter(age => age > 18);
console.log(adults); 
// Resultado: [22, 24, 55, 65, 21, 90]

// 4.2 - Valores pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter(age => age % 2 === 0);
console.log(evenAges); 
// Resultado: [22, 14, 24, 12, 90]

// 4.3 - Streamers que juegan 'League of Legends'
const streamers1 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers1.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers); 
// Resultado: [{name: 'Ibai', ...}, {name: 'Reven', ...}]

// 4.4 - Streamers con 'u' en su nombre
const streamers2 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const nameWithU = streamers2.filter(streamer => streamer.name.includes('u'));
console.log(nameWithU); 
// Resultado: [{name: 'Rubius', ...}, {name: 'AuronPlay', ...}]

// 4.5 - Streamers con 'Legends' y mayúsculas si age > 35
const streamers3 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const legendsStreamers = streamers3
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()};
    }
    return streamer;
  });

console.log(legendsStreamers);
/* Resultado:
[
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS'}
]
*/
