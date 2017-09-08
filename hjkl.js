
// function binarySearch(data, target, start, end) {

// console.log("data=["+data.slice(start,end+1)+"] target="+target+" start="+start+" end="+end);

// if (end < 1) {
// return data[0];
// }
// Находим среднее значение
// const middle = Math.floor(start + (end - start)/2);
// Если содержимое элемента с индексом, равным среднему значению оказалось равно target
// if (target === data[middle]) {
// возвращаем содержимое
// return data[middle];
// }
// Если осталось два элемента: на который указывает start и на который указывает end
// if (end - 1 === start) {
// Возвращаем наиболее близкое значение к target
// if (Math.abs(data[start] - target) > Math.abs(data[end] - target)) {
// return data[end];
// } else {
// return data[start];
// }
// }

// if (target > data[middle]) {
// return binarySearch(data,target,middle,end);
// }
// if (target < data[middle]) {
// return binarySearch(data,target,start,middle);
// }
// }

// var data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// console.log("result=" + binarySearch(data, 2.5, 0, data.length-1));

// Comment and Uncomment This - C-x /

// C-a - to start of line
// C-e - to end of line

// Alt+Tab


// console.log("a".charCodeAt());

var array =[
  ['a','._'],
  ['b','1'],
  ['c','2'],
  ['d','3'],
  ['e','4'],
  ['f','5'],
  ['g','6'],
  ['h','7'],
  ['i','8'],
  ['j','9'],
  ['k','a'],
  ['l','b'],
  ['m','__'],
  ['n','_.'],
  ['o','d'],
  ['p','e'],
  ['q','f'],
  ['r','g'],
  ['s','h'],
  ['t','_'],
  ['u','j'],
  ['v','k'],
  ['w','l'],
  ['x','m'],

  ['y','n'],
  ['z','o']
];



function binary_search (data, target, start, end) {
  console.log("target="+target);
  console.log("start="+start);
  console.log("end="+end);

  if (end < data[0]) {
    console.log("return 1");
    return false;
  }

  // Находим среднее значение
  const middle = Math.floor(start + (end - start) / 2);
  console.log(middle);
  console.log(data[middle][0]);
  console.log(target);
  // Если содержимое элемента с индексом, равным среднему значению оказалось равно target

  if (target === data[middle][0]) {
    // возвращаем соответствие
    console.log("return found");
    return data[middle][1];
  }

  // Если осталось два элемента: на который указывает start и на который указывает end
  if (data[end] - 1 === data[start]) {
    if (target === data[end][0]) {
      // возвращаем соответствие
      console.log("return from found on end");
      return data[end][1];
    }
    if (target === data[start][0]) {
      // возвращаем соответствие
      console.log("return from found on start");
      return data[start][1];
    }
    console.log("return 2");
    return false;
  }

  if (target.charCodeAt() > data[middle][0].charCodeAt()) {
    console.log("we need to go deeper! >");
    var pre_result = binary_search(data, target, middle, end);
    console.log("return from found on >");
    return pre_result;
  }

  if (target.charCodeAt() < data[middle][0].charCodeAt()) {
    console.log("we need to go deeper! <");
    var pre_result = binary_search(data, target, start, middle);
    console.log("return from found on <");
    return pre_result;
  }
  console.log("return 3");
  return false;
}

function helper () {
  var getText = document.getElementById('translate');
  console.log("getText="+document.getElementById('translate'));
  var param = getText.value;
  console.log("param="+param);
  document.getElementById('Translate_ready').value = translate(param);

}

function translate (param) {
 return param.split('').map(function(symbol) {
    var result_value = binary_search(array, symbol, 0, array.length-1);
    if (false === result_value) {
      alert("something wrong");
    }
    return result_value;
  });
}
// var return_value = translate('abc');
// console.log("translate result is " + return_value);
