let weight = 5.6;
let recommendation = '';
if (weight < 4) {
  recommendation = 'Пора перекусить'
}
if (weight >= 4 && weight <= 5.5) {
  recommendation = 'Вес в норме'
}
if (weight > 5.5) {
  recommendation = 'Пора на тренировку'
}
console.log(recommendation);