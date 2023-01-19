const qnElem = document.querySelector('.qn')
const ansElem = document.querySelector('.ans')
const ansBtn = document.querySelector('.ansBtn')

let randomNumber = () => Math.floor(Math.random() * 10)
let surds = [2, 3, 5, 6, 7, 8, 10]
let randomSurd = () => surds[(Math.floor(Math.random() * 6))]
let randomBool = () => Math.random() < 0.5;

let qn
let ans

let n //numerator
let d //integer in denominator (e.g. in 2+sq3 the 2)
let surd // surd in denominator
let prm // Determines plus or minus sign used for frac
let prm2 // opposite sign of prm ^

function gcd2(a, b) {
  // Greatest common divisor of 2 integers
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
}
function gcd(array) {
  // Greatest common divisor of a list of integers
  var n = 0;
  for (var i = 0; i < array.length; ++i)
    n = gcd2(array[i], n);
  return n;
}

let gen = () => {
  n = randomNumber()
  d = randomNumber()
  surd = randomSurd()
  prm = randomBool() ? "+" : "-"
  prm2 = prm == "+" ? "-" : "+"

  if (n == 0 || d == 0) {
    gen();
    return
  }

  let methodArr = []

  let ogd = `${d}${prm} \\sqrt{${surd}}` // denominator from question
  let ogdi = `${d}${prm2} \\sqrt{${surd}}`// denominator with sign flipped

  qn = `\\frac{${n}}{${ogd}}`
  methodArr.push(qn)
  methodArr.push(`${qn} \\times \\frac{${ogdi}}{${ogdi}}`)
  methodArr.push(`\\frac{${n}(${ogdi})}{(${ogd})(${ogdi})}`)
  methodArr.push(`\\frac{${n * d}${prm2}${n}\\sqrt{${surd}}}{(${ogd})(${ogdi})}`)
  methodArr.push(`\\frac{${n * d}${prm2}${n}\\sqrt{${surd}}}{${d}^2-(\\sqrt{${surd}})^2}`)
  methodArr.push(`\\frac{${n * d}${prm2}${n}\\sqrt{${surd}}}{${d * d}-${surd}}`)
  methodArr.push(`\\frac{${n * d}${prm2}${n}\\sqrt{${surd}}}{${(d * d) - surd}}`)

  // let greatestCommonMultiple = gcd([n * d, ((d * d) - surd), (prm == "-" ? n * -1 : n)])

  // if(greatestCommonMultiple != 1 && greatestCommonMultiple != -1){
  //   if(greatestCommonMultiple < 0){
  //     methodArr.push(`\\frac{${greatestCommonMultiple}(${(n*d)/greatestCommonMultiple}${prm}${n / greatestCommonMultiple}\\sqrt{${surd}})}{}`)
  //   }else{
      
  //   }
  // }

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