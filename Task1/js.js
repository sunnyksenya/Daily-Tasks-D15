// выведите массив на страницу так, как показано ниже:
// 0 - 2
// 1 - 3
// выводите только те элементы, что больше 5-ти

var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
console.log(mas);
for (var i=0; i<mas.length; i++) {
  if (mas[i]>5) {
    document.getElementById('out').innerHTML += i + ' - ' + mas[i] + '<br>';
  }
}

// Дан массив. Выведите его на страницу в формате:
// k1 *** 17w4

var arr = {
	"k1" : "17w4",
	"k2" : "1sfsg7",
	"k3" : "17nd",
	"k16" : "1237",
	"k14" : "1w37",
	"3k1" : "1wrw7"
}
for(var key in arr) {
  document.getElementById('out1').innerHTML += key + ' *** ' + arr[key] + '<br>';
  console.log(key,arr[key]);
}
// Дан массив. Выведите его в консоль
// Преобразуйте его в строку и сохраните в LocalStorage под именем 'mass'
// Считайте его из localStorage в переменнуд primer
// Преобразуйте primer из строки в массив
// Выведите в консоль
arr = JSON.stringify(arr);
localStorage.setItem('mass', arr);
var primer = localStorage.getItem('mass');
console.log(primer);
var a = JSON.parse(primer);
console.log(a);
