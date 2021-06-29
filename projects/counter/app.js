const count = document.querySelector('.count')
let countVal = (0)
count.innerHTML = countVal

function plus(){
  countVal = (countVal+1)
  count.innerHTML = countVal
}

function minus(){
  countVal = (countVal-1)
  count.innerHTML = countVal
}