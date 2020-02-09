// -----first part-----

let arrRandLenght = Math.trunc(30 + Math.random() * 20)
const myArr = []
for (let i = 0; i < arrRandLenght; i++) {
	myArr.push(-100 + Math.random() * 200)
}

console.log(`длина массива myArr = ${arrRandLenght}`)
console.log(myArr)

// -----

const myNewArr = []
const iterCallback = (element, index) => {
	element += 2
	myNewArr.push(element)
}

myArr.forEach(iterCallback)
console.log(myNewArr)

// -----

const myElem = Math.ceil(myNewArr.length / 2 - 1)
console.log(myElem)
const mediumElem = myNewArr[myElem]
console.log(`Средний элемент массива №${myElem} - ${myNewArr[myElem]}`)

// -----

myNewArr.shift()
myNewArr.unshift(mediumElem)
console.log(myNewArr)

// -----

myNewArr.every(elem => elem > 0) ? console.log('в массиве все єлементы > 0') : console.log('в массиве есть єлементы < 0')
// -----

myNewArr.some(elem => elem === 0) ? console.log('в массиве есть элемент = 0') : console.log('в массиве нет элементов = 0')

// -----------second part----------------

let string = "Lorem ipsum dolor sit amet"
let stringArr = string.split('')
stringArr.join('')
let stringArrRewerse = stringArr.reverse()
console.log(stringArrRewerse.join(''))

// -----------tgird part----------------

let myString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let myStringArr = myString.split('. ')
console.log(myStringArr)
let arrLen = myStringArr.length
myStringArr[arrLen - 1].toUpperCase()
console.log(myStringArr.join('\n'))

// --------fourth part----------

let firstArr = []
let secondArr = []

for (let i = 0; i < 10; i++) {
	firstArr.push(Math.random() * 10)
	secondArr.push(Math.random() * -10)
}

let thirdArr = firstArr.concat(secondArr)
let fourthArr = thirdArr.map(function (newElem) {
	return newElem / 5;
})

fourthArr.sort((prev, next) => {
	return prev - next
})

function checkElement(number) {
	return number === number.toFixed(0);
}
let filteredArr = fourthArr.filter(checkElement);
console.log(filteredArr)
delete filteredArr

// --------fifth  part*----------

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

myArr.sort((prev, next) => {
	return Math.random() - 0.5
})

console.log(myArr)