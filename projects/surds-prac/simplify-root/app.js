const qnElem = document.querySelector('.qn')
const ansElem = document.querySelector('.ans')
const ansBtn = document.querySelector('.ansBtn')

let randomNumber = () => Math.floor(Math.random() * 10)
let surds = [2, 3, 5, 6, 7, 8, 10]
let randomSurd = () => surds[(Math.floor(Math.random() * 6))]

let qn
let ans

let surd
let number

var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

let gen = () => {
  surd = randomSurd()
  number = randomNumber()

  let a = surd * (number * number)

  if(isSquare(a) || a == 0 || surds.includes(a)){
    gen()
    return
  }

  qn = `\\sqrt{${a}}`
  ans = `\\sqrt{${a}} \\newline = \\sqrt{${number * number} \\times ${surd}} \\newline = \\sqrt{${number * number}} \\times \\sqrt{${surd}} \\newline = ${number}\\sqrt{${surd}}`
  katex.render(qn, qnElem, {
    throwOnError: false
  });
  katex.render(ans, ansElem, {
    throwOnError: false
  });
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