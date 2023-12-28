const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")

const largeWowContainer = document.querySelector("#largewowcontainer")
const rainbowWowContainer = document.querySelector("#rainbowwowcontainer")
const stiikPrimeContainer = document.querySelector("#stiikprimecontainer")
const secretWowContainer = document.querySelector("#secretwowcontainer")
const fibowowcontainer = document.querySelector("#fibowowcontainer")

const largewowEl = document.querySelector("#largeWows")
const lengthEl = document.querySelector("#length")
const rainbowsEl = document.querySelector("#rainbow")
const stiikPrimeEl = document.querySelector("#stiikprime")
const secretWowEl = document.querySelector("#secretwow")
const fiboWowEl = document.querySelector("#fibo")

let wows = 0
let largewows = 0
let rainbowwows = 0
let secretwows = 0
let ministiiks = 0
const primeWows = []
const largeWowsRequired = 10

let fibonacciChallengeStarted = false
let fibonacciChallengeComplete = false
const fibonacciWows = []
const fibonacciSecretWows = []
let stiikPrime = false

document.querySelector(".print").addEventListener("click", () => {
  if (fibonacciChallengeComplete) {
    document.querySelector(".head").style.display = "none"
    document.querySelector(".hatted").style.display = "block"
  }
  window.print()
})

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
      }
    })
  },
  { rootMargin: "0px 0px 200% 0px" }
)

document.addEventListener("click", onBodyClick)

window.onscroll = function(ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".neck:last-child")
    injectNeck({ target: lastEl })
  }
}

function injectNeck(entry) {
  // Stops observing the old neck element
  observer.unobserve(entry.target)

  const clonedNeck = neck.cloneNode(true)
  wrapper.appendChild(clonedNeck)
  observer.observe(clonedNeck)

  injectWow()
}

function injectWow() {
  wows++
  wowEl.innerText = wows

  const newWow = document.createElement("div")
  newWow.className = "textwow"
  newWow.innerText = "the best"
  newWow.style.left = 100 + Math.random() * (window.innerWidth - 300) + "px"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)

  if (isPrime(wows)) {
    primeWows.push(newWow)
  }

  if (isFibonacci(wows)) {
    fibonacciWows.push(newWow)
  }

  if (wows === 10) {
    lengthEl.innerText = "simple"
  }

  if (wows === 50) {
    lengthEl.innerText = "a simple stiik"
  }

  if (wows === 100) {
    lengthEl.innerText = "simple, simple is good"
  }

  if (wows === 150) {
    lengthEl.innerText = "long much simple"
  }

  if (wows === 250) {
    lengthEl.innerText = "very long much simple"
  }

  if (wows === 500) {
    lengthEl.innerText = "the best very long much simple"
  }

  if (wows === 1000) {
    lengthEl.innerText = "the best much simple very long!"
  }

  if (wows === 2000) {
    lengthEl.innerText = "the best much simple very long!!"
  }

  if (wows === 3000) {
    lengthEl.innerText = "the best much simple very long!!!"
  }

  if (wows === 5000) {
    lengthEl.innerText = "!!the best much simple very long!!"
  }

  if (wows === 10000) {
    lengthEl.innerText = "many many simple amaze simple"
  }

  if (wows === 30000) {
    lengthEl.innerText = "amaze simple dont forget to print!"
  }

  if (wows === 50000) {
    lengthEl.innerText = "thebestthebestthebestthebestthebestthebest"
  }

  if (wows === 80000) {
    lengthEl.innerText = "thebestthebestthebestthebestthebestueeeeeeeeeee"
  }

  if (wows > 200 && Math.random() > 0.99) {
    injectLargeWow()
  }
}

function injectLargeWow() {
  largewows++
  largewowEl.innerText = largewows

  largeWowContainer.classList.remove("hidden")

  const newWow = document.createElement("div")
  newWow.className = "largewow"
  newWow.innerText = "THE BEST"
  newWow.style.left = "50%"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)

  // Release the text about the large wows on exactly 15
  if(largewows === largeWowsRequired) {
    rainbowwowcontainer.classList.remove("hidden")
    stiikPrimeContainer.classList.remove("hidden")
  }
}

function isPrime(n) {
  if (n < 2) return false
  var q = Math.floor(Math.sqrt(n))

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

function isSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0
}

function isFibonacci(numberToCheck) {
  return (
    isSquare(5 * numberToCheck * numberToCheck + 4) ||
    isSquare(5 * numberToCheck * numberToCheck - 4)
  )
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function onBodyClick(e) {
  if (e.target.className === "textwow" && largewows >= largeWowsRequired) {
    rainbowwows++
    e.target.classList.add("rainbow")

    rainbowsEl.innerText = rainbowwows

    let count = 0
    // Check if they have achieved stiikPrime
    let isPrime = primeWows.every((wowEl) => {
      count++
      return wowEl.classList.contains("rainbow")
    })

    // Activate stiik prime
    if (stiikPrime === false && isPrime === true) {
      stiikPrime = true
      stiikPrimeEl.innerText = "ACTIVE"
      setupSecretWows()
    } else if (count !== primeWows.length) {
      stiikPrimeEl.innerText = "inactive (" + count + '/' + primeWows.length + ")"
    }
  }

  if (e.target.className === "secretwow") {
    e.target.classList.add("found")
    secretwows++
    secretWowEl.innerText = secretwows

    if (secretwows === 100) {
      fibonacciChallengeStarted = true
      fibowowcontainer.classList.remove("hidden")
    }
  }

  if (fibonacciChallengeStarted) {
    if (
      e.target.classList.contains("textwow") ||
      e.target.classList.contains("secretwow")
    ) {
      if (e.target.classList.contains("spinLeft")) {
        e.target.classList.remove("spinLeft")
        e.target.classList.add("spinRight")
      } else if (e.target.classList.contains("spinRight")) {
        e.target.classList.remove("spinRight")
        e.target.classList.add("spinLeft")
      } else {
        e.target.classList.add("spinLeft")
      }

      checkAllFiboWows()
    }
  }
}

function checkAllFiboWows() {
  let successConfirmed = true
  let innerText = 'INACTIVE '

  let right = true
  let chainOfLengthRegular = 0
  for (let i = 0; i < fibonacciWows.length; i++) {
    if (fibonacciWows[i].classList.contains(right ? "spinRight" : "spinLeft")) {
      right = !right
      chainOfLengthRegular++
    } else {
      successConfirmed = false
      break
    }
  }

  innerText += "\n (" + chainOfLengthRegular + '/' + fibonacciWows.length + ') Regular (LRL) \n'

  right = false
  let chainofLengthSecret = 0
  for (let i = 0; i < fibonacciSecretWows.length; i++) {
    if (
      fibonacciSecretWows[i].classList.contains(
        right ? "spinRight" : "spinLeft"
      )
    ) {
      chainofLengthSecret++
      right = !right
    } else {
      successConfirmed = false
      break
    }
  }

  innerText += "(" + chainofLengthSecret + '/' + fibonacciSecretWows.length + ') Secret (RLR)'

  if (successConfirmed) {
    fibonacciChallengeComplete = true
    fibo.innerText = "COMPLETE (NOW PRINT!)"
  } else {
    fibonacciChallengeComplete = false
    fibo.innerText = innerText
  }
}

function setupSecretWows() {
  secretWowContainer.classList.remove("hidden")

  const allnecks = document.querySelectorAll(".neck")
  let allnecksAsArray = Array.apply(null, allnecks)
  allnecksAsArray.shift() // remove first item

  shuffleArray(allnecksAsArray)
  shuffleArray(allnecksAsArray)

  // Do this for first 100 shuffled neck pieces
  let total = 100

  for (let i = 0; i < total; i++) {
    let neckItem = allnecksAsArray[i]
    let pieces = neckItem.innerText.split("\n")
    const pieceIndex = Math.floor(Math.random() * (pieces.length - 1))
    const injectionIndex = 5 + Math.floor(Math.random() * 18)
    pieces[pieceIndex] =
      pieces[pieceIndex].slice(0, injectionIndex) +
      '<span class="secretwow">THE BEST</span>' +
      pieces[pieceIndex].slice(injectionIndex + 3)
    neckItem.innerHTML = pieces.join("\n")
  }

  const allSecretwows = document.querySelectorAll(".secretwow")
  const secretWowsAsArray = Array.apply(null, allSecretwows)
  for (let i = 0; i < secretWowsAsArray.length; i++) {
    if (isFibonacci(i + 1)) {
      fibonacciSecretWows.push(secretWowsAsArray[i])
    }
  }
}

observer.observe(neck)
