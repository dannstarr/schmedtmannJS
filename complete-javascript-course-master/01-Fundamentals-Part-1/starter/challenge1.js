// const marksWeightKg = 78;
// const marksHeightM = 1.69;

// const johnsWeightKg = 102;
// const johnsHeightM = 1.9;

// function findBmi(weight, height) {
//   const bmi = Math.floor(weight / height ** 2);
//   return bmi;
// }

// const marksBmi = findBmi(marksWeightKg, marksHeightM);
// console.log(marksBmi);

// const johnsBmi = findBmi(johnsWeightKg, johnsHeightM);
// console.log(johnsBmi);

// const markHigherBMI = marksBmi > johnsBmi;
// console.log(markHigherBMI);

// const johnHigherBMI = marksBmi < johnsBmi;
// console.log(johnHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark has a higher BMI (${marksBmi}) than John, (${johnsBmi})`);
// } else if (johnHigherBMI) {
//   console.log(`John's BMI (${johnsBmi}) is higher than Mark's (${marksBmi})`);
// } else {
//   console.log(`Mark and John both have the same BMI`);
// }

// const inputYear = "1991";
// let inputYearNum = Number(inputYear);
// console.log(inputYear);
// console.log(inputYearNum);

const john = {
  firstName: `John`,
  lastName: `Smith`,
  weight: 92,
  height: 1.95,
  calcBmi: function (weight, height) {
    weight = this.weight;
    height = this.height;
    this.BMI = weight / height ** 2;
    return this.BMI;
  },
};

console.log(john.calcBmi());

const mark = {
  firstName: `Mark`,
  lastName: `Miller`,
  weight: 78,
  height: 1.69,
  calcBmi: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
mark.calcBmi();

console.log(mark.BMI);
console.log(mark.BMI);
