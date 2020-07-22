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

export const randomSort = (arr) => {
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

export const delay = ms => new Promise ((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms)
})