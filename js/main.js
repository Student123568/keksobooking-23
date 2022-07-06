// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
//Функция, получающая случайное дробное число в диапазоне [0, ∞), где digits - кол-во знаков после запятой

function getRandomPositiveFloat (a, b, digits = 1) {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}


function getRandomPositiveInteger (a, b) {
  //функция, получающая целое положительное число из диапазона
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


const TITLES = 'Новое объявление';
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00',
                 '13:00',
                 '14:00'];
const CHECKOUT = ['12:00',
                  '13:00',
                  '14:00'];

const FEATURES = ['wifi',
                  'dishwasher',
                  'parking',
                  'washer',
                  'elevator',
                  'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
                'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
                'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];



function getNumber(x) {

    if (x < 10) {
        x = '0' + x;
      } else {
        x;
        }
    return x;
    };

function getArray(arr) {
  const maxLength = arr.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = arr[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;

  function getRandomPositiveInteger(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

let getRandomElementArray = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)]
    }; //функция, возвращающая рандомный индекс входного массива;




function createAdvertisement()  {

  return {
    author: {
      avatar: 'img/avatars/user{{xx}}.png'
    },
    offer: {
      title: TITLES,
      address: '{{location.lat}}, {{location.lng}}',
      price: getRandomPositiveInteger(0, 10000),
      type:  getRandomElementArray(TYPE),
      rooms: getRandomPositiveInteger(0, 8),
      quests: getRandomPositiveInteger(0, 7),
      checkin: getRandomElementArray(CHECKIN),
      checkout: getRandomElementArray(CHECKOUT),
      features: getArray(FEATURES),
      description: 'Большой двухместный номер',
      photos: getArray(PHOTOS)
    },
    location: {
      lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
      lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
    }
  }
}


const similarAdvertisement = new Array(3).fill(null).map(()=>
  createAdvertisement());


// eslint-disable-next-line no-console
console.log(similarAdvertisement);



