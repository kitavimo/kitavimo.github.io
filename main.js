/* Selects the h1 element and edits the text content to'Hello World!'

const myHeading = document.querySelector('h1');  
myHeading.textContent = 'Hello World!';

//ALternatively-->
//document.querySelector('h1').textContent='Hello World!'; {}

*/

let myImage=document.querySelector('img');

myImage.onclick=function() {
    let mySrc=myImage.getAttribute('src');
    if (mySrc==='images/sam.JPG') {
        myImage.setAttribute('src','images/sam2.JPG');
    } else {
        myImage.setAttribute('src','images/sam.JPG');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'You are cool, ' + myName;
    }

  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are cool, ' + storedName;
  }

 

  myButton.onclick = function() {
    setUserName();
  }