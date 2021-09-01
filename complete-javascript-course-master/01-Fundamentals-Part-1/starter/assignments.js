const country = "UK";
const continent = "Europe";
let populationOfUk = 66000000;
const isIsland = true;
const language = "English";
let populationOfFinland = 6000000;
let halfUkPopulation = populationOfUk / 2;
populationOfUk++;

let isUkMoreThanFinland = populationOfUk > populationOfFinland;
let averagePopulationOfACountry = 33000000;
let isUkPopulationLessThanAverage =
  populationOfUk < averagePopulationOfACountry;

const description = `The ${country} is in ${continent} and it's ${populationOfUk} citizens speak ${language}`;

console.log(country, continent, populationOfUk);
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
console.log(description);

if (populationOfUk > averagePopulationOfACountry) {
  console.log(
    `The UK's population is ${
      populationOfUk - averagePopulationOfACountry
    } above average`
  );
} else {
  console.log(
    `The UK's population is ${
      averagePopulationOfACountry - populationOfUk
    } below average`
  );
}
