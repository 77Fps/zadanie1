var valueField = document.querySelector('#value');
var valueErrorBox = document.querySelector('#value-error');
var dirField = document.querySelector('#dir');
var resultBox = document.querySelector('#result');

function przelicz() {
   var value = valueField.value;
   var dir = dirField.value;
   var result;
   
   valueErrorBox.innerHTML = '';
   resultBox.innerHTML = '-';
   
   if ('' == value) {
      return;
   } else if (isNaN(value)) {
      valueErrorBox.innerHTML = 'To nie jest liczba!';
      return;
   }
   
   if ('' == dir) {
      return;
   } else if ('netto-brutto' == dir) {

      result = value*123/100;
      
   } else if ('brutto-netto' == dir) {
      result = value*100/123;
   }
   
   resultBox.innerHTML = result.toFixed(2) + 'zł';
}

valueField.onblur = function () {
   przelicz();
}

dirField.onchange = function () {
   przelicz();
}