const radioButtons = document.querySelectorAll('input[name="radio"]')
const qn = document.querySelector('.qn')
const ansEle = document.querySelector('.ans')
const ansBtn = document.querySelector('.ansBtn')
let a
let b
let ans
let asqu
let bsqu
let absqu
let type

function gen() {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        type = radioButton.value;
        break;
    }
  }
  a = Math.floor((Math.random() * 10) + 1)
  b = Math.floor((Math.random() * 25) + 1)
  asqu = a*a
  bsqu = b*b
  absqu = 2*a*b + 'a'
  if (type == 1){
    ans = `${asqu}a<sup>2</sup> + ${absqu} + ${bsqu}`
    qn.innerHTML = `(${a}a+${b})<sup>2</sup>`
  }else if(type == 2){
    ans = `${asqu}a<sup>2</sup> - ${absqu} + ${bsqu}`
    qn.innerHTML = `(${a}a-${b})<sup>2</sup>`
  }else if(type == 3){
    ans = `${asqu}a<sup>2</sup> - ${bsqu}`
    qn.innerHTML = `(${a}a+${b})(${a}a-${b})`
  }else if (type == 4){
    ans = `(${a}a+${b})<sup>2</sup>`
    qn.innerHTML = `${asqu}a<sup>2</sup> + ${absqu} + ${bsqu}`
  }else if(type == 5){
    ans = `(${a}a-${b})<sup>2</sup>`
    qn.innerHTML = `${asqu}a<sup>2</sup> - ${absqu} + ${bsqu}`
  }else if(type == 6){
    ans = `(${a}a+${b})(${a}a-${b})`
    qn.innerHTML = `${asqu}a<sup>2</sup> - ${bsqu}`
  }
  ansEle.innerHTML = ans
}

function shide(){
  ansEle.classList.toggle("hidden");
  if(ansBtn.innerHTML == 'Show answer'){
    ansBtn.innerHTML = 'Hide answer'
  }else{
    ansBtn.innerHTML = 'Show answer'
  }
}