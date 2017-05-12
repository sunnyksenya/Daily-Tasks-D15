var but = document.querySelector('button');
but.onclick = function () {
  var val1 = document.querySelector('#val1').value;
  var val2 = document.querySelector('#val2').value;
  var mul = document.querySelector('#mul');
  var result;
  if (mul.checked) {
    result = val1*val2;
  } else {
    result = val1/val2;
  }
  console.log(result);
  document.querySelector('#out').innerHTML = result;
}
