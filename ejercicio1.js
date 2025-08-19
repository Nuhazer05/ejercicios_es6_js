// 1.1 - Object destructuring
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
};

// Destructuring del objeto
const { title, gender, year } = game;
console.log(title);   // 'The last us 2'
console.log(gender);  // ['action', 'zombie', 'survival']
console.log(year);    // 2020


// 1.2 - Array destructuring
const fruits = ['Banana', 'Strawberry', 'Orange'];

// Destructuring del array
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // 'Banana'
console.log(fruit2); // 'Strawberry'
console.log(fruit3); // 'Orange'


// 1.3 - Destructuring de objeto devuelto por función
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' };
};

// Destructuring del objeto retornado
const { name, race } = animalFunction();
console.log(name); // 'Bengal Tiger'
console.log(race); // 'Tiger'


// 1.4 - Destructuring de objeto y array dentro del objeto
const car = {
  name: 'Mazda 6',
  itv: [2015, 2011, 2020]
};

// Destructuring del objeto
const { name: carName, itv } = car;
console.log(carName); // 'Mazda 6'

// Destructuring del array dentro del objeto
const [year1, year2, year3] = itv;
console.log(year1); // 2015
console.log(year2); // 2011
console.log(year3); // 2020
