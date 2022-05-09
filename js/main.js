// Функция, возвращающая случайное целое число из диапазон от/до
//Результат: целое число из диапазона "от...до"
function getRandomInt(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  if(min >= 0 && max>min){
    return Math.floor(Math.random(max-min) + min)
  } else {
    console.log('Введеный диапазон не удавлетворяет условию')
  }

}


// Функция, возвращающая случайное  число с плавающей точкой из диапазон от/до
//Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"

function getRandomArbitrary(min, max) {
  if( min >= 0 && max > min){
    return Math.random() * (max-min) + min;
  } else {
    console.log('Введеный диапазон не удавлетворяет условию')
  }
}


