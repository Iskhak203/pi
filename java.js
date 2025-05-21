// const a = document.getElementById("Mi");

// const b =document.querySelector('#m').textContent = 'h1';

// a.addEventListener('click', () => {
//     a.style.color = 'green',
//     a.style.fontSize = '40px',
//     a.style.border = "2px solid red"
// })



const par= document.querySelector('#pi');
const img = document.querySelector('.img');
console.log(img);

// const b = document.querySelector('body')





function fm (text,url,b,d){
par.innerHTML = text;
img.src = url;
document.querySelector('body').style.backgroundColor =b;
document.querySelector('body').style.color =d;

};


// -----------------

// document.getElementById('isa2').innerHTML = document.getElementById('isa1').innerHTML;

const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Кнопка нажата!');
});
