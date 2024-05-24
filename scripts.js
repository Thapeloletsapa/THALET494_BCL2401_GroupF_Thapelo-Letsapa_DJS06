// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//PART 1
// using forEach to log each name and each province to the console
console.log("-----PROVINCES-----");
provinces.forEach(province => console.log(province));
console.log("-------NAMES-------");
names.forEach(name => console.log(name));


// console log name along with matching province
console.log('---NAME (PROVINCE)---')
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//PART 2
// using map to create a new array of province names in all uppercase
// console log new array
console.log("---UPPERCASE PROVINCES---");
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// PART 3
// Creating a new array using map that contains the length of each name.
console.log("-----Lengths for each Name------")
const nameLengths = names.map(name => `${name} (${name.length})`);
console.log(nameLengths);


//PART 4 
//Sorting: Use sort to alphabetically sort the provinces.
//SORT() This method mutates the array and returns a reference to the same array
console.log("-----Provinces in alphabetical order-----")
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// PART 5
// Filtering Cape: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
console.log("----Provinces without CAPE----")
const provincesWithoutCape = provinces.filter( province =>!province.toLowerCase().includes("cape"));
console.log(`Remaining provinces: ${provincesWithoutCape.length}`);
console.log(provincesWithoutCape);

//PART 6
//Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'.
console.log("-----Boolean of whether or not name contains S-----");
//use map ()
const namesContainingLetterS = names.map(name => name.toLowerCase().includes("s"));
console.log(namesContainingLetterS);
//use some() 
console.log("Returns one boolean Value after using some() on the return")
const namesContainsLetterS = namesContainingLetterS.some(Boolean);
console.log(namesContainsLetterS);

//PART 7 
// Use reduce to transform the names array into an object mapping names to their respective provinces.
const nameAndProvinceObject = names.reduce((object,name,index) =>{
  object[name] = provinces[index];
  return object;
}, {});
console.log(nameAndProvinceObject);

//--------------------------------------------Advanced Exercises--------------------------------------------