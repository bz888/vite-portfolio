import React from 'react'

function randomNum (min, max){
	const num = Math.floor(Math.random() * ( max-min ) + min)
	return num
}
export function RandomGen (input) {
	let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97))
	console.log(alphabet)
	const inputArr = input.split('')
	const randomIdxInput = randomNum(0, input.length)
	console.log(randomIdxInput)
	const randomIdxVal = randomNum(0, alphabet.length)
	console.log(randomIdxVal)
	inputArr[randomIdxInput] = alphabet[randomIdxVal]
	console.log(inputArr[randomIdxInput] = alphabet[randomIdxVal])
	const joinVal = inputArr.join('')
	console.log('new input: ', joinVal)
	return joinVal

}