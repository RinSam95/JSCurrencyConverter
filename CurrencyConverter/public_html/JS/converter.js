/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sayHello(idx) {
               idx = idx++;
               alert('Hello, World ' + idx);               
           }
           
var rate = 1.11;           

function convert() {
    var amount = document.getElementById('eur').value;
    rate = document.getElementById('rate').value;
    
   // if (rate == 0) {
      //  rate= 1.11;
    //} else {
     // rate = document.getElementById('rate').value;
    //}
    
    if (amount == 0) {
       amount = document.getElementById('usd').value;
       amount = amount / rate;
       document.getElementById('eur').value = amount;
    } else {
       amount = amount * rate;
       document.getElementById('usd').value = amount; 
    }
    
}

function setWidth() {
    rate = document.getElementById('rate').value;
    document.getElementById('usdBar').style.width = 200*rate;
}


