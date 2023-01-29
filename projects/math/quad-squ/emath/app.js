const qnElem = document.querySelector('.qn')
const ansElem = document.querySelector('.ans')
const ansBtn = document.querySelector('.ansBtn')

let randomNumber = (max, min) => Math.floor(Math.random() * (max ?? 10)) + (min ?? 1)
let randomBool = () => Math.random() < 0.5;

let qn
let ans

let gen = () => {
  let coefficient = randomNumber(15)
  let factor = randomNumber(5, 2)
  let isS1PositiveBool = randomBool()
  let isS1Positive = isS1PositiveBool ? "": "-"
  let inverseS1Positive = isS1PositiveBool ? "-": "+"

  qn = `x^2 + ${coefficient}x`

  let methodArr = []

  methodArr.push(`x^2 + ${coefficient}x`)
  methodArr.push(`x^2 + ${coefficient}x + (\\frac{${coefficient}}{2})^2 - (\\frac{${coefficient}}{2})^2 `)
  methodArr.push(`(x^2 + ${coefficient / 2})^2 - (\\frac{${coefficient}}{2})^2`)
  methodArr.push(`(x + ${coefficient / 2})^2 - ${Math.pow(coefficient/2, 2)}`)

  katex.render(qn, qnElem)
  katex.render(methodArr.join(" \\newline = "), ansElem)
}

function shide() {
  ansElem.classList.toggle("hidden");
  if (ansBtn.innerHTML == 'Show method and answer') {
    ansBtn.innerHTML = 'Hide method and answer'
  } else {
    ansBtn.innerHTML = 'Show method and answer'
  }
}

gen()