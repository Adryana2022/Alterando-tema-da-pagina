'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function () {
  document.body.classList.toggle('dark-theme')
var className = document.body.className;
if(className == "light-theme") {
      this.textContent = "daek";
}
else {  
    this.textContent = "light";
}
    console.log('current class name:'+ className);


});