export const getRandomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const getRandomArrayElement = (arr) => {
  // возвращает случайный элемент массива
  let rand = Math.random() * (arr.length);
  rand = Math.floor(rand);
  return arr[rand];
}

export const log = (...args) => {
  // выводит в консоль аргументы
  args.map(elem => console.log(elem));
}