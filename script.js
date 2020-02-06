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

myNewArr.indexOf(elem => elem === -1) ? console.log('в массиве нет элементов = 0') : console.log('в массиве есть элемент = 0')

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
myStringArr.push(myStringArr[3].toUpperCase())
console.log(myStringArr.join('\n'))

// --------fourth part*----------

// let myArr = [111, 112, 113, 114, 115, 116, 117, 118, 119]

// myArr.sort((prev, next) => {
// 	return (prev * Math.random()) - (next * Math.random())
// })

// console.log(myArr)