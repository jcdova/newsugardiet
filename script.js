// script.js
const breakfastOptions = [
  'Scrambled eggs with avocado',
  'Frittata with spinach and mushrooms',
  'Greek yogurt with chia seeds and berries',
  'Baked eggs with tomatoes and herbs',
  'Smoothie with almond milk, spinach, and flaxseeds',
  'Oatmeal with nuts and berries',
  'Omelette with cheese and bell peppers',
  'Cottage cheese with almonds and strawberries',
  'Poached eggs on whole-grain toast',
  'Green smoothie with banana and almond butter',
  'Pancakes with almond flour and blueberries',
  'Egg muffins with spinach and feta',
  'Greek yogurt with flaxseeds and pumpkin',
  'Boiled eggs with avocado and salsa',
  'Chia pudding with almond milk and berries',
  'Turkey and egg breakfast wrap',
  'Apple slices with almond butter and cinnamon',
  'Fried eggs with spinach and tomatoes',
  'Buckwheat porridge with nuts and seeds',
  'Grilled mushrooms with eggs and avocado',
];

const lunchOptions = [
  'Grilled chicken Caesar salad',
  'Tuna salad with avocado and cherry tomatoes',
  'Spinach and feta salad with olive oil',
  'Chicken breast with roasted sweet potatoes',
  'Baked salmon with green beans',
  'Shrimp and quinoa salad',
  'Turkey lettuce wraps with avocado',
  'Grilled zucchini and chicken skewers',
  'Roasted cauliflower with chickpeas and tahini',
  'Greek salad with chicken and olives',
  'Beef and broccoli stir-fry',
  'Grilled turkey with sautéed spinach',
  'Tofu salad with cucumber and sesame dressing',
  'Chicken breast with sautéed mushrooms',
  'Cabbage slaw with grilled shrimp',
  'Salmon salad with arugula and lemon dressing',
  'Lentil salad with roasted vegetables',
  'Chicken breast with avocado and salsa',
  'Grilled steak salad with mixed greens',
  'Roasted vegetables with quinoa and feta',
];

const dinnerOptions = [
  'Grilled salmon with asparagus',
  'Chicken stir-fry with broccoli and bell peppers',
  'Baked cod with roasted Brussels sprouts',
  'Beef steak with green beans',
  'Cauliflower rice with chicken and veggies',
  'Grilled shrimp with zucchini noodles',
  'Chicken breast with mashed cauliflower',
  'Baked turkey with roasted carrots',
  'Garlic shrimp with sautéed spinach',
  'Pork chops with grilled vegetables',
  'Roasted chicken with rosemary and garlic',
  'Baked tilapia with steamed green beans',
  'Turkey meatballs with zucchini noodles',
  'Grilled steak with roasted asparagus',
  'Chicken breast with avocado salsa',
  'Eggplant lasagna with ricotta',
  'Salmon with roasted sweet potatoes',
  'Grilled chicken with stir-fried vegetables',
  'Zucchini noodles with pesto and chicken',
  'Baked chicken with cauliflower mash',
];

const mealTypeEl = document.getElementById('mealType');
const mealTextEl = document.getElementById('mealText');
const breakfastBtn = document.getElementById('breakfastBtn');
const lunchBtn = document.getElementById('lunchBtn');
const dinnerBtn = document.getElementById('dinnerBtn');

function getRandomMeal(mealArray) {
  const index = Math.floor(Math.random() * mealArray.length);
  return mealArray[index];
}

function showMeal(type, array) {
  const meal = getRandomMeal(array);
  mealTypeEl.textContent = type;
  mealTextEl.textContent = meal;
  animateMeal();
}

function animateMeal() {
  mealTextEl.style.opacity = 0;
  setTimeout(() => {
    mealTextEl.style.opacity = 1;
  }, 150);
}

breakfastBtn.addEventListener('click', () =>
  showMeal('Breakfast', breakfastOptions)
);
lunchBtn.addEventListener('click', () => showMeal('Lunch', lunchOptions));
dinnerBtn.addEventListener('click', () => showMeal('Dinner', dinnerOptions));
