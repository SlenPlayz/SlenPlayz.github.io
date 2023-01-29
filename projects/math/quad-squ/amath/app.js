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

  qn = `${isS1Positive}${factor}x^2 + ${coefficient * factor}x`

  let methodArr = []

  methodArr.push(`${isS1Positive}${factor}x^2 + ${coefficient * factor}x`)
  methodArr.push(`${isS1Positive}${factor}(x^2 ${isS1PositiveBool ? "+": "-"} ${coefficient}x)`)
  methodArr.push(`${isS1Positive}${factor}(x^2 ${isS1PositiveBool ? "+": "-"} ${coefficient}x + (\\frac{${coefficient}}{2})^2 - (\\frac{${coefficient}}{2})^2 )`)
  methodArr.push(`${isS1Positive}${factor}((x ${isS1PositiveBool ? "+": "-"} ${coefficient / 2})^2 - (\\frac{${coefficient}}{2})^2 )`)
  methodArr.push(`${isS1Positive}${factor}(x ${isS1PositiveBool ? "+": "-"} ${coefficient / 2})^2 ${inverseS1Positive} ${(Math.pow(coefficient/2, 2)) * factor}`)

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